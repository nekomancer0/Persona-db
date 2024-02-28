<script lang="ts">
	import type { API } from '../api';
	import PartialUser from './PartialUser.svelte';

	export let character: API.Character;
	export let owner: API.User;
</script>

<div class="character">
	<div class="author">
		<PartialUser user={owner}></PartialUser>
	</div>
	<div class="name">
		<a href={`/${character.code}`}>{character.name}</a>
	</div>
</div>

<style lang="scss">
	@use '../variables.scss';

	.character {
		display: flex;
		flex-direction: column;
		text-align: center;
		gap: 10px;

		.author {
			:global(p) {
				color: variables.$orchid-pink;
			}
		}
		a {
			color: variables.$orchid-pink;
		}
	}
</style>
