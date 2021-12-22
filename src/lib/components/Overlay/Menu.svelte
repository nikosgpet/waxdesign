<script type="ts">
  export let className = 'w-56 h-80';
  export let position = ''; //tl, tr, bl, br
  export let absoluteClass = '';
  export let absoluteStyle = '';
  export let shadow = 'sm'; // sm, lg
  export let enableOverflow = false;
</script>


<div class="absolute z-20 {absoluteClass}" style={absoluteStyle}>
  <div class="{enableOverflow ? '' : 'scrollbar overflow-y-auto overflow-x-hidden'} bg-white rounded border border-bordergray 
        {shadow === 'sm' ? 'drop-shadow-lg' : 
          'lg' ? 'drop-shadow-lg' : 
          ''} 
        {className}
        {position === 'tl' ? 'rounded-tl-none' : ''}
        {position === 'tr' ? 'rounded-tr-none' : ''}
        {position === 'br' ? 'rounded-br-none' : ''}"
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

  .menu-shadow-xl {
    box-shadow: rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px;
  }
</style>

