<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import CaseOption from "$lib/components/Overlay/CaseOptions/CaseOption.svelte";
  import FormattingOption from "$lib/components/Overlay/FormattingOptions/FormattingOption.svelte";

  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="py-2 w-40" absoluteClass="top-[170px] right-[218px]">
  <FormattingOption title="Accept All" icon="done"/>
  <FormattingOption title="Reject All" icon="close"/>
</Menu>
