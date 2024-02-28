<script lang="ts">
	import axios from 'axios';
	import RecentCharacters from '../components/RecentCharacters.svelte';
	import { root } from '../stores';
	import dayjs from 'dayjs';
	import PartialUser from '../components/PartialUser.svelte';

	async function getChangelogs(): Promise<any[]> {
		try {
			let result = await axios.get(`${root}/changelogs`);
			return result.data.reverse();
		} catch (e) {
			console.log(e);
			return [];
		}
	}

	async function getUser(userId: string) {
		let result = await axios.get(`${root}/users/${userId}`);
		return result.data;
	}
</script>

<svelte:head>
	<title>Persona, fictional character database</title>

	<meta name="author" content="Persona DB" />
	<meta name="description" content="Find and host any original characters" />

	<meta property="og:title" content="Persona DB" />
	<meta property="og:description" content="Find and host any original characters" />
	<meta property="og:image" content="https://persona-db.xyz/favicon.png" />
</svelte:head>

<main>
	<div class="container full">
		<div class="center">
			<img src="/welcome1.png" alt="" />
			<h2>to the fictional character database</h2>
		</div>
	</div>

	<RecentCharacters></RecentCharacters>

	<div class="changelogs">
		<h2>Changelogs</h2>
		{#await getChangelogs() then changelogs}
			{#each changelogs as changelog}
				<div class="log">
					<div class="inline">
						<h3>{dayjs(changelog.createdAt).format('DD/MM/YYYY')}</h3>

						{#await getUser(changelog.userId) then user}
							<PartialUser {user}></PartialUser>
						{/await}
					</div>
					<p>{changelog.content}</p>
				</div>
			{/each}
		{/await}
	</div>
</main>

<style lang="scss">
	@use '../variables.scss';
	@import url('https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap');

	.changelogs {
		margin-inline: 10%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 50px;

		h2 {
			text-align: center;
		}

		.log {
			padding: 20px;
			margin-bottom: 10px;
			border: 1px solid gray;
			border-radius: 15px;
			background-color: variables.$light-blue;
			padding: 10px;

			.inline {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
			}

			p {
				text-indent: 5%;
			}
		}
	}

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		img {
			width: 60%;
		}

		h2 {
			font-family: 'Protest Revolution';
			transform: translateX(50%);
		}
	}

	.full {
		height: calc(100vh - 35px);
	}

	@media only screen and (max-width: 768px) {
		/* For mobile phones: */

		.center {
			img {
				width: 100%;
			}
			h2 {
				transform: translateX(0);
				text-align: center;
			}
		}

		:global(.container h1) {
			text-align: center;
		}
	}
</style>
