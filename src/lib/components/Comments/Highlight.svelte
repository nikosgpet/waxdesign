<script type="ts">
  import HighlightEnum from "$lib/types/Highlight.enum";

  export let type: HighlightEnum;
  export let className = '';
  export let status;


  function toggleClick(value) {
    status.setActive(value);
  }

  function toggleHover(value) {
    status.setHover(value);
  }
</script>


<svelte:window on:click={() => toggleClick(false)}></svelte:window>

<span 
  class="
    {type === HighlightEnum.Comment ? `border-b-2 border-[#fee053] ${$status.active || $status.hover ? 'bg-[#fee394] border-[#fee394]' : ''}` : ''}
    {type !== HighlightEnum.Comment ? `text-[rgb(31,161,93)] ${$status.active || $status.hover ? 'bg-[#defdec]' : ''}` : ''}
    {type === HighlightEnum.Remove ? 'line-through': ''}
    {className}"
  on:mouseenter={() => toggleHover(true)}
  on:mouseleave={() => toggleHover(false)}
  on:click|stopPropagation={() => toggleClick(true)}
>
  <slot></slot>
</span>
