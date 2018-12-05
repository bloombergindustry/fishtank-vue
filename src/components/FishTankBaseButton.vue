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
      default: false,
      description:"Specify if button should be disabled"
    },
    block: {
      type: Boolean,
      default: false,
      description: "Changes Button to full width block element"
    },
    name:{
      type: String,
      default:"",
      required:false,
      description: "Optional name of the button, which can be used with the form data."
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