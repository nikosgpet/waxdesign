<script type="ts">
  import Menu from "$lib/components/Overlay/Menu.svelte";
  import CounterOption from "$lib/components/Overlay/Help/CounterOption.svelte";


  export let position = ''; //tl, tr, bl, br
</script>


<Menu {position} className="py-2" absoluteClass="bottom-[38px] right-[87px]">
  <CounterOption number="7" title="pages (approximately)"/>
  <CounterOption number="3570" title="words"/>
  <CounterOption number="23019" title="characters"/>
  
  <div class="h-px w-full bg-bordergray my-2 ml-3"></div>
  
  <CounterOption number="43" title="paragraphs"/>
  <CounterOption number="1" title="table"/>
  <CounterOption number="3" title="images"/>
  <CounterOption number="6" title="footnotes"/>
  
  <div class="h-px w-full bg-bordergray my-2 ml-3"></div>
  
  <CounterOption number="32" title="spelling errors"/>
  
  <div class="h-px w-full bg-bordergray my-2 ml-3"></div>
  
  <CounterOption number="" title="Saved"/>
  <CounterOption number="" title="Updated 2 minutes ago"/>
</Menu>
