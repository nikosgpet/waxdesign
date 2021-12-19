<script type="ts">
  import Icon from "$lib/components/Icon.svelte";
  import Tooltip from "$lib/components/Overlay/Tooltip.svelte";
  import Overlay from "$lib/components/Overlay/Overlay.svelte";
  import { createEventDispatcher } from 'svelte';

  export let icon = null;
  export let size = 'small';
  export let active = false;
  export let selected = false;
  export let className = "h-6 w-6";
  export let tooltip = '';
  export let subTooltip = '';
  export let tooltipPosition = 'top'; // top, left, bottom, right
  export let showTooltip = false;
  export let tooltipClass = '';
  export let deactivateTooltip = false;

  const dispatch = createEventDispatcher();
  let showOverlay = false;
  let hoverTooltip = false;

  function onClick(event) {
    hoverTooltip = false;
    showOverlay = true;
    dispatch('click');
  }

  function setPosition(node) {
    let m = 0;
    if (tooltipPosition === "top" || tooltipPosition === "bottom") {
      m = node.parentNode.clientWidth / 2 - node.clientWidth / 2;
      node.style.marginLeft = `${m}px`;
    } else {
      m = node.parentNode.clientHeight / 2 - node.clientHeight / 2;
      node.style.marginTop = `${m}px`;
    }
  }
</script>


<div
  on:mouseenter={() => hoverTooltip = true}
  on:mouseleave={() => hoverTooltip = false}
  class="{tooltipPosition === 'right' ? 'relative' : ''}"
>
  <button 
    on:click|stopPropagation={onClick}
    on:mouseenter
    on:mouseleave
    class="{className} flex items-center justify-center rounded-sm 
            {active ? 'bg-buttonblue-200 hover:bg-buttonblue-300 active:bg-buttonblue-300' :
            selected ? 'bg-buttonblue-100 hover:bg-buttonblue-200 active:bg-buttonblue-300' :
            'hover:bg-buttonblue-100 active:bg-buttonblue-200'}
            {$$slots.overlay && showOverlay ? 'bg-buttonblue-200 rounded-b-none' : ''}"
  >
    <slot>
      <Icon {icon} {size}/>
    </slot>
  </button>

  <Tooltip 
    {tooltip} 
    {subTooltip} 
    {tooltipPosition} 
    {tooltipClass} 
    showTooltip={((tooltip !== '' && hoverTooltip) || showTooltip) && !showOverlay && !deactivateTooltip}
  />

  {#if $$slots.overlay && showOverlay}
  <Overlay on:close={() => showOverlay = false}>
    <slot name="overlay"></slot>
  </Overlay>
  {/if}
</div>
