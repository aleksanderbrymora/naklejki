import { writable } from 'svelte/store';

export const details = writable({
	clpl: '2730',
	sopl: '5507',
	po: '####',
	souk: '64537',
	customer: 'Cameron Shiels',
	dealer: 'JCI Limited'
});

export const partNames = writable<string[]>(['Frame', 'Hardware', 'Panel 1L']);
