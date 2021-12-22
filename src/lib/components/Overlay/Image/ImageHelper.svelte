<script type="ts">
	import Divider from '$lib/components/Divider.svelte';
  import Button from "$lib/components/Button.svelte";
  import Icon from '$lib/components/Icon.svelte';
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import Figures from '$lib/components/Overlay/Image/Figures.svelte';
  import Styles from '$lib/components/Overlay/Image/Styles.svelte';
  import ImageOptions from '$lib/components/Overlay/Image/ImageOptions.svelte';


</script>


<Menu absoluteClass="top-[-48px] right-[-2px]" className="menu-shadow-xl" enableOverflow={true} shadow="">
  <div class="flex row relative items-center h-[30px] w-full px-2">
    <div class="flex flex-grow h-9 items-center">    
      <Button 
        className="h-[30px] pr-0.5 rounded-none"
        tooltip="Choose image type" 
        tooltipClass="mt-1"
      >
        <div class="pl-2 pr-3 inline-block text-sm text-buttonblue-800 font-medium">Figure</div> 
        <Icon icon="arrow_drop_down"/>
        <Figures slot="overlay" position="tl"/>
      </Button>

      <Divider className="h-[30px] mx-0"/>

      <Button 
        className="h-[30px] pr-0.5 rounded-none"
        tooltip="Choose image style" 
        tooltipClass="mt-1"
      >
        <div class="pl-2 pr-4 inline-block text-sm text-buttonblue-800 font-medium">Style</div> 
        <Icon icon="arrow_drop_down"/> 
        <Styles slot="overlay" position="tl"/>
      </Button>

      <Divider className="h-[30px] ml-0 mr-1"/>

      <Button 
        className="h-[30px] w-6 rounded-none"
        icon="cached"
        tooltip="Replace image" 
        tooltipClass="mt-1"
      />
      <Button 
        className="h-[30px] w-6 rounded-none"
        icon="delete"
        tooltip="Delete image" 
        tooltipClass="mt-1"
      />
      <Button 
        className="h-[30px] w-6 rounded-none"
        icon="more_horiz"
        tooltip="More image options" 
        tooltipClass="mt-1"
      >
        <ImageOptions slot="overlay" position="tr"/>
      </Button>
    </div>
  </div>
</Menu>

