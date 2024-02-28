<script lang="ts">
	import axios from 'axios';
	import { Linkify, root, user } from '../../stores.js';
	import { Chart, registerables } from 'chart.js';
	import PartialUser from '../../components/PartialUser.svelte';
	import { marked } from 'marked';
	import DOMPurify from 'isomorphic-dompurify';
	import { goto } from '$app/navigation';
	import api, { type API } from '../../api.js';

	Chart.register(...registerables);

	export let data;

	let chara: API.Character | null = null;
	let owner: API.User;
	let msg = '';
	let statsCanva: HTMLCanvasElement;

	(async () => {
		try {
			chara = await api.getCharacter(data.id);
			owner = await api.getUser(chara.ownerId);

			if (chara?.stats && chara.stats.length === 1 && chara.stats[0].name === '')
				//@ts-ignore
				chara.stats = undefined;
		} catch (e) {
			console.log(e);
		}
	})();

	function onLoadCanvas(el: HTMLCanvasElement) {
		if (chara?.stats) {
			let chartData = {
				labels: [],
				datasets: [
					{
						data: [],
						label: 'Stats',
						borderWidth: 1,
						backgroundColor: ['#2098d4', '#f8da50'],
						hoverBackgroundColor: ['#148fb5', '#f2d02b']
					}
				]
			};

			//@ts-ignore
			chartData.labels = chara.stats.map((s) => s.name);
			//@ts-ignore

			chartData.datasets[0].data = [...chara.stats.map((s) => s.value)];

			let chart = new Chart(el, {
				type: 'radar',
				data: chartData,

				options: {
					spanGaps: true,
					scales: {
						r: { min: 0, max: Math.max(...chartData.datasets[0].data) }
					},
					responsive: false
				}
			});
		}
	}

	async function letsEdit(ev: Event) {
		await goto(`/${chara?.code}/edit`);
	}

	async function letsDelete(ev: Event) {
		let doDelete = confirm(`Are you sure to delete you character ${chara?.name}?`);

		if (!doDelete) return;

		try {
			await api.deleteCharacter(chara!._id);
			await goto('/discover');
		} catch {}
	}
</script>

<svelte:head>
	<title>{chara ? `Character ${chara.name}` : 'Unknown Character'}</title>
	<meta
		name="author"
		content="Persona DB - {chara ? `Character ${chara.name}` : 'Unknown Character'}"
	/>

	<meta
		property="og:title"
		content="Persona DB - {chara ? `Character ${chara.name}` : 'Unknown Character'}"
	/>

	{#if chara}
		<meta name="description" content="Informations about {chara.name}" />

		<meta property="og:description" content="Informations about {chara.name}" />
		<meta property="og:image" content={chara.refsheet} />
		<meta property="og:image" content={chara.icon} />
	{:else}
		<meta property="og:description" content="Couldn't find character" />
		<meta property="og:image" content="https://persona-db.xyz/favicon.png" />
	{/if}
</svelte:head>

<main>
	<div class="container">
		{#if msg}
			<p>{msg}</p>
		{/if}

		{#if chara}
			<div class="full">
				<div class="box">
					<div class="inline-name">
						<h1 id="chara-name">{chara.name}</h1>
						{#if owner && $user && $user.username === owner.username}
							<div class="buttons">
								<button on:click={letsEdit}>Edit</button>
								<button on:click={letsDelete}>Delete</button>
							</div>
						{/if}

						{#if owner}
							<div class="inline-owner">
								by
								<PartialUser user={owner}></PartialUser>
							</div>
						{/if}
					</div>

					<div class="inline">
						<div class="description">
							{#if chara.description}
								{@html DOMPurify.sanitize(Linkify(marked(chara.description)), {
									FORBID_TAGS: ['script'],
									ADD_TAGS: ['iframe'],
									ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
								})}
							{/if}
						</div>

						<img src={chara.icon} alt="" class="icon" />
					</div>
				</div>

				{#if chara.stats}
					<div class="inline box">
						<canvas id="statscanva" use:onLoadCanvas height="400" width="400" bind:this={statsCanva}
						></canvas>

						<img src={chara.refsheet} alt="" class="refsheet" />
					</div>
				{:else}
					<div class="center">
						<img src={chara.refsheet} alt="" class="refsheet" />
					</div>
				{/if}
			</div>
		{/if}
	</div>
</main>

<style lang="scss">
	@use '../../css/Character.scss';
</style>
