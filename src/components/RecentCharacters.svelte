<script lang="ts">
	import PartialCharacter from './PartialCharacter.svelte';
	import api from '../api';

	async function getRecentCharacters() {
		let characters = await Promise.all(
			(await api.getCharacters()).map(async (c) => ({
				...c,
				user: await api.getUser(c.ownerId)
			}))
		);

		return characters
			.sort((a, b) => a.editedAt - b.editedAt)
			.reverse()
			.slice(0, 5);
	}
</script>

<div class="box">
	<h3>Activity</h3>
	<div class="recent-characters">
		{#await getRecentCharacters() then charas}
			{#each charas as character}
				<PartialCharacter {character} owner={character.user}></PartialCharacter>
			{/each}
		{/await}
	</div>
</div>

<style lang="scss">
	@use '../variables.scss';

	.box {
		background-color: variables.$raisin-black;

		padding: 10px;
		h3 {
			color: variables.$orchid-pink;
			text-align: center;
		}
	}

	.recent-characters {
		display: flex;
		justify-content: space-around;
	}
</style>
