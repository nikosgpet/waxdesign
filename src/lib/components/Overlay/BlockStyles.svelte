<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import SidebarButton from "$lib/components/Sidebar/Headings/SidebarButton.svelte";
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="px-1.5 pb-2 w-56 h-80">
  <SidebarHeading title="Basic blocks"/>
  <SidebarButton deactivateTooltip={true} title="Text" active={true} icon="text_fields"/>
  <SidebarButton deactivateTooltip={true} title="Heading 1" icon="custom_heading1"/>
  <SidebarButton deactivateTooltip={true} title="Title" sub='middle'/>
  <SidebarButton deactivateTooltip={true} title="Section Heading" sub='last'/>
  <SidebarButton deactivateTooltip={true} title="Heading 2" icon="custom_heading2"/>
  <SidebarButton deactivateTooltip={true} title="Heading 3" icon="custom_heading3"/>
  <SidebarButton deactivateTooltip={true} title="Heading 4" icon="custom_heading4"/>
  <SidebarButton deactivateTooltip={true} title="Heading 5" icon="custom_heading5"/>
  <SidebarButton deactivateTooltip={true} title="Heading 6" icon="custom_heading6"/>
  <SidebarButton deactivateTooltip={true} title="Bulleted list" icon="format_list_bulleted"/>
  <SidebarButton deactivateTooltip={true} title="Numbered list" icon="format_list_numbered"/>
  <SidebarButton deactivateTooltip={true} title="Quote" icon="format_quote"/>

  <SidebarHeading title="Figures"/>
  <SidebarButton deactivateTooltip={true} title="Image" icon="image"/>
  <SidebarButton deactivateTooltip={true} title="Table" icon="border_all"/>
  <SidebarButton deactivateTooltip={true} title="Code" icon="code"/>
  <SidebarButton deactivateTooltip={true} title="Divider" icon="horizontal_rule"/>
  
  <SidebarHeading title="Advanced blocks"/>
  <SidebarButton deactivateTooltip={true} title="Table of contents" icon="toc"/>
  <SidebarButton deactivateTooltip={true} title="Math equation" icon="functions"/>
</Menu>

