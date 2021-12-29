<script type="ts">
  export let top = 0;
  let active = false;

</script>


<svelte:window on:click={() => {active = false}}></svelte:window>

<div 
  class="w-[220px] mr-3 border {active ? 'border-buttonblue-500' : 'border-white'} hover:border-buttonblue-500 rounded bg-white px-4 py-3 cursor-pointer"
  style="margin-top:{top}px"
  on:click|stopPropagation={() => active = true}
>
  <slot></slot>
</div>
