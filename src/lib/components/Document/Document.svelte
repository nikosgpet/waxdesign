<script type="ts">
  import DocumentContent from "$lib/components/Document/DocumentContent.svelte";
  import Suggestion from "$lib/components/Comments/Suggestion.svelte";

</script>


<div class="relative scrollbar overflow-y-auto w-full">
  <div class="relative pt-10 pb-16">
    <div class="w-[722px] mx-auto">
      <DocumentContent/>
    </div>
    <div class="absolute flex flex-col items-end right-0 top-0 bottom-0 w-[300px]">
      <Suggestion
        name="You" 
        time="3 hours ago"
        type="Add"
        change="This text was added."
      />
    </div>
  </div>
</div>
