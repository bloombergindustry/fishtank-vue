<template>
  <div
    :class="{ 'ft-input-text--error': !!errorMessage }"
    class="ft-input-text"
  >
    <div
      v-if="label"
      class="ft-input-text__label-wrapper"
    >
      <label
        :for="labelId"
        class="ft-input-text__label"
      >
        {{ label }}
      </label>

      <span class="ft-input-text__auxillary-slot">
        <slot name="auxillary"/>
      </span>
    </div>
    <div
      class="ft-input-text__input-wrapper"
    >
      <span
        v-if="$slots.leftIcon"
        class="ft-input-text__left-icon"
      >
        <slot name="leftIcon"/>
      </span>

      <input
        ref="input"
        :type="type"
        :value="value"
        :id="labelId"
        v-bind="$attrs"
        class="ft-input-text__input"
        v-on="listeners"
      >

      <span
        v-if="showRightIcon"
        class="ft-input-text__right-icon"
      >
        <slot name="rightIcon">
          <span
            class="ft-input-text__input-clear"
            @click="clearText"
          >
            <CloseIcon/>
          </span>
        </slot>
      </span>

    </div>

    <div
      v-if="errorMessage"
      class="ft-input-text__error-text"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Close24 as CloseIcon }  from "@fishtank/icons-vue"

export default Vue.extend({
  components: {
    CloseIcon: CloseIcon
  },
  inheritAttrs: false,
  props: {
    value: {
      required: false,
      type: String,
      default: ""
    },
    label: {
      required: false,
      type: String,
      default: undefined
    },
    type: {
      required: false,
      default: "text",
      type: String,
      validator: (value: string) => {
        const textTypes = [
          "text",
          "password",
          "email",
          "search",
          "number",
          "tel",
          "url",
          "textarea"
        ]

        return textTypes.indexOf(value.toLowerCase()) > -1
      }
    },
    error: {
      required: false,
      default: null,
      type: [String, Object],
      validator(value: string | { fullMessage? : string }) : boolean {
        if (typeof value === 'string') {
          return true
        }

        if (value.fullMessage) {
          return true
        }

        // eslint-disable-next-line no-console
        console.warn("InputText's `error` prop should be a string or an object with a `fullMessage` string property")
        return false
      }
    }
  },
  computed: {
    labelId(): string {
      return `ft-input-${(this as any)._uid}`
    },
    showRightIcon(): boolean {
      return !!this.$slots.rightIcon || (this.value && this.value.length > 0)
    },
    errorMessage(): string | undefined {
      if (!this.error) {
        return undefined
      }

      if (typeof this.error === "string") {
        return this.error
      } else if (this.error.fullMessage) {
        return this.error.fullMessage
      } else { return undefined }
    },
    listeners(): Record<string, Function | Function[]> {
      return {
        ...this.$listeners,
        input: ($event: any) => {
          this.updateValue($event.target.value)
        }
      }
    }
  },
  methods: {
    updateValue(value: string | undefined) {
      this.$emit("input", value)
    },
    clearText() {
      this.updateValue(undefined)
      this.focusElement(this.$refs.input as HTMLInputElement)
    },
    focusElement(element: HTMLElement) {
      element.focus()
    }
  }
})
</script>