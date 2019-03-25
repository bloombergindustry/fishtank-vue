<template>
  <div
    :class="[$style.inputText,{ [$style.inputTextError]: !!errorMessage }]"
  >
    <div
      v-if="label"
      :class="$style.inputTextLabelWrapper"
    >
      <label
        :for="labelId"
        :class="$style.inputTextLabel"
      >
        {{ label }}
        <span
          v-if="required"
          :class="$style.inputTextLabelRequired"
        >
        *
        </span>
      </label>

      <span 
        :class="$style.inputTextAuxillarySlot">
        <slot name="auxillary"/>
      </span>
    </div>
    <div
      :class="$style.inputTextInputWrapper"
    >
      <span
        v-if="$slots.leftIcon"
        :class="$style.inputTextLeftIcon"
      >
        <slot name="leftIcon"/>
      </span>

      <template v-if="type === 'textarea'">
        <!--eslint-disable-->
        <textarea
          ref="input"
          :type="type"
          :value="value"
          v-model="textAreaModel"
          :id="labelId"
          :style="{'height':textAreafalseHeight + 'px', 'resize': (resize === false ? 'none' : null), 'overflowY':(scrollOn ? 'scroll' : 'hidden')}"
          v-bind="$attrs"
          :class="[$style.inputTextInput, $style.inputTextInputTextarea, {[$style.inputTextInputErrorState]:errorMessage}]"
          @keypress="getFalseHeight"
          @keydown.delete="getFalseHeight"
          @keyup.91.90="getFalseHeight"
          @keyup.91.86="getFalseHeight"
          @keyup.91.88="getFalseHeight"
          @keyup.enter="getFalseHeight"
          @keyup.delete="getFalseHeight"
          @paste="getFalseHeight"
          @cut="getFalseHeight"
          v-on="listeners"></textarea>
        <!--eslint-enable-->
      </template>
      <template v-else>
        <input
          ref="input"
          :type="type"
          :value="value"
          :id="labelId"
          v-bind="$attrs"
          :class="[$style.inputTextInput, {[$style.inputTextInputErrorState]:errorMessage}]"
          @input="updateValue "
          @blur="$emit('blur', $event)"
          @focus="checkError, $emit('focus', $event)"
          v-on="listeners">
      </template>
      <p 
        v-if="type === 'textarea'"
        ref="falseTextarea" 
        :class="$style.falseTextArea"
      >
        &nbsp;{{ textAreaModel }}
      </p>
      <span
        v-if="showRightIcon && !numberType"
        :class="$style.inputTextRightIcon"
      >
        <slot name="rightIcon">
          <span
            :class="$style.inputTextInputClear"
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
      :class="[{[$style.inputTextErrorText]:errorMessage}]"
    > 
      <span
        :class="$style.errorIcon">
        <WarningIcon/>
      </span>
      <p
        :class="$style.errorMessageText"> {{ errorMessage }} </p>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from "vue"
import { 
  CloseSml24 as CloseIcon,
  Warning24 as WarningIcon
  }  from "@fishtank/icons-vue"

export default Vue.extend({
  components: {
    CloseIcon: CloseIcon,
    WarningIcon: WarningIcon
  },
  token:[
    
  ],
  inheritAttrs: false,
  
  props: {
    value: {
      required: false,
      type: String,
      default: "",
    },
    label: {
      required: false,
      type: String,
      default: undefined,
      description:"Text input label",
    },
    id:{
      type:String,
      default:null,
      required:false,
      description:"Text input ID",
    },
    maxheight:{
      type:Number,
      default:null,
      required:false,
      description:"Textarea type input max-height",
    },
    required:{
      type:Boolean,
      default:false,
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
        ]

        return textTypes.indexOf(value.toLowerCase()) > -1
      },
      description:"Text input type - text | textarea | password | email | search | number | tel | url",
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
      },
      description:"Error state message - either a string or an object with a `fullMessage` string property",
    }
  },
  data:function(){
    return {
      textAreaModel:"",
      textAreafalseHeight:44,
      scrollOn:false,
      trackFalseHeight:0
      }
  },
  computed: {
    labelId(): string {
      return `input-${(this as any)._uid}`
    },
    showRightIcon(): boolean {
      return !!this.$slots.rightIcon || ((this as any).value && (this as any).value.length > 0)
    },
    numberType(){
      if(this.$props.type === "number"){
        return true
      }
    }
    ,
    errorMessage(): string | undefined {
      if (!(this as any).error) {
        return undefined
      }

      if (typeof (this as any).error === "string") {
        return (this as any).error
      } else if ((this as any).error.fullMessage) {
        return (this as any).error.fullMessage
      } else { 
        return undefined 
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

<style module lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

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

  .inputTextInput {
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
  .inputTextInput[type=number]{
    text-align:right;
    padding-right:$baseline*3;
  }
  .inputTextLeftIcon ~ .inputTextInput {
    padding-left: $baseline*11;
  }

  .inputTextInputWrapper {
    position: relative;
  }

  .inputTextLeftIcon,
  .inputTextRightIcon {
    position: absolute;
    top: $baseline * 2;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .inputTextLeftIcon {
    left: $baseline * 2;
  }

  .inputTextRightIcon {
    right: $baseline * 2;
    svg{
      fill : $color-gray;
    }
  }

  .inputTextLabel {
    text-transform: uppercase;
    font-weight: $fontweight-semi;
    font-family: $font-primary;
    line-height: $lineheight-base-md;
    letter-spacing: $letterspacing-base-md;
    color: $color-black;

    @include font-base-md();
  }

  .inputTextLabelRequired {
    color: $color-error;
  }

  .inputTextLabelWrapper {
    position: relative;
    margin-bottom: $baseline;
  }

  .inputTextAuxillarySlot {
    @include font-base-sm();

    position: absolute;
    right: 0;
    bottom: 0;
  }

  .inputText {
    padding-bottom: $baseline * 6;
  }

  .inputTextInput::-webkit-outer-spin-button,
  .inputTextInput::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  .inputTextInputErrorState {
      border-color: $color-error;
      color: $color-error;
    }
  .inputTextError {
    .inputTextErrorText {
      margin-top: 4px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    .errorMessageText{
        margin: 0px;
        color: $color-error;
        font-size: $fontsize-base-md;
        letter-spacing: $letterspacing-base-md;
        line-height: $lineheight-base-md;
        font-weight: $fontweight-regular;
        font-family: $font-primary;
      }
    .inputTextLabel {
      color: $color-error;
    }
  }
  .errorIcon{
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
  .falseTextArea{
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

</style>