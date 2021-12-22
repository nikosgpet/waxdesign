<script type="ts">
  import SideOverlay from "$lib/components/Overlay/Editing/SideOverlay.svelte";
  import HelperBar from "$lib/components/Overlay/HelperBar/HelperBar.svelte";
  import currentHelperBarEl from "$lib/stores/helperbar";;
  import AddComment from "$lib/components/Overlay/HelperBar/AddComment.svelte";

  export let showSideOverlay = false;
  export let sideOverlayClass = '';

  let forceShowSideOverlay = false;
  let blockEl;

  let isSelection = false;
  let boundaries = {x: 0, y:0};

  $: checkSelectionElement($currentHelperBarEl)

  function checkSelectionElement(el) {
    if (el !== blockEl)
      isSelection = false;
  } 

  function updateSelection() {
    const blockBoundaries = blockEl.getBoundingClientRect();
    const selectionBoundaries = window.getSelection().getRangeAt(0).getBoundingClientRect();

    $currentHelperBarEl = blockEl;
    isSelection = window.getSelection().toString() !== "";
    boundaries = {
      x: selectionBoundaries.x - blockBoundaries.x - 42,
      y: selectionBoundaries.y - blockBoundaries.y - 42
    };
    console.log('isSelection', window.getSelection().toString(), blockBoundaries, selectionBoundaries, boundaries)
  }
</script>

<div 
  bind:this={blockEl}
  on:mouseenter={() => showSideOverlay = true} 
  on:mouseleave={() => showSideOverlay = false}
  on:click={updateSelection}
  class="relative pl-[48px]"
>
  <slot></slot>

  {#if showSideOverlay || forceShowSideOverlay}
  <SideOverlay className={sideOverlayClass}/>
  {/if}

  {#if isSelection}
  <HelperBar {boundaries}/>
  {/if}

  {#if isSelection}
  <AddComment {boundaries}/>
  {/if}
</div>
