<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		function setCookie(cname: string, cvalue: string | null, exdays: number) {
			const d = new Date();
			d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
			let expires = 'expires=' + d.toUTCString();
			document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
		}

		setCookie('token', null, 0);

		window.location.href = '/login';
	});
</script>
