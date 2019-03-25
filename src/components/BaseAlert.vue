<template>
  <div :class="$style.alert">
    <div 
      v-if="hasIcon" 
      :class="$style.icon">
      <slot name="icon"/>
    </div>
    <div :class="(hasIcon ? $style.contentWIcon : $style.content)">
      <div :class="$style.heading">{{ heading }}</div>
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

  .alert {
    padding: $baseline * 3;
    position: relative;
    border-color: $color-black;
    border-width: 1px;
    border-style: solid;
  }

  .icon {
    position: absolute;
    svg {
      height: $baseline * 8;
      width: $baseline * 8;
    }
  }
  .contentWIcon {
    margin-left: $baseline * 11;
  }

  .content {
    @include font-base-sm();
    margin-left: $baseline * 3;
  }

  .heading {
    @include font-base-lg();
    font-weight: $fontweight-semi;
    margin-bottom: $baseline * 2;
  }

</style>
