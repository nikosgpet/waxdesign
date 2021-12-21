<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import Icon from '$lib/components/Icon.svelte';
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";
  import overlayClosed from '$lib/stores/overlay';
  import languageOverlay from '$lib/stores/languageOverlay';
  import CommentOption from "$lib/components/Overlay/Comments/CommentOption.svelte";
  import CommentsAcceptReject from "$lib/components/Overlay/Comments/CommentsAcceptReject.svelte";
  import Toggle from "$lib/components/Toggle.svelte";


  export let position = ''; // tl, tr, bl, br

  let commentToggle;
  let isHoverButton = false;
  let isHoverLanguages = false;
</script>


<Menu {position} absoluteClass="right-0" className="py-2 w-56">

  <SidebarHeading title="32 Suggestions" className="pl-[14px] pt-0.5"/>
  <div class="flex flex-col gap-1 pb-1">
    <CommentOption title="Show Suggestions" icon="custom_suggestions" active={true}/>
    <CommentOption title="Preview « Accept All »" icon="custom_accept_all"/>
    <CommentOption title="Preview « Reject All »" icon="custom_reject_all"/>
  </div>

  <div class="h-px w-full bg-bordergray"></div>

  <div class="flex w-full my-1" on:mouseenter={() => isHoverLanguages = true}>
    <div class="flex relative w-full items-center h-8 px-[10px] cursor-pointer select-none {isHoverLanguages ? 'bg-buttonblue-100' : ''} hover:bg-buttonblue-100 active:bg-buttonblue-200">  
      <div class="relative flex justify-center items-center z-10 h-6 w-6 min-w-[24px] mt-1">
        <Icon icon="custom_accept_reject"/>
      </div>

      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
        Accept / Reject All
      </div>

      <div class="relative flex justify-center items-center z-10 h-6 w-6 min-w-[24px] -mr-1.5">
        <Icon icon="arrow_right" size="medium"/>
      </div>
    </div>
  </div>

  <div class="h-px w-full bg-bordergray"></div>
  <SidebarHeading title="26 Comments" className="pl-[14px]"/>

  <div class="flex w-full" on:click={() => {commentToggle.toggleButton()}}>
    <div class="flex relative w-full items-center h-8 px-1.5 cursor-pointer select-none hover:bg-buttonblue-100 {isHoverButton ? '' : 'active:bg-buttonblue-200'}">
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
        Show comments
      </div>

      <Toggle bind:this={commentToggle} on:mouseenter={() => isHoverButton = true} on:mouseleave={() => isHoverButton = false}/>
    </div>
  </div>
</Menu>

{#if isHoverLanguages}
<CommentsAcceptReject/>
{/if}
