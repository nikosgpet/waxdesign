<script type="ts">
  import Button from "$lib/components/Button.svelte";
  import HelpOptions from "$lib/components/Overlay/Help/HelpOptions.svelte";
  import CounterOptions from "$lib/components/Overlay/Help/CounterOptions.svelte";
  import { currentNumber, currentTitle } from "$lib/stores/counter"

</script>


<div class="flex justify-end absolute items-center bottom-0 right-0 select-none w-[264px] h-11 mr-2 gap-2 rounded bg-white bg-opacity-95 pr-2">

  <Button 
    icon="keyboard_arrow_up"
    className="w-full h-8 px-2"
    overlayPosition="top"
    tooltip="View counters &| saved status"
    tooltipClass="mt-1 bottom-[44px]"
  >
    <div class="flex-grow text-sm font-normal pt-0.5 text-buttonblue-800 text-right">
      <span class="font-medium">{$currentNumber}</span> {$currentTitle}
    </div>
    <CounterOptions slot="overlay" position="br"/>
  </Button>
  <Button
    icon="keyboard"
    className="w-8 h-8"
    size="medium"
    overlayPosition="top"
    tooltip="Keyboard shortcuts"
    tooltipClass="mt-1 bottom-[44px]"
  >
  
  </Button>
  <Button 
    icon="help_outline"
    className="w-8 h-8"
    size="medium"
    overlayPosition="top"
    tooltip="Help & feedback"
    tooltipClass="mt-1 right-0 bottom-[44px]"
  >
    <HelpOptions slot="overlay" position="br"/>
  </Button>
</div>
