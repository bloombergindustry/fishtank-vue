import Vue from "vue"
export default Vue.extend({
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
      identifier: (Math.random() * 10000).toFixed(0).toString(),
      isFocused:false
      }
  },
  computed: {
    showRightIcon(): boolean {
      return !!this.$slots.rightIcon || (this.$props.value && this.$props.value.length > 0)
    },
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

    }
  },
})