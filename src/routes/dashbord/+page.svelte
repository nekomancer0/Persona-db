<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import RecentCharacters from '../../components/RecentCharacters.svelte';
	import { root, socket, user } from '../../stores';
	import type { User } from '../../types';
	import UserProfile from '../../components/UserProfile.svelte';
	import axios from 'axios';

	let users: User[] | null = null;

	let ok = false;

	user.subscribe(async (user) => {
		if (new Object(user).hasOwnProperty('admin') && user.admin) {
			socket.emit('dashbord');

			socket.emit('get_users', (usersx: User[]) => {
				users = usersx.sort((a, b) => a.createdAt - b.createdAt).reverse();
			});

			ok = true;
		} else {
		}
	});

	function delUser(user: User) {
		let confirmed = confirm(`Are you sure to delete completely ${user.username} ?`);

		if (confirmed) {
			socket.emit('delete_user', user._id, (resultMessage: string) => {
				alert(resultMessage);
			});
		}
	}

	function changelogBox(el: HTMLDivElement) {
		let btn = el.querySelector('button');

		btn?.addEventListener('click', (ev) => {
			let textarea = el.querySelector('textarea')!;

			axios.post(`${root}/changelogs`, {
				content: textarea.value
			});
		});
	}
</script>

<main>
	<div class="container full">
		<div class="center">
			<img src="/welcome1.png" alt="" />
			<h2>to the fictional character database</h2>
		</div>
	</div>

	<div class="box">
		<div class="inline">
			<div class="users">
				{#if users}
					{#each users as user}
						<div class="inline-user">
							<UserProfile {user}></UserProfile>
							<button class="delete" on:click={() => delUser(user)}>Delete</button>
						</div>
					{/each}
				{/if}
			</div>

			<div class="changelog-box" use:changelogBox>
				<textarea name="content" id="content" cols="80" rows="15"></textarea>
				<button class="send">Send</button>
			</div>
		</div>
	</div>

	<RecentCharacters></RecentCharacters>
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap');

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

	.box {
		.inline {
			display: flex;
			justify-content: space-around;

			.users {
				display: flex;
				flex-direction: column;
				gap: 30px;

				.inline-user {
					align-items: center;
					display: flex;

					button {
						margin-left: 10px;
					}
				}
			}
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
