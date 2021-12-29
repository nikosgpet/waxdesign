<script type="ts">
  import Block from "$lib/components/Document/Block.svelte";

</script>


<Block sideOverlayClass="mt-3">
  <h1 class="text-textblue mb-4 text-[32px] font-bold focus-visible:outline-none" contenteditable="true" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false">
    <slot></slot>
  </h1>
</Block>
