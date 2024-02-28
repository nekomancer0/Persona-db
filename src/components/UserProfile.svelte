<script lang="ts">
	import dayjs from 'dayjs';
	import PartialUser from './PartialUser.svelte';
	import type { API } from '../api';

	export let user: API.User;
</script>

<div>
	{#if user}
		<PartialUser {user}></PartialUser>
		<br />

		<p><b>Created at:</b> {dayjs(user.createdAt).format('DD/MM/YY')}</p>
		<p><b>Status:</b> {user.online ? 'Online' : 'Offline'}</p>
	{/if}
</div>
