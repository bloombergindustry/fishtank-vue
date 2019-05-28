
import { Component, Prop, Vue } from 'vue-property-decorator'

interface ErrorMessage extends Object {
  fullMessage: string
}
@Component({})
export default class TextInputMixin extends Vue {
  /**
   * Input Value
   */
  @Prop({
    required: false,
    type: String,
    default: "",
  })
  value: string

  /**
   * Input label
   */
  @Prop({
    required: false,
    type: String,
    default: undefined
  })
  label:string

  /**
   * Input ID
   */
  @Prop({
    type:String,
    default:null,
    required:false
  })
  id: string

  /**
   * Input is required
   */
  @Prop({
    type:Boolean,
    default:false,
    required:false
  })
  required:boolean

  /**
   * Input Error message; when
   */
  @Prop({
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
  })
  error: ErrorMessage | String

  data(){
    return {
      identifier: (Math.random() * 10000).toFixed(0).toString(),
      isFocused:false
      }
  }


  get showRightIcon(): boolean {
    return !!this.$slots.rightIcon || (this.$props.value && this.$props.value.length > 0)
  }

  get errorMessage(): string | undefined {
    if (!this.error) {
      return undefined
    }

    if (typeof this.error === "string") {
      return this.error
    } else if ((this.error as ErrorMessage).fullMessage) {
      return (this.error as ErrorMessage).fullMessage
    } else { 
      return undefined 
    }

  }
  
}