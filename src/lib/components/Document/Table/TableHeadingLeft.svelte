<script type="ts">
  import ButtonAdd from "$lib/components/Document/Table/ButtonAdd.svelte";
  import { createEventDispatcher } from 'svelte';

  export let table;
  export let debug;
  export let active;
  export let visible;

  const dispatch = createEventDispatcher();

  let buttonVisible = false;

  $: console.log('active left', buttonVisible)
  function onHover() {
    buttonVisible = true;
  }

  function onHoverOut() {
    buttonVisible = false;
  }
</script>

{#if visible}
<div
  class="absolute flex justify-end w-[34px] top-[-1px] bottom-[1px] left-[-35px] cursor-pointer h-[calc(100%+2px)] border-t {debug ? '' : 'border-transparent'}"
  on:mouseenter={onHover}
  on:mouseleave={onHoverOut}
>
  <div class="absolute flex justify-end z-30 top-full right-0 left-0 h-1/2 border {debug ? '' : 'border-transparent'}"> <!-- Top hover area -->
    <div class="relative -top-px -right-px h-[calc(100%+2px)] w-[11px] {debug ? 'bg-black' : ''}" on:mouseenter={() => dispatch('mouseenter', 1)} on:mouseleave></div>
  </div>
  <div class="absolute flex justify-end z-20 bottom-0 right-0 left-0 h-1/2 border {debug ? '' : 'border-transparent'}"> <!-- Bottom hover area -->
    <div class="relative bottom-px -right-px h-[calc(100%+2px)] w-[11px] {debug ? 'bg-black' : ''}" on:mouseenter={() => dispatch('mouseenter', 0)} on:mouseleave></div>
  </div>
  <div class="border-l border-b  {active ? 'border-buttonblue-800 bg-buttonblue-800' : 'border-buttonblue-500 bg-buttonblue-100'} h-full w-[11px]" on:mouseenter on:mouseleave> <!-- Table left border -->
  </div>
  <div class="absolute left-[8px] bottom-[-2px] z-40 w-1 h-1 rounded-full bg-buttonblue-600"> <!-- Add button -->
    {#if buttonVisible}
    <ButtonAdd {table} left={true}/>
    {/if}
  </div>
</div>
{/if}
