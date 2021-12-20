<script type="ts">
  import overlayClosed from '$lib/stores/overlay';
  import { createEventDispatcher } from 'svelte';

  export let className = '';

  $: onClose($overlayClosed);

  const dispatch = createEventDispatcher();

  function onClose(event) {
    dispatch('close');
  }
</script>


<div 
  on:click|stopPropagation={onClose}
  class="fixed z-20 top-0 bottom-0 left-0 right-0 {className}"
>
</div>
<slot></slot>
