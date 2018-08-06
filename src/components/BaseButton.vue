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

function handleFirstTab(e) {
    if (e.keyCode === 9) { // tab key, user is a keyboard user
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
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