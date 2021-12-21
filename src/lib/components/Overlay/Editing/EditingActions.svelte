<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import FormattingOption from "$lib/components/Overlay/FormattingOptions/FormattingOption.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="py-2 w-40" absoluteClass="">
  <FormattingOption icon="content_copy" title="Duplicate"/>
  <FormattingOption icon="delete_outline" title="Delete"/>
  <FormattingOption icon="chat_bubble_outline" title="Comment"/>
</Menu>
