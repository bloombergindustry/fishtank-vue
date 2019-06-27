<template>
  <div
    :class="['text-area',{ 'error': !!errorMessage }, orientation]"
  >
    <div
      v-if="label"
      class="label-wrapper"
    >
      <label
        :for="`textarea-${identifier}-id`"
        class="label"
      >
        <ftext bold primary uppercase size="baseMd">
          {{ label }}
          <span
          v-if="required"
          class="label-required"
        >
        *
        </span>
        </ftext>
      </label>

      <span 
        class="auxillary-slot">
        <slot name="auxillary"/>
      </span>
    </div>
    <div
      class="input-wrapper"
    >
      <span
        v-if="$slots.leftIcon"
        class="left-icon"
      >
        <slot name="leftIcon"/>
      </span>
        <!--eslint-disable-->
      <textarea
        ref="input"
        :value="value"
        :id="`textarea-${identifier}-id`"
        :style="{'height':textAreafalseHeight + 'px', 'resize': (resize === false ? 'none' : null), 'overflowY':(scrollOn ? 'scroll' : 'hidden')}"
        v-bind="$attrs"
        :class="['input-element', 'inputTextInputTextarea', {'error-state':errorMessage}]"
        @keypress="getFalseHeight"
        @keydown.delete="getFalseHeight"
        @keyup.91.90="getFalseHeight"
        @keyup.91.86="getFalseHeight"
        @keyup.91.88="getFalseHeight"
        @keyup.enter="getFalseHeight"
        @keyup.delete="getFalseHeight"
        @paste="getFalseHeight"
        @cut="getFalseHeight"
        v-on="listeners" />
      <!--eslint-enable-->
      <p 
        ref="falseTextarea" 
        class="false-text-area"
      >
        &nbsp;{{ value }}
      </p>
      <span
        v-if="showRightIcon"
        class="right-icon"
      >
        <slot name="rightIcon">
          <span
            class="clear"
            @click="clearText"
          >
            <CloseIcon/>
          </span>
        </slot>
      </span>
    <slot name="below" />
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
        class="error-message"> {{ errorMessage }} </p>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from "vue"

import { 
  CloseSml24 as CloseIcon, 
  Warning24 as WarningIcon
  }  from "@fishtank/icons-vue"

import FishTankText  from './FishTankText/FishTankText.vue';

import {textInputMixin, orientation, a11y} from "../util/mixins"

export default Vue.extend({
  components: {
    CloseIcon: CloseIcon,
    WarningIcon: WarningIcon,
    ftext:FishTankText
  },
  mixins:[
    a11y,
    textInputMixin,
    orientation
  ],
  inheritAttrs: false,
  props: {
    maxheight:{
      type:Number,
      default:null,
      required:false,
      description:"Textarea type input max-height",
    },
    /**
		 * Textarea Input can be resized
		 */
    resize:{
      type:Boolean,
      default:false,
      required:false
    },
  },
  data(){
    return {
      textAreaModel:"",
      textAreafalseHeight:44,
      scrollOn:false,
      trackFalseHeight:0,
      }
  },
  computed: {
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
    checkError(){
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
    getFalseHeight(e:ClipboardEvent): void{
      setTimeout(()=>{
          this.$nextTick(()=>{
            if (this.$props.maxheight && (this.$props.maxheight < (this.$refs.falseTextarea as HTMLDivElement).clientHeight)){
              this.textAreafalseHeight = this.$props.maxheight
              if (!this.scrollOn) this.scrollOn = true
              return
            }
            if (this.$refs.falseTextarea !== undefined) {
              if (this.scrollOn) this.scrollOn = false
              this.textAreafalseHeight = (this.$refs.falseTextarea as HTMLDivElement).clientHeight
            }
            (this.$refs.input as HTMLFontElement).focus()
          })
        }, 100)
    },
  }
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

  .input-element {
    width: 100%;
    height: $baseline * 10;
    padding-left: $baseline * 3;
    padding-right: $baseline * 10;
    box-sizing: border-box;
    font-family: $font-primary;
    font-weight: $fontweight-regular;
    line-height: $lineheight-base-lg;
    letter-spacing: $letterspacing-base-lg;
    border: $color-gray-lighter 1px solid;
    color: $color-black;
    border-radius: 2px;

    @include font-base-lg();

    &:focus {
      outline: $color-selected 2px solid;
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
  [uppercase]{
    text-transform: uppercase;
  }
  .left-icon ~ .input-element {
    padding-left: $baseline*11;
  }

  .input-wrapper {
    position: relative;
  }

  .left-icon,
  .right-icon {
    position: absolute;
    top: $baseline * 2;

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

  .text-area {
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
    transition:height 250ms ease-in-out;
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