<script type="ts">
  import searchOverlay from '$lib/stores/searchOverlay';
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import Button from "$lib/components/Button.svelte";

</script>


<Menu className="p-2" absoluteClass="right-3 top-[46px]" shadow='lg'>



  <div class="flex items-center gap-1">
    <label class="relative block">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-xs text-buttonblue-600">
         1 of 6
      </span>
      <input 
        class="w-52 placeholder:text-gray-400 block border border-gray-300 rounded-sm py-1.5 pr-9 pl-3 
          shadow-sm focus:outline-none focus:border-buttonblue-600 focus:ring-buttonblue-600 focus:ring-1 sm:text-sm" 
        placeholder="Search ..." 
        type="text" 
        name="search"
      />
    </label>

    <Button 
      icon="navigate_before" 
      size="medium" 
      className="h-9 w-9"
    />
    <Button 
      icon="navigate_next" 
      size="medium" 
      className="h-9 w-9"
    />
    <Button 
      icon="more_horiz" 
      size="medium" 
      className="h-9 w-9"
      on:click={() => searchOverlay.openExtended()}
    />
    <Button 
      icon="close" 
      size="medium" 
      className="h-9 w-9"
      on:click={() => searchOverlay.close()}
    />
  </div>
</Menu>
