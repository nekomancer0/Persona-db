<script lang="ts">
	import { goto } from '$app/navigation';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import UserProfile from '../../components/UserProfile.svelte';
	import { root, user } from '../../stores';
	import api from '../../api';

	let success = '';
	let error = '';

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

	let updateForm: HTMLFormElement;

	onMount(() => {
		if (!updateForm) return;
		let btnsubmit: HTMLButtonElement = updateForm.querySelector('#submit')!;

		btnsubmit.addEventListener('click', async (ev) => {
			let formdata = new FormData(updateForm);

			if (!formdata.get('username') && !formdata.get('file')) {
				writeError('You must provide username or avatar');
			} else {
				try {
					// @ts-ignore
					let result = await api.updateMe(formdata);

					success = result.message;
					error = '';
					await goto('/');
				} catch (e) {
					success = '';

					//@ts-ignore
					writeError(e.response.message);
					console.log(e);
					let usernameInput: HTMLInputElement = document.querySelector('#username')!;
					usernameInput.value = '';
				}
			}
		});
	});

	async function getMyCharacters() {
		let characters = await api.getCharacters();

		return characters.filter((chara) => chara.ownerId === $user._id);
	}
</script>

<svelte:head>
	<title>Persona - My Profile</title>
	<meta name="author" content="Persona DB - My Profile" />
	<meta name="description" content="Find and host any original characters" />

	<meta property="og:title" content="Persona DB" />
	<meta property="og:description" content="Find and host any original characters" />
	<meta property="og:image" content="https://persona-db.xyz/favicon.png" />
</svelte:head>

<main>
	<div class="container">
		<h1>My Profile</h1>
		{#if $user}
			{#if success}
				<div class="success alert"><p>{@html success}</p></div>
			{/if}

			{#if error}
				<div class="error alert"><p>{error}</p></div>
			{/if}

			<div class="inline">
				<UserProfile user={$user}></UserProfile>
				<form id="update-form" class="box" bind:this={updateForm}>
					<h2>Update</h2>

					<div class="controls">
						<div class="control">
							<label for="file">Avatar :</label>
							<input
								type="file"
								class="input-file"
								name="file"
								id="file"
								accept="image/png, image/jpeg, image/gif"
							/>
						</div>
						<div class="control">
							<label for="file">Username :</label>
							<input
								type="text"
								name="username"
								id="username"
								placeholder="Set a new username"
								autocomplete="off"
							/>
						</div>
					</div>

					<button id="submit">Update</button>
				</form>
			</div>

			<div class="my-characters-box">
				<h2>My characters</h2>

				<div class="characters">
					{#await getMyCharacters() then charas}
						{#each charas as chara}
							<a href={`/${chara.code}`}>{chara.name}</a>
						{/each}
					{/await}
				</div>
			</div>
		{:else}
			<p>You are not connected</p>
			<ul>
				<li><a href="/login">Login</a></li>
			</ul>
		{/if}
	</div>
</main>

<style lang="scss">
	@use '../../variables.scss';

	form {
		-webkit-box-shadow: inset 1px 1px 13px -3px #000000;
		box-shadow: inset 1px 1px 13px -3px #000000;
		border-radius: 15px;
		padding: 10px;
		width: 50%;
		margin-inline: auto;
		text-align: center;

		button {
			margin-top: 10px;
		}
	}

	.my-characters-box {
		margin-block: 20px;
		text-align: center;
	}

	.alert {
		margin-bottom: 50px;
	}

	.controls {
		display: flex;
		flex-direction: column;
	}

	.inline {
		display: flex;
		justify-content: space-around;
	}

	.control {
		display: inline;
		margin-inline: auto;

		label {
			margin-right: 10px;
			text-align: left;
		}
	}

	.control + .control {
		margin-top: 10px;
	}

	.alert {
		padding: 5px;
		width: 45%;
		border-radius: 10px;
		color: white;
	}

	.success {
		background-color: green;
		border: 2px solid rgb(4, 78, 4);
	}

	.error {
		background-color: red;
		border: 2px solid rgb(88, 4, 4);
	}
</style>
