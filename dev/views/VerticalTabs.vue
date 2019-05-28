<template>
  <FishTankBox 
    type="section"
    color="highlight1"
    display="flex"
    direction="column"
    justify-content="start"
    :padding="4"
>
    <FishTankText
      size="headingMd"
      font="accent"
      :bold="true"
      align="center"
    > The Vertical FishTankTab Component</FishTankText>

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
      :padding="6"
    >

      <FishTankVerticalTabs
        class="margin-spacing"
        :items ="tabs"
        :active="activeDefaultTab1"
        @change="activeDefaultTab1=$event.name"
      >
        <template :slot="tabs[0].name">
            <CardV2
              class="margin-side"
              :heading="tabs[0].name"
            >
              <FishTankText
                class="padding-spacing"
                size="baseMd"
                font="primary"
                :italic="true"
                align="left"
              >  This is the '{{tabs[0].name}}' content. You are able to see this text because this tab is currently active.
              </FishTankText>
            </CardV2>
        </template>

        <template :slot="tabs[1].name">
     
            <CardV2
              class="margin-side"
              :heading="tabs[1].name"
            >
              <FishTankText
                class="padding-spacing"
                size="baseMd"
                font="primary"
                :italic="true"
                align="left"
              >  This is the '{{tabs[1].name}}' content. You are able to see this text because this tab is currently active.
              </FishTankText>
            </CardV2>
        </template>

        <template :slot="tabs[2].name">
         
            <CardV2
              class="margin-side"
              :heading="tabs[2].name"
            >
              <FishTankText
                class="padding-spacing"
                size="baseMd"
                font="primary"
                :italic="true"
                align="left"
              >  This is the '{{tabs[2].name}}' content. You are able to see this text because this tab is currently active.
              </FishTankText>
            </CardV2>
        </template>

        <template :slot="tabs[3].name">
    
            <CardV2
              class="margin-side"
              :heading="tabs[3].name"
            >
              <FishTankText
                class="padding-spacing"
                size="baseMd"
                font="primary"
                :italic="true"
                align="left"
              >  This is the '{{tabs[3].name}}' content. You are able to see this text because this tab is currently active.
              </FishTankText>
            </CardV2>
        </template>

        <template :slot="tabs[4].name">
         
            <CardV2
              class="margin-side"
              :heading="tabs[4].name"
            >
              <FishTankText
                class="padding-spacing"
                size="baseMd"
                font="primary"
                :italic="true"
                align="left"
              >  This is the '{{tabs[4].name}}' content. You are able to see this text because this tab is currently active.
              </FishTankText>
            </CardV2>
        </template>

        <template :slot="tabs[5].name">
         
            <CardV2
              class="margin-side"
              :heading="tabs[5].name"
            >
              <FishTankText
                class="padding-spacing"
                size="baseMd"
                font="primary"
                :italic="true"
                align="left"
              >  This is the '{{tabs[5].name}}' content. You are able to see this text because this tab is currently active.
              </FishTankText>
            </CardV2>
        </template>

      </FishTankVerticalTabs>

      <FishTankVerticalTabs
        class="margin-spacing"
        :items="tabs"
        :divider="true"
        :active="activeDefaultTab2"
        @change="test(activeDefaultTab2=$event.name)"
      ></FishTankVerticalTabs>

    </FishTankBox>

  </FishTankBox>

</template>

<script lang="ts">

import Vue from 'vue'
import { 
  FishTankBox,
  FishTankText,
  FishTankVerticalTabs,
  CardV2
} from '@/index'


import { 
  Alert24
  } from "@fishtank/icons-vue"


export default Vue.extend({
  components: {
    FishTankBox,
    FishTankText,
    FishTankVerticalTabs,
    CardV2,
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
      activeDefaultTab2: 'Company Inbox',
      CompanyInboxColor: "#3DA774"
    }
  },
  methods:{
    test(e:any){ //debugger function
      console.log(e)
    },

    changeTab(itemName:string){
      this.$props.active = itemName
      console.log("test")
    }
  }
  
})
</script>

<style lang="scss" scoped>
.margin-spacing{
  margin-top: 48px;
  margin-bottom: 24px;
}
.padding-spacing{
  padding: 12px;
}
.margin-side{
  margin: 0px 24px;
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
