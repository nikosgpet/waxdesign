<script type="ts">
  import SidebarFigure from "$lib/components/Sidebar/Figures/SidebarFigure.svelte";
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";

</script>


<div class="scrollbar w-44 flex flex-col h-full overflow-y-auto border-r border-r-bordergray gap-0.5">
  <SidebarHeading title="Figures" className="mx-1.5"/>
  <SidebarFigure img="/chart.png" title="Chart 1" subtitle="2018: Regplot showing how Life Ladder (Happiness) is positively correlated with Log GDP per capita (Money)"/>
  <SidebarFigure img="/img2.jpg" title="Image 1" subtitle="Tom Shearer for HBR"/>
  <SidebarFigure img="/img3.jpg" title="Image 2" subtitle="Tom Shearer for HBR"/>
  
  <SidebarHeading title="Tables" className="mx-1.5"/>
  <SidebarFigure title="Table 1" subtitle="Average GDP per capita by continent in 2011 USD Dollars clearly led by Australia and New Zealand"/>
  <SidebarFigure title="Table 2" subtitle="Eliminate-Reduce-Raise-Create Grid: The Case of Cirque du Soleil"/>
  
  <SidebarHeading title="Citations" className="mx-1.5"/>
  <SidebarFigure title="A census of human transcription factors: function, expression and evolution" subtitle="M. P. Kyriakoudis, J. P. Morin, K. L. Morris"/>
</div>
