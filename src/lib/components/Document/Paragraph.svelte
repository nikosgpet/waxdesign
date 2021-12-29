<script type="ts">
  import Block from "$lib/components/Document/Block.svelte";
  

</script>


<Block>
  <p class="text-textblue mb-3 focus-visible:outline-none" contenteditable="true" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false">
    <slot></slot>
  </p>
</Block>
