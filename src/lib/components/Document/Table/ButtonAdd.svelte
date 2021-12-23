<script type="ts">
  import Button from "$lib/components/Button.svelte";

  export let table;
  export let left = false;

</script>


<Button
  icon="add"
  className="absolute z-10 group w-5 h-5 top-[-8px] left-[-8px] bg-white border border-buttonblue-600 shadow-md
    hover:border-buttonblue-800 hover:bg-buttonblue-800 active:bg-buttonblue-900 hover:text-white"
  iconClass="group-hover:fill-white"
/>
<div
  class="absolute {left ? 'h-0.5 top-px': 'w-0.5 left-px'} peer-hover:bg-slate-600"
  style="{left ? '': `height:${table?.getBoundingClientRect?.()?.height + 25}px`} {left ? `width:${table?.getBoundingClientRect?.()?.width + 26}px` : ''}"
>
</div>
