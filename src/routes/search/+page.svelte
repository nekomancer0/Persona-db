<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { root } from '../../stores';
	import PartialUser from '../../components/PartialUser.svelte';

	let query = '';

	async function getUsersResult() {
		let usersResult: any[] = [];
		let res = await axios.get(`${root}/users`);
		for (let d of res.data) {
			if (d.username.includes(query)) {
				usersResult.push(d);
			}
		}

		return usersResult;
	}

	async function getCharactersResult() {
		let charactersResult: any[] = [];
		let res2 = await axios.get(`${root}/characters`);
		for (let d of res2.data) {
			if (d.name.includes(query)) {
				charactersResult.push(d);
			} else {
				let found = false;
				let keywords = query.split(' ');

				for (let keyword of keywords) {
					if (d.tags.includes(keyword)) {
						found = true;
					}
				}

				if (found) charactersResult.push(d);
			}
		}

		return charactersResult;
	}

	onMount(async () => {
		const params = new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, prop) => searchParams.get(prop)
		});

		if (!params['q']) {
			window.location.href = '/';
			return;
		}

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
