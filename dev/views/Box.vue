<template>
  <section>
    <fswitch label="Toggle Background color to show breakpoints" v-model="toggle"/>

    <layout :container="container" :class="{'exampleFixed':toggle}" tag="nav" fluid>
      <fish-tank-box color="grayLightest" display="flex" wrap flex="grow" :padding="2">Fully Fluid Nav</fish-tank-box>
    </layout>


    <layout :container="container" :class="{'exampleFixed':toggle}" tag="nav" fluid>
      <layout tag="footer" fluid>
        <fish-tank-box color="grayLightest" display="flex" wrap flex="grow" :padding="2">Fluid nav</fish-tank-box>
      </layout>
    </layout>
    <layout :container="container" :class="{'exampleFixed':toggle}">
      <layout :xs-column="12" :md-column="6" :lg-column="4" :xl-column="10" tag="main">
        <fish-tank-box
          display="flex"
          flex="grow">
          <fish-tank-box
            color="highlight1"
            :padding-x="4"
            :xs-column="12"
            :sm-column="8"
            :lg-column="4">
            main column
            <fish-tank-text>
              Text in a FishTankBox component
            </fish-tank-text>
            <br>
            <br>
          </fish-tank-box>
          <fish-tank-box
            color="highlight2"
            :padding-x="4">
            <fish-tank-text>
              Text in a FishTankBox component
            </fish-tank-text>
          </fish-tank-box>
        </fish-tank-box>
      </layout>
      <layout :xs-column="12" :md-column="6" :lg-column="8" :xl-column="2" tag="aside">
        <fish-tank-box
          color="action"
          :padding="4">
          sidebar
          <fish-tank-text>
            Text in a FishTankBox component in a 8 column space
          </fish-tank-text>
        </fish-tank-box>
      </layout>
    </layout>
    <layout :container="container" :class="{'exampleFixed':toggle}" tag="nav" fluid>
      <layout tag="footer" fluid>
        <fish-tank-box
          class="customFooterClass"
          :padding="4"
          display="flex" 
          wrap 
          flex="grow">
          <fish-tank-text color="white">
            Text in a FishTankBox component in a 8 column space
          </fish-tank-text>
        </fish-tank-box>
      </layout>
      <!-- <fish-tank-box
        tag="section"
        display="flex"
        justify-content="between">
        
      </fish-tank-box>
      <fish-tank-box
        display="flex"
        justify-content="between">
        
        <fish-tank-box
          color="btaxOrange">
          <fish-tank-text>
            Text in another box justified in the remaining space, shared equally
          </fish-tank-text>
        </fish-tank-box>
        <fish-tank-box color="white">
          <fish-tank-text color="error">
            Text in another box justified in the remaining space, shared equally
          </fish-tank-text>
        </fish-tank-box>
      </fish-tank-box> -->
    </layout>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { FishTankText, FishTankBox , FishTankLayout, FishTankCheckboxV2} from "@/index"

export default Vue.extend({
  components: {
    FishTankText,
    FishTankBox,
    layout:FishTankLayout,
    fswitch:FishTankCheckboxV2
  },
  data () {
    return {
      container:true,
      textColor: 'black',
      textSize: 'baseLg',
      bold: false,
      semiBold: false,
      inline: false,
      italic: false,
      align: 'left',
      font:'primary',
      toggle:false,
    }
  }
})
</script>
<style scoped>
  /* .text-wrapper {
    width: 500px;
    border: 1px solid lightgray;
    padding: .5rem;
  } */
.customFooterClass{
  background-color: blue;
}
.growClass{
  flex-grow: 1;
}
.exampleFixed{
  background-color: cyan;
}
@media only screen and (min-width: 480px) {
  .exampleFixed{
    background-color: cadetblue;
  }
}

@media only screen and (min-width: 752px) {
  .exampleFixed{
    background-color: yellow;
  }
}
@media only screen and (min-width: 1008px) {
  .exampleFixed{
    background-color: pink;
  }
}
@media only screen and (min-width: 1440px) {
  .exampleFixed{
    background-color: orange;
  }
}
</style>


