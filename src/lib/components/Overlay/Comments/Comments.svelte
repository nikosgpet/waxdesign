<script type="ts">
  import Button from "$lib/components/Button.svelte";
  import CommentsOptions from '$lib/components/Overlay/Comments/CommentsOptions.svelte';

</script>


<div class="flex flex-col absolute z-10 items-center top-9 right-0 select-none w-[264px] mr-2 rounded ">
  <div class="h-[10px] w-full bg-white bg-opacity-[93%]"></div>
  <div class="flex gap-1 items-center w-full bg-white bg-opacity-[93%]">
    <div class="flex-grow text-[11px] uppercase font-normal text-buttonblue-800 text-right mr-2">
      4 Comments &nbsp; 3 Suggestions
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
  <div class="h-[10px] w-full bg-gradient-to-b from-[rgba(255,255,255,93)]"></div>
</div>
