<script type="ts">
  import Block from "$lib/components/Document/Block.svelte";

</script>


<Block>
  <p class="text-[#1b2b4b] mb-3 focus-visible:outline-none" contenteditable="true">
    <slot></slot>
  </p>
</Block>
