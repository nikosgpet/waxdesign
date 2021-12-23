<script type="ts">
  import Icon from "$lib/components/Icon.svelte";

  let hover = false;

  $: console.log(hover)
</script>

<span 
  class="relative italic"
  on:mouseenter={() => {hover = true}}
  on:mouseleave={() => {hover = false}}
>
  <div class="absolute -top-[17px] -left-[3px] rounded text-xs px-1 py-px not-italic bg-slate-700 text-white {hover ? 'block' : 'hidden'}">Emphasis</div>
  <Icon 
    icon="custom_inline_start" 
    iconClass="inline w-[6px] -mr-1 leading-[0] relative z-10"
  />
  <slot></slot>
  <Icon 
    icon="custom_inline_end" 
    iconClass="inline w-[6px] -ml-1 leading-[0] relative z-10"
  />
</span>
