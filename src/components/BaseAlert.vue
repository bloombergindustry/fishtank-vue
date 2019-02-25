<template>
  <div :class="$style.alert">
    <div 
      v-if="hasIcon" 
      :class="$style.alertIcon">
      <slot name="icon"/>
    </div>
    <div :class="(hasIcon ? $style.alertContentWIcon : $style.alertContent)">
      <div :class="$style.alertHeading">{{ heading }}</div>
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "BaseAlert",
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  computed: {
    hasIcon(): boolean {
      return !!this.$slots.icon
    }
  }
})
</script>

<style module lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";
  

  .alert {
    padding: $baseline * 3;
    position: relative;
    border-color: $color-black;
    border-width: 1px;
    border-style: solid;
  }

  .alertIcon {
    position: absolute;
  }
  .alertIconSvg {
    height: $baseline * 8;
    width: $baseline * 8;
  }
  .alertContentWIcon {
    margin-left: $baseline * 11;
  }

  .alertContent {
    @include font-base-sm();
    margin-left: $baseline * 3;
  }

  .alertHeading {
    @include font-base-lg();
    font-weight: $fontweight-semi;
    margin-bottom: $baseline * 2;
  }

</style>
