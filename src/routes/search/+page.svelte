<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { root } from '../../stores';
	import PartialUser from '../../components/PartialUser.svelte';
	import api, { type API } from '../../api';
	import { goto } from '$app/navigation';

	let query = '';

	async function getUsersResult() {
		let users = (await api.getUsers()).filter((u) => u.username.includes(query));
		return users;
	}

	async function getCharactersResult() {
		let characters = await api.getCharacters();
		let results: API.Character[] = [];

		for (let character of characters) {
			if (character.name.includes(query)) results.push(character);
			else {
				let found = false;
				let keywords = query.split(' ');

				for (let keyword of keywords) {
					if (character.tags.includes(keyword)) {
						found = true;
					}
				}

				if (found) results.push(character);
			}
		}

		return results;
	}

	onMount(async () => {
		const params = new Proxy(new URLSearchParams(window.location.search), {
			//@ts-ignore
			get: (searchParams, prop) => searchParams.get(prop)
		});

		//@ts-ignore
		if (!params['q']) return await goto('/');

		//@ts-ignore
		query = decodeURIComponent(params['q']);
	});
</script>

<svelte:head>
	<title>Persona - Search</title>
	<meta name="author" content="Persona DB - Search" />
	<meta name="description" content="Search results for {query}" />

	<meta property="og:title" content="Persona DB - Search" />
	<meta property="og:description" content="Search results for {query}" />
	<meta property="og:image" content="https://persona-db.xyz/favicon.png" />
</svelte:head>

<main>
	<div class="container">
		<h1>Searching <i>{query}</i></h1>

		<div class="inline">
			<div class="users">
				<h2>Users</h2>
				{#await getUsersResult() then usersResult}
					{#if usersResult.length}
						{#each usersResult as user}
							<PartialUser {user}></PartialUser>
						{/each}
					{/if}
				{/await}
			</div>
			<div class="characters">
				<h2>Characters</h2>
				{#await getCharactersResult() then charactersResult}
					{#if charactersResult.length}
						{#each charactersResult as chara}
							<li><a href={`/${chara.code}`}>{chara.name}</a></li>
						{/each}
					{/if}
				{/await}
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	.inline {
		display: flex;
		justify-content: space-around;
	}
</style>
