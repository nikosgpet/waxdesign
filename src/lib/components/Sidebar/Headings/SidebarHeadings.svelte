<script type="ts">
  import SidebarButton from "$lib/components/Sidebar/Headings/SidebarButton.svelte";
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";

</script>

<div class="scrollbar w-44 px-1.5 pb-4 flex flex-col h-full overflow-y-auto border-r border-r-bordergray gap-0.5">
  <SidebarHeading title="Basic blocks"/>
  <SidebarButton title="Text" active={true} icon="text_fields"/>
  <SidebarButton title="Heading 1" icon="custom_heading1"/>
  <SidebarButton title="Title" sub='middle'/>
  <SidebarButton title="Section Heading" sub='last'/>
  <SidebarButton title="Heading 2" icon="custom_heading2"/>
  <SidebarButton title="Heading 3" icon="custom_heading3"/>
  <SidebarButton title="Heading 4" icon="custom_heading4"/>
  <SidebarButton title="Heading 5" icon="custom_heading5"/>
  <SidebarButton title="Heading 6" icon="custom_heading6"/>
  <SidebarButton title="Bulleted list" icon="format_list_bulleted"/>
  <SidebarButton title="Numbered list" icon="format_list_numbered"/>
  <SidebarButton title="Quote" icon="format_quote"/>
  
  <SidebarHeading title="Inline"/>
  <SidebarButton title="Bold" icon="format_bold"/>
  <SidebarButton title="Italic" icon="format_italic"/>
  <SidebarButton title="Emphasis" sub='last'/>
  <SidebarButton title="Underline" icon="format_underlined"/>
  <SidebarButton title="Strikethrough" icon="strikethrough_s"/>
  <SidebarButton title="Superscript" icon="superscript"/>
  <SidebarButton title="Subscript" icon="subscript"/>
  <SidebarButton title="Smallcaps" icon="text_fields"/>
  <SidebarButton title="Inline quote" icon="format_quote"/>
  <SidebarButton title="Inline code" icon="code"/>

  <SidebarHeading title="Figures"/>
  <SidebarButton title="Image" icon="image"/>
  <SidebarButton title="Table" icon="border_all"/>
  <SidebarButton title="Code" icon="code"/>
  <SidebarButton title="Divider" icon="horizontal_rule"/>
  
  <SidebarHeading title="Advanced blocks"/>
  <SidebarButton title="Table of contents" icon="toc"/>
  <SidebarButton title="Math equation" icon="functions"/>
</div>

