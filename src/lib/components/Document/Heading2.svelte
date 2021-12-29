<script type="ts">
  import Block from "$lib/components/Document/Block.svelte";

</script>


<Block sideOverlayClass="mt-0.5">
  <h2 class="text-textblue mb-3 mt-4 text-[21px] font-bold focus-visible:outline-none" contenteditable="true">
    <slot></slot>
  </h2>
</Block>
