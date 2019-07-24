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
            label="a top oriented Tooltip">
            <a href>
              <ftext 
                color="link"
                inline
                semi-bold>
                Top 
              </ftext>
            </a>
          </tooltip>

          <tooltip
            orientation="left-start"
            label="a left oriented Tooltip">
            <a href>
              <ftext 
                color="link" 
                semi-bold>
                Left 
              </ftext>
            </a>
          </tooltip>

          <tooltip
            orientation="bottom-start"
            label="a bottom oriented Tooltip">
            <a href>
              <ftext 
                color="link" 
                semi-bold>
                Bottom 
              </ftext>
            </a>
          </tooltip>

          <tooltip
            orientation="right-start"
            label="a right oriented Tooltip">
            <a href>
              <ftext 
                color="link"
                semi-bold>
                Right 
              </ftext>
            </a>
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

