import { writable } from 'svelte/store';

function createOverlayClosed() {
  const { subscribe, update } = writable(0);

  function close() {
    update(x => x+1)
  }

  return {
    subscribe,
    close,
  };
}

const overlayClosed = createOverlayClosed();

export default overlayClosed;
