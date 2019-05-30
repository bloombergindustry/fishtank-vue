<template>
  <span
   :class="[highlight === 'highlight2' ? 'highlight2': 'highlight1',highlight === 'highlight3' ? 'highlight3': 'highlight1']"
  >
    <slot/>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props:{
    highlight: {
      type: String,
      required: false,
      default: "highlight1",
      description: "highlight color"
    }
  }
  
})
</script>

<style lang="scss" scoped>
@import '../styles/mixins';
@import "../../node_modules/@fishtank/colors/dist/index";
@import "../../node_modules/@fishtank/type/dist/index";


.highlight1{
  background-color: $color-highlight-1;
  padding: 0px $baseline;
}

.highlight2{
  background-color: $color-highlight-2;
  padding: 0px $baseline;
}

.highlight3{
  background-color: $color-highlight-3;
  padding: 0px $baseline;
}
</style>


