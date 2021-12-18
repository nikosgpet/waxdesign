<script type="ts">
	import Divider from '$lib/components/Divider.svelte';
  import Button from "$lib/components/Button.svelte";
  import Icon from '$lib/components/Icon.svelte';
  
</script>


<div class="flex row relative items-center h-9 w-full border-b border-b-bordergray px-3 bg-white">
  <div class="flex flex-grow h-9 items-center gap-0.5">    
    <Button className="h-6 w-6" icon="undo"></Button>
    <Button className="h-6 w-6" icon="redo"></Button>
    <Button className="h-6 w-6" icon="save"></Button>
    <Divider/>
    <Button className="h-6 pr-0.5">
      <div class="pl-2 pr-3 inline-block text-sm text-buttonblue-800 font-medium">Text</div> 
      <Icon icon="arrow_drop_down"/> 
    </Button>
    <Divider/>
    <Button className="h-6 pr-0.5">
      <div class="pl-2 pr-4 inline-block text-sm text-buttonblue-800 font-medium">Styles</div> 
      <Icon icon="arrow_drop_down"/> 
    </Button>
    <Divider/>
    <Button className="h-6 w-6" icon="format_bold"></Button>
    <Button className="h-6 w-6" icon="format_italic"></Button>
    <Button className="h-6 w-6" icon="more_horiz"></Button>
    <Button className="h-6 pl-[3px]">
      <Icon icon="format_size"/> 
      <Icon icon="arrow_drop_down"/> 
    </Button>
    <Divider/>
    <Button className="h-6 w-6" icon="code"></Button>
    <Button className="h-6 w-6" icon="format_quote"></Button>
    <Button className="h-6 w-6" icon="link"></Button>
    <Divider/>
    <Button className="h-6 w-6" icon="keyboard_command_key"></Button>
    <Button className="h-6 w-6" icon="border_all"></Button>
    <Divider/>
    <Button className="h-6 w-6" icon="post_add"></Button>
    <Button className="h-6 w-6" icon="alternate_email"></Button>
    <Divider/>
    <Button className="h-6 pl-[3px]">
      <Icon icon="text_format"/> 
      <Icon icon="arrow_drop_down"/> 
    </Button>
  </div>

  <div class="flex h-9 justify-self-end items-center gap-0.5">
    <Button className="h-6 w-6" icon="search"></Button>
    <Button className="h-6 w-6" icon="spellcheck"></Button>
    <Button className="h-6 pl-1 pr-0.5">
      <Icon icon="edit"/> 
      <div class="pl-2 pr-6 inline-block text-sm text-buttonblue-800 font-medium">Editing</div> 
      <Icon icon="arrow_drop_down"/> 
    </Button>
    <Divider/>
    <Button className="h-6 w-6" icon="fullscreen"></Button>
  </div>
</div>
