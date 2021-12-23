<script type="ts">
  import SpellingOverlay from "$lib/components/Inline/SpellingOverlay.svelte";

  export let message;
  export let corrections = [];

  let active = false;
  
</script>

<svelte:window on:click={() => {active = false}}></svelte:window>

<div 
  class="group relative select-none inline cursor-pointer"
  contenteditable="false"
  on:click|stopPropagation={() => active = true}
>
  <div class="relative inline select-none border-b-2 border-[#e31d3c] group-hover:bg-[#e31d3b1e] {active ? 'bg-[#e31d3b1e]' : ''}">
    <div class="absolute left-0 bottom-0 h-6 {active ? 'block' : 'hidden'}">
      <SpellingOverlay
        {message}
        {corrections}
      />
    </div>
    <slot></slot>
  </div>
</div>
