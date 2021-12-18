<script type="ts">
  import Document from "$lib/components/Document/Document.svelte";
import Navbar from "$lib/components/Navbar.svelte";
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";

</script>

<div class="flex flex-col w-full h-full">
  <Navbar/>
  <div class="flex h-full w-full">
    <Sidebar/>
    <Document/>
  </div>
</div>
