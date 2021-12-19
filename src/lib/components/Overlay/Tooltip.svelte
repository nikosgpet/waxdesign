<script type="ts">
  export let tooltip = '';
  export let subTooltip = '';
  export let tooltipPosition = 'top'; // top, left, bottom, right
  export let tooltipClass = '';
  export let showTooltip = false;
  export let duration = 450;
  

  let _showTooltipAfterDelay = false;

  $: updateShow(showTooltip)

  function updateShow(st) {
    _showTooltipAfterDelay = false;
    setTimeout(() => {
      _showTooltipAfterDelay = showTooltip;
    }, duration);
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


{#if _showTooltipAfterDelay}
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
