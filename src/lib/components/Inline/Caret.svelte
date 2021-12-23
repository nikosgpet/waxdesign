<script type="ts">
  let hover = false;
</script>

<div 
  class="relative inline-block w-0.5 -mb-px h-[18px] bg-green-600 cursor-pointer"
  on:mouseenter={() => hover = true}
  on:mouseleave={() => hover = false}
>
  <div class="absolute h-1.5 w-1.5 top-0 -left-0.5 bg-green-600"></div>
  <div class="absolute {hover ? 'block' : 'hidden'} px-0.5 -top-[10px] -left-0.5 bg-green-600 text-white text-[10px] whitespace-nowrap rounded-t-sm rounded-br-sm">Nikos Peteinatos</div>
</div>
