<script lang="ts">
	import axios from 'axios';
	import type { Character, User } from '../../types';
	import { root } from '../../stores';
	import PartialUser from '../../components/PartialUser.svelte';

	let characters: Character[] | null = null;

	(async () => {
		let result = await axios.get(`${root}/characters`);
		characters = result.data;
	})();

	async function getUserOwner(id: string): Promise<User> {
		let result = await axios.get(`${root}/users/${id}`);
		return result.data;
	}
</script>

<svelte:head>
	<title>Persona - Discover</title>
	<meta name="author" content="Persona DB - Discover Characters" />
	<meta name="description" content="Find and host any original characters" />

	<meta property="og:title" content="Persona DB - Discover Characters" />
	<meta property="og:description" content="Find and host any original characters" />
	<meta property="og:image" content="https://persona-db.xyz/favicon.png" />
</svelte:head>

<main>
	<div class="container">
		<h1>Discover Characters</h1>

		<div class="boxes">
			{#if characters}
				{#each characters as character}
					<div class="box">
						<div class="inline">
							<div class="block">
								<h3 class="name">{character.name}</h3>
								<a href={`/${character.code}`} id="go">Page</a>
							</div>
							<img src={character.icon} alt="" class="icon" />
						</div>

						<div class="owner">
							{#await getUserOwner(character.ownerId) then owner}
								<PartialUser user={owner}></PartialUser>
							{/await}
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</main>

<style lang="scss">
	@use '../../variables.scss';

	.boxes {
		margin-top: 20px;
		display: flex;
		gap: 10px;

		.box {
			// -webkit-box-shadow: inset 1px 1px 13px -3px #000000;
			// box-shadow: inset 1px 1px 13px -3px #000000;
			padding: 20px;
			position: relative;
			width: 300px;
			height: 20%;
			border: 1px solid gray;
			border-radius: 15px;

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

			.name {
				color: white;
				display: flex;
				justify-content: center;
			}
		}
	}
</style>
