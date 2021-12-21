<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import CaseOption from "$lib/components/Overlay/CaseOptions/CaseOption.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="py-2 w-40" absoluteClass="bottom-[38px] right-[7px]">
  <CaseOption title="About Coko"/>
  <CaseOption title="About Editoria"/>
  <CaseOption title="About Wax"/>

  <div class="h-px w-full bg-bordergray my-2 ml-3"></div>


  <CaseOption title="What's New"/>
  <CaseOption title="Tips & Tricks"/>

  <div class="h-px w-full bg-bordergray my-2 ml-3"></div>

  <CaseOption title="Feedback"/>
  <CaseOption title="Chat"/>
</Menu>
