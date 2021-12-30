<script type="ts">
  import CommentContainer from "$lib/components/Comments/CommentContainer.svelte";
  import ProfilePicture from "$lib/components/Comments/ProfilePicture.svelte";
  import ProfileName from "$lib/components/Comments/ProfileName.svelte";
  import Button from "$lib/components/Button.svelte";
  import CommentOptions from "$lib/components/Comments/CommentOptions.svelte";

  export let status;
  export let top;
  export let comments;

</script>


<CommentContainer {status} {top}>
  <div class="{$status.active ? 'flex' : 'hidden'} -mt-2 -mx-2 mb-2">
    <Button
      className="text-xs px-2 py-px border border-transparent hover:border-buttonblue-600
        {$status.read ? 'text-buttonblue-600' : 'text-blue-600'}"
      on:click={() => status.toggleRead()}
    >
      <div class="h-2 w-2 mr-1 rounded-full border-2 {$status.read ? 'border-buttonblue-800' : 'border-blue-600 bg-blue-600'}"></div>
      Mark as {$status.read ? 'unread' : 'read'}
    </Button>
    <div class="flex-grow"></div>
    <Button className="text-xs px-2 py-px text-blue-600 border border-transparent hover:border-buttonblue-600">
      Resolve
    </Button>  </div>
  {#each comments as comment, index}
    {#if comments.length <= 2 || index === 0 || index === comments.length - 1 || $status.active}
      <div class="relative flex">
        <div class="absolute top-1 left-[12px] w-px h-full bg-buttonblue-500 {index === comments.length - 1 ? 'hidden' : ''}"></div>
        <ProfilePicture profile={comment.profile} className="mr-[14px]"/>
        <div class="flex-grow">      
          <div class="flex items-center pb-1.5 {$status.active ? 'block' : 'hidden'}">
            <ProfileName name={comment.name} time={comment.time}/>
            <div class="flex -mt-[10px] -mr-2 gap-1 {comment.edit ? 'block' : 'hidden'}">
              <Button
                icon="more_vert"
                tooltip="Edit comment"
                tooltipClass="mt-1 -right-6"
              >
                <CommentOptions position="tr" slot="overlay"/>
              </Button>
            </div>
          </div>
          <div class="flex items-center {$status.active ? '' : 'h-full'} text-[.8rem] text-textblue leading-tight -mb-0.5 {index !== comments.length - 1 ? 'pb-4' : ''}">
            <div>
              {comment.text}
            </div>
          </div>
        </div>
      </div>
    {:else}
      <div class="relative text-xs text-blue-600 pl-[40px] -mt-1 pb-3">
        <div class="absolute top-1 left-[12px] w-px h-full bg-buttonblue-500 {index === comments.length - 1 ? 'hidden' : ''}"></div>
        {comments.length - 2 > 1 ? `${comments.length - 2} more comments` : `1 more comment`}
      </div>
    {/if}
  {/each}
  {#if !$status.active}
  <div class="pl-[40px] pt-1 text-xs hidden group-hover:block text-buttonblue-600">
    Reply ...
  </div>
  {:else}
  <div class="flex items-start border-t border-buttonblue-500 -mx-4 px-4 -mb-3 py-3 mt-3 {$status.read ? 'bg-buttonblue-100' : 'bg-buttonblue-200'} rounded-b">
    <ProfilePicture className="mr-[14px]"/>
    <div class="group relative text-[13px] mt-1 text-buttonblue-600 cursor-text w-full focus:outline-none focus:pb-8" contenteditable="true">
      Reply ...

      <div class="absolute bottom-1 right-1 group-focus:flex hidden gap-3 -mb-2 -mr-2">
        <Button className="text-sm px-2 py-px text-buttonblue-900 border border-transparent hover:border-buttonblue-600">Cancel</Button>
        <Button className="text-sm px-2 py-0.5 bg-buttonblue-900 hover:bg-buttonblue-900 active:bg-buttonblue-900 hover:opacity-95 active:opacity-90 text-white">Save</Button>
      </div>
    </div>
  </div>
  {/if}
</CommentContainer>
