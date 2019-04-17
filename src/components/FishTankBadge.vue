<template>
  <div 
    class="badge">
    <badge-text
      :color="textColor" 
      inline 
      size="baseMd"
      semi-bold>
      <slot />
    </badge-text>
    <!-- <span
      v-if="iconPosition==='right'"
      :class="['icon', {'iconRight': (iconPosition==='right')}]">
      <close-sml-24
        v-if="removable"
        :class="['iconAlignment', {'iconChecked':isChecked}]" />
      <slot />
    </span> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import FishTankText from './FishTankText.vue'

export default Vue.extend({
  components:{
    badgeText:FishTankText
  },
  props:{
    textColor: {type: String, default:'gray'}
  }
})
</script>
<style lang="scss" scoped>
@import '../styles/mixins';
.badge{
  display: inline-block;
  border-radius: 6px;
  background-color: var(--badge-background-color, $color-secondary);
  border: 1px solid var(--badge-border-color, $color-gray-lighter);
  padding: 3px $baseline*2 3px $baseline*2;
  vertical-align: middle;
  }
</style>

