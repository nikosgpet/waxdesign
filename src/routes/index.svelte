<script type="ts">
  import Document from "$lib/components/Document/Document.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import Help from '$lib/components/Overlay/Help/Help.svelte';
  import Footnotes from "$lib/components/Footnotes/Footnotes.svelte";

</script>


<div class="flex flex-col w-full h-full">
  <Navbar/>
  <div class="flex flex-grow w-full overflow-hidden">
    <Sidebar/>
    <div class="flex flex-col flex-grow ml-[-224px] w-full overflow-hidden">
      <Document/>
      <Footnotes/>
    </div>
  </div>

  <Help/>
</div>
