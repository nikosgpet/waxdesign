<script type="ts">
  export let n;
</script>


<div class="relative pl-[48px]">
  <div class="absolute text-right w-[32px] top-[5px] left-0 select-none rounded bg-white text-xs font-medium">
    {n}.
  </div>
  <p class="text-[#1b2b4b] mb-3 focus-visible:outline-none" contenteditable="true" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false">
    <slot></slot>
  </p>
</div>
