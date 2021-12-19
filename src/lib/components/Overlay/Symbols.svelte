<script type="ts">
	import Button from '$lib/components/Button.svelte';
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import Icon from "$lib/components/Icon.svelte";
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";

  const symbols = [
    ["Greek alphabet", "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ"],
    ["Smileys", "⌚⌛⏰⏱⏲⏳☔☕☝⚡⚽⚾⛄⛅⛈⛑⛓⛔⛩⛪⛰⛱⛲⛳⛴⛵⛹⛺⛽✊✋✌✍✨⭐⚓"],
    ["Symbols", "♔♕♖♗♘♙♚♛♜♝♞♟♠♡♢♣♤♥♦♧♨♩♪♫♬♭♮♯♰♱♲♳♴♵♶♷♸♹♺♻♼♽⚀⚁⚂⚃⚄⚅⚆⚇⚈⚉⚊⚋⚌⚍⚎⚏⚐⚑⚒⚔⚕⚖⚗⚘⚙⚚⚛⚜⚠⚢⚣⚤⚥⚦⚧⚨⚩"]
  ];

  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="py-3 w-[340px] h-80">
  <label class="px-2 relative block">
    <span class="sr-only">Search</span>
    <span class="absolute inset-y-0 right-0 flex items-center pr-2">
      <Icon icon="search"/>
    </span>
    <input 
      class="placeholder:italic placeholder:text-gray-400 block w-full border border-gray-300 rounded-sm py-1.5 pr-9 pl-3 
        shadow-sm focus:outline-none focus:border-buttonblue-600 focus:ring-buttonblue-600 focus:ring-1 sm:text-sm" 
      placeholder="Search for symbol..." 
      type="text" 
      name="search"
    />
  </label>
  
  <div class="scrollbar pl-2 h-64 overflow-y-auto">
    {#each symbols as symbol}
    <SidebarHeading title={symbol[0]} className="pl-0"/>
    <div class="grid grid-cols-11">
      {#each symbol[1].split("") as char}
      <Button>
        <div class="flex justify-center items-center">
          {char}
        </div>
      </Button>
      {/each}
    </div>
    {/each}
  </div>
</Menu>

