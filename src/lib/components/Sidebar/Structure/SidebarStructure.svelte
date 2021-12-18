<script type="ts">
  import SidebarTitle from "$lib/components/Sidebar/Structure/SidebarTitle.svelte";
  import SidebarHeading from "$lib/components/Sidebar/SidebarHeading.svelte";

</script>

<div class="scrollbar w-44 flex flex-col h-full overflow-y-auto border-r border-r-bordergray">
  <SidebarHeading title="Preface" className="mx-1.5"/>
  <SidebarTitle title="Preface"/>
  <SidebarTitle title="Acknowledgements"/>
  
  <SidebarHeading title="Part One" className="mx-1.5"/>
  <SidebarTitle title="Creating Blue Oceans"/>
  <SidebarTitle title="Analytical Tools and Frameworks"/>

  <SidebarHeading title="Part Two" className="mx-1.5"/>
  <SidebarTitle title="Reconstruct Market Boundaries"/>
  <SidebarTitle title="Focus on the Big Picture, Not the Numbers"/>
  <SidebarTitle title="Reach Beyond Existing Demand"/>
  <SidebarTitle title="Get the Strategic Sequence Right"/>

  <SidebarHeading title="Part Three" className="mx-1.5"/>
  <SidebarTitle title="Overcome Key Organizational Hurdles "/>
  <SidebarTitle title="Build Execution into Strategy"/>
  <SidebarTitle title="Putting Purpose at the Core of Your Strategy" active={true}/>
  <SidebarTitle title="Conclusion: The Sustainability and Renewal of Blue Ocean Strategy"/>

  <SidebarHeading title="Appendix" className="mx-1.5"/>
  <SidebarTitle title="Appendix A"/>
  <SidebarTitle title="Appendix B"/>
  <SidebarTitle title="Appendix C"/>

  <SidebarHeading title="Postface" className="mx-1.5"/>
  <SidebarTitle title="Notes"/>
  <SidebarTitle title="Bibliography"/>
  <SidebarTitle title="Index"/>
  <SidebarTitle title="About the Authors"/>
</div>

