<script type="ts">
  import { createEventDispatcher } from 'svelte';

  export let status;
  export let top = 0;

  status.setRead(true);

  const dispatch = createEventDispatcher();

  function onChange(value) {
    status.setActive(value);
    dispatch('active', value);
  }
</script>


<svelte:window on:click={() => onChange(false)}></svelte:window>

<div
  class="group absolute w-[220px] mr-3 border hover:border-buttonblue-500 hover:opacity-100 rounded px-4 py-3 cursor-pointer
    {$status.active || $status.hover ? 'border-buttonblue-500 opacity-100' : 'border-white opacity-60'}
    {!$status.read ? 'bg-buttonblue-100' : 'bg-white'}"
  style="top:{top}px"
  on:click|stopPropagation={() => onChange(true)}
  on:mouseenter={() => status.setHover(true)}
  on:mouseleave={() => status.setHover(false)}
>
  <slot></slot>
</div>
