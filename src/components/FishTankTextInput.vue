<template>
  <div
    :class="['text-input',{ 'error': !!errorMessage }]">
    <div :class="orientation">
      <div
        v-if="label"
        class="label-wrapper">
        <label
          :for="(id || `textinput-${identifier}-id`)"
          class="label">
          <ftext bold primary uppercase size="baseMd" :color="getColor">{{ label }}
            <span
              v-if="required"
              class="label-required">
            *
            </span>
          </ftext>
        </label>

        <span
          v-if="$slots.auxillary"
          class="auxillary-slot">
          <slot name="auxillary"/>
        </span>
      </div>
      <div
        :class="['input-wrapper', {'a11y': isFocused}]">
        <span v-if="$slots.leftIcon"
          class="left-icon">
          <slot name="leftIcon"></slot>
        </span>
        <input
          ref="input"
          :type="type"
          :value="value"
          :id="(id || `textinput-${identifier}-id`)"
          v-bind="$attrs"
          :class="['input-element', {'error-state':errorMessage}]"
          :aria-describedby="( id !== null ? `${id}-error-message`:`textinput-error-message-${identifier}-id`)"
          @input="checkError(), updateValue "
          @blur="$emit('blur', $event), isFocused=false"
          @focus=" $emit('focus', $event), isFocused=true"
          v-on="listeners">
        <span
          v-if="!numberType"
          class="right-icon">
          <slot name="rightIcon"/>
        </span>
        <span
          v-if="isFocused && (value.length >0)"
          class="clear"
          @click="clearText">
          <CloseIcon/>
        </span>
        <slot name="below" />
      </div>
    </div>
    

    <div
      v-if="errorMessage"
      id="error-block"
      :class="{'error-text':errorMessage}"
    > 
      <span
        class="error-icon">
        <WarningIcon/>
      </span>
      <p
        :id="( id !== null ? `${id}-error-message`:`textinput-error-message-${identifier}-id`)"
        class="error-message"> {{ errorMessage }} </p>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from "vue"
import {textInput, orientation} from "../util/mixins"

import { 
  CloseSml24 as CloseIcon, 
  Warning24 as WarningIcon
  }  from "@fishtank/icons-vue"
import FishTankText  from './FishTankText.vue';
export default Vue.extend({
  components: {
    CloseIcon: CloseIcon,
    WarningIcon: WarningIcon,
    ftext:FishTankText
  },
  props:{ 
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
        ]

        return textTypes.indexOf(value.toLowerCase()) > -1
      },
      description:"Text input type - text | textarea | password | email | search | number | tel | url",
    },
  },
  mixins:[
    textInput,
    orientation
  ],
  inheritAttrs: false,
  computed: {
    showRightIcon(): boolean {
      return !!this.$slots.rightIcon || ((this as any).value && (this as any).value.length > 0)
    },
    numberType(){
      if(this.$props.type === "number"){
        return true
      }
    },
    listeners(): Record<string, Function | Function[]> {
      return {
        ...this.$listeners,
        input: ($event: any) => {
          this.updateValue($event.target.value)
        }
      }
    },
    getColor(): string{
      return this.$props.error ? "error" : "black"
    }
  },
  methods: {
    updateValue(value: string | undefined) {
      
      this.$emit("input", value)       
    },
    checkError(){
      console.log(this)
      if(this.$props.error === undefined  || this.$props.error === null || this.$props.error.length === 0 ){
         return
      }else if( this.$props.error.fullMessage != undefined || this.$props.error.fullMessage != null ){
        return
      }else{
        this.reset()
      }
    },
    reset(){
     this.$emit("reset",null)
    },
    clearText() {
      this.updateValue(undefined)
      this.focusElement(this.$refs.input as HTMLInputElement)
    },
    focusElement(element: HTMLElement) {
      element.focus()
    },
  },
})
</script>

<style scoped lang="scss">
  @import '../styles/mixins';

  @mixin placeholder() {
    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      @content;
    }
    &::-moz-placeholder {
      /* Firefox 19+ */
      @content;
    }
    &:-ms-input-placeholder {
      /* IE 10+ */
      @content;
    }
    &:-moz-placeholder {
      /* Firefox 18- */
      @content;
    }
  }
  .input-wrapper {
    border: $color-gray-lighter 1px solid;
    border-radius: 2px;
    position: relative;
    display: flex;
  }
  .a11y{
    border: transparent 1px solid;
    box-shadow: 0 0 0 2px $color-selected;
  }
  .input-element {
    width: 100%;
    height: $baseline * 10;
    box-sizing: border-box;
    font-family: $font-primary;
    font-weight: $fontweight-regular;
    line-height: $lineheight-base-lg;
    letter-spacing: $letterspacing-base-lg;
    border:0px;
    color: $color-black;
    padding:0.5em;

    @include font-base-lg();

    &:focus {
      outline: 0;
    }

    &:disabled {
      background-color: $color-secondary;
      color: $color-disabled;
    }

    @include placeholder() {
      color: $color-gray-lighter;
      font-style: italic;
    }
  }
  .input-element[type=number]{
    text-align:right;
  }

  .left-icon,
  .right-icon {
    padding:0.5em;
    flex: 1 0 auto;
    svg {
      width: 24px;
      height: 24px;
    }
  }

  .left-icon {
    left: $baseline * 2;
  }

  .right-icon {
    right: $baseline * 2;
    svg{
      fill : $color-gray;
    }
  }
  [uppercase]{
    text-transform: uppercase;
  }
  .label-required {
    color: $color-error;
  }

  .label-wrapper {
    position: relative;
    margin-bottom: $baseline;
  }

  .auxillary-slot {
    @include font-base-sm();

    position: absolute;
    right: 0;
    bottom: 0;
  }

  .text-input {
    padding-bottom: $baseline * 6;
  }

  .input-element::-webkit-outer-spin-button,
  .input-element::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  .error-state {
      border-color: $color-error;
      color: $color-error;
    }
  .error {
    .error-text {
      margin-top: 4px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    .error-message{
        margin: 0px;
        color: $color-error;
        font-size: $fontsize-base-md;
        letter-spacing: $letterspacing-base-md;
        line-height: $lineheight-base-md;
        font-weight: $fontweight-regular;
        font-family: $font-primary;
      }
    .label {
      color: $color-error;
    }
  }
  .error-icon{
    line-height: 0px;
    &>*{
      fill: $color-error;
      margin-right: 12px;
    }
  }
  .inputTextInputTextarea{
    overflow: auto;
    transition:all 250ms ease-in-out;
    padding-top:6px;
    padding-bottom:1px;
    min-height:2.5rem;
    padding-left: 0.75rem;
    padding-right: 2.5rem;
  }
  .false-text-area{
    min-height:2.5rem;
    padding-left: 0.75rem;
    padding-right: 2.5rem;
    visibility: hidden;
    font-size:1rem;
    margin: 0px;
    position: absolute;
    top: 0;
    background: lightblue;
    display: block;
    white-space:pre-line;
    word-wrap: break-word;
    width:calc(100% - 3.25rem)
  }
  .clear{
    padding: 10px 0px 0px 0px;
  }
  .ltr, .rtl {
    display: flex;
    .label-wrapper{
      padding: 8px 0px 0px 0px;
    }
    // flex: 1 0 auto;
  }
  .rtl {
    flex-direction: row-reverse;
    .input-wrapper{
      // flex: 1 0 auto;
    }
  }
</style>