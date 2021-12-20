<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import CaseOption from "$lib/components/Overlay/CaseOptions/CaseOption.svelte";

  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="py-2 w-40" absoluteClass="top-[100px] right-3">
  <CaseOption title="Arabic"/>
  <CaseOption title="Dutch"/>
  <CaseOption title="English"/>
  <CaseOption title="French"/>
  <CaseOption title="German"/>
  <CaseOption title="Greek"/>
  <CaseOption title="Italian"/>
  <CaseOption title="Portuguese"/>
  <CaseOption title="Romanian"/>
  <CaseOption title="Russian"/>
  <CaseOption title="Spanish"/>
  <CaseOption title="Ukrainian"/>
</Menu>
