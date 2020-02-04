<template>
  <fish-tank-box 
    type="section"
    color="highlight1"
    display="flex"
    direction="column"
    justify-content="center"
    :padding="4">
    <fish-tank-text
      size="headingMd"
      font="accent"
      :bold="true"
      align="center">
      The FishTankTab Component
    </fish-tank-text>

    <fish-tank-text
      class="margin-spacing"
      size="headingSm"
      font="primary"
      :bold="true"
      align="center">
      Center Positioned Large Tabs
    </fish-tank-text>

    <fish-tank-box 
      type="div"
      color="background"
      display="flex"
      direction="column"
      justify-content="center">
      <tabs
        class="margin-spacing"
        :items="tabs"
        :active="activeDefaultTab1"
        tab-size="large"
        @change="activeDefaultTab1=$event.name">
        <template
          v-for="(tab, index) in tabs"
          :slot="tab.name">
          <fish-tank-box
            :key="index"
            type="section"
            :margin="6"> 
            <fish-tank-text
              class="margin-spacing"
              size="baseMd"
              font="primary"
              :italic="true"
              align="left">
              This is the '{{ tab.name }}' content. You are able to see this text because this tab is currently active.
            </fish-tank-text>
          </fish-tank-box>
        </template>
      </tabs>
      <tabs
        class="margin-spacing"
        tab-size="large"
        :items="tabs2"
        :active="activeDefaultTab2"
        @change="test(activeDefaultTab2=$event.name)" />
    </fish-tank-box>

    <fish-tank-text
      class="margin-spacing"
      size="headingSm"
      font="primary"
      :bold="true"
      align="center">
      Side Positioned Small Tabs
    </fish-tank-text>

    <fish-tank-box 
      type="div"
      color="white"
      display="flex"
      direction="row"
      justify-content="between">
      <fish-tank-box 
        type="div"
        color="background"
        display="flex"
        direction="column"
        justify-content="center"
        width="50%"
        :margin="2"
        :padding="4">
        <fish-tank-text
          class="margin-bottom"
          size="baseLg"
          font="primary"
          :bold="true"
          align="left">
          Left Positioned Tabs
        </fish-tank-text>

        <tabs
          class="margin-spacing"
          align="left"
          :active="activeDefaultTab3"
          :items="tabs2"
          @change="test(activeDefaultTab3=$event.name)" />
      </fish-tank-box>

      <fish-tank-box 
        type="div"
        color="background"
        display="flex"
        direction="column"
        justify-content="center"
        width="50%"
        :margin="2"
        :padding="4">
        <fish-tank-text
          class="margin-bottom"
          size="baseLg"
          font="primary"
          :bold="true"
          align="right">
          Right Positioned Tabs
        </fish-tank-text>

        <tabs
          class="margin-spacing"
          align="right"
          :active="activeDefaultTab4"
          :items="tabs2"
          @change="test(activeDefaultTab4=$event.name)" />
      </fish-tank-box>
    </fish-tank-box>

    <fish-tank-text
      class="margin-spacing-notes"
      size="baseLg"
      font="primary"
      :italic="true"
      align="left">  
      <fish-tank-text
        :inline="true"
        :bold="true"> 
        Notes on Tab Positioning :
      </fish-tank-text>
      FishTankTabs' positioning is centered by default. Left and Right Positioning must be done using align property - center, right and left.
    </fish-tank-text>

    <fish-tank-text
      class="margin-spacing-notes"
      size="baseLg"
      font="primary"
      :italic="true"
      align="left">  
      <fish-tank-text
        :inline="true"
        :bold="true"> 
        Notes on Tab Usage :
      </fish-tank-text>
      FishtankTabs are populated by passing in an object array called 'item', which has the properties of active(String), disabled(Boolean), hidden(Boolena), label(String), name(String), and renderHidden(Boolean).
    </fish-tank-text>

    <fish-tank-text
      class="margin-spacing"
      size="headingSm"
      font="primary"
      :bold="true"
      align="center">
      Tab Example Code
    </fish-tank-text>

    <fish-tank-box
      type="div"
      color="white"
      display="flex"
      direction="row"
      align="left">
      <pre class="code-example">
        <code>
          ```html 

          &lt;fishTankTabs
            class="margin-spacing"
            :items="tabs" // generates the tabs (Data Object Array)
            :active="activeDefaultTab"  // set active tab to data value
            tab-size="large" // (optional, default: small) determine tab size
            align="left" // (optional, default: center) determine tab alignment - center, left, right
            header-width="40%" // (optional) override header width. default to 20% * tabNum, or 100%
            @change="activeDefaultTab1=$event.name" // change active tab to emmitted event.name object to change tabs
          &gt;

            // FishTankTab Body Content is generated by slots that correlate with the name of the active tabs
            &lt;template
              v-for="(tab, index) in tabs"
              :slot="tab.name"&gt;
              &lt;FishTankBox 
                :key="index"
                type="section"
                :margin="6"
              &gt; 
                &lt;FishTankText
                  class="margin-spacing"
                  size="baseMd"
                  font="primary"
                  :italic="true"
                  align="left"
                &gt;  This is the <span v-html="'{{ tab.name }}'" /> content. You are able to see this text because this tab is currently active.
                &lt;/FishTankText&gt;
              &lt;/FishTankBox&gt;
            &lt;/template&gt;

            ...

          &lt;/fishTankTabs&gt;

          ```ts

          data(){
            return{
              tabs: [ 
                {label: 'Company Inbox', name: 'Company Inbox'}, 
                {label: 'All Tracking', name: 'All Tracking' }, 
                {label: 'My Assignments', name: 'My Assignments', disabled: true},
                {label: 'Needs Review', name: 'Needs Review'},
                {label: 'People', name: 'People'},
                {label: 'Search', name: 'Search'}
              ],
              activeDefaultTab1: 'Company Inbox'
            }
          },

          ...
        </code>
      </pre>
    </fish-tank-box>
  </fish-tank-box>
</template>

<script lang="ts">

import Vue from 'vue'
import { 
  FishTankBox,
  FishTankText,
  FishTankTabsV2
} from '@/index'

export default Vue.extend({
  components: {
    FishTankBox,
    FishTankText,
    tabs: FishTankTabsV2,
  },

  data(){
    return{
      tabs: [ 
        {label: 'Company Inbox', name: 'Company Inbox'}, 
        {label: 'All Tracking', name: 'All Tracking' }, 
        {label: 'My Assignments', name: 'My Assignments', disabled: true},
        {label: 'Needs Review', name: 'Needs Review'},
        {label: 'People', name: 'People'},
        {label: 'Search', name: 'Search'}
      ],
      tabs2: [ 
        {label: 'News', name: 'News'}, 
        {label: 'Messages', name: 'Messages'},
        {label: 'Profile', name: 'Profile', disabled: true}
      ],
      activeDefaultTab1: 'Company Inbox',
      activeDefaultTab2: 'Messages',
      activeDefaultTab3: 'Messages',
      activeDefaultTab4: 'Messages'
    }
  },
  methods:{
    test(e:any){ //debugger function
      // console.log(e)
    },

    changeTab(itemName:string){
      this.$props.active = itemName
    }
  }
  
})
</script>

<style lang="scss" scoped>
.display-box {
  background-color: #F8F8F8;
}
.margin-spacing{
  margin-top: 48px;
  margin-bottom: 24px;
}
.margin-bottom{
  margin-bottom: 24px; 
}
.margin-spacing-notes{
  margin-top: 24px;
  margin-bottom: 12px;
}
.code-example{
  width: 100%;
  text-align: left; 
  text-wrap: wrap;
}
</style>
