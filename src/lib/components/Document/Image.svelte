<script>
  import AddComment from "$lib/components/Overlay/HelperBar/AddComment.svelte";
  import ImageHelper from "$lib/components/Overlay/Image/ImageHelper.svelte";
  import SideOverlay from "$lib/components/Overlay/Editing/SideOverlay.svelte";


  export let src;
  export let alt = "";
  export let figure;
  export let caption;
  
  let active = false;
  let showSideOverlay = false;
</script>

<svelte:window on:click={() => {active = false}}></svelte:window>

<div 
  class="relative pl-[48px]"
  on:mouseenter={() => showSideOverlay = true} 
  on:mouseleave={() => showSideOverlay = false}
>
  <img 
    {src} 
    {alt}
    class="block cursor-pointer mt-5 mb-3 rounded-sm {active ? 'ring-2 ring-buttonblue-600' : ''}" 
    on:click|stopPropagation={() => {active = true}}
  />

  <div class="flex text-sm mb-4">
    <div class="font-medium mr-3">
      {figure}
    </div>
    <div class="text-buttonblue-900 focus-visible:outline-none" contenteditable>
      {caption}
    </div>
  </div>

  {#if showSideOverlay}
  <SideOverlay/>
  {/if}

  {#if active}
  <ImageHelper/>
  {/if}

  {#if active}
  <AddComment boundaries={{x:0, y:-32}}/>
  {/if}
</div>

