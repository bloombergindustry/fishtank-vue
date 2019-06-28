<script lang="ts">
import {
  Style,
  InlineStyle,
  fromInlineStyle,
  identity,
  fromClassName,
  mapClassName,
  concat,
  toProps,
  arrayToProps
} from '../../util/style'

import {
  union,
  bind,
  range,
  toggle,
  mapping,
  rangeWithoutZero
} from '../../util/transform'

import Columns from '../../util/boxColumns.js'

const styles = {
  xsDisplayBlock: "xsDisplayBlock",
}

const props: any = {
  column: bind(range("xsCol"), Columns),
  xsColumn: bind(range("xsCol"), Columns),
  smColumn: bind(range("smCol"), Columns),
  mdColumn: bind(range("mdCol"), Columns),
  lgColumn: bind(range("lgCol"), Columns),
  xlColumn: bind(range("xlCol"), Columns),
  display: mapping({
    block: styles.xsDisplayBlock,
  }),
}
import { boxMixin } from '../../util/mixins'

import {
  IsBoxType,
  AlignItemType,
  Direction,
  DisplayType,
  JustifyContent,
  Position,
  OverFlow,
  Flex,
  Column, 
  Margin,
  Padding,
  Color
} from '../../util/types/boxTypes'

import Vue from 'vue'
export default Vue.extend({
  name:"FishTankColumn",
  render(createElement) {
    return createElement(
        (this as any).tagElement, (this as any).boxProps, this.$slots.default
      )
  },
  mixins:[
    boxMixin
  ],
  props:{
    fluid: Boolean,
    display: {
      type:String,
      required:false,
      validator: function(value: DisplayType){
        return ["block"].indexOf(value) !== -1
      },
      description:'Column block display property',
    },
    tag:{
      default:'div',
      required:false,
      type:String,
      validator: function (value: IsBoxType) {
        return ["div", "span", "section", "article", "aside", "footer", "header", "details", "figcaption", "figure", "main", "nav", "summary", "time"].indexOf(value) !== -1
      },
      description:"Box semantic element"
    },
    as:{
      default:'div',
      required:false,
      type:String,
      validator: function (value: IsBoxType) {
        return ["div", "span", "section", "article", "aside", "footer", "header", "details", "figcaption", "figure", "main", "nav", "summary", "time"].indexOf(value) !== -1
      },
      description:"Box semantic element"
    },
    column: {
      type:Number,
      default:undefined,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns; maps to xs-column grid',
    },
    // Column, /* 1 -12 */
    // // @Prop()
    xsColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns - XS Breakpoint',
    },

    // xsColumn, /* 1 -12 */
    // // @Prop()
    smColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns  - SM Breakpoint',
    },

    // smColumn, /* 1 -12 */
    // // @Prop()
    mdColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns  - MD Breakpoint',
    },

    // mdColumn, /* 1 -12 */
    // // @Prop()
    lgColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns - LG Breakpoint',
    },

    // lgColumn, /* 1 -12 */
    // // @Prop()
    xlColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns - LG Breakpoint',
    },

    // xlColumn, /* 1 -12 */
    // // @Prop()
  },
  methods:{
  },
  computed:{
    moduleClassNames () {
      let style = (<any>this).$style
      return style
    },
    boxProps(): any {
      let concatenatedClasses: Style = identity()
      for (const prop in this.$props) {
        if (props[prop]) {
          concatenatedClasses = concat([concatenatedClasses, props[prop](this.$props[prop])])
        }
      }
      let boxProps = arrayToProps(concatenatedClasses)
      let modulesClasses:Array<string> = boxProps.className.map(x=>{
        return (this as any).moduleClassNames[x]
      })
      return {
        class: (modulesClasses.join(' ') 
          +this.$style.layoutColumn
          ),
        style: boxProps.style,
      }
    },
  }
})
</script>
<style module lang="scss">
@import "../../styles/box/column";
@import "../../styles/box/grid";
</style>
