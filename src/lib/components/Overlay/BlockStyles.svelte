<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import SidebarButton from "$lib/components/Sidebar/Headings/SidebarButton.svelte";
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="px-1.5 pb-2 w-56 h-80">
  <SidebarHeading title="Basic blocks"/>
  <SidebarButton deactivateTooltip={true} title="Text" active={true}/>
  <SidebarButton deactivateTooltip={true} title="Heading 1"/>
  <SidebarButton deactivateTooltip={true} title="Title" sub='middle'/>
  <SidebarButton deactivateTooltip={true} title="Section Heading" sub='last'/>
  <SidebarButton deactivateTooltip={true} title="Heading 2"/>
  <SidebarButton deactivateTooltip={true} title="Heading 3"/>
  <SidebarButton deactivateTooltip={true} title="Heading 4"/>
  <SidebarButton deactivateTooltip={true} title="Heading 5"/>
  <SidebarButton deactivateTooltip={true} title="Heading 6"/>
  <SidebarButton deactivateTooltip={true} title="Bulleted list"/>
  <SidebarButton deactivateTooltip={true} title="Numbered list"/>
  <SidebarButton deactivateTooltip={true} title="Quote"/>

  <SidebarHeading title="Figures"/>
  <SidebarButton deactivateTooltip={true} title="Image"/>
  <SidebarButton deactivateTooltip={true} title="Table"/>
  <SidebarButton deactivateTooltip={true} title="Code"/>
  <SidebarButton deactivateTooltip={true} title="Divider"/>
  
  <SidebarHeading title="Advanced blocks"/>
  <SidebarButton deactivateTooltip={true} title="Table of contents"/>
  <SidebarButton deactivateTooltip={true} title="Math equation"/>
</Menu>

