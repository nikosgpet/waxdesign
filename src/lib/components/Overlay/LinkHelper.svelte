<script type="ts">
	import Divider from '$lib/components/Divider.svelte';
  import Button from "$lib/components/Button.svelte";
  import Icon from '$lib/components/Icon.svelte';
  import Menu from "$lib/components/Overlay/Menu.svelte";

  export let href;
  let edit = false;

</script>


<Menu 
  absoluteClass="top-[-38px]" 
  className="drop-shadow-md" 
  enableOverflow={true} 
  shadow=""
  on:mouseenter
  on:mouseleave
>
  <div class="flex row relative items-center h-[30px] max-w-[310px] px-2 overflow-hidden">
    <div class="flex h-9 items-center overflow-hidden cursor-default">   
      <div class="mr-2">
        <Icon icon="link"/>
      </div>
      <div 
        class="text-[13px] py-1 whitespace-nowrap focus:outline-none
          {!edit ? 'text-buttonblue-600 truncate' : 'text-textblue cursor-text overflow-x-auto scrollbar-none'}" 
        contenteditable={edit}
      >
        {href}
      </div>

      <Divider className="h-[30px] ml-0 mr-1"/>

      {#if !edit}
      <Button 
        className="h-[30px] w-6 rounded-none"
        icon="edit"
        tooltip="Edit link" 
        tooltipClass="mt-1"
        on:click={() => {edit = true}}
      />

      <Divider className="h-[30px] mx-1"/>

      <Button 
        className="h-[30px] w-6 rounded-none"
        icon="link_off"
        tooltip="Remove link" 
        tooltipClass="mt-1"
      />
      {/if}

      {#if edit}
      <Button 
        className="h-[30px] w-6 rounded-none"
        icon="done"
        tooltip="Save link" 
        tooltipClass="mt-1"
        on:click={() => {edit = false}}
      />
      {/if}
    </div>
  </div>
</Menu>

