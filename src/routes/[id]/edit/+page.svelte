<script lang="ts">
	import { goto } from '$app/navigation';
	import { root } from '../../../stores';
	import axios from 'axios';
	import StatsEditor from '../../../components/StatsEditor.svelte';
	import TagInput from '../../../components/TagInput.svelte';
	import MarkdownEditor from '../../../components/MarkdownEditor.svelte';
	import api, { type API } from '../../../api';

	export let data;
	let success = '';
	let error = '';
	let statsData: { name: string; value: number }[];
	let tagsData: string[] = [];

	function writeError(msg: string) {
		error = msg;
		setTimeout(() => {
			error = '';
		}, 3000);
	}

	function writeSuccess(msg: string) {
		success = msg;
		setTimeout(() => {
			success = '';
		}, 3000);
	}

	let character: API.Character | null = null;

	(async () => {
		try {
			character = await api.getCharacter(data.id);
		} catch {
			await goto('/discover');
		}
	})();

	function inputNameChange(ev: Event) {
		//@ts-ignore
		character.name = ev.target.value;
	}
	let imagesForm: HTMLFormElement;

	function letsEdit(ev: Event) {
		if (!character) return;

		api
			.updateCharacter({ ...character, tags: tagsData, stats: statsData })
			.then(async (res) => {
				await goto(`/${character!.code}`);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	const fileToBase64 = async (file: any) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (e) => reject(e);
		});

	function openImage(ev: Event) {
		//@ts-ignore
		let parent: HTMLDivElement = ev.target!.parentNode!;
		let input: HTMLInputElement = parent.querySelector("input[type='file']")!;
		input.click();

		input.addEventListener('change', async () => {
			let file = input.files![0];

			//@ts-ignore
			ev.target.src = await fileToBase64(file);

			let formData = new FormData();
			formData.set('image', file);
			try {
				let url = await api.upload(formData);

				if (url) {
					if (input.id.includes('icon')) {
						character!.icon = url;
					} else if (input.id.includes('refsheet')) {
						character!.refsheet = url;
					}
				}
			} catch (e) {
				console.log(e);
			}
		});
	}
</script>

<svelte:head>
	<title>Editing {character ? character.name || 'a character' : 'a character'}</title>
</svelte:head>

<main>
	<div class="container">
		{#if character}
			{#if success}
				<div class="success alert"><p>{success}</p></div>
			{/if}

			{#if error}
				<div class="error alert"><p>{error}</p></div>
			{/if}

			<div class="box">
				<div class="inline-name">
					<h1>Character :</h1>
					<input
						type="text"
						name="name"
						id="name"
						on:input={inputNameChange}
						placeholder="Give a name to the character"
						autocomplete="off"
						value={character.name}
					/>

					<button on:click={letsEdit}>Edit</button>
				</div>

				<MarkdownEditor bind:markdown={character.description}></MarkdownEditor>
				<div id="editorjs"></div>

				<div class="images-corner">
					<form action="" class="images-form" method="put" id="images-form" bind:this={imagesForm}>
						<div class="setting-icon">
							<label for="icon">Icon</label>
							<br />
							<input type="file" name="icon" id="icon" max="1" hidden />

							{#if character.icon}
								<img src={character.icon} on:click={openImage} alt="" />
							{:else}
								<button on:click={openImage}>Upload Icon</button>
							{/if}
						</div>

						<div class="setting-refsheet">
							<label for="refsheet">Refsheet</label>
							<br />
							<input type="file" name="refsheet" id="refsheet" max="1" hidden />

							{#if character.refsheet}
								<img src={character.refsheet} on:click={openImage} alt="" />
							{:else}
								<button on:click={openImage}>Upload Refsheet</button>
							{/if}
						</div>
					</form>
				</div>
			</div>

			<div class="box">
				<div class="inline">
					<div class="stats-box">
						<h3>Stats</h3>
						{#if character && character.stats}
							<StatsEditor bind:data={statsData} dataToSet={character.stats}></StatsEditor>
						{/if}
					</div>
					<div class="tag-box">
						<h3>Tags</h3>

						{#if character && character.tags}
							<TagInput
								placeholder="Add keywords"
								tagsToSet={character.tags}
								bind:keywordsList={tagsData}
							></TagInput>
						{:else}
							<TagInput placeholder="Add keywords" bind:keywordsList={tagsData}></TagInput>
						{/if}
					</div>
				</div>
			</div>
		{/if}
	</div>
</main>

<style lang="scss">
	@use '../../../css/Character.scss';
</style>
