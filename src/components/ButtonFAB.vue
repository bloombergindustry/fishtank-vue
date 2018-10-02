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
      <!--- Commented out for Experimentation
      <li
        v-for="fablink in fabOption" 
        :style="returnSecondaryFabColor" >

        <a :href="fablink.link" > {{ fablink.icon }} </a>

        <p> {{ fablink.text }} </p>

      </li> 
      End of Commented out section ---> 

      <li
        :style="returnSecondaryFabColor"> 
        <slot name="option1"> </slot> 
      </li>
      <li
        :style="returnSecondaryFabColor">
        <slot name="option2"> </slot> 
      </li>
      <li
        :style="returnSecondaryFabColor"> 
        <slot name="option3"> </slot> 
      </li>

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
    fabOption :{type: String, required:true, default: "!"},
    fabColorPrimaryStart :{type: String, required:true, default: "#0018AB"},
    fabColorPrimaryEnd :{type: String, required:true, default: "#9933CC"},
    fabColorSecondary :{type: String, required:true, default: "#777C7F"},
    },   
  computed:{
    returnPrimaryFabColor(): string {
      return `background-image:  linear-gradient( to right, ${ this.fabColorPrimaryStart }, ${ this.fabColorPrimaryEnd } ); 
      border-image:  linear-gradient( to right, ${ this.fabColorPrimaryStart }, ${ this.fabColorPrimaryEnd } 100% ) 1% ; `
    },
    returnSecondaryFabColor(): string {
      return `background:  ${this.fabColorSecondary} ;`
    },
  }
})

</script>
