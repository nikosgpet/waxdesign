<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import languageOverlay from '$lib/stores/languageOverlay';
  import Button from "$lib/components/Button.svelte";

</script>


{#if $languageOverlay}
<Menu className="py-4 w-[340px]" absoluteClass="right-3 top-[46px]" shadow='lg'>
  <div class="flex px-4 pb-2">
    <div class="flex-grow text-left ">
      <div class="text-base text-buttonblue-900">
        Spelling & Grammar
      </div>
      <div class="pt-3 text-sm text-buttonblue-800">
        Change <span class="font-bold text-buttonblue-900">speelling</span> to:
      </div>
    </div>

    <Button 
      icon="close" 
      size="medium" 
      className="h-9 w-9 -mt-1.5 -mr-1.5"
      on:click={() => languageOverlay.close()}
    />
  </div>
  
  <div class="flex flex-col px-2 gap-1">
    <div class="flex w-full items-center h-7 px-2 py-0.5 rounded-[4px] text-left text-sm text-buttonblue-900 cursor-pointer select-none bg-buttonblue-200">
      Spelling
    </div>
    <div class="flex w-full items-center h-7 px-2 py-0.5 rounded-[4px] text-left text-sm text-buttonblue-900 cursor-pointer select-none hover:bg-buttonblue-100 active:bg-buttonblue-200">
      Peeling
    </div>
  </div>

  <div class="flex w-full pt-4 pl-4 pr-3">
    <div class="flex flex-grow gap-2">
      <Button className="text-sm px-4 py-2 bg-buttonblue-900 hover:bg-buttonblue-900 active:bg-buttonblue-900 hover:opacity-95 active:opacity-90 text-white">Accept</Button>
      <Button className="text-sm px-4 py-[7px] text-buttonblue-900 border border-buttonblue-900">Ignore</Button>
    </div>
    <div class="flex gap-2">
      <Button icon="navigate_before" size="medium" className="h-9 w-9"/>
      <Button icon="navigate_next" size="medium" className="h-9 w-9"/>
    </div>
  </div>
</Menu>
{/if}
