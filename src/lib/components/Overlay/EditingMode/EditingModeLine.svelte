<script type="ts">
  import Icon from '$lib/components/Icon.svelte';


  export let title: string;
  export let icon: string | null = null;
</script>


<div class="flex w-full">
  <div class="flex relative w-full items-center h-8 px-2 cursor-pointer select-none hover:bg-buttonblue-100 active:bg-buttonblue-200">
    {#if icon}
      <div class="relative flex justify-center items-center z-10 h-6 w-6 min-w-[24px] mr-1">
        <Icon icon={icon} size="medium"/>
      </div>
    {/if}

    <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full truncate">
      {title}
    </div>
  </div>
</div>
