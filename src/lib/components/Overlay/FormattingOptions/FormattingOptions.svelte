<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import FormattingOption from "$lib/components/Overlay/FormattingOptions/FormattingOption.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="py-2 w-56">
  <FormattingOption title="Underline" icon="format_underlined" subtitle="⌘+U"/>
  <FormattingOption title="Strikethrough" icon="strikethrough_s" subtitle="⌘+⇧+S"/>
  <FormattingOption title="Subscript" icon="subscript"/>
  <FormattingOption title="Superscript" icon="superscript"/>
  <FormattingOption title="Smallcaps" icon="text_fields"/>
</Menu>
