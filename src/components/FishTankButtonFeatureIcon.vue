<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="ft-button--feature-label"
    role="button"
    :aria-label="name"
    v-on="$listeners"
  >
    <slot />
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonFeatureIcon",
  introduction: "Feature Icon Button",
  description: "Feature Icon Button",
  token:[`
    <FishTankButtonFeatureIcon> <Alert24/> </FishTankButtonFeatureIcon>
  `],
  components: {
    FishTankBaseButton,
  },
 
  props:{
   name:{
     type: String,
     required: false,
     default: "Feature Icon Button"
   }
  },

  computed:{
    
  }
})
</script>
