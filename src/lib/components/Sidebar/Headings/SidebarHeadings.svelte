<script type="ts">
  import SidebarButton from "$lib/components/Sidebar/Headings/SidebarButton.svelte";
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";

</script>

<div class="scrollbar w-44 px-1.5 flex flex-col h-full overflow-y-auto border-r border-r-bordergray gap-0.5">
  <SidebarHeading title="Basic blocks"/>
  <SidebarButton title="Text" active={true}/>
  <SidebarButton title="Heading 1"/>
  <SidebarButton title="Title" sub='middle'/>
  <SidebarButton title="Section Heading" sub='last'/>
  <SidebarButton title="Heading 2"/>
  <SidebarButton title="Heading 3"/>
  <SidebarButton title="Heading 4"/>
  <SidebarButton title="Heading 5"/>
  <SidebarButton title="Heading 6"/>
  <SidebarButton title="Bulleted list"/>
  <SidebarButton title="Numbered list"/>
  <SidebarButton title="Quote"/>
  
  <SidebarHeading title="Inline"/>
  <SidebarButton title="Bold"/>
  <SidebarButton title="Italic"/>
  <SidebarButton title="Underline"/>
  <SidebarButton title="Strikethrough"/>
  <SidebarButton title="Superscript"/>
  <SidebarButton title="Subscript"/>
  <SidebarButton title="Smallcaps"/>
  <SidebarButton title="Inline quote"/>
  <SidebarButton title="Inline code"/>

  <SidebarHeading title="Figures"/>
  <SidebarButton title="Image"/>
  <SidebarButton title="Table"/>
  <SidebarButton title="Code"/>
  <SidebarButton title="Divider"/>
  
  <SidebarHeading title="Advanced blocks"/>
  <SidebarButton title="Table of contents"/>
  <SidebarButton title="Math equation"/>
</div>

