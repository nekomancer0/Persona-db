<script lang="ts">
	import axios from 'axios';
	import { root } from '../stores';
	import PartialUser from './PartialUser.svelte';
	import PartialCharacter from './PartialCharacter.svelte';

	async function getRecentCharacters() {
		let characters: any[] = [];
		let result = await axios.get(`${root}/characters`);
		let charas = result.data;

		for (let chara of charas) {
			let ownerResult = await axios.get(`${root}/users/${chara.ownerId}`);
			characters.push({ ...chara, user: ownerResult.data });
		}

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
