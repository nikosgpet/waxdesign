<script type="ts">
  import Button from "$lib/components/Button.svelte";

  export let boundaries;

</script>


<div class="flex justify-end absolute items-center top-0 -right-[62px] select-none rounded bg-white" style="top:{boundaries.y + 34}px">
  <Button 
    icon="custom_comment_add"
    iconClass="mt-2 ml-0.5"
    className="h-8 w-8 rounded-full"
    size="medium"
    tooltip="Add comment"
    tooltipClass="mt-1 bottom-[-30px]"
  >
  </Button>
</div>
