<script type="ts">
	import Divider from '$lib/components/Divider.svelte';
  import Button from "$lib/components/Button.svelte";
  import Icon from '$lib/components/Icon.svelte';
  import BlockStyles from '$lib/components/Overlay/BlockStyles.svelte';
  import InlineStyles from '$lib/components/Overlay/InlineStyles.svelte';
  import FormattingOptions from "$lib/components/Overlay/FormattingOptions/FormattingOptions.svelte";
  import CaseOptions from "$lib/components/Overlay/CaseOptions/CaseOptions.svelte";
  import Symbols from '$lib/components/Overlay/Symbols.svelte';
  import Highlights from '$lib/components/Overlay/Highlights.svelte';
  import Menu from "$lib/components/Overlay/Menu.svelte";

  export let boundaries;
  $: console.log('boundaries', boundaries)

</script>


<Menu absoluteStyle="top:{boundaries.y - 2}px; left:{boundaries.x}px;" className="menu-shadow-xl" enableOverflow={true} shadow="">
  <div class="flex row relative items-center h-[30px] w-full px-2">
    <div class="flex flex-grow h-9 items-center">    
      <Button 
        className="h-[30px] pr-0.5 rounded-none"
        tooltip="Add block" 
        tooltipClass="mt-1"
      >
        <div class="pl-2 pr-3 inline-block text-sm text-buttonblue-800 font-medium">Text</div> 
        <Icon icon="arrow_drop_down"/>
        <BlockStyles slot="overlay" position="tl"/>
      </Button>

      <Divider className="h-[30px] ml-0 mr-1"/>

      <Button 
        className="h-[30px] pr-0.5 rounded-none"
        tooltip="Choose inline | style" 
        tooltipClass="mt-1"
      >
        <div class="pl-2 pr-4 inline-block text-sm text-buttonblue-800 font-medium">Styles</div> 
        <Icon icon="arrow_drop_down"/> 
        <InlineStyles slot="overlay" position="tl"/>
      </Button>

      <Divider className="h-[30px] mx-1"/>

      <Button 
        className="h-[30px] w-6 rounded-none"
        icon="format_bold"
        tooltip="Bold" 
        subTooltip="⌘+B" 
        tooltipClass="mt-1"
      />
      <Button 
        className="h-[30px] w-6 rounded-none"
        icon="format_italic"
        tooltip="Italic" 
        subTooltip="⌘+I" 
        tooltipClass="mt-1"
      />
      <Button 
        className="h-[30px] w-6 rounded-none"
        icon="more_horiz"
        tooltip="More formatting | options" 
        tooltipClass="mt-1"
      >
        <FormattingOptions slot="overlay" position="tl"/>
      </Button>

      <Button 
        className="h-[30px] rounded-none pl-[3px]"
        tooltip="Choose case" 
        tooltipClass="mt-1"
      >
        <Icon icon="format_size"/> 
        <Icon icon="arrow_drop_down"/> 
        <CaseOptions slot="overlay" position="tl"/>
      </Button>

      <Divider className="h-[30px] ml-0 mr-1"/>

      <Button 
        className="h-[30px] w-6 rounded-none" 
        icon="keyboard_command_key"
        tooltip="Add a symbol" 
        tooltipClass="mt-1"
      >
        <Symbols slot="overlay" position="tl"/>
      </Button>

      <Divider className="h-[30px] mx-1"/>

      <Button 
        className="h-[30px] w-6 rounded-none" 
        icon="code"
        tooltip="Add code" 
        subTooltip="⌘+E" 
        tooltipClass="mt-1"
      />
      <Button 
        className="h-[30px] w-6 rounded-none" 
        icon="format_quote"
        tooltip="Add quote" 
        tooltipClass="mt-1"
      />
      <Button 
        className="h-[30px] w-6 rounded-none" 
        icon="link"
        tooltip="Add link" 
        subTooltip="⌘+K" 
        tooltipClass="mt-1"
      />

      <Divider className="h-[30px] ml-1 mr-0"/>

      <Button 
        className="h-[30px] rounded-none pl-[3px]" 
        tooltip="Highlight" 
        subTooltip="⌘+Shift+H" 
        tooltipClass="mt-1"
      >
        <Icon icon="text_format"/> 
        <Icon icon="arrow_drop_down"/> 
        <Highlights slot="overlay" position="tl"/>
      </Button>

      <Divider className="h-[30px] ml-0 mx-1"/>

      <Button 
        className="h-[30px] w-6 rounded-none" 
        icon="post_add"
        tooltip="Add reference" 
        tooltipClass="mt-1"
      />
      <Button 
        className="h-[30px] w-6 rounded-none" 
        icon="alternate_email" 
        tooltip="Mention a page, figure| or publication" 
        subTooltip="@" 
        tooltipClass="mt-1"
      />
    </div>
  </div>
</Menu>

