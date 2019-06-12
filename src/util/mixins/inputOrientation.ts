import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class inputOrientation extends Vue {
  @Prop({
    type:String,
    default:null
  })
  orientation: string
}