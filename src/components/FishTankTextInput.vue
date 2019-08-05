<template>
  <div
    :class="['text-input-wrap',{ 'error': !!errorMessage }]"
  >
    <div
      v-if="label"
      class="label-wrapper"
    >
      <label
        :for="labelId"
        class="label"
      >
        {{ label }}
        <span
          v-if="required"
          class="label-required"
        >
        *
        </span>
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
          :class="['input-element', {'error-state':errorMessage}]"
          @input="updateValue "
          @blur="$emit('blur', $event)"
          @focus="checkError, $emit('focus', $event)"
          v-on="listeners">
      </template>
      <p 
        v-if="type === 'textarea'"
        ref="falseTextarea" 
        class="false-text-area"
      >
        &nbsp;{{ textAreaModel }}
      </p>
      <span
        v-if="showRightIcon && !numberType"
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
/**
 * FishTankTextInput V1
 * @deprecated
 * This component is being deprecated in favor of FishTankTextInputV2.
 * It will be removed from the library in October 2019.
 * FishTankTextInputV2 offers a more standard and consistant API, and better code quality.
 * Please begin using FishTankTextInputV2 to avoid any breaking changes.
 */
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
  data(){
    return {
      textAreaModel:"",
      textAreafalseHeight:44,
      scrollOn:false,
      trackFalseHeight:0
      }
  },
  mounted () {
    console.warn('FishTankTextInput is being deprecated in favor of FishTankTextInputV2. It will be removed from the library in October 2019. Please migrate to FishTankTextInputV2.')
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

<style lang="scss">
  @import '../../node_modules/@fishtank/type/dist/index.scss';
  @import url($cdn-url);
</style>

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
  .input-element[type=number]{
    text-align:right;
    padding-right:$baseline*3;
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

  .label {
    text-transform: uppercase;
    font-weight: $fontweight-semi;
    font-family: $font-primary;
    line-height: $lineheight-base-md;
    letter-spacing: $letterspacing-base-md;
    color: $color-black;

    @include font-base-md();
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

  .text-input-wrap {
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

</style>