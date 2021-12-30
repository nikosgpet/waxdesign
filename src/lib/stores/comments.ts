import { writable } from 'svelte/store';


function createStatus() {
  const { subscribe, update } = writable({
    active: false,
    hover: false,
    read: false
  });

  function setHover(value) {
    update(x => {
      return {
        ...x,
        hover: value
      }
    })
  }

  function setActive(value) {
    update(x => {
      return {
        ...x,
        active: value,
      }
    })
  }

  function setRead(value) {
    update(x => {
      return {
        ...x,
        read: value,
      }
    })
  }

  function toggleRead(value) {
    update(x => {
      return {
        ...x,
        read: !x.read,
      }
    })
  }

  return {
    subscribe,
    setActive,
    setHover,
    setRead,
    toggleRead
  };
}

const addSuggestion = createStatus();
const removeSuggestion = createStatus();
const formatSuggestion = createStatus();
const soloComment = createStatus();
const doubleComment = createStatus();
const tripleComment = createStatus();


export {
  addSuggestion,
  removeSuggestion,
  formatSuggestion,
  soloComment,
  doubleComment,
  tripleComment
};
