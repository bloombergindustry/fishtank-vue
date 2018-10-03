<template>
  <BaseButton
    v-bind="$attrs"
    class="ft-button--feature-label"
    v-on="$listeners"
  >

    <ButtonFeatureIcon> 
      <slot name="icon"/> 
    </ButtonFeatureIcon>

    <p> 
      <slot name="label" />
    </p>

  </BaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import BaseButton from "./BaseButton.vue"

import ButtonFeatureIcon from "./ButtonFeatureIcon.vue"

export default Vue.extend({
  name: "ButtonFeatureLabel",
  components: {
    BaseButton,
    ButtonFeatureIcon,
  }
})
</script>
