<script type="ts">
  import Button from "$lib/components/Button.svelte";
  import EditingActions from "$lib/components/Overlay/Editing/EditingActions.svelte";
  import BlockStyles from "../BlockStyles.svelte";

  export let className = '';

</script>


<div class="flex justify-end absolute items-center top-0 left-0 select-none rounded bg-white {className}">
 
  <Button
    icon="add"
    iconClass="fill-[#c3c2c0] !w-[20px]"
    className="w-6 h-6"
    size="medium"
    tooltip="Add block"
    tooltipClass="mt-1 bottom-[30px]"
  >
    <BlockStyles slot="overlay" position="tl"/>
  </Button>
  <Button 
    icon="drag_indicator"
    iconClass="fill-[#c3c2c0] !w-[20px] -mx-1"
    className="w-[18px] h-6 text-buttonblue-600 cursor-grab"
    size="medium"
    tooltip="Drag to move|Click to edit"
    tooltipClass="mt-1 bottom-[30px]"
  >
    <EditingActions slot="overlay" position="tl"/>
  </Button>
</div>
