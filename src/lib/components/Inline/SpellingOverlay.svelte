<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import CaseOption from "$lib/components/Overlay/CaseOptions/CaseOption.svelte";

  export let message;
  export let corrections = [];
</script>


<Menu 
  absoluteClass="top-[30px] w-[178px] left-[-15px]" 
  className="drop-shadow-md py-2" 
  enableOverflow={true} 
  shadow=""
  on:mouseenter
  on:mouseleave
>
  <div class="px-[14px] pb-1 text-xs  text-buttonblue-800">{message}</div>
  {#each corrections as correction}
  <CaseOption title={correction}/>
  {/each}
</Menu>

