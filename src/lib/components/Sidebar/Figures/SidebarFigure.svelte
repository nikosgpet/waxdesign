<script type="ts">
  export let img = null;
  export let title;
  export let subtitle;

</script>


<div class="flex w-full">
  <div class="relative w-full px-[14px] py-1.5 cursor-pointer select-none hover:bg-buttonblue-100 active:bg-buttonblue-200">
    {#if img}
    <div>
      <img class="mb-2 border border-buttonblue-600" src={img} alt="">
    </div>
    {/if}

    <div class="relative z-10 mb-1 max-w-full truncate flex-grow text-left text-xs font-medium text-buttonblue-900">
      {title}
    </div>
    <div class="relative z-10 max-w-full truncate flex-grow text-left text-xs text-buttonblue-800">
      {subtitle}
    </div>
  </div>
</div>
