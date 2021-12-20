<script type="ts">
  import searchOverlay from '$lib/stores/searchOverlay';
  import SearchExtended from '$lib/components/Overlay/Search/SearchExtended.svelte';
  import SearchSimple from '$lib/components/Overlay/Search/SearchSimple.svelte';

$: console.log('searchOverlay', $searchOverlay)
</script>


{#if $searchOverlay === 'simple'}
  <SearchSimple/>
{:else if $searchOverlay === 'extended'}
  <SearchExtended/>
{/if}
