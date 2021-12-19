<script type="ts">
  import Button from "$lib/components/Button.svelte";

  export let title;
  export let sub = '';
  export let active = false;
  export let deactivateTooltip = false;

  let showSubButton = false;
  let hoverSubButton = false;
</script>

<div class="flex w-full" on:mouseenter={() => showSubButton=true} on:mouseleave={() => showSubButton=false}>
  {#if sub}
  <div class="h-6 w-6 min-w-[24px] ml-[8px]">
    <div class="{sub === 'middle' ? 'h-8 -m-1' : 'h-5 -m-1'} w-0.5 mx-auto bg-buttonblue-300"></div>
  </div>
  {/if}
  
  <div 
    class="flex w-full items-center h-7 px-2 py-0.5 rounded-[4px] cursor-pointer select-none overflow-hidden
          {active ? 'bg-buttonblue-100 hover:bg-buttonblue-200 active:bg-buttonblue-300' : 'hover:bg-buttonblue-100 active:bg-buttonblue-200'}
          {active ? 'active' : ''} {hoverSubButton ? 'subbutton' : ''}
          "
  >
    {#if !sub}
      <div class="relative z-10 h-6 w-6 min-w-[24px] mr-2 border border-buttonblue-300 rounded-[4px] bg-white"></div>
    {/if}
  
    <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
      {title}
    </div>

    <div class="{(showSubButton ? '' : 'hidden')}">
      <Button 
        on:mouseenter={() => hoverSubButton=true}
        on:mouseleave={() => hoverSubButton=false}
        className="relative z-20 h-[18px] w-[18px]"
        icon={sub ? 'more_horiz' : 'add'}
        {active}
        {deactivateTooltip}
        selected={true}
        tooltip={sub ? 'Custom style options' : 'Add custom style'}
        tooltipClass="mt-3"
      />
        <!-- showTooltip={true} -->
    </div>
  </div>
</div>


<style type="postcss">
  .subbutton {
    @apply active:bg-buttonblue-100;
  }

  .subbutton.active {
    @apply active:bg-buttonblue-200;
  }
</style>
