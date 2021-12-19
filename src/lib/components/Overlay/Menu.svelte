<script type="ts">
  export let className = 'w-56 h-80';
  export let position = ''; //tl, tr, bl, br
</script>


<div class="absolute z-20">
  <div class="scrollbar bg-white shadow-2xl rounded overlay-shadow overflow-y-auto overflow-x-hidden {className} {position === 'tl' ? 'rounded-tl-none' : ''}">
    <slot></slot>
  </div>
</div>

<style type="postcss">
  .overlay-shadow {
    box-shadow: 0 1px 3px 1px rgb(60 64 67 / 15%);
    /* box-shadow: 0 2px 6px 2px rgb(60 64 67 / 15%); */
  }
</style>

