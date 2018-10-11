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

      <template v-if="type === 'textarea'">
        /* eslint-disable */
        <textarea
          ref="input"
          :type="type"
          :value="value"
          v-model="textAreaModel"
          :id="labelId"
          :style="{'height':textAreafalseHeight + 'px', 'minHeight':'2.5rem', 'resize': (resize === false ? 'none' : null), 'overflowY':(scrollOn ? 'scroll' : 'hidden')}"
          v-bind="$attrs"
          :rows="calcedTextAreafalseHeight"
          class="ft-input-text__input ft-input-text__input__textarea"
          @keyup="getFalseHeight"
          @keydown.delete="getFalseHeight"
          @keydown.ctrl.86="getFalseHeight"
          @cut="getFalseHeight"
          v-on="listeners"></textarea>/>
        /* eslint-enable */
      </template>
      <template v-else>
        <input
          ref="input"
          :type="type"
          :value="value"
          :id="labelId"
          v-bind="$attrs"
          class="ft-input-text__input"
          v-on="listeners">
      </template>
      <p 
        v-if="type === 'textarea'"
        ref="falseTextarea" 
        class="ft-false-text-area">
        &nbsp;{{ textAreaModel }}
      </p>
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
  model:{
    prop:'modelValue',
    event: 'input'
  },
  props: {
    value: {
      required: false,
      type: String,
      default: ""
    },
    modelValue: {
      type:[String, Boolean, Object, Array, Number],
      default: false
    },
    label: {
      required: false,
      type: String,
      default: undefined
    },
    id:{
      type:String,
      default:null,
      required:false
    },
    maxheight:{
      type:Number,
      default:null,
      required:false
    },
    resize:{
      type:Boolean,
      default:false,
      required:false
    },
    type: {
      required: false,
      default: "text",
      type: String,
      validator: (value: string) => {
        const textTypes = [
          "text",
          "textarea",
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
  data:function(){
    return {
      textAreaModel:"",
      textAreafalseHeight:24,
      calcedTextAreafalseHeight:1,
      scrollOn:false
      }
  },
  computed: {
    labelId(): string {
      return `ft-input-${(this as any)._uid}`
    },
    showRightIcon(): boolean {
      return !!this.$slots.rightIcon || ((this as any).value && (this as any).value.length > 0)
    },
    errorMessage(): string | undefined {
      if (!(this as any).error) {
        return undefined
      }

      if (typeof (this as any).error === "string") {
        return (this as any).error
      } else if ((this as any).error.fullMessage) {
        return (this as any).error.fullMessage
      } else { return undefined }
    },
    listeners(): Record<string, Function | Function[]> {
      return {
        ...this.$listeners,
        input: ($event: any) => {
          this.updateValue($event.target.value)
        }
      }
    },
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
    },
    getFalseHeight(): void{
      if (this.$props.maxheight && (this.$props.maxheight < (this.$refs.falseTextarea as HTMLDivElement).clientHeight)){
        if (!this.scrollOn) this.scrollOn = true
        return
      }
      if (this.$refs.falseTextarea !== undefined) {
        if (this.scrollOn) this.scrollOn = false
        this.textAreafalseHeight = (this.$refs.falseTextarea as HTMLDivElement).clientHeight
      }
    },
  }
})
</script>
