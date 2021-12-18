<script type="ts">
  import Button from "$lib/components/Button.svelte";

  export let title;
  export let sub = '';
  export let active = false;
  let showSubButton = false;
  let hoverSubButton = false;
  

</script>

<div class="flex w-full" on:mouseenter={() => showSubButton=true} on:mouseleave={() => showSubButton=false}>
  {#if sub}
  <div class="h-6 w-6 min-w-[24px] ml-[11px] mr-0.5">
    <div class="{sub === 'middle' ? 'h-8 -m-1' : 'h-5 -m-1'} w-0.5 mx-auto bg-buttonblue-300"></div>
  </div>
  {/if}
  
  <div class="flex relative w-full items-center h-7 px-2 py-0.5 rounded-[4px] cursor-pointer select-none
                {active ? 'bg-buttonblue-100 hover:bg-buttonblue-200 active:bg-buttonblue-300' : 'hover:bg-buttonblue-100 active:bg-buttonblue-200'}">
    {#if !sub}
      <div class="relative z-10 h-6 w-6 mr-2 border border-buttonblue-300 rounded-[4px] bg-white"></div>
    {/if}
  
    <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
      {title}
    </div>

    <div class="{(showSubButton ? '' : 'hidden')} {(hoverSubButton ? 'inbutton' : '')} {(active ? 'active' : '')}">
      <Button 
        on:mouseenter={() => hoverSubButton=true}
        on:mouseleave={() => hoverSubButton=false}
        className="h-[18px] w-[18px]"
        icon="add"
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
