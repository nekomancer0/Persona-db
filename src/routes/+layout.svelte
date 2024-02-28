<script lang="ts">
	import { onMount } from 'svelte';
	import { socket, user } from '../stores';
	import Tooltip from '../components/Tooltip.svelte';
	import Chatbox from '../components/Chatbox.svelte';
	import type { User } from '../types';

	onMount(async () => {
		let buttons = document.querySelectorAll('button');

		for (let btn of buttons) {
			btn.addEventListener('mousedown', (ev) => {
				btn.classList.add('clicked');

				btn.addEventListener('mouseleave', (ev) => {
					btn.classList.remove('clicked');
				});
			});

			btn.addEventListener('mouseup', (ev) => {
				btn.classList.remove('clicked');

				btn.addEventListener('mouseenter', (ev) => {
					btn.classList.add('clicked');
				});
			});
		}
		function getCookie(cname: string) {
			let name = cname + '=';
			let decodedCookie = decodeURIComponent(document.cookie);
			let ca = decodedCookie.split(';');
			for (let i = 0; i < ca.length; i++) {
				let c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return '';
		}

		let searchbar: HTMLInputElement = document.querySelector('.searchbar')!;
		let searchbtn = document.querySelector('.searchbtn')!;

		searchbtn.addEventListener('click', (ev) => {
			window.location.href = `/search?q=${encodeURIComponent(searchbar.value)}`;
		});

		if (!getCookie('token')) return;

		socket.emit('login', getCookie('token'), (u: User) => {
			user.set(u);
		});
	});
</script>

<nav class="navbar">
	<a class="title" href="/"><h1>Persona</h1></a>
	<div class="links">
		<a href="/discover">Discover</a>
	</div>
	<div class="searching">
		<input type="text" class="searchbar" placeholder="Search something..." />
		<button class="searchbtn">Search!</button>
	</div>
	<div class="profile-corner">
		{#if !$user}
			<a href="/login">Login</a>
		{:else}
			<a href="/disconnect">Disconnect</a>
			<a href="/create">Create</a>
			<Tooltip title={`${$user.username}`}>
				<a href="/profile"><img src={$user.avatar} alt="Profile" /></a></Tooltip
			>
		{/if}
	</div>
</nav>

<slot />

{#if $user}
	<Chatbox {socket}></Chatbox>
{/if}

<style lang="scss">
	@use '../variables.scss';
	@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
	@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

	:global(body) {
		background-image: url(https://images.template.net/177100/anime-background-presentation-edit-online.jpg);
		background-repeat: repeat;
		background-size: 100%;
	}
	:global(*) {
		font-family: 'Montserrat';
		margin: 0;
		color: variables.$raisin-black;
	}

	:global(h1, h2, h3, h4, h5, h6, b) {
		margin-bottom: 20px;
	}

	:global(input) {
		border: 1px solid gray;
		border-radius: 10px;
		height: 25px;
		width: 400px;
		text-indent: 10px;
		margin-inline: 5px;
	}

	:global(input[type='file']) {
		align-items: center;
		border: 0;
		outline: 0;

		height: 35px;
	}

	:global(input[type='file']::-webkit-file-upload-button) {
		border: 1px solid variables.$raisin-black;
		border-radius: 10px;
		box-shadow: variables.$raisin-black 2px 2px;
		color: variables.$raisin-black;
		margin-right: 10px;
		height: 27px;
		width: 120px;
	}

	:global(button:hover, a:hover, input[type='file']::-webkit-file-upload-button:hover) {
		opacity: 0.8;
	}

	:global(button) {
		border: 1px solid variables.$raisin-black;
		box-shadow: variables.$raisin-black 2px 2px;
		border-radius: 10px;
		height: 27px;
		width: 100px;
		color: variables.$raisin-black;
		background-color: variables.$orchid-pink;
		margin-inline: 5px;
	}

	:global(button.clicked) {
		box-shadow: inset variables.$raisin-black 3px 3px;
		transition: box-shadow 0.5s ease-out;
	}

	:global(.container) {
		margin-top: 2%;
		margin-left: 2%;
	}

	nav {
		h1 {
			margin-bottom: 0;
			color: white;
		}

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 30px;
		background-color: variables.$orchid-pink;
		padding: 10px;
		height: 35px;

		a {
			text-decoration-line: none;
			color: white;
		}

		.searching {
			input {
				border: 0;
				outline: 0;
			}
		}

		.title {
			color: white;
		}

		.title:hover {
			text-decoration-line: none;
		}
		.profile-corner {
			display: flex;
			gap: 20px;
			align-items: center;

			img {
				border-radius: 50%;
				width: 50px;
				height: 50px;
			}
		}
	}

	:global(.box) {
		background-color: variables.$orchid-pink;
		border: 1px solid variables.$raisin-black;
		box-shadow: variables.$raisin-black 2px 2px;
	}

	@media only screen and (max-width: 768px) {
		/* For mobile phones: */

		:global(body) {
			margin: 0;
			background-size: auto 768px;
			background-image: url(https://images.template.net/177100/anime-background-presentation-edit-online.jpg);
			background-repeat: no-repeat;
		}

		nav {
			padding: 5px;

			.searching {
				display: none;
			}
		}
	}
</style>
