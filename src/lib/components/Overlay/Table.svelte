<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import { writable } from "svelte/store";

  export let position = ''; //tl, tr, bl, br
  

  let rows = writable(5);
  let columns = writable(5);

  let cRows = 1;
  let cColumns = 1;

  function setMinMax(x) {
    return x >= 20 ? 20 : 
      x <= 4 ? 5 : 
      x + 1;
  }

  function setCurrent(row, column) {
    return () => {
      cRows = row;
      cColumns = column;
      $rows = setMinMax(row);
      $columns = setMinMax(column);
      console.log('rows, columns', $rows, $columns);
    }
  }

  function quantify(x) {
    return Array.from(Array(x).keys()).map(i => i+1);
  }
</script>


<Menu {position} className="p-2">
  <div class="flex">
  {#each quantify($rows) as row}
    <div class="">
    {#each quantify($columns) as column}
      <div class="p-px">
        <div 
          on:mouseenter={setCurrent(row, column)}
          class="h-4 w-4 rounded-sm border {row <= cRows && column <= cColumns ? 'bg-buttonblue-300 border-buttonblue-300' : 'border-bordergray'}"
        >
        </div>
      </div>
    {/each}
    </div>
  {/each}
  </div>
  <div class="w-full text-center text-xs pt-1.5 text-buttonblue-900">
    {cRows} x {cColumns}
  </div>
</Menu>
