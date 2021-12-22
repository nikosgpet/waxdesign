<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import CaseOption from "$lib/components/Overlay/CaseOptions/CaseOption.svelte";
  import Icon from "$lib/components/Icon.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="py-1 w-40">
  <CaseOption title="Figure"/>
  <CaseOption title="Chart"/>
  <CaseOption title="Map"/>
  <CaseOption title="Equation"/>
  <CaseOption title="Exhibit"/>
  <CaseOption title="Table"/>

  <div class="h-px w-full my-1 bg-bordergray"></div>

  <div class="flex w-full">
    <div class="flex relative w-full items-center h-8 px-2 cursor-pointer select-none hover:bg-buttonblue-100 active:bg-buttonblue-200">
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
        Add type
      </div>

      <div class="relative flex justify-center items-center z-10 h-6 w-6 min-w-[24px]">
        <Icon icon="add"/>
      </div>
    </div>
  </div>
</Menu>
