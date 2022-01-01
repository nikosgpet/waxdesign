<script type="ts">
  import DocumentContent from "$lib/components/Document/DocumentContent.svelte";
  import Suggestion from "$lib/components/Comments/Suggestion.svelte";
  import Comment from "$lib/components/Comments/Comment.svelte";
  import { addSuggestion, removeSuggestion, formatSuggestion, soloComment, doubleComment, tripleComment } from '$lib/stores/comments';
  import WelcomeMessage from "$lib/components/Document/WelcomeMessage.svelte";

  export let showOverlay = true;

</script>


<div class="relative scrollbar overflow-y-auto w-full">
  <div class="relative pt-10 pb-16">
    <div class="w-[722px] mx-auto">
      <DocumentContent/>
    </div>
    <div class="absolute flex flex-col items-end right-0 top-0 bottom-0 w-[300px]">
      <Suggestion
        status={addSuggestion}
        top={1400}
        name="You" 
        time="3 hours ago"
        type="Add"
        change="the different strategies adopted by the two leading companies in"
      />
      <Suggestion
        status={removeSuggestion}
        top={1534}
        name="You" 
        time="2 minutes ago"
        type="Remove"
        change="as one would expect"
      />
      <Suggestion
        status={formatSuggestion}
        top={1660}
        name="You" 
        time="now"
        type="Format"
        change="Italic"
      />
      <Comment
        status={tripleComment}
        top={146}
        comments={[{
          name: "Janine Blake",
          time: "3 hours ago",
          text: "A comment with two responses",
          profile: 1,
          edit: false
        }, {
          name: "You",
          time: "16 minutes ago",
          text: "Well this is very interesting, but maybe we should keep it under one paragraph",
          profile: 0,
          edit: true
        }, {
          name: "Janine Blake",
          time: "now",
          text: "Great, I will try to make it shorter",
          profile: 1,
          edit: false
        }]}
      />
      <Comment
        status={soloComment}
        top={658}
        comments={[{
          name: "Janine Blake",
          time: "3 hours ago",
          text: "We need to verify if there is a high resolution version of this image",
          profile: 1,
          edit: false
        }]}
      />
      <Comment
        status={doubleComment}
        top={1110}
        comments={[{
          name: "You",
          time: "2 days ago",
          text: "Maybe rephrase this somehow?",
          profile: 0,
          edit: true
        },
        {
          name: "Janine Blake",
          time: "3 hours ago",
          text: "Yeah, we should think of something else.",
          profile: 1,
          edit: false
        }]}
      />
    </div>
  </div>
</div>

<WelcomeMessage {showOverlay}/>
