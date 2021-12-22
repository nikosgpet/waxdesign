<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import CaseOption from "$lib/components/Overlay/CaseOptions/CaseOption.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="py-2 w-40 font-normal" absoluteClass="top-[18px] right-[4px]">
  <CaseOption title="Cell background"/>
  <CaseOption title="Insert column"/>
  <CaseOption title="Insert row"/>
  <CaseOption title="Remove column"/>
  <CaseOption title="Remove row"/>
  <CaseOption title="Merge cells"/>
  <CaseOption title="Split cells"/>
  <CaseOption title="Clear cell"/>
</Menu>
