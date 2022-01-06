<script type="ts">
  import { currentNumber, currentTitle } from "$lib/stores/counter"

  export let title: string = '';
  export let number: string = '';
</script>

<div class="flex w-full" on:click={() => {$currentNumber = number; $currentTitle = title}}>
  <div class="flex relative w-full items-center h-7 px-2 cursor-pointer select-none hover:bg-buttonblue-100 active:bg-buttonblue-200">
    <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 pr-3 max-w-full truncate">
      <span class="font-medium">{number}</span> {title}
    </div>
  </div>
</div>

