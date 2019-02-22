<template>
  <div class="button--fab-wrapper">
    <fish-tank-base-button 
      v-bind="$attrs"
      :style="returnPrimaryFabColor"
      class="button--fab" 
      v-on="$listeners"> 
      <slot name="mainIcon" /> 
    </fish-tank-base-button>

    <ul 
      v-if="optionsAvailable">
      <a 
        :href="optionOneLink">
        <li :style="returnSecondaryFabColor"> 
          <slot name="option1" /> 
        </li>
      </a>

      <a 
        :href="optionTwoLink">
        <li
          :style="returnSecondaryFabColor">
          <slot name="option2" /> 
        </li>
      </a>
    </ul>
  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "ButtonFAB",
  components: {
    FishTankBaseButton
  },
  props:{
    optionsAvailable: {
      type: Boolean, 
      required:true, 
      default: false },

    fabColorPrimaryStart :{
      type: String, 
      required:true, 
      default: "#0018AB"},

    fabColorPrimaryEnd :{
      type: String, 
      required:true, 
      default: "#9933CC"},

    fabColorSecondary :{
      type: String, 
      required:true, 
      default: "#777C7F"},

    optionOneLink :{
      type: String, 
      required:true, 
      default:" "},

    optionTwoLink :{
      type: String, 
      required:true, 
      default:" "},

    },   
  computed:{
    returnPrimaryFabColor(): string {
      return `background-image:  linear-gradient( 135deg, ${ this.fabColorPrimaryStart } 0%, ${ this.fabColorPrimaryEnd } 100% ); 
      border-image:  linear-gradient( 135deg, ${ this.fabColorPrimaryStart } 0% , ${ this.fabColorPrimaryEnd } 100% ) 1% ; `
    },
    returnSecondaryFabColor(): string {
      return `background:  ${this.fabColorSecondary} ;`
    },
  },
  methods:{
  }
})

</script>

<style lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .button--fab-wrapper{
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 49;
  display: flex;
  flex-direction: center;
  align-items: center;
  border-color: $color-action;
  background-color: none;
  text-align: center;

  .button--fab{
    position: relative;
    z-index: 50;
    background-color: $color-black;
    border-image: transparent;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    font-size: 6em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
    transition: all .3s ease-in-out;
  
    &:hover{
      transform: scale(1.25);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    }
  }
  
  svg{
    fill : $color-white;
    path{
      fill: $color-white;
    }
  }
  
  &:hover ul{
    transition: 0.5s ease-in;
    bottom: 50px;
    opacity: 1;

   li p{
      right: 70px;
      opacity: 1;
      transition: 0.3s ease-in;
   }
   
  }

  p, a{
    text-decoration: none;
    color: $color-white;
  }

  ul{
    opacity: 0;
    list-style-type: none;
    padding: 0px;
    width: 100%;
    position: absolute;
    z-index: 49;
    bottom: 0px;
    margin-bottom: 0;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    transition: all 0.15s ease-in-out;
  }

  li{
    background: $color-gray;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 12px;
    position: relative;

    font-size: 2em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    transition: all .5s ease-in-out;

    &:hover{
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      transform: scale(1.25);
    }

    svg{
      align-self: center;
    }

    a{
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    p{
      opacity: 0;
      color: $color-black;
      font-size: 0.5em;
      position: absolute;
      z-index: 499;
      right: 0px;
      top: -12px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: center;
      text-align: left;
    }
  }
}
</style>