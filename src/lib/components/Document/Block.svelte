<script type="ts">
  import SideOverlay from "$lib/components/Overlay/Editing/SideOverlay.svelte";

  export let showSideOverlay = false;
  export let sideOverlayClass = '';
  let forceShowSideOverlay = false;
</script>

<div 
  on:mouseenter={() => showSideOverlay = true} 
  on:mouseleave={() => showSideOverlay = false}
  class="relative pl-[48px]"
>
  <slot></slot>
  {#if showSideOverlay || forceShowSideOverlay}
  <SideOverlay className={sideOverlayClass}/>
  {/if}
</div>
