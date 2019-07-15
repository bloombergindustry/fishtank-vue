<template>
  <FishTankBox 
    type="section"
    color="highlight1"
    display="flex"
    direction="column"
    justify-content="center"
    :padding="4"
>
    <FishTankText
      size="headingMd"
      font="accent"
      :bold="true"
      align="center"
    > The FishTankTab Component</FishTankText>

    <FishTankText
        class="margin-spacing"
        size="headingSm"
        font="primary"
        :bold="true"
        align="center"
    > Center Positioned Tabs</FishTankText>

    <FishTankBox 
      type="div"
      color="white"
      display="flex"
      direction="column"
      justify-content="center"
    >

      <FishTankTabs
        class="margin-spacing"
        :items ="tabs"
        :active="activeDefaultTab1"
        @change="activeDefaultTab1=$event.name"
      >
        <template :slot="tabs[0].name">
          <FishTankBox 
            type="section"
            :margin="6"
          > 
            <FishTankText
              class="margin-spacing"
              size="baseMd"
              font="primary"
              :italic="true"
              align="left"
            >  This is the '{{tabs[0].name}}' content. You are able to see this text because this tab is currently active.
            </FishTankText>
          </FishTankBox>
        </template>

        <template :slot="tabs[1].name">
          <FishTankBox 
            type="section"
            :margin="6"
          > 
            <FishTankText
              class="margin-spacing"
              size="baseMd"
              font="primary"
              :italic="true"
              align="left"
            >  This is the '{{tabs[1].name}}' content. You are able to see this text because this tab is currently active.
            </FishTankText>
          </FishTankBox>
        </template>

        <template :slot="tabs[2].name">
          <FishTankBox 
            type="section"
            :margin="6"
          > 
            <FishTankText
              class="margin-spacing"
              size="baseMd"
              font="primary"
              :italic="true"
              align="left"
            >  This is the '{{tabs[2].name}}' content. You are able to see this text because this tab is currently active.
            </FishTankText>
          </FishTankBox>
        </template>

        <template :slot="tabs[3].name">
          <FishTankBox 
            type="section"
            :margin="6"
          > 
            <FishTankText
              class="margin-spacing"
              size="baseMd"
              font="primary"
              :italic="true"
              align="left"
            >  This is the '{{tabs[3].name}}' content. You are able to see this text because this tab is currently active.
            </FishTankText>
          </FishTankBox>
        </template>

        <template :slot="tabs[4].name">
          <FishTankBox 
            type="section"
            :margin="6"
          > 
            <FishTankText
              class="margin-spacing"
              size="baseMd"
              font="primary"
              :italic="true"
              align="left"
            >  This is the '{{tabs[4].name}}' content. You are able to see this text because this tab is currently active.
            </FishTankText>
          </FishTankBox>
        </template>

        <template :slot="tabs[5].name">
          <FishTankBox 
            type="section"
            :margin="6"
          > 
            <FishTankText
              class="margin-spacing"
              size="baseMd"
              font="primary"
              :italic="true"
              align="left"
            >  This is the '{{tabs[5].name}}' content. You are able to see this text because this tab is currently active.
            </FishTankText>
          </FishTankBox>
        </template>

      </FishTankTabs>
      <FishTankTabs
        class="margin-spacing"
        :items="tabs"
        :divider="true"
        :active="activeDefaultTab2"
        @change="test(activeDefaultTab2=$event.name)"
      ></FishTankTabs>

    </FishTankBox>

    <FishTankText
        class="margin-spacing"
        size="headingSm"
        font="primary"
        :bold="true"
        align="center"
    > Side Positioned Tabs</FishTankText>

    <FishTankBox 
      type="div"
      color="white"
      display="flex"
      direction="row"
      justify-content="between"
    >
      <FishTankBox 
        type="div"
        color="highlight1"
        display="flex"
        direction="column"
        justify-content="center"
        width="50%"
        :margin="2"
        :padding="4"
      >
        <FishTankText
          class="margin-bottom"
          size="baseLg"
          font="primary"
          :bold="true"
          align="left"
        > Left Positioned Tabs</FishTankText>

        <FishTankBox 
          type="div"
          color="white"
          display="flex"
          direction="column"
          alignItems="start"
        >
          <FishTankTabs
            class="margin-spacing"
            :items ="tabs2"
          ></FishTankTabs>

          <FishTankTabs
            class="margin-spacing"
            :items ="tabs2"
            :divider="true"
          ></FishTankTabs>

        </FishTankBox>

      </FishTankBox>

      <FishTankBox 
        type="div"
        color="highlight1"
        display="flex"
        direction="column"
        justify-content="center"
        width="50%"
        :margin="2"
        :padding="4"
      >
        <FishTankText
          class="margin-bottom"
          size="baseLg"
          font="primary"
          :bold="true"
          align="right"
        > Right Positioned Tabs</FishTankText>

        <FishTankBox 
          type="div"
          color="white"
          display="flex"
          direction="column"
          alignItems="end"
        >
          <FishTankTabs
            class="margin-spacing"
            :items ="tabs2"
          ></FishTankTabs>

          <FishTankTabs
            class="margin-spacing"
            :items ="tabs2"
            :divider="true"
          ></FishTankTabs>

        </FishTankBox>

      </FishTankBox>

    </FishTankBox>

    <FishTankText
      class="margin-spacing-notes"
      size="baseLg"
      font="primary"
      :italic="true"
      align="left"
    >  
      <FishTankText
        :inline="true"
        :bold="true"
      > 
        Notes on Tab Positioning :
      </FishTankText>
       FishTankTabs' positioning is centered by default. Left and Right Positioning must be done using styles within a div or a FishTankBox component.
    </FishTankText>

    <FishTankText
      class="margin-spacing-notes"
      size="baseLg"
      font="primary"
      :italic="true"
      align="left"
    >  
      <FishTankText
        :inline="true"
        :bold="true"
      > 
        Notes on Tab Usage :
      </FishTankText>
        FishtankTabs are populated by passing in an object array called 'item', which has the properties of active(String), disabled(Boolean), divider(Boolean), hidden(Boolena), label(String), name(String), and renderHidden(Boolean).
    </FishTankText>

    <FishTankText
        class="margin-spacing"
        size="headingSm"
        font="primary"
        :bold="true"
        align="center"
    > Tab Example Code</FishTankText>

    <FishTankBox
      type="div"
      color="white"
      display="flex"
      direction="row"
      align="left"
    >
      <pre class="code-example">
        <code>
          ```html 

          &lt;fishTankTabs
            class="margin-spacing"
            :items="tabs" // generates the tabs (Data Object Array)
            :divider="true" // determines the existence of the seperation bar
            :active="activeDefaultTab2"  // set active tab to data value
            @change="activeDefaultTab2=$event.name" // change active tab to emmitted event.name object to change tabs
          &gt;

            // FishTankTab Body Content is generated by slots that correlate with the name of the active tabs
            &lt;template :slot="tabs[0].name"&gt;
              &lt;FishTankBox 
                type="section"
                :margin="6"
              &gt; 
                &lt;FishTankText
                  class="margin-spacing"
                  size="baseMd"
                  font="primary"
                  :italic="true"
                  align="left"
                &gt;  This is the '{{tabs[0].name}}' content. You are able to see this text because this tab is currently active.
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
              activeDefaultTab2: 'Company Inbox'
            }
          },

          ...
        </code>
      </pre>
    </FishTankBox>

  </FishTankBox>

</template>

<script lang="ts">

import Vue from 'vue'
import { 
  FishTankBox,
  FishTankText,
  FishTankTabs
} from '@/index'


import { 
  Alert24
  } from "@fishtank/icons-vue"


export default Vue.extend({
  components: {
    FishTankBox,
    FishTankText,
    FishTankTabs,
    Alert24
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
      activeDefaultTab2: 'Company Inbox'
    }
  },
  methods:{
    test(e:any){ //debugger function
      console.log(e)
    },

    changeTab(itemName:string){
      this.$props.active = itemName
    }
  }
  
})
</script>

<style lang="scss" scoped>
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
