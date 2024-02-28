import axios from 'axios';
axios.defaults.withCredentials = true;
import { writable } from 'svelte/store';
import { io } from 'socket.io-client';

/**
 * @type {import('svelte/store').Writable<import("./api").API.ClientUser>}
 */
export const user = writable();

// Will change
export const root = 'https://persona-db.xyz/api';
export const socketRoot = 'https://persona-db.xyz';

export let options = {
	credentials: 'include',
	headers: {
		'Content-Type': 'application/json'
	},
	mode: 'cors',
	cache: 'no-cache'
};

export const socket = io(socketRoot);

export function Linkify(inputText) {
	return inputText;
}

export default {
	user,
	root,
	socket,
	Linkify
};
