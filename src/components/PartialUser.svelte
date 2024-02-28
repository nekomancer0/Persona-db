<script lang="ts">
	import { goto } from '$app/navigation';
	import type { API } from '../api';

	export let user: API.User;

	async function openPage() {
		await goto(`/profile/@${user.username}`);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if user}
	<div class="inline" on:click={openPage}>
		<img src={user.avatar} alt="" class="avatar" />
		<p>{user.username}</p>
		<slot />
	</div>
{/if}

<style lang="scss">
	.avatar {
		height: 50px;
		width: 50px;
		border-radius: 50%;
	}

	.inline {
		display: flex;
		align-items: center;
		gap: 15px;

		:hover {
			cursor: pointer;
		}
	}
</style>
