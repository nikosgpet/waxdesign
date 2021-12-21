<script type="ts">
  import Document from "$lib/components/Document/Document.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import Help from '$lib/components/Overlay/Help/Help.svelte';

</script>


<div class="flex flex-col w-full h-full">
  <Navbar/>
  <div class="flex flex-grow w-full overflow-hidden">
    <Sidebar/>
    <Document/>
  </div>

  <Help/>
</div>
