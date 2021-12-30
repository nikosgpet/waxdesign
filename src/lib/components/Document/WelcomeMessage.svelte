<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import Overlay from "$lib/components/Overlay/Overlay.svelte";
  import Button from "$lib/components/Button.svelte";


  export let position = ''; // tl, tr, bl, br
  let showOverlay = true;

</script>


<Overlay
  {showOverlay}
  on:close={() => showOverlay = false}
  className="bg-black bg-opacity-60 z-50"
>
  <Menu
    {position}
    absoluteClass="right-0 left-0 top-0 bottom-0 flex items-center justify-center z-[60]"
    className="px-4 py-6 w-[560px] text-textblue"
  >
    <div class="text-center text-2xl font-medium">
      Welcome!
    </div>
    <div class="text-center text-lg pt-4 px-10">
      This is an interactive UI prototype for a <span class="font-medium">text editor</span>. 

      It was created as inspiration for open source text editors, most notably the 
      <a class="text-blue-700" href="https://waxjs.net/features/" target="_blank">Wax text editor</a>.
    </div>
    
    <div class="text-center text-lg pt-4 px-10">
      Since this is a prototype, not a working editor, most buttons offer very limited functionality.
    </div>

    <Button className="h-9 w-48 mx-auto mt-6 uppercase border border-buttonblue-800" on:click={() => showOverlay = false}>
      Explore
    </Button>
    <Button 
      className="absolute top-0 right-6 h-6 w-6 mx-auto mt-6 uppercase border border-buttonblue-800 rounded-full"
      on:click={() => showOverlay = false}
      icon="close"
    />
  </Menu>
</Overlay>
