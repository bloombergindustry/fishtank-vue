<template>
  <BaseButton
    v-bind="$attrs"
    class="ft-button--feature-label"
    v-on="$listeners"
  >
    <CalendarIcon/>
    <p> <slot/></p>
  </BaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import { Calendar24 as CalendarIcon} from "@fishtank/icons-vue"
import BaseButton from "./BaseButton.vue"



export default Vue.extend({
  name: "ButtonFeatureLabel",
  components: {
    BaseButton,
    CalendarIcon,
  }
})
</script>
