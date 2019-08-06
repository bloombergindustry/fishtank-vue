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

        <box
          type="div"
          color="white"
          display="flex"
          :padding="6"
          flex-direction="row"
          justify-content="between">

          <tooltip
            orientation="top"
            title="a top oriented Tooltip"
            :custom="true">
            <template v-slot:target>
              <ftext 
                inline
                semi-bold>
                Top 
              </ftext>
            </template>
            <template>
              <box width="200px">
                <p>Popover Top</p>
              </box>
            </template>
          </tooltip>

          <tooltip
            orientation="bottom"
            title="a top oriented Tooltip">
            <template v-slot:target>
              <ftext 
                inline
                semi-bold>
                Bottom 
              </ftext>
            </template>
            <template>
                <p>Popover bottom Content</p>
            </template>
          </tooltip>

          <tooltip
            orientation="left"
            title="a top oriented Tooltip">
            <template v-slot:target>
              <ftext 
                inline
                semi-bold>
                Left 
              </ftext>
            </template>
            <template>
              <p>Popover left Content</p>
            </template>
          </tooltip>

          <tooltip
            orientation="right"
            title="a top oriented Tooltip">
            <template v-slot:target>
              <ftext 
                inline
                semi-bold>
                Right 
              </ftext>
            </template>
            <template>
              <p>Popover right Content</p>
            </template>
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

