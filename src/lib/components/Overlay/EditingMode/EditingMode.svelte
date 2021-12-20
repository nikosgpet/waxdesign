<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import EditingModeLine from "$lib/components/Overlay/EditingMode/EditingModeLine.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} absoluteClass="right-[49px]" className="py-2 w-40">
  <EditingModeLine title="Editing" icon="edit"/>
  <EditingModeLine title="Suggesting" icon="rate_review"/>
  <EditingModeLine title="Viewing" icon="visibility"/>
</Menu>
