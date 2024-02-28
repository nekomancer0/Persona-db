export type User = {
	username: string;
	avatar?: string;
	token?: string;
	password?: string;
	email?: string;
	createdAt: number;
	_id: string;
	online: boolean;
	admin?: boolean;
};

export type Character = {
	ownerId: string;
	name: string;
	code: string;
	description: any;
	editedAt: number;
	createdAt: number;
	_id: string;
	tags: string[];
	stats?: { name: string; value: number }[];
	icon: string;
	refsheet: string;
};
