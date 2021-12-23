<script>
  import Icon from "$lib/components/Icon.svelte";
  import Footnote from "$lib/components/Footnotes/Footnote.svelte";

  let showFootnotes = false;
  let n = 1;
  
</script>
  

<div class="relative">
  <div
    class="absolute flex items-center gap-1 z-40 bottom-0 left-[calc(224px+16px)] text-[13px] text-buttonblue-800 cursor-pointer
      rounded-t bg-bordergray border-t border-l border-r border-buttonblue-500 pl-2 pr-3 pt-0.5 min-w-[136px]"
    on:click={() => {showFootnotes = !showFootnotes}}
  >
    <Icon icon={showFootnotes ? 'keyboard_double_arrow_down' : 'keyboard_double_arrow_up'}/>
    {showFootnotes ? 'Hide footnotes' : 'Show footnotes'}
  </div>
</div>
<div class="relative scrollbar overflow-y-auto w-full border-t-2 border-buttonblue-500 {!showFootnotes ? 'h-0' : 'min-h-[200px]'}">
  <div class="w-[722px] pt-10 pb-8 mx-auto">
    <Footnote n={n++}>
      Purpose can also help with the soft side of management—the people-related aspects of running 
      a business, which so often prove to be the undoing of leaders. By putting purpose at the core 
      of strategy, firms can realize three specific benefits: more-unified organizations, more-motivated 
      stakeholders, and a broader positive impact on society.
    </Footnote>
    <Footnote n={n++}>
      Unifying the organization. When companies pursue dramatic change and move into larger ecosystems,
      as both Mars Petcare and Securitas have done, it’s unsettling for employees. Why does a pet-food 
      company need to develop a platform to support technology start-ups? Why does an on-site guarding 
      company want to provide electronic security services that could, over time, make the physical 
      presence of guards redundant? Purpose helps employees understand the whys and get on board with 
      the new direction.
    </Footnote>
    <Footnote n={n++}>
      Motivating stakeholders. According to the Edelman trust barometer, distrust of government, 
      businesses, the media, and NGOs is now pervasive. At the same time, more than ever, employees, 
      especially Millennials, want to work for organizations that can be trusted to contribute to a 
      higher cause. And when customers, suppliers, and other stakeholders see that a company has a 
      strong higher purpose, they are more likely to trust it and more motivated to interact with it.
    </Footnote>
    <Footnote n={n++}>
      Broadening impact. Strategy involves exploring some fundamental questions. Why are we in this 
      business? What value can we bring? What role does my unit play within the bigger portfolio? 
      Purpose creates a basis for answering those questions and defining how each unit will contribute 
      to the organization and to society as a whole. This focus on collective objectives, in turn, 
      opens up many more opportunities to improve growth and profitability today and in the future.
    </Footnote>
    <Footnote n={n++}>
      The approach to purpose that we’re recommending cannot be a one-off effort. Leaders need to 
      constantly assess how purpose can guide strategy, and they need to be willing to adjust or 
      redefine this relationship as conditions change. That demands a new kind of sustained focus, 
      but the advantages it can confer are legion.
    </Footnote>
  </div>
</div>
