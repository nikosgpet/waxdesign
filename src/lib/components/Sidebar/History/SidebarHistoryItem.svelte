<script type="ts">
  export let img = null;
  export let title;
  export let subtitle;

</script>


<div class="flex w-full">
  <div class="relative w-full px-[14px] py-1.5 cursor-pointer select-none hover:bg-buttonblue-100 active:bg-buttonblue-200">
    <div class="relative z-10 mb-1 max-w-full overflow-hidden whitespace-nowrap text-ellipsis flex-grow text-left text-xs font-medium text-buttonblue-900">
      {title}
    </div>
    <div class="flex items-center">
      <div class="rounded-full w-2 h-2 bg-[#9c9c9c] mr-2"></div>
      <div class="relative z-10 max-w-full overflow-hidden whitespace-nowrap text-ellipsis flex-grow text-left text-xs text-buttonblue-800">
        {subtitle}
      </div>
    </div>
  </div>
</div>
