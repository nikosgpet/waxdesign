import { writable } from 'svelte/store';

function createSearchOverlay() {
  const { subscribe, set } = writable(null);

  function openSimple() {
    set('simple')
  }

  function openExtended() {
    set('extended')
  }

  function close() {
    set(null)
  }

  return {
    subscribe,
    openSimple,
    openExtended,
    close
  };
}

const searchOverlay = createSearchOverlay();

export default searchOverlay;
