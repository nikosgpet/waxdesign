<script type="ts">
  import LinkHelper from "../Overlay/LinkHelper.svelte";

  export let href;

  $: updateHover(onHover);

  let timeoutId;

  function updateHover(onHover) {
    if (timeoutId)
      clearTimeout(timeoutId);
    
    if (onHover) {
      timeoutId = setTimeout(() => showLinkHelper = true, 200);
      return;
    }

    timeoutId = setTimeout(() => showLinkHelper = false, 500);
  }

  let onHover = false;
  let showLinkHelper = false;
</script>


<span class="relative underline cursor-pointer text-blue-600 hover:text-blue-700" contenteditable="false">
  <div class="absolute left-0 bottom-0 h-6 {showLinkHelper ? 'block' : 'hidden'}">
    <LinkHelper
      {href}
      on:mouseenter={() => onHover = true}
      on:mouseleave={() => onHover = false}
    />
  </div>
  <a
    {href}
    target="_blank"
    on:mouseenter={() => onHover = true}
    on:mouseleave={() => onHover = false}
  >
    <slot></slot>
  </a>
</span>
