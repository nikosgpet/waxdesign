<script type="ts">
  import { createEventDispatcher } from 'svelte';

  export let toggle = true;
  
  export function toggleButton() {
    toggle = !toggle;
  }

  const dispatch = createEventDispatcher();
  
  function onClick(event) {
    toggleButton();
    dispatch('toggle');
  }
</script>


<div 
  class="flex justify-center items-center" 
  on:click|stopPropagation={onClick}
  on:mouseenter
  on:mouseleave
>
  <div class="relative rounded-full w-9 h-[18px] transition duration-200 ease-linear {toggle ? 'bg-buttonblue-800' : 'bg-gray-400'}">
    <label
      for="toggle"
      class="absolute left-0 bg-white border-2 mb-2 w-[18px] h-[18px] rounded-full transition transform duration-100 ease-linear cursor-pointer
        {toggle ? 'translate-x-full border-buttonblue-800' : 'translate-x-0 border-gray-400'}"
    >
    </label>
    <input
      type="checkbox"
      name="toggle"
      class="appearance-none w-full h-full active:outline-none focus:outline-none cursor-pointer"
    />
  </div>
</div>
