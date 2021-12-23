<script type="ts">
  import ButtonAdd from "$lib/components/Document/Table/ButtonAdd.svelte";
  import { createEventDispatcher } from 'svelte';

  export let table;
  export let debug;
  export let active;
  export let visible;

  const dispatch = createEventDispatcher();

  let activeLeft = false;
  let activeTop = false;

  function leftOnHover() {
    activeLeft = true;
  }

  function leftOnHoverOut() {
    activeLeft = false;
  }

  function topOnHover() {
    activeTop = true;
  }

  function topOnHoverOut() {
    activeTop = false;
  }
</script>

{#if visible}
<div class="absolute flex justify-end items-end w-[34px] h-[34px] top-[-34px] left-[-35px] cursor-pointer border-t {debug ? '' : 'border-transparent'}">
  <div class="border-l border-b border-t {active ? 'border-buttonblue-800 bg-buttonblue-800' : 'border-buttonblue-500 bg-buttonblue-100'} h-[12px] w-[11px] rounded-tl"> <!-- Table top-left border -->
  </div>

  <div class="absolute flex justify-end z-10 top-[22px] right-0 left-0 h-[100px] border {debug ? '' : 'border-transparent'}" on:mouseenter={topOnHover} on:mouseleave={topOnHoverOut}> <!-- Left hover area -->
    <div class="absolute left-[7px] top-[9px] z-30 w-1 h-1 rounded-full bg-buttonblue-600"> <!-- Add button -->
      {#if activeTop}
      <ButtonAdd {table} left={true}/>
      {/if}
    </div>
    <div class="relative top-[10px] -right-px h-[calc(100%+2px)] w-[11px] {debug ? 'bg-blue-700' : ''}" on:mouseenter={() => dispatch('mouseenterY', 0)} on:mouseleave></div>
  </div>

  <div class="absolute flex flex-col justify-end z-10 -top-px bottom-0 left-[22px] w-[200px] border {debug ? '' : 'border-transparent'}" on:mouseenter={leftOnHover} on:mouseleave={leftOnHoverOut}> <!-- Top hover area -->
    <div class="absolute top-[7px] z-30 left-[9px] w-1 h-1 rounded-full bg-buttonblue-600"> <!-- Add button -->
      {#if activeLeft}
      <ButtonAdd {table}/>
      {/if}
    </div>
    <div class="relative bottom-[-12px] left-0 w-[11px] h-[11px] {debug ? 'bg-orange-700' : ''}" on:mouseenter on:mouseleave></div>
    <div class="relative top-px left-[12px] w-[calc(100%+2px)] h-[11px] {debug ? 'bg-blue-700' : ''}" on:mouseenter={() => dispatch('mouseenterX', 0)} on:mouseleave></div>
  </div>
</div>
{/if}
