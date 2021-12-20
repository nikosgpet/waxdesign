<script type="ts">
	import Divider from '$lib/components/Divider.svelte';
  import Button from "$lib/components/Button.svelte";
  import Icon from '$lib/components/Icon.svelte';
  import BlockStyles from '$lib/components/Overlay/BlockStyles.svelte';
  import InlineStyles from '$lib/components/Overlay/InlineStyles.svelte';
  import FormattingOptions from "$lib/components/Overlay/FormattingOptions/FormattingOptions.svelte";
  import CaseOptions from "$lib/components/Overlay/CaseOptions/CaseOptions.svelte";
  import Table from '$lib/components/Overlay/Table.svelte';
  import Symbols from '$lib/components/Overlay/Symbols.svelte';
  import Highlights from '$lib/components/Overlay/Highlights.svelte';
  import EditingMode from '$lib/components/Overlay/EditingMode/EditingMode.svelte';
  import LanguageTools from '$lib/components/Overlay/LanguageTools/LanguageTools.svelte';
  import SpellingGrammar from '$lib/components/Overlay/LanguageTools/SpellingGrammar.svelte';
  import Search from '$lib/components/Overlay/Search/Search.svelte';
  import searchOverlay from '$lib/stores/searchOverlay';
  import Comments from '$lib/components/Overlay/Comments/Comments.svelte';

  
</script>


<div class="flex row relative items-center h-9 w-full border-b border-b-bordergray px-3 bg-white">
  <div class="flex flex-grow h-9 items-center gap-0.5">    
    <Button 
      className="h-6 w-6" 
      icon="undo"
      tooltip="Undo" 
      subTooltip="⌘+Z" 
      tooltipClass="mt-1"
    />
    <Button 
      className="h-6 w-6" 
      icon="redo"
      tooltip="Redo" 
      subTooltip="⌘+⇧+Z" 
      tooltipClass="mt-1"
    />
    <Button 
      className="h-6 w-6" 
      icon="save"
      tooltip="Save" 
      subTooltip="⌘+S" 
      tooltipClass="mt-1"
    />
    <Divider/>
    <Button 
      className="h-6 pr-0.5"
      tooltip="Add block" 
      tooltipClass="mt-1"
    >
      <div class="pl-2 pr-3 inline-block text-sm text-buttonblue-800 font-medium">Text</div> 
      <Icon icon="arrow_drop_down"/>
      <BlockStyles slot="overlay" position="tl"/>
    </Button>
    <Divider/>
    <Button 
      className="h-6 pr-0.5"
      tooltip="Choose inline | style" 
      tooltipClass="mt-1"
    >
      <div class="pl-2 pr-4 inline-block text-sm text-buttonblue-800 font-medium">Styles</div> 
      <Icon icon="arrow_drop_down"/> 
      <InlineStyles slot="overlay" position="tl"/>
    </Button>
    <Divider/>
    <Button 
      className="h-6 w-6" 
      icon="format_bold"
      tooltip="Bold" 
      subTooltip="⌘+B" 
      tooltipClass="mt-1"
    />
    <Button 
      className="h-6 w-6" 
      icon="format_italic"
      tooltip="Italic" 
      subTooltip="⌘+I" 
      tooltipClass="mt-1"
    />
    <Button 
      className="h-6 w-6" 
      icon="more_horiz"
      tooltip="More formatting | options" 
      tooltipClass="mt-1"
    >
      <FormattingOptions slot="overlay" position="tl"/>
    </Button>

    <Button 
      className="h-6 pl-[3px]"
      tooltip="Choose case" 
      tooltipClass="mt-1"
    >
      <Icon icon="format_size"/> 
      <Icon icon="arrow_drop_down"/> 
      <CaseOptions slot="overlay" position="tl"/>
    </Button>
    <Divider/>
    <Button 
      className="h-6 w-6" 
      icon="code"
      tooltip="Add code" 
      subTooltip="⌘+E" 
      tooltipClass="mt-1"
    />
    <Button 
      className="h-6 w-6" 
      icon="format_quote"
      tooltip="Add quote" 
      tooltipClass="mt-1"
    />
    <Button 
      className="h-6 w-6" 
      icon="link"
      tooltip="Add link" 
      subTooltip="⌘+K" 
      tooltipClass="mt-1"
    />
    <Divider/>
    <Button 
      className="h-6 w-6" 
      icon="keyboard_command_key"
      tooltip="Add a symbol" 
      tooltipClass="mt-1"
    >
      <Symbols slot="overlay" position="tl"/>
    </Button>
    <Button 
      className="h-6 w-6"
      icon="border_all"
      tooltip="Add table"
      tooltipClass="mt-1"
    >
      <Table slot="overlay" position="tl"/>
    </Button>
    <Divider/>
    <Button 
      className="h-6 w-6" 
      icon="post_add"
      tooltip="Add reference" 
      tooltipClass="mt-1"
    />
    <Button 
      className="h-6 w-6" 
      icon="alternate_email" 
      tooltip="Mention a page, figure| or publication" 
      subTooltip="@" 
      tooltipClass="mt-1"
    />
    <Divider/>
    <Button 
      className="h-6 pl-[3px]" 
      tooltip="Highlight" 
      subTooltip="⌘+Shift+H" 
      tooltipClass="mt-1"
    >
      <Icon icon="text_format"/> 
      <Icon icon="arrow_drop_down"/> 
      <Highlights slot="overlay" position="tl"/>
    </Button>
  </div>

  <div class="flex h-9 justify-self-end items-center gap-0.5">
    <Button 
      className="h-6 w-6" 
      icon="search"
      tooltip="Search text" 
      subTooltip="⌘+P" 
      tooltipClass="mt-1"
      on:click={() => {searchOverlay.openSimple()}}
    >
      <Search slot="absolute"/>
    </Button>
    <Button
      className="h-6 w-6"
      icon="spellcheck"
      tooltip="Language tools"
      tooltipClass="mt-1"
    >
      <LanguageTools slot="overlay" position="tr"/>
      <SpellingGrammar slot="absolute"/>
    </Button>
    <Button 
      className="h-6 pl-1 pr-0.5"
      tooltip="Change editing mode" 
      tooltipClass="mt-1"
    >
      <Icon icon="edit"/>
      <div class="pl-2 pr-6 inline-block text-sm text-buttonblue-800 font-medium">Editing</div>
      <Icon icon="arrow_drop_down"/>
      <EditingMode slot="overlay" position="tr"/>
    </Button>
    <Divider/>
    <Button 
      className="h-6 w-6"
      icon="fullscreen"
      tooltip="Go fullscreen"
      tooltipClass="mt-1 right-2"
    />
  </div>
  <Comments/>
</div>
