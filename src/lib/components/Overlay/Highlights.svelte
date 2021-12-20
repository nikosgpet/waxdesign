<script type="ts">
	import Button from '$lib/components/Button.svelte';
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import Icon from '$lib/components/Icon.svelte';

  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="p-2">
  <div class="flex gap-1.5">
    <Button className="h-6 w-6 border border-buttonblue-800 bg-white hover:bg-white active:bg-white ring-buttonblue-800 ring-1">
      <Icon icon="done"/>
    </Button>
    <Button className="h-6 w-6 border border-orange-500 hover:border-white bg-orange-400 hover:bg-orange-400 active:bg-orange-400 hover:ring-blue-400 hover:ring-1"/>
    <Button className="h-6 w-6 border border-amber-500 hover:border-white bg-amber-400 hover:bg-amber-400 active:bg-amber-400 hover:ring-blue-400 hover:ring-1"/>
    <Button className="h-6 w-6 border border-green-500 hover:border-white bg-green-400 hover:bg-green-400 active:bg-green-400 hover:ring-blue-400 hover:ring-1"/>
    <Button className="h-6 w-6 border border-teal-500 hover:border-white bg-teal-400 hover:bg-teal-400 active:bg-teal-400 hover:ring-blue-400 hover:ring-1"/>
    <Button className="h-6 w-6 border border-blue-500 hover:border-white bg-blue-400 hover:bg-blue-400 active:bg-blue-400 hover:ring-blue-400 hover:ring-1"/>
    <Button className="h-6 w-6 border border-purple-500 hover:border-white bg-purple-400 hover:bg-purple-400 active:bg-purple-400 hover:ring-blue-400 hover:ring-1"/>
    <Button className="h-6 w-6 border border-rose-500 hover:border-white bg-rose-400 hover:bg-rose-400 active:bg-rose-400 hover:ring-blue-400 hover:ring-1"/>
  </div>
</Menu>

