import axios, { AxiosError } from 'axios';
import { root } from './stores';

namespace API {
	export type ClientUser = User & {
		password: string;
		token: string;
		email: string;
	};

	export type User = {
		_id: string;
		username: string;
		createdAt: number;
		avatar?: string;
		online: boolean;
		admin?: boolean;
	};

	export type Character = {
		_id: string;
		name: string;
		description: string;
		ownerId: string;
		editedAt: number;
		createdAt: number;
		code: string;
		tags: string[];
		stats: { name: string; value: number }[];
		icon?: string;
		refsheet?: string;
	};

	export type RequestError = {
		status: number;
		message: string;
	};

	export type RequestMessage = {
		message: string;
	};
}

class API {
	async getUser(id: string): Promise<API.User> {
		let result = await axios.get(`${root}/users/${id}`);
		return result.data;
	}

	async getUsers(): Promise<API.User[]> {
		let result = await axios.get(`${root}/users`);
		return result.data;
	}

	async getCharacter(code: string): Promise<API.Character> {
		let result = await axios.get(`${root}/characters/${code}`);
		return result.data;
	}

	async getCharacters(): Promise<API.Character[]> {
		let result = await axios.get(`${root}/characters`);
		return result.data;
	}

	async getMe(): Promise<API.ClientUser> {
		let result = await axios.post(`${root}/users/exchange`);
		return result.data;
	}

	async updateMe(options: {
		username?: string;
		email?: string;
		password?: string;
		bio?: string;
	}): Promise<API.RequestError | API.RequestMessage> {
		try {
			let result = await axios.put(`${root}/users`, options);
			return result.data;
		} catch (e) {
			//@ts-ignore
			return e.result.data;
		}
	}

	async login(options: { username: string; password: string }): Promise<string | API.RequestError> {
		try {
			let result = await axios.post(`${root}/users/login`, options, { withCredentials: true });
			return result.data.token;
		} catch (e) {
			//@ts-ignore
			return e.result.data;
		}
	}

	async register(options: {
		username: string;
		email: string;
		password: string;
	}): Promise<string | API.RequestError> {
		try {
			let result = await axios.post(`${root}/users`, options, { withCredentials: true });
			return result.data.token;
		} catch (e) {
			//@ts-ignore
			return e.result.data;
		}
	}

	async deleteMe(): Promise<API.RequestError | API.RequestMessage> {
		try {
			let result = await axios.delete(`${root}/users`);
			return result.data;
		} catch (e) {
			//@ts-ignore
			return e.result.data;
		}
	}

	async addCharacter(options: {
		name: string;
		description: string;
		stats?: { name: string; value: number }[];
		tags?: string[];
		icon?: string;
		refsheet?: string;
	}): Promise<API.RequestError & (API.RequestMessage & { code: string })> {
		try {
			let result = await axios.post(`${root}/characters`, options);
			return result.data;
		} catch (e) {
			//@ts-ignore
			return e.result.data;
		}
	}

	async updateCharacter(options: {
		_id: string;
		name: string;
		description: string;
		stats?: { name: string; value: number }[];
		tags?: string[];
		icon?: string;
		refsheet?: string;
	}): Promise<API.RequestError | API.RequestMessage> {
		try {
			let result = await axios.put(`${root}/characters`, options);
			return result.data;
		} catch (e) {
			//@ts-ignore
			return e.result.data;
		}
	}

	async upload(formdata: FormData): Promise<string | null> {
		try {
			let resultUpload = await axios.post(`${root}/upload`, formdata);

			if (resultUpload.data.url) {
				return resultUpload.data.url;
			} else {
				return null;
			}
		} catch {
			return null;
		}
	}

	async deleteCharacter(id: string): Promise<API.RequestError | API.RequestMessage> {
		try {
			let result = await axios.put(`${root}/characters/${id}`);
			return result.data;
		} catch (e) {
			//@ts-ignore
			return e.result.data;
		}
	}
}

export default new API();
export type { API };
