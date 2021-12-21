<script type="ts">
  import Button from "$lib/components/Button.svelte";
  import CommentsOptions from '$lib/components/Overlay/Comments/CommentsOptions.svelte';

</script>


<div class="flex absolute items-center top-9 right-0 select-none w-[264px] h-11 mr-2 gap-1 rounded bg-white bg-opacity-95">
  <div class="flex-grow text-[11px] uppercase font-normal pt-0.5 text-buttonblue-800 text-right mr-2">
    58 Comments & Suggestions
  </div>
  <Button 
    icon="keyboard_arrow_up"
    tooltip="Previous Comment| & Suggestion"
    tooltipClass="mt-1"
  />
  <Button 
    icon="keyboard_arrow_down"
    tooltip="Next Comment| & Suggestion"
    tooltipClass="mt-1 right-0"
  />
  <Button 
    icon="more_horiz"
    tooltip="Comments &| Suggestions| options"
    tooltipClass="mt-1 right-0"
  >
    <CommentsOptions slot="overlay" position="tr"/>
  </Button>
</div>
