<script type="ts">
  import Icon from "$lib/components/Icon.svelte";

  export let icon = null;
  export let size = 'small';
  export let active = false;
  export let selected = false;
  export let className = "h-6 w-6";
</script>

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