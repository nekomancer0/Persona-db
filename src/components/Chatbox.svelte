<script lang="ts">
	import axios from 'axios';
	import type { User } from '../types';
	import PartialUser from './PartialUser.svelte';
	import { root, user } from '../stores';
	import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';

	export let socket: any;
	let targetUser: User | null = null;
	let chatboxdiv: HTMLDivElement;
	let searchuserInput: HTMLInputElement;
	let opened = false;
	let messageInput: HTMLInputElement;
	let messagesDiv: HTMLDivElement;
	let unreadMessages = 0;
	function onSearch(ev: Event) {
		if (ev.target.value === '') targetUser = null;

		axios
			.get(`${root}/users/@${ev.target.value}`)
			.then((response) => {
				targetUser = response.data;
			})
			.catch(console.log);
	}

	onMount(() => {
		messageInput = document.querySelector<HTMLInputElement>('.content')!;

		chatboxdiv.addEventListener('keypress', (ev) => {
			if (ev.key === 'Enter') {
				sendMessage(ev);
			}
		});
	});

	function sendMessage(ev: any) {
		let parsedMessage = messageInput.value;

		parsedMessage = DOMPurify.sanitize(parsedMessage);

		if (parsedMessage.replaceAll(' ', '') === '') return;

		socket.emit('message', parsedMessage, targetUser);
	}

	onMount(() => {
		messagesDiv.innerHTML = '';

		socket.on('retrieve_messages', async (datas: any) => {
			if (messagesDiv && messageInput) {
				if (messagesDiv.innerHTML === '') {
					for (let message of datas) {
						let result = await axios.get(`${root}/users/${message.userId}`);
						await addMessage(result.data, message.content);
					}
				} else {
					let message = datas.at(-1);
					let result = await axios.get(`${root}/users/${message.userId}`);
					await addMessage(result.data, message.content);
				}
			}
		});
	});

	async function replaceMentions(content: string): Promise<string> {
		var re = /\B@\w+/g;
		var text = [...content.matchAll(re)];
		let res = content;

		for (let mention of text) {
			let match = mention[0];

			try {
				let userResult = await axios.get(`${root}/users/${match}`);

				res = res.replace(
					match,
					`<a href="/profile/@${userResult.data.username}">@${userResult.data.username}</a>`
				);
			} catch (e) {
				console.log(e);
			}
		}

		return res;
	}

	async function addMessage(user: User, content: string, isDM?: boolean) {
		if (messagesDiv && messageInput) {
			let msgEl = document.createElement('p');
			content = await replaceMentions(content);

			let line = `<b>${isDM ? '[DM] ' : ''}${user.username}</b>: ${content}`;

			msgEl.innerHTML = DOMPurify.sanitize(line, {
				ALLOWED_TAGS: ['b', 'a', 'br', 'p']
			});
			messagesDiv.appendChild(msgEl);

			messagesDiv.scrollTo(0, messagesDiv.scrollHeight);

			if (user.username === $user.username) {
				messageInput.value = '';
			}
		}
	}
</script>

<div class="chatbox-and-icon">
	<div class="chatbox" style={`display: ${opened ? 'block' : 'none'}`} bind:this={chatboxdiv}>
		<div class="user-searching">
			<input
				type="text"
				class="search-user"
				bind:this={searchuserInput}
				on:input={onSearch}
				placeholder="User to DM"
			/>

			{#if targetUser}
				<PartialUser user={targetUser}
					><p>{targetUser.online ? 'Online' : 'Offline'}</p></PartialUser
				>
			{:else if searchuserInput && searchuserInput.value.replaceAll(' ', '') !== ''}
				<p>Couldn't find user, make sure the username is not misspelled</p>
			{/if}
		</div>

		<div class="messages" bind:this={messagesDiv}></div>
		<div class="messaging-div">
			<input
				type="text"
				class="content"
				bind:this={messageInput}
				placeholder="enter a message..."
			/>
			<button class="send" on:click={sendMessage}>Send</button>
		</div>
	</div>

	{#if opened}
		<button
			class="btn"
			on:click={() => {
				opened = false;
			}}><span class="fa fa-envelope-open"></span></button
		>
	{:else}
		<button
			class="btn"
			on:click={() => {
				opened = true;
			}}><span class="fa fa-envelope"></span>{unreadMessages ? `(${unreadMessages})` : ''}</button
		>
	{/if}
</div>

<style lang="scss">
	@use '../variables.scss';

	.chatbox-and-icon {
		position: absolute;
		right: 10px;
		bottom: 10px;

		.btn {
			float: right;
			border-radius: 50%;
			width: 30px;
			height: 30px;
		}

		.chatbox {
			background-color: variables.$orchid-pink;
			border-radius: 15px;
			height: 320px;
			border: 1px solid variables.$raisin-black;
			padding: 5px;
			z-index: 5;

			.messages {
				display: flex;
				flex-direction: column;
				height: 80%;
				overflow-y: auto;
				clip-path: none;
				scroll-behavior: smooth;
			}

			.messaging-div {
				display: flex;
				position: absolute;
				bottom: 30px;
				right: 20px;
				margin-bottom: 10px;

				input {
					width: 280px;
				}
			}
		}
	}
</style>
