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
            >  This is the 'Company Inbox' content. You are able to see this text because this tab is currently active.
            </FishTankText>
          </FishTankBox>
        </template>
        <template slot="All Tracking">
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
            >  This is the 'All Tracking' content. You are able to see this text because this tab is currently active.
            </FishTankText>
          </FishTankBox>
        </template>
      </FishTankTabs>

      <FishTankTabs
        class="margin-spacing"
        :items ="tabs"
        :divider="true"
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

  data: function(){
    return{
      tabs: [ 
        {label: 'Company Inbox', name: 'Company Inbox'}, 
        {label: 'All Tracking', name: 'All Tracking' }, 
        {label: 'My Assignments', name: 'My Assignments', disabled: true},
        {label: 'Needs Review', name: 'Needs Review'},
        {label: 'Not Tracking', name: 'Not Tracking', hidden: true},
        {label: 'People', name: 'People'},
        {label: 'Search', name: 'Search'}
      ],
      tabs2: [ 
        {label: 'News', name: 'News'}, 
        {label: 'Messages', name: 'Messages'},
        {label: 'Profile', name: 'Profile', disabled: true}
      ]
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
</style>
