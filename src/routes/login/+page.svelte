<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { root } from '../../stores';

	axios.defaults.withCredentials = true;

	let success = '';
	let error = '';

	function writeError(msg: string) {
		error = msg;
		setTimeout(() => {
			error = '';
		}, 3000);
	}

	function writeSuccess(msg: string) {
		success = msg;
		setTimeout(() => {
			success = '';
		}, 3000);
	}

	onMount(() => {
		let loginForm: HTMLFormElement = document.querySelector('#login-form')!;

		loginForm.addEventListener('submit', async (ev) => {
			ev.preventDefault();

			let usernameInput: HTMLInputElement = loginForm.querySelector('#username')!;
			let passwordInput: HTMLInputElement = loginForm.querySelector('#password')!;

			try {
				let result = await axios.post(
					`${root}/users/login`,
					{
						username: usernameInput.value,
						password: passwordInput.value
					},
					{ withCredentials: true }
				);

				writeSuccess(result.data.message);

				window.location.href = '/';
			} catch (e) {
				writeError(e.response.data.message);
				console.log(e);
			}
		});

		let registerForm: HTMLFormElement = document.querySelector('#register-form')!;

		registerForm.addEventListener('submit', async (ev) => {
			ev.preventDefault();

			let usernameInput: HTMLInputElement = registerForm.querySelector('#username')!;
			let passwordInput: HTMLInputElement = registerForm.querySelector('#password')!;
			let emailInput: HTMLInputElement = registerForm.querySelector('#email')!;
			let repeatPasswordInput: HTMLInputElement = registerForm.querySelector('#repeat-password')!;

			if (repeatPasswordInput.value !== passwordInput.value)
				return writeError("Passwords don't match");

			try {
				let result = await axios.post(
					`${root}/users`,
					{
						username: usernameInput.value,
						email: emailInput.value,
						password: passwordInput.value
					},
					{ withCredentials: true }
				);

				writeSuccess(result.data.message);

				window.location.href = '/';
			} catch (e) {
				writeError(e.response.data.message);
				console.log(e);
			}
		});
	});
</script>

<svelte:head>
	<title>Persona - Login</title>
	<meta name="author" content="Persona DB - Login & Register" />
	<meta name="description" content="Find and host any original characters" />

	<meta property="og:title" content="Persona DB - Login & Register" />
	<meta property="og:description" content="Find and host any original characters" />
	<meta property="og:image" content="https://persona-db.xyz/favicon.png" />
</svelte:head>

<main>
	<div class="container">
		{#if success}
			<div class="success alert"><p>{success}</p></div>
		{/if}

		{#if error}
			<div class="error alert"><p>{error}</p></div>
		{/if}

		<div class="forms">
			<div class="full">
				<h1>Login</h1>

				<form action="" method="post" id="login-form" class="box">
					<div class="control">
						<label for="username">Username</label>
						<br /><br />
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Username"
							autocomplete="off"
						/>
					</div>
					<br />
					<div class="control">
						<label for="password">Password</label><br /><br />
						<input type="password" name="password" id="password" placeholder="Password" />
					</div>
					<br />
					<button type="submit">Log In</button>
				</form>
			</div>

			<div class="full">
				<h1>Register</h1>

				<form action="" method="post" id="register-form" class="box">
					<div class="control">
						<label for="username">Username</label>
						<br /><br />
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Username"
							autocomplete="off"
						/>
					</div>
					<br />
					<div class="control">
						<label for="email">Email</label>
						<br /><br />
						<input type="text" name="email" id="email" placeholder="Email" autocomplete="off" />
					</div>
					<br />
					<div class="control">
						<label for="password">Password</label><br /><br />
						<input type="password" name="password" id="password" placeholder="Password" />
					</div>
					<br />
					<div class="control">
						<label for="repeat-password">Repeat Password</label><br /><br />
						<input
							type="password"
							name="repeat-password"
							id="repeat-password"
							placeholder="Repeat Password"
						/>
					</div>
					<br />
					<button type="submit" class="register-btn">Create an account</button>
				</form>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	@use '../../variables.scss';

	.forms {
		display: flex;
		justify-content: space-around;
	}

	h1 {
		margin-bottom: 10px;
	}

	.alert {
		padding: 5px;
		width: 45%;
		border-radius: 10px;
		color: white;
	}

	.success {
		background-color: green;
		border: 2px solid rgb(4, 78, 4);
	}

	.error {
		background-color: red;
		border: 2px solid rgb(88, 4, 4);
	}

	form {
		border: 1px solid gray;
		border-radius: 15px;
		padding: 10px;

		.register-btn {
			width: 160px;
		}
		button {
			float: right;
			margin-bottom: 10px;
		}
	}

	@media only screen and (max-width: 768px) {
		/* For mobile phones: */

		.forms {
			flex-direction: column;
			margin-bottom: 5px;

			form {
				width: 90%;
			}

			:global(input) {
				width: 90%;
			}

			:global(button) {
				margin-left: 60%;
			}
		}
	}
</style>
