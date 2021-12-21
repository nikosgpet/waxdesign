import { writable } from 'svelte/store';

const currentNumber = writable('3570');
const currentTitle = writable('Words');

export { currentNumber, currentTitle };
