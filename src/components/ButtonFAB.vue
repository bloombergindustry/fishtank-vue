<template>
  <div class="ft-button--fab-wrapper">

    <BaseButton 
      v-bind="$attrs"
      :style="returnPrimaryFabColor"
      class="ft-button--fab"
      v-on="$listeners">

      <p> <slot/> </p>
    </BaseButton>

    <ul>
      <li
        v-for="fablink in fabOption" 
        :style="returnSecondaryFabColor" >

        <a :href="fablink.link" > {{ fablink.icon }} </a>

        <p> {{ fablink.text }} </p>

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
    fabColorPrimary :{type: String, required:true, default: "#292E31"},
    fabColorSecondary :{type: String, required:true, default: "#777C7F"},
    },   
  computed:{
    returnPrimaryFabColor(): string {
      return `background:  ${this.fabColorPrimary} ;`
    },
    returnSecondaryFabColor(): string {
      return `background:  ${this.fabColorSecondary} ;`
    },
  }
})

</script>
