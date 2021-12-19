<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import SidebarButton from "$lib/components/Sidebar/Headings/SidebarButton.svelte";
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="px-1.5 pb-2 w-56 h-80">
  <SidebarHeading title="Inline"/>
  <SidebarButton deactivateTooltip={true} title="Bold"/>
  <SidebarButton deactivateTooltip={true} title="Italic"/>
  <SidebarButton deactivateTooltip={true} title="Underline"/>
  <SidebarButton deactivateTooltip={true} title="Strikethrough"/>
  <SidebarButton deactivateTooltip={true} title="Superscript"/>
  <SidebarButton deactivateTooltip={true} title="Subscript"/>
  <SidebarButton deactivateTooltip={true} title="Smallcaps"/>
  <SidebarButton deactivateTooltip={true} title="Inline quote"/>
  <SidebarButton deactivateTooltip={true} title="Inline code"/>

  <SidebarHeading title="Inline mentions"/>
  <SidebarButton deactivateTooltip={true} title="Mention an image"/>
  <SidebarButton deactivateTooltip={true} title="Mention a table"/>
  <SidebarButton deactivateTooltip={true} title="Mention a footnote"/>
  <SidebarButton deactivateTooltip={true} title="Mention a page"/>
  <SidebarButton deactivateTooltip={true} title="Scientific reference"/>
</Menu>

