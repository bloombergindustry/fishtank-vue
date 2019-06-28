<template>
  <box 
    type="section" 
    alignItems="center" 
    :padding="4"
  >
    <box
      type="div"
      alignItems="center"
    >

      <FishTankHeading
        color="black"
        font="accent"
        level="1"
        size="headingMd"
        align="center"
        class="title"
      >
        FishTank Tooltip Component
      </FishTankHeading>

      <FishTankText 
        color="black"
        font="accent"
        font-size="base-sm"
        italic
        class="title"
      >
        Hover over text to see Tooltips 
      </FishTankText>
    </box>

    <br/>
    <br/>
    <br/>

    <box
      type="div"
      color="white"
      :padding="6"
      display="flex"
      flex-direction="row"
      justify-content="between"
    >
      <FishTankTooltip
        orientation="top"
        placeholder="a top oriented Tooltip"
      >
        <a href="#"><FishTankText color="link" semiBold
        > Top 
        </FishTankText></a>
      </FishTankTooltip>

      <FishTankTooltip>
        <a href="#"><FishTankText color="link" semiBold
        > Left 
        </FishTankText></a>
      </FishTankTooltip>

      <FishTankTooltip>
        <a href="#"><FishTankText color="link" semiBold
        > Right 
        </FishTankText></a>
      </FishTankTooltip>

      <FishTankTooltip>
        <a href="#"><FishTankText color="link" semiBold
        > Bottom 
        </FishTankText></a>
      </FishTankTooltip>


    </box>
  </box>
</template>

<script lang="ts">
import {
  FishTankBox as box,
  FishTankText,
  FishTankHeading, 
  FishTankTooltip
} from '@/index'

import Vue from 'vue'
export default Vue.extend({
  components:{
    box,
    FishTankText,
    FishTankHeading,
    FishTankTooltip
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

