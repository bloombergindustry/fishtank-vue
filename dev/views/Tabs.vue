<template>
  <FishTankBox 
    type="section"
    color="highlight1"
    display="flex"
    direction="column"
    justify-content="center"
>
    <FishTankText
      size="headingMd"
      font="accent"
      :bold="true"
      align="center"
      class="margin-spacing"
    > The Fish Tank Tab Component</FishTankText>

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
      :margin="4"
    >

      <FishTankTabs
        class="margin-spacing"
        :items ="tabs"
      ></FishTankTabs>

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
      :margin="4"
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
    <p><i> Note on Tab Usage: How to Start using this component. I.E. It takes in an array and shows/hides content based on said array.</i></p>

    <p><i> Note on Tab Positioning: Best way to position your tab component is within other divs or box comopnent, tabs itself are centered.</i></p>
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
        {label: 'Groups', name: 'Groups' }, 
        {label: 'Messages', name: 'Messages', disabled: true},
        {label: 'Profile', name: 'Profile'}
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.margin-spacing{
  margin-top: 24px;
  margin-bottom: 24px;
}
.margin-bottom{
  margin-bottom: 24px; 
}
</style>
