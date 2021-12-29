<script type="ts">
  import CommentContainer from "$lib/components/Comments/CommentContainer.svelte";
  import ProfilePicture from "$lib/components/Comments/ProfilePicture.svelte";
  import ProfileName from "$lib/components/Comments/ProfileName.svelte";
  import Button from "$lib/components/Button.svelte";

  export let name;
  export let time;
  export let type;
  export let change;

</script>


<CommentContainer top={256}>
  <div class="flex items-center">
    <div class="flex items-center flex-grow">
      <ProfilePicture className="mr-[14px]"/>
      <ProfileName {name} {time}/>
    </div>
    <div class="flex -mt-[10px] -mr-2 gap-1">
      <Button
        icon="done"
        tooltip="Next Comment| & Suggestion"
        tooltipClass="mt-1 right-0"
      />
      <Button
        icon="close"
        tooltip="Comments &| Suggestions| options"
        tooltipClass="mt-1 right-0"
      />
    </div>
  </div>
  <div class="text-[.8rem] pl-[40px] pt-2 text-textblue">
    <span class="font-bold">{type}:</span>
    &ldquo;{change}&rdquo;
  </div>
</CommentContainer>
