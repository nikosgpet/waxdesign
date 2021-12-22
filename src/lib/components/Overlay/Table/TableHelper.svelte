<script type="ts">
	import Divider from '$lib/components/Divider.svelte';
  import Button from "$lib/components/Button.svelte";
  import Icon from '$lib/components/Icon.svelte';
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import Styles from '$lib/components/Overlay/Image/Styles.svelte';
  import TableOptions from '$lib/components/Overlay/Table/TableOptions.svelte';


</script>


<Menu absoluteClass="z-50 top-[-78px] right-[-2px]" className="menu-shadow-xl" enableOverflow={true} shadow="">
  <div class="flex row relative items-center h-[30px] w-full px-2">
    <div class="flex flex-grow h-9 items-center">
      <Button 
        className="h-[30px] pr-0.5 rounded-none"
        tooltip="Choose table style" 
        tooltipClass="mt-1"
      >
        <div class="pl-2 pr-4 inline-block text-sm text-buttonblue-800 font-medium">Style</div> 
        <Icon icon="arrow_drop_down"/> 
        <Styles slot="overlay" position="tl"/>
      </Button>

      <Divider className="h-[30px] ml-0 mr-1"/>

      <Button 
        className="h-[30px] w-6 rounded-none"
        icon="delete"
        tooltip="Delete table" 
        tooltipClass="mt-1"
      />
      <Button 
        className="h-[30px] w-6 rounded-none"
        icon="more_horiz"
        tooltip="More image options" 
        tooltipClass="mt-1"
      >
        <TableOptions slot="overlay" position="tr"/>
      </Button>
    </div>
  </div>
</Menu>

