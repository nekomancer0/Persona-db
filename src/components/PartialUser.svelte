<script lang="ts">
	import axios from 'axios';
	import type { User } from '../types';
	import { root } from '../stores';

	export let user: User;

	function openPage() {
		window.location.href = `/profile/@${user.username}`;
	}
</script>

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
