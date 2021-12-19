<script type="ts">
  import SidebarHistoryItem from "$lib/components/Sidebar/History/SidebarHistoryItem.svelte";
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";

</script>


<div class="scrollbar w-44 flex flex-col h-full overflow-y-auto border-r border-r-bordergray gap-0.5">
  <SidebarHeading title="Yesterday" className="mx-1.5"/>
  <SidebarHistoryItem title="August 4, 7:01 PM" subtitle="Adam Hyde"/>
  <SidebarHistoryItem title="August 4, 10:47 PM" subtitle="Christos Kokosias"/>
  
  <SidebarHeading title="Monday" className="mx-1.5"/>
  <SidebarHistoryItem title="August 3, 10:47 AM" subtitle="Yannis Barlas"/>
  
  <SidebarHeading title="Saturday" className="mx-1.5"/>
  <SidebarHistoryItem title="August 1, 10:31 PM" subtitle="Nikos Peteinatos"/>

  <SidebarHeading title="July" className="mx-1.5"/>
  <SidebarHistoryItem title="July 19, 11:00 AM" subtitle="Alexander Johnson"/>
  <SidebarHistoryItem title="July 19, 10:36 AM" subtitle="Robert Hanson"/>
</div>
