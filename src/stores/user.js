import { writable } from 'svelte/store';

const user = writable({ username: null, jwt: "" });

export default user;