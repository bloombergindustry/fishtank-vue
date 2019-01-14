<template>
  <div class="alert">
    <div 
      v-if="hasIcon" 
      class="alert__icon"
    >
      <slot name="icon"/>
    </div>
    <div class="alert__content">
      <div class="alert__heading">{{ heading }}</div>
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

<style lang="scss">

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

  .alert__icon {
    position: absolute;

    svg {
      height: $baseline * 8;
      width: $baseline * 8;
    }

     &+ .ft-alert__content {
      margin-left: $baseline * 11;
    }
  }

  .alert__content {
    @include font-base-sm();
    margin-left: $baseline * 3;
  }

  .alert__heading {
    @include font-base-lg();
    font-weight: $fontweight-semi;
    margin-bottom: $baseline * 2;
  }

</style>
