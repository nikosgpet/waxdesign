<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import searchOverlay from '$lib/stores/searchOverlay';
  import Button from "$lib/components/Button.svelte";
	import Checkbox from './../../Checkbox.svelte';

</script>


<Menu className="p-4 w-[386px]" absoluteClass="right-3 top-[46px]" shadow='lg'>
  <div class="flex pb-2">
    <div class="flex-grow text-left">
      <div class="text-base text-buttonblue-900">
        Find & Replace
      </div>
      <div class="pt-3 text-sm text-buttonblue-800">
        Find
      </div>
    </div>

    <Button 
      icon="close" 
      size="medium" 
      className="h-9 w-9 -mt-1.5 -mr-1.5"
      on:click={() => searchOverlay.close()}
    />
  </div>

  <label class="relative block">
    <span class="sr-only">Search</span>
    <input 
      class="placeholder:text-gray-400 block w-full border border-gray-300 rounded-sm py-1.5 pr-9 pl-3 
        shadow-sm focus:outline-none focus:border-buttonblue-600 focus:ring-buttonblue-600 focus:ring-1 sm:text-sm" 
      placeholder="Something in this doc ..." 
      type="text" 
      name="search"
    />
  </label>

  <div class="pt-3 pb-2 text-sm text-buttonblue-800">
    Replace with
  </div>

  <label class="relative block">
    <span class="sr-only">Search</span>
    <input 
      class="placeholder:text-gray-400 block w-full border border-gray-300 rounded-sm py-1.5 pr-9 pl-3 
        shadow-sm focus:outline-none focus:border-buttonblue-600 focus:ring-buttonblue-600 focus:ring-1 sm:text-sm" 
      placeholder="Something better" 
      type="text" 
      name="search"
    />
  </label>

  <div class="flex flex-col mt-1.5">
    <Checkbox label="Match case"/>
    <Checkbox label="Regular expression"/>
    <Checkbox label="Ignore latin diacritics"/>
  </div>

  <div class="flex w-full pt-4">
    <div class="flex flex-grow gap-2">
      <Button className="text-sm px-4 py-2 bg-buttonblue-900 hover:bg-buttonblue-900 active:bg-buttonblue-900 hover:opacity-95 active:opacity-90 text-white">Replace</Button>
      <Button className="text-sm px-4 py-[7px] text-buttonblue-900 border border-buttonblue-900">Replace all</Button>
    </div>
    <div class="flex gap-2">
      <Button icon="navigate_before" size="medium" className="h-9 w-9"/>
      <Button icon="navigate_next" size="medium" className="h-9 w-9 -mr-1.5"/>
    </div>
  </div>
</Menu>
