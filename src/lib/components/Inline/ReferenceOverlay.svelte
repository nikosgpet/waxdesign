<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";

  export let src = null;
  export let title;
  export let subtitle;
</script>


<Menu 
  absoluteClass="bottom-[30px] left-[-6px]" 
  className="drop-shadow-md" 
  enableOverflow={true} 
  shadow=""
  on:mouseenter
  on:mouseleave
>
  <div class="flex row relative items-center w-[310px] overflow-hidden">
    <div class="flex flex-col overflow-hidden cursor-default">
      {#if src}
        <img class="rounded-t" {src} alt={subtitle}>
      {/if}
      <div class="text-sm font-medium text-left pt-2 px-3 mb-1">
        {title}
      </div>
      <div class="text-sm text-buttonblue-800 text-left pb-2 px-3">
        {subtitle}
      </div>
    </div>
  </div>
</Menu>

