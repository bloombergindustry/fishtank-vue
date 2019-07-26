<template>
  <container as="main">
    <column>
      <box 
        type="section" 
        align-items="center" 
        :padding="4">
        <box
          type="div"
          align-items="center">
          <heading
            color="black"
            font="accent"
            level="1"
            size="headingMd"
            align="center"
            class="title">
            FishTank Tooltip Component
          </heading>

          <ftext 
            color="black"
            font="accent"
            font-size="base-sm"
            italic
            class="title">
            Hover over text to see Tooltips 
          </ftext>
          <input type="text" v-model="update">
        </box>

        <br>
        <br>
        <br>

        <box
          type="div"
          color="white"
          display="flex"
          :padding="6"
          flex-direction="row"
          justify-content="between">
          <tooltip
            orientation="top-start"
            title="a top oriented Tooltip">
            <ftext 
              inline
              semi-bold>
              Top 
            </ftext>
          </tooltip>

          <tooltip
            orientation="left-start"
            title="A semantic title">
            <ftext 
              semi-bold>
              Left 
            </ftext>
            <template v-slot:customContent>
              <p>{{ update }}</p>
              <div>
                this is the custom content in the tool tip
              </div>
              <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
              </ul>
            </template>
          </tooltip>
          
          <tooltip
            orientation="bottom-start"
            title="a bottom oriented Tooltip">
            <ftext 
              semi-bold>
              Bottom 
            </ftext>
          </tooltip>

          <tooltip
            orientation="right-start"
            title="a right oriented Tooltip">
            <ftext 
              semi-bold>
              Right 
            </ftext>
          </tooltip>
        </box>
      </box>
    </column>
  </container>
</template>

<script lang="ts">
import {
  FishTankBox as box,
  FishTankContainer as container,
  FishTankColumn as column,
  FishTankText,
  FishTankHeading, 
  FishTankTooltip
} from '@/index'

import Vue from 'vue'
export default Vue.extend({
  components:{
    box,
    ftext:FishTankText,
    heading:FishTankHeading,
    tooltip:FishTankTooltip,
    container,
    column
  },
  data(){
    return {
      update:''
    }
  }
})
</script>

<style lang="scss" scoped>
.title{
  text-align: center;
}

a{
  text-decoration: none;
}
</style>

