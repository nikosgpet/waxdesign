<script type="ts">
  export let className = 'w-56 h-80';
  export let position = ''; //tl, tr, bl, br
  export let absoluteClass = '';
  export let shadow = 'sm'; // sm, lg
</script>


<div class="absolute z-20 {absoluteClass}">
  <div class="scrollbar bg-white rounded {shadow === 'sm' ? 'drop-shadow-lg' : 'drop-shadow-xl'} border border-bordergray overflow-y-auto overflow-x-hidden 
        {className}
        {position === 'tl' ? 'rounded-tl-none' : ''}
        {position === 'tr' ? 'rounded-tr-none' : ''}"
  >
    <slot></slot>
  </div>
</div>

<style type="postcss">
  .menu-shadow-sm {
    box-shadow: 0 1px 3px 1px rgb(60 64 67 / 15%);
  }

  .menu-shadow-lg {
    box-shadow: rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px, rgb(0 0 0 / 20%) 0px 3px 5px -1px;
  }
</style>

