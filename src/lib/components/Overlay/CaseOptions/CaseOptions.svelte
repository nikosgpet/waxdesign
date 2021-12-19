<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import CaseOption from "$lib/components/Overlay/CaseOptions/CaseOption.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="py-2 w-40">
  <CaseOption title="Uppercase"/>
  <CaseOption title="Lowercase"/>
  <CaseOption title="Sentence case"/>
  <CaseOption title="Title case"/>
</Menu>
