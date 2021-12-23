<script type="ts">
  import ReferenceOverlay from "$lib/components/Inline/ReferenceOverlay.svelte";

  export let title;
  export let subtitle;
  export let src = null; 
  export let inverse = false;

  let hover = false;
  let showHelper = false;
  let timeoutId;

  $: updateHover(hover);

  function updateHover(onHover) {
    if (timeoutId)
      clearTimeout(timeoutId);
    
    if (onHover) {
      timeoutId = setTimeout(() => showHelper = true, 200);
      return;
    }

    timeoutId = setTimeout(() => showHelper = false, 500);
  }
  
</script>

<div 
  class="group relative select-none inline cursor-pointer"
  contenteditable="false"
  on:mouseenter={() => hover = true}
  on:mouseleave={() => hover = false}
>
  <div class="relative inline-flex px-1 select-none rounded-sm bg-bordergray group-hover:bg-buttonblue-200">
    <div class="absolute left-0 bottom-0 h-6 {showHelper ? 'block' : 'hidden'}">
      <ReferenceOverlay
        {title}
        {subtitle}
        {src}
      />
    </div>
    {inverse ? subtitle : title}
  </div>
</div>
