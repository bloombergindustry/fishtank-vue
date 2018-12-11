<template>
  <div class="ft-button--fab-wrapper">

    <FishTankBaseButton 
      v-bind="$attrs"
      :style="returnPrimaryFabColor"
      class="ft-button--fab" 
      v-on="$listeners"
      @click="openDrawer"> 

      <slot name="mainIcon"/> 
    </FishTankBaseButton>

    <ul 
      v-if="optionsAvailable"
      id="drawer"
      class="activeDrawer"
      
    >

      <a 
        :href="optionOneLink">
        <li :style="returnSecondaryFabColor" > 

          <slot name="option1"/> 
        </li>
      </a>

      <a 
        :href="optionTwoLink">
        <li
          :style="returnSecondaryFabColor" >
          <slot name="option2"/> 
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
    openDrawer(){
      var drawer = document.getElementById("drawer")

      if (drawer){
        drawer.classList.add("activeDrawer")
      }

    }
  }
})

</script>
