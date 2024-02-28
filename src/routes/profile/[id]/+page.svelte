<script lang="ts">
	import axios from 'axios';
	import UserProfile from '../../../components/UserProfile.svelte';
	import { root } from '../../../stores';
	import type { User } from '../../../types';

	export let data;

	let user: User | null;

	let notFound = false;

	async function getByUsername() {
		try {
			let result = await axios.get(`${root}/users/${data.id}`);
			user = result.data;
		} catch (e) {
			notFound = false;
		}
	}

	(async () => {
		await getByUsername();
	})();

	async function getMyCharacters() {
		let allCharactersResult = await axios.get(`${root}/characters`);

		let mycharacters = allCharactersResult.data.filter((chara: any) => chara.ownerId === user!._id);
		return mycharacters;
	}
</script>

<svelte:head>
	<title>Persona - User {data.id}</title>
	<meta name="author" content="Persona DB - User {data.id}" />
	<meta property="og:title" content="Persona DB - User {data.id}" />

	{#if user}
		<meta name="description" content="Informations about {data.id}" />

		<meta property="og:description" content="Informations about {data.id}" />
		<meta property="og:image" content={user.avatar} />
	{:else}
		<meta name="description" content="Informations about {data.id}" />

		<meta property="og:description" content="Couldn't find user {data.id}" />
		<meta property="og:image" content="https://persona-db.xyz/favicon.png" />
	{/if}
</svelte:head>

<main>
	<div class="container">
		<h1>User : {data.id}</h1>
		<br />
		{#if user && !notFound}
			<UserProfile {user}></UserProfile>

			<div class="my-characters-box">
				<h2>{user?.username}'s Characters</h2>

				<div class="characters">
					{#await getMyCharacters() then charas}
						{#each charas as chara}
							<a href={`/${chara.code}`}>{chara.name}</a>
						{/each}
					{/await}
				</div>
			</div>
		{:else}
			<p>Couldn't find user with name {data.id}</p>
		{/if}
	</div>
</main>

<style lang="scss">
	.my-characters-box {
		margin-block: 20px;
		text-align: center;
	}
</style>
