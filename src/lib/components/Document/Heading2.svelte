<script type="ts">
  import Block from "$lib/components/Document/Block.svelte";

</script>


<Block sideOverlayClass="mt-0.5">
  <h2 class="text-[#1b2b4b] mb-3 mt-4 text-[21px] font-bold focus-visible:outline-none" contenteditable="true">
    <slot></slot>
  </h2>
</Block>
