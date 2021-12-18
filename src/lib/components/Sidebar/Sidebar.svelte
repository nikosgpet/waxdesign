<script type="ts">
  import Button from "$lib/components/Button.svelte";
  import SidebarHeadings from "$lib/components/Sidebar/Headings/SidebarHeadings.svelte";
  import SidebarStructure from "$lib/components/Sidebar/Structure/SidebarStructure.svelte";
  import SidebarFigures from "$lib/components/Sidebar/Figures/SidebarFigures.svelte";

  enum Sidebars {
    None,
    Headings,
    Structure,
    Figures,
    History,
  }

  let currentSidebar = Sidebars.Headings;
  function onClick(sidebar) {
    return () => {
      currentSidebar = (sidebar === currentSidebar) ? Sidebars.None : sidebar;
    }
  }
</script>

<div class="flex relative h-full bg-white">
  <div class="flex flex-col items-center w-12 h-full border-r border-r-bordergray gap-3 py-3">
    <Button 
      on:click={onClick(Sidebars.Headings)} 
      active={(currentSidebar === Sidebars.Headings)} 
      className="h-9 w-9" 
      size="big" 
      icon="text_fields"
    />
    <Button 
      on:click={onClick(Sidebars.Structure)} 
      active={(currentSidebar === Sidebars.Structure)} 
      className="h-9 w-9" 
      size="big" 
      icon="description"
    />
    <Button 
      on:click={onClick(Sidebars.Figures)} 
      active={(currentSidebar === Sidebars.Figures)} 
      className="h-9 w-9" 
      size="big" 
      icon="post_add"
    />
    <Button 
      className="h-9 w-9" 
      size="big" 
      icon="history"
    />
  </div>
  {#if currentSidebar === Sidebars.Headings}
  <SidebarHeadings/>
  {/if}
  {#if currentSidebar === Sidebars.Structure}
  <SidebarStructure/>
  {/if}
  {#if currentSidebar === Sidebars.Figures}
  <SidebarFigures/>
  {/if}
  {#if currentSidebar === Sidebars.None}
  <div class="w-44 border-r border-r-white"></div>
  {/if}
</div>
