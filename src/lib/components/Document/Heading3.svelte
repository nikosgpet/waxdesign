<script type="ts">
  import Block from "$lib/components/Document/Block.svelte";

</script>

<Block sideOverlayClass="mt-px">
  <h3 class="text-[#1b2b4b] mb-3 mt-4 text-[19px] focus-visible:outline-none" contenteditable="true">
    <slot></slot>
  </h3>
</Block>
