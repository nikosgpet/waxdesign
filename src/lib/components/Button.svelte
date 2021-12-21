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
  export let overlayPosition = 'bottom'; // top, bottom
  export let iconClass = '';

  const dispatch = createEventDispatcher();
  let showOverlay = false;
  let hoverTooltip = false;
  let overlayRounded = overlayPosition === 'bottom' ? 'rounded-b-none' : 'rounded-t-none';

  function onClick(event) {
    hoverTooltip = false;
    showOverlay = true;
    dispatch('click');
  }
</script>


<div
  class="{tooltipPosition === 'right' ? 'relative' : ''}"
>
  <button 
    on:click|stopPropagation={onClick}
    on:mouseenter={() => hoverTooltip = true}
    on:mouseleave={() => hoverTooltip = false}
    class="{className} flex items-center justify-center rounded-sm 
            {active ? 'bg-buttonblue-200 hover:bg-buttonblue-300 active:bg-buttonblue-300' :
            selected ? 'bg-buttonblue-100 hover:bg-buttonblue-200 active:bg-buttonblue-300' :
            'hover:bg-buttonblue-100 active:bg-buttonblue-200'}
            {$$slots.overlay && showOverlay ? `bg-buttonblue-200 ${overlayRounded}` : ''}"
  >
    <slot>
      <Icon {icon} {size} {iconClass}/>
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
  {#if $$slots.absolute}
  <slot name="absolute"></slot>
  {/if}
</div>
