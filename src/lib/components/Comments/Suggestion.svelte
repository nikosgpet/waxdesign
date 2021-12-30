<script type="ts">
  import CommentContainer from "$lib/components/Comments/CommentContainer.svelte";
  import ProfilePicture from "$lib/components/Comments/ProfilePicture.svelte";
  import ProfileName from "$lib/components/Comments/ProfileName.svelte";
  import Button from "$lib/components/Button.svelte";

  export let status;
  export let top;
  export let name;
  export let time;
  export let type;
  export let change;

</script>


<CommentContainer {status} {top}>
  <div class="flex">
    <ProfilePicture className="mr-[14px]"/>
    <div class="flex-grow">      
      <div class="flex items-center pb-2 mb-0.5 {$status.active ? 'block' : 'hidden'}">
        <ProfileName {name} {time}/>
        <div class="flex -mt-[10px] -mr-2 gap-1">
          <Button
            icon="done"
            tooltip="Accept Suggestion"
            tooltipClass="mt-1 -right-2"
          />
          <Button
            icon="close"
            tooltip="Reject Suggestion"
            tooltipClass="mt-1 -right-2"
          />
        </div>
      </div>
      <div class="flex items-center {$status.active ? '' : 'h-full'} text-[.8rem] text-textblue leading-tight -mb-0.5">
        <div>
          <span class="font-bold">{type}:</span>
          &ldquo;{change}&rdquo;
        </div>
      </div>
    </div>
  </div>
</CommentContainer>
