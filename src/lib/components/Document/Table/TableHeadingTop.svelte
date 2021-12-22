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
  class="absolute flex flex-col justify-end h-[34px] left-[-1px] right-[1px] top-[-35px] cursor-pointer w-[calc(100%+2px)] border-t {debug ? '' : 'border-transparent'}"
  on:mouseenter={onHover}
  on:mouseleave={onHoverOut}
>
  <div class="absolute flex flex-col justify-end z-30 top-0 bottom-0 left-full w-1/2 border {debug ? '' : 'border-transparent'}"> <!-- Left hover area -->
    <div class="relative top-px -left-px w-[calc(100%+2px)] h-[11px] {debug ? 'bg-black' : ''}" on:mouseenter={() => dispatch('mouseenter', 1)} on:mouseleave></div>
  </div>
  <div class="absolute z-10 flex flex-col justify-end top-0 bottom-0 right-0 w-1/2 border {debug ? '' : 'border-transparent'}"> <!-- Right hover area -->
    <div class="relative top-px -left-px w-[calc(100%+2px)] h-[11px] {debug ? 'bg-black' : ''}" on:mouseenter={() => dispatch('mouseenter', 0)} on:mouseleave></div>
  </div>
  <div class="border-t border-l border-r {active ? 'border-buttonblue-800 bg-buttonblue-800' : 'border-buttonblue-500 bg-buttonblue-100'} w-full h-[11px]"> <!-- Table top border -->
  </div>
  <div class="absolute top-[8px] z-40 right-[-2px] w-1 h-1 rounded-full bg-buttonblue-600"> <!-- Add button -->
    {#if buttonVisible}
    <ButtonAdd {table}/>
    {/if}
  </div>
</div>
{/if}
          