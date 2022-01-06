<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";
  import CommentOption from "$lib/components/Overlay/Comments/CommentOption.svelte";
  import CommentsAcceptReject from "$lib/components/Overlay/Comments/CommentsAcceptReject.svelte";
  import Toggle from "$lib/components/Toggle.svelte";
  import Button from "$lib/components/Button.svelte";


  export let position = ''; // tl, tr, bl, br

  let captionToggle;
  let altToggle;
  let linkToggle;
  let isHoverButtonCaption = false;
  let isHoverButtonAlt = false;
  let isHoverButtonLink = false;
  let isHoverLanguages = false;
</script>


<Menu {position} absoluteClass="right-2" className="py-2 w-56 h-[342px]">

  <div class="flex w-full" on:click={() => {captionToggle.toggleButton()}}>
    <div class="flex relative w-full items-center h-8 px-1.5 cursor-pointer select-none hover:bg-buttonblue-100 {isHoverButtonCaption ? '' : 'active:bg-buttonblue-200'}">
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full truncate">
        Caption
      </div>

      <Toggle toggle={true} bind:this={captionToggle} on:mouseenter={() => isHoverButtonCaption = true} on:mouseleave={() => isHoverButtonCaption = false}/>
    </div>
  </div>

  <div class="h-px w-full bg-bordergray mt-2 mb-3"></div>

  <div class="flex w-full" on:click={() => {altToggle.toggleButton()}}>
    <div class="flex relative w-full items-center h-8 px-1.5 cursor-pointer select-none hover:bg-buttonblue-100 {isHoverButtonAlt ? '' : 'active:bg-buttonblue-200'}">
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full truncate">
        Numbered column
      </div>

      <Toggle toggle={false} bind:this={altToggle} on:mouseenter={() => isHoverButtonAlt = true} on:mouseleave={() => isHoverButtonAlt = false}/>
    </div>
  </div>

  <div class="flex w-full" on:click={() => {linkToggle.toggleButton()}}>
    <div class="flex relative w-full items-center h-8 px-1.5 select-none gap-1">
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full truncate">
        Header rows
      </div>

      <Button 
        className="h-6 w-6" 
        icon="remove"
        tooltip="Redo" 
        subTooltip="⌘+⇧+Z" 
        tooltipClass="mt-1"
      />
      <div class="text-left text-sm text-buttonblue-800">1</div>
      <Button 
        className="h-6 w-6" 
        icon="add"
        tooltip="Redo" 
        subTooltip="⌘+⇧+Z" 
        tooltipClass="mt-1"
      />
    </div>
  </div>

  <div class="flex w-full" on:click={() => {linkToggle.toggleButton()}}>
    <div class="flex relative w-full items-center h-8 px-1.5 select-none gap-1">
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full truncate">
        Header columns
      </div>

      <Button 
        className="h-6 w-6" 
        icon="remove"
        tooltip="Redo" 
        subTooltip="⌘+⇧+Z" 
        tooltipClass="mt-1"
      />
      <div class="text-left text-sm text-buttonblue-800">0</div>
      <Button 
        className="h-6 w-6" 
        icon="add"
        tooltip="Redo" 
        subTooltip="⌘+⇧+Z" 
        tooltipClass="mt-1"
      />
    </div>
  </div>

  <div class="h-px w-full bg-bordergray mt-2 mb-3"></div>

  <SidebarHeading title="Orientation" className="pl-[14px] pt-0.5"/>
  <div class="flex flex-col gap-1 pb-1">
    <CommentOption title="Portrait" icon="custom_orientation_portrait" active={true} className="mt-0"/>
    <CommentOption title="Landscape" icon="custom_orientation_landscape" className="mt-0"/>
  </div>

  <div class="h-px w-full bg-bordergray mt-2 mb-3"></div>

  <SidebarHeading title="Page placement" className="pl-[14px] pt-0.5"/>
  <div class="flex flex-col gap-1 pb-1">
    <CommentOption title="Stick to top" icon="custom_placement_top" className="mt-0"/>
    <CommentOption title="Move with text" icon="custom_placement_middle" active={true} className="mt-0"/>
    <CommentOption title="Stick to bottom" icon="custom_placement_bottom" className="mt-0"/>
  </div>

  <div class="h-px w-full bg-bordergray mt-2 mb-3"></div>

  <SidebarHeading title="Margins" className="pl-[14px] pt-0.5"/>
  <div class="flex flex-col gap-1 pb-1">
    <CommentOption title="Minimal" icon="custom_width_minimal" className="mt-0"/>
    <CommentOption title="Text width" icon="custom_width_normal" active={true} className="mt-0"/>
    <CommentOption title="Full page" icon="custom_width_full" className="mt-0"/>
  </div>

  <div class="h-px w-full bg-bordergray mt-2 mb-3"></div>

  <div class="flex w-full" on:click={() => {captionToggle.toggleButton()}}>
    <div class="flex relative w-full items-center h-8 px-1.5 cursor-pointer select-none hover:bg-buttonblue-100 {isHoverButtonCaption ? '' : 'active:bg-buttonblue-200'}">
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full truncate">
        Break in pages
      </div>

      <Toggle toggle={false} bind:this={captionToggle} on:mouseenter={() => isHoverButtonCaption = true} on:mouseleave={() => isHoverButtonCaption = false}/>
    </div>
  </div>

  <div class="flex w-full" on:click={() => {captionToggle.toggleButton()}}>
    <div class="flex relative w-full items-center h-8 px-1.5 cursor-pointer select-none hover:bg-buttonblue-100 {isHoverButtonCaption ? '' : 'active:bg-buttonblue-200'}">
      <div class="relative z-10 flex-grow text-left text-sm text-buttonblue-900 pl-1.5 max-w-full truncate">
        Repeat header
      </div>

      <Toggle toggle={false} bind:this={captionToggle} on:mouseenter={() => isHoverButtonCaption = true} on:mouseleave={() => isHoverButtonCaption = false}/>
    </div>
  </div>
</Menu>

{#if isHoverLanguages}
<CommentsAcceptReject/>
{/if}
