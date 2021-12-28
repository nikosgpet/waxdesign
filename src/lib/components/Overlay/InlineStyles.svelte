<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import SidebarButton from "$lib/components/Sidebar/Headings/SidebarButton.svelte";
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="px-1.5 pb-2 w-56 h-80">
  <SidebarHeading title="Inline"/>
  <SidebarButton deactivateTooltip={true} title="Bold" icon="format_bold"/>
  <SidebarButton deactivateTooltip={true} title="Italic" icon="format_italic"/>
  <SidebarButton deactivateTooltip={true} title="Underline" icon="format_underlined"/>
  <SidebarButton deactivateTooltip={true} title="Strikethrough" icon="strikethrough_s"/>
  <SidebarButton deactivateTooltip={true} title="Superscript" icon="superscript"/>
  <SidebarButton deactivateTooltip={true} title="Subscript" icon="subscript"/>
  <SidebarButton deactivateTooltip={true} title="Inline quote" icon="format_quote"/>
  <SidebarButton deactivateTooltip={true} title="Inline code" icon="code"/>

  <SidebarHeading title="Inline mentions"/>
  <SidebarButton deactivateTooltip={true} title="Mention an image" icon="image"/>
  <SidebarButton deactivateTooltip={true} title="Mention a table" icon="border_all"/>
  <SidebarButton deactivateTooltip={true} title="Mention a footnote" icon=""/>
  <SidebarButton deactivateTooltip={true} title="Mention a page" icon=""/>
  <SidebarButton deactivateTooltip={true} title="Scientific reference" icon=""/>
</Menu>

