<template>
  <div class="ft-button--fab-wrapper">

  <BaseButton v-bind="$attrs" v-on="$listeners" class="ft-button--fab">
    <p> <slot/> </p>
  </BaseButton>

  <ul>
   <li v-for="fablink in fabOption">
   <a href="#"> {{fablink.icon}} </a>
   <p>{{fablink.text}} </p>
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
  props:['fabOption'],   
  computed:{
    
  }
})

</script>
