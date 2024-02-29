import axios from 'axios';
axios.defaults.withCredentials = true;
import { writable, type Writable } from 'svelte/store';
import { io } from 'socket.io-client';
import type { API } from './api';
import api from './api';

let user: Writable<API.ClientUser> = writable();

export const root = 'https://persona-db.xyz/api';
export const socketRoot = 'https://persona-db.xyz';

let socket = io(socketRoot, { autoConnect: false });

export function Linkify(inputText: string) {
	return inputText;
}

export { socket, user };

export default {
	user,
	root,
	socket,
	Linkify
};
