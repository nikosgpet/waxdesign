<script type="ts">
  export let img = null;
  export let title;
  export let subtitle;

</script>

<div class="flex w-full">
  
  <div class="flex relative w-full items-center h-7 px-2 py-0.5 rounded-[4px] cursor-pointer select-none hover:bg-buttonblue-100 active:bg-buttonblue-200">
  
    <div class="relative z-10 max-w-full overflow-hidden whitespace-nowrap text-ellipsis flex-grow text-left text-sm text-buttonblue-900">
      {title}
    </div>

  </div>
</div>

