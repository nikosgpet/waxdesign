<script type="ts">
  import TableHeadingTop from "$lib/components/Document/Table/TableHeadingTop.svelte";
  import TableHeadingLeft from "$lib/components/Document/Table/TableHeadingLeft.svelte";
  import TableHeadingTopLeft from "$lib/components/Document/Table/TableHeadingTopLeft.svelte";
  import AddComment from "$lib/components/Overlay/HelperBar/AddComment.svelte";
  import TableHelper from "$lib/components/Overlay/Table/TableHelper.svelte";
  import Button from "$lib/components/Button.svelte";
  import RowOptions from "$lib/components/Overlay/Table/RowOptions.svelte";
  import SideOverlay from "$lib/components/Overlay/Editing/SideOverlay.svelte";


  export let figure;
  export let caption;

  let head = ['City Name', 'Size', 'Population'];
  let body = [
    ['Paris', '105 sq. kilometers', '11.02'], 
    ['London', '1,579 sq. kilometers', '9.3'], 
    ['Madrid', '604 sq. kilometers', '6.62']
  ]
  
  let active = false;
  let tableEl;
  let debug = false;
  let showSideOverlay = false;

  let x = null;
  let y = null;

  $: console.log('x, y', x, y)

  function onMouseEnterX(index) {
    x = index;
  }

  function onMouseLeaveX() {
    x = null;
  }

  function onMouseEnterY(index) {
    y = index;
  }

  function onMouseLeaveY() {
    y = null;
  }

</script>

<svelte:window on:click={() => {active = false}}></svelte:window>

<div 
  class="relative pl-[48px] my-10 mb-5"
  on:mouseenter={() => showSideOverlay = true} 
  on:mouseleave={() => showSideOverlay = false}
>
  <table 
    bind:this={tableEl} 
    on:click|stopPropagation={() => {active = true}}
    class="border-collapse table-fixed w-full border border-buttonblue-500"
  >
    <thead class="">
      <tr class="relative font-medium bg-buttonblue-100">
        {#each head as h, index}
        <th
          class="relative p-2 border text-left
            {y === 0 || x === index || x === -1 ? 'border-buttonblue-800' : 'border-buttonblue-500'}
            {x === index + 1 ? 'border-r-buttonblue-800' : ''}
            {y === 1 ? 'border-b-buttonblue-800' : ''}"
        >
          {#if index === 0}
          <TableHeadingLeft
            table={tableEl}
            {debug}
            visible={active}
            active={y === 0 || y === -1}
            on:mouseenter={(e) => onMouseEnterY(index + e.detail)}
            on:mouseleave={() => {onMouseLeaveY()}}
          />
          <TableHeadingTopLeft 
            table={tableEl} 
            {debug}
            visible={active}
            active={x === -1 || y === -1}
            on:mouseenter={() => {onMouseEnterY(-1); onMouseEnterX(-1)}} 
            on:mouseleave={() => {onMouseLeaveY(); onMouseLeaveX()}}
            on:mouseenterX={() => {onMouseEnterX(0)}} 
            on:mouseleaveX={() => {onMouseLeaveX()}}
            on:mouseenterY={() => {onMouseEnterY(0)}} 
            on:mouseleaveY={() => {onMouseLeaveY()}}
          />
          {/if}
          <TableHeadingTop 
            table={tableEl} 
            {debug} 
            visible={active}
            active={x === index || y === -1}
            on:mouseenter={(e) => onMouseEnterX(index + e.detail)} 
            on:mouseleave={() => {onMouseLeaveX()}}
          />
          <div class="group focus-visible:outline-none" contenteditable>
            {h}
            <Button
              icon="keyboard_arrow_down"
              className="absolute z-10 group w-4 h-4 top-[4px] right-[4px] bg-white border hidden group-focus:flex group-hover:flex
                hover:border-buttonblue-800 hover:bg-buttonblue-800 active:bg-buttonblue-900 hover:border-none"
              iconClass="hover:fill-white"
              containerClass="group-hover:block hover:block"
            >
              <RowOptions slot="overlay" position="tl"/>
            </Button>
          </div>
        </th>
        {/each}
      </tr>
    </thead>
    <tbody class="">
      {#each body as b, index}
      <tr class="">
        {#each b as row, jndex}
        <td 
          class="relative p-2 border 
            {y === index + 1 || x === jndex || y === -1 ? 'border-buttonblue-800' : 'border-buttonblue-500'} 
            {x === jndex + 1 ? 'border-r-buttonblue-800' : ''}
            {y === index + 2 ? 'border-b-buttonblue-800' : ''}"
        >
          {#if jndex === 0}
          <TableHeadingLeft
            table={tableEl}
            {debug}
            visible={active}
            active={y === index + 1 || y === -1}
            on:mouseenter={(e) => onMouseEnterY(1 + index + e.detail)}
            on:mouseleave={() => {onMouseLeaveY()}}
          />
          {/if}
          
          <div class="group focus-visible:outline-none" contenteditable>
            {row}
            <Button
              icon="keyboard_arrow_down"
              className="absolute z-10 group w-4 h-4 top-[4px] right-[4px] bg-white border hidden group-focus:flex group-hover:flex
                hover:border-buttonblue-800 hover:bg-buttonblue-800 active:bg-buttonblue-900 hover:border-none"
              iconClass="hover:fill-white"
              containerClass="group-hover:block hover:block"
            >
              <RowOptions slot="overlay" position="tl"/>
            </Button>
          </div>
        </td>
        {/each}
      </tr>
      {/each}
    </tbody>
  </table>
  <div class="flex text-sm mt-3">
    <div class="font-medium mr-3">
      {figure}
    </div>
    <div class="text-buttonblue-900 focus-visible:outline-none" contenteditable>
      {caption}
    </div>
  </div>

  {#if showSideOverlay && !active}
  <SideOverlay/>
  {/if}

  {#if active}
  <TableHelper/>
  {/if}

  {#if active}
  <AddComment boundaries={{x:0, y:-36}}/>
  {/if}
</div>

