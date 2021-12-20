<script type="ts">
  import Icon from "$lib/components/Icon.svelte";

  export let active = false;
  export let icon = '';
  export let title = '';

</script>


<div class="flex w-full px-1.5">
  <div class="flex relative w-full items-center h-8 px-1 cursor-pointer rounded select-none {active ? 'bg-buttonblue-200 hover:bg-buttonblue-200' : 'hover:bg-buttonblue-100 active:bg-buttonblue-200'}">
    <div class="relative flex justify-center items-center z-10 h-6 w-6 min-w-[24px] mt-1">
      <Icon {icon} iconClass="w-[22px]"/>
    </div>
    
    <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
      {title}
    </div>
  </div>
</div>
