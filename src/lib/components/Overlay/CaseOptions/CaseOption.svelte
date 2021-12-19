<script type="ts">
  import Icon from '$lib/components/Icon.svelte';


  export let title: string;
  export let subtitle: string | null = null;
  export let icon: string | null = null;
</script>

<div class="flex w-full">
  
  <div class="flex relative w-full items-center h-7 px-2 cursor-pointer select-none hover:bg-buttonblue-100 active:bg-buttonblue-200">

    <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
      {title}
    </div>

  </div>
</div>

