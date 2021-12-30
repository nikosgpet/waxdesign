<script type="ts">
  export let className;
  export let profile = 0;
</script>


<div class="relative w-[26px] h-[26px] min-w-[26px] rounded-full {className}">
  <img
    class="rounded-full"
    src="{
      profile === 0 ? 'https://randomuser.me/api/portraits/men/81.jpg' :
      'https://randomuser.me/api/portraits/women/16.jpg'
    }"
    alt="User profile"
  >
</div>
