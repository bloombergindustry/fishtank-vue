<template>
  <button
    :class="{ 'ft-button': true, 'ft-button--disabled': disabled, 'ft-button--block': block }"
    :disabled="disabled"
    type="button"
    v-on="listeners"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from "vue"
import a11y from '@/util/a11y'

export default Vue.extend({
  name: "BaseButton",
  mixins:[
    a11y
  ],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    name:{
      type: String,
      default:"",
      required:false
    }
  },
  computed: {
    listeners(): Record<string, Function | Function[]> {
      return {
        ...this.$listeners,
        click: ($event: MouseEvent) => {
          if (this.disabled) return
          this.$emit("click", $event)
        }
      }
    },
  }
})
</script>