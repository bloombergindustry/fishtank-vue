<template>
  <div class="ft-button--fab-wrapper">

    <BaseButton 
      v-bind="$attrs"
      :style="returnPrimaryFabColor"
      class="ft-button--fab"
      v-on="$listeners"> 

      <slot name="mainIcon"> </slot> 
    </BaseButton>

    <ul>

      <a :href="optionOneLink">
        <li
          :style="returnSecondaryFabColor"> 
          <slot name="option1"> </slot> 
        </li>
      </a>

      <a :href="optionTwoLink">
        <li
          :style="returnSecondaryFabColor">
          <slot name="option2"> </slot> 
        </li>
      </a>

      <a :href="optionThreeLink">
        <li
          :style="returnSecondaryFabColor"> 
          <slot name="option3"> </slot> 
        </li>
      </a>

    </ul>

  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
</template>

<script lang="ts">
import Vue from "vue"
import BaseButton from "./BaseButton.vue"

export default Vue.extend({
  name: "ButtonFAB",
  components: {
    BaseButton
  },
  props:{

    fabColorPrimaryStart :{type: String, required:true, default: "#0018AB"},
    fabColorPrimaryEnd :{type: String, required:true, default: "#9933CC"},
    fabColorSecondary :{type: String, required:true, default: "#777C7F"},

    optionOneLink :{type: String, required:true, default:" "},
    optionTwoLink :{type: String, required:true, default:" "},
    optionThreeLink :{type: String, required:true, default:" "},

    },   
  computed:{
    returnPrimaryFabColor(): string {
      return `background-image:  linear-gradient( 135deg, ${ this.fabColorPrimaryStart } 0%, ${ this.fabColorPrimaryEnd } 100% ); 
      border-image:  linear-gradient( 135deg, ${ this.fabColorPrimaryStart } 0% , ${ this.fabColorPrimaryEnd } 100% ) 1% ; `
    },
    returnSecondaryFabColor(): string {
      return `background:  ${this.fabColorSecondary} ;`
    },
  }
})

</script>
