import { writable } from 'svelte/store';

function createLanguageOverlay() {
  const { subscribe, update, set } = writable(false);

  function toggle() {
    update(x => !x)
  }

  function open() {
    set(true)
  }

  function close() {
    set(false)
  }

  return {
    subscribe,
    toggle,
    open,
    close
  };
}

const languageOverlay = createLanguageOverlay();

export default languageOverlay;
