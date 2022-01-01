<script type="ts">
  import Button from "$lib/components/Button.svelte";
  import Icon from "$lib/components/Icon.svelte";

  export let title;
  export let active = false;
  let showSubButton = false;
  let hoverSubButton = false;

  function onAddClick(e) {
    e.stopPropagation();
  }
  

</script>

<div class="flex w-full" on:mouseenter={() => showSubButton=true} on:mouseleave={() => showSubButton=false}>
  
  <div class="flex relative w-full items-center h-7 px-2 cursor-pointer select-none
                {active ? 'bg-buttonblue-100 hover:bg-buttonblue-200 active:bg-buttonblue-300' : 'hover:bg-buttonblue-100 active:bg-buttonblue-200'}">
  
    <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
      {title}
    </div>

    <div class="{(showSubButton ? '' : 'hidden')} {(hoverSubButton ? 'inbutton' : '')} {(active ? 'active' : '')}">
      <Button 
        on:click={onAddClick} 
        on:mouseenter={() => hoverSubButton=true} 
        on:mouseleave={() => hoverSubButton=false}
        className="relative z-20 h-[18px] w-[18px]" 
        icon="more_horiz" 
        {active}
        selected={true}
      />
    </div>
  </div>
</div>

<style type="postcss" global>
  .inbutton::before {
    @apply absolute top-0 left-0 right-0 bottom-0 bg-buttonblue-100 rounded-[4px];
    content: '';
  }

  .inbutton.active::before {
    @apply bg-buttonblue-200;
  }
</style>
