<script type="ts">
  import Icon from "$lib/components/Icon.svelte";

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

  let hoverTooltip = false;

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
  class="relative"
>
  <button 
    on:click|stopPropagation 
    on:mouseenter
    on:mouseleave
    class="{className} flex items-center justify-center rounded-sm 
            {active ? 'bg-buttonblue-200 hover:bg-buttonblue-300 active:bg-buttonblue-300' :
            selected ? 'bg-buttonblue-100 hover:bg-buttonblue-200 active:bg-buttonblue-300' :
            'hover:bg-buttonblue-100 active:bg-buttonblue-200'}"
  >
    <slot>
      <Icon {icon} {size}/>
    </slot>
  </button>

  {#if (tooltip !== '' && hoverTooltip) || showTooltip}
  <div 
    use:setPosition 
    class="absolute z-50 text-left bg-[rgb(15,15,15)] py-1 px-2 rounded-[3px] min-w-max {tooltipClass} {tooltipPosition === 'right' ? 'top-0' : ''}"
    style="box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px"
  >
    {#each tooltip.split('|') as line}
    <div class="text-[rgba(255,255,255,0.9)] text-xs font-medium max-w-[120px]">
      {line}
    </div>
    {/each}
    {#if subTooltip}
    <div class="text-[rgba(206,205,202,0.6)] text-xs my-0.5">
      {subTooltip}
    </div>
    {/if}
  </div>
  {/if}
</div>

