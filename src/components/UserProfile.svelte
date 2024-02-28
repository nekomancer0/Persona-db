<script lang="ts">
	import axios from 'axios';
	import dayjs from 'dayjs';
	import PartialUser from './PartialUser.svelte';
	import type { User } from '../types';
	import { root } from '../stores';

	export let user: User;

	(async () => {
		try {
			let result = await axios.get(`${root}/users/@${user.username}`);
			user = result.data;
		} catch (e) {}
	})();
</script>

<div>
	{#if user}
		<PartialUser {user}></PartialUser>
		<br />

		<p><b>Created at:</b> {dayjs(user.createdAt).format('DD/MM/YY')}</p>
		<p><b>Status:</b> {user.online ? 'Online' : 'Offline'}</p>
	{/if}
</div>
