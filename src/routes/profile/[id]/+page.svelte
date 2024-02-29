<script lang="ts">
	import axios from 'axios';
	import UserProfile from '../../../components/UserProfile.svelte';
	import { root } from '../../../stores';
	import type { API } from '../../../api';
	import api from '../../../api';
	import PartialCharacter from '../../../components/PartialCharacter.svelte';

	export let data;

	let user: API.User | null;

	(async () => {
		try {
			user = await api.getUser(data.id);
		} catch (e) {}
	})();

	async function getMyCharacters() {
		let characters = await api.getCharacters();
		return characters.filter((chara) => chara.ownerId === user!._id);
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
		{#if user}
			<UserProfile {user}></UserProfile>

			<div class="my-characters-box">
				<h2>{user?.username}'s Characters</h2>

				<div class="characters">
					{#await getMyCharacters() then charas}
						{#each charas as chara}
							<div class="box">
								<div class="inline">
									<div class="block">
										<h3 class="name">{chara.name}</h3>
										<a href={`/${chara.code}`} id="go">Page</a>
									</div>
									<img src={chara.icon} alt="" class="icon" />
								</div>
								<a href={`/${chara.code}`}>{chara.name}</a>
							</div>
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

		.characters {
			display: flex;
			gap: 10px;
			justify-content: center;
			.box {
				width: 300px;
				height: 20%;
				padding: 20px;

				.inline {
					display: flex;
					justify-content: space-around;
					align-items: center;

					.icon {
						height: 150px;
						height: 150px;
						border-radius: 50%;
					}
				}
			}
		}
	}
</style>
