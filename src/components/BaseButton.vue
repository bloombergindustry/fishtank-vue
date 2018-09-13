<template>
  <button
    :class="{ 'ft-button': true, 'ft-button--disabled': disabled, 'ft-button--block': block }"
    :disabled="disabled"
    v-on="listeners"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from "vue"

function handleFirstTab(e:KeyboardEvent) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');
    
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove('user-is-tabbing');
  
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}

window.addEventListener('keydown', handleFirstTab);


export default Vue.extend({
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
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