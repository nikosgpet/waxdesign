<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import Icon from '$lib/components/Icon.svelte';
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";
  import Toggle from "$lib/components/Toggle.svelte";
  import Languages from "$lib/components/Overlay/LanguageTools/Languages.svelte";
  import overlayClosed from '$lib/stores/overlay';
  import languageOverlay from '$lib/stores/languageOverlay';


  export let position = ''; // tl, tr, bl, br

  let spellingToggle;
  let grammarToggle;
  let isHoverButton = false;
  let isHoverLanguages = false;
</script>


<Menu {position} absoluteClass="right-[168px]" className="py-2 w-56">
  <div class="flex w-full" on:click={() => {console.log('spellingToggle', spellingToggle);spellingToggle.toggleButton()}}>
    <div class="flex relative w-full items-center h-8 px-2 cursor-pointer select-none hover:bg-buttonblue-100 {isHoverButton ? '' : 'active:bg-buttonblue-200'}">
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full truncate">
        Spell checking
      </div>

      <Toggle bind:this={spellingToggle} on:mouseenter={() => isHoverButton = true} on:mouseleave={() => isHoverButton = false}/>
    </div>
  </div>

  <div class="flex w-full" on:click={() => grammarToggle.toggleButton()}>
    <div class="flex relative w-full items-center h-8 px-2 cursor-pointer select-none hover:bg-buttonblue-100 {isHoverButton ? '' : 'active:bg-buttonblue-200'}">
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full truncate">
        Grammar checking
      </div>

      <Toggle bind:this={grammarToggle} on:mouseenter={() => isHoverButton = true} on:mouseleave={() => isHoverButton = false}/>
    </div>
  </div>

  <div class="flex w-full" on:mouseenter={() => isHoverLanguages = true}>
    <div class="flex relative w-full items-center h-8 px-2 cursor-pointer select-none {isHoverLanguages ? 'bg-buttonblue-100' : ''} hover:bg-buttonblue-100 active:bg-buttonblue-200">  
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full truncate">
        English
      </div>

      <div class="relative flex justify-center items-center z-10 h-6 w-6 min-w-[24px] -mr-1.5">
        <Icon icon="arrow_right" size="medium"/>
      </div>
    </div>
  </div>

  <div class="h-px w-full bg-bordergray"></div>
  <SidebarHeading title="32 Spelling Errors" className="pl-3"/>
  <div class="flex w-full" on:click={() => {overlayClosed.close(); languageOverlay.open()}}>
    <div class="flex relative w-full items-center h-8 px-2 cursor-pointer select-none hover:bg-buttonblue-100 active:bg-buttonblue-200">
      <div class="relative flex justify-center items-center z-10 h-6 w-6 min-w-[24px]">
        <Icon icon="spellcheck"/>
      </div>
  
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full truncate">
        Check spelling & grammar
      </div>
    </div>
  </div>
</Menu>

{#if isHoverLanguages}
<Languages/>
{/if}
