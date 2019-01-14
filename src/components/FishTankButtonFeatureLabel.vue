<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="button--feature-label"
    v-on="$listeners"
  >

    <slot name="icon"/> 
    <p> 
      <slot name="label" />
    </p>

  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonFeatureLabel",
  introduction: "Feature Label Button",
  description: "Feature Label Button",
  token:[`
    <FishTankButtonFeatureLabel> 
      <template slot="icon"> <Alert24/> </template>
      <template slot="label"> Set Alert</template>
    </FishTankButtonFeatureLabel>
  `],
  components: {
    FishTankBaseButton
  }
})
</script>

<style lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .button--feature-label{
    padding: 0px ;
    margin: 0px;
    height: 100%;
    background-color: transparent;
    border-color: transparent;
    border-radius: 4px;
    color: $color-gray;
  
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &:hover{
      color: $color-black;
      background-color: $color-gray-lightest;
      svg {
        fill: $color-black;
      }
    }
    &:active{
      color: $color-black;
      background-color: $color-secondary-darker;
    }
    &:disabled{
      color: $color-gray-lighter;
      background: transparent;
    }

    p{
      margin:  0px;
      padding: 0px 4px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.1px;
      line-height: 20px;
    }
}
</style>
