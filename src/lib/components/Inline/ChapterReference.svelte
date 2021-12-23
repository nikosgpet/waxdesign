<script type="ts">
import Icon from "../Icon.svelte";


</script>

<div class="group relative select-none inline text-blue-600 hover:text-blue-700 cursor-pointer" contenteditable="false">
  <div class="inline-flex px-1 select-none rounded-sm group-hover:bg-buttonblue-200 hover:underline">
    <slot></slot>
    <Icon icon="north_east" iconClass="mt-[3px] ml-0.5"/>
  </div>
</div>
