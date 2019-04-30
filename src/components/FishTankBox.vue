<script lang="ts">
// Trying to get the interface correct, I need to refactor once we get all the functionality
// This is the interface I am trying to use https://pinterest.github.io/gestalt/#/Box
import Vue from "vue"

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
} from '../util/style'

import {
  union,
  bind,
  range,
  toggle,
  mapping,
  rangeWithoutZero
} from '../util/transform'

import color  from '../util/colorsClassMapping'

const _ = require("lodash").noConflict()
export type IsBoxType = "div" | "span" | "section" | "article" | "aside" | "footer" | "header" | "details" | "figcaption" | "figure" | "main" | "nav" | "summary" | "time";
export type AlignItemType = "start" | "end" | "center" | "baseline" | "stretch";
export type Direction = "row" | "column"| "row-reverse" | "column-reverse";
export type DisplayType = "none"| "flex"| "block"| "inlineBlock"| "visuallyHidden";
export type JustifyContent = "start" | "end" | "center" | "between" | "around";
export type Position = 'absolute' | 'relative' | 'fixed';
export type OverFlow = 'visible' | 'hidden' | 'scroll' | 'scrollX' | 'scrollY' | 'auto'
export type Flex = 'grow' | 'shrink' | 'none'

export type Column = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Margin = -12 | -11 | -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
export type Padding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Color = any

let colorMappingFunc = (value:any) => {
  if (!value) return identity()
  let allColorMappings = mapping(color())
  let mapColorNameToClass = (colorName:String) => {
    let [prefix, rest] = [colorName[0], colorName.substring(1, colorName.length)]
    let colorClassName = `color${prefix.toUpperCase()}${rest}Bg`
    // debugger
    return colorClassName
  }
  return allColorMappings(mapColorNameToClass(value))
}

const styles = {
  xsDisplayNone: "xsDisplayNone",
  xsDisplayFlex: "xsDisplayFlex",
  xsDisplayBlock: "xsDisplayBlock",
  xsDisplayInlineBlock: "xsDisplayInlineBlock",
  xsDisplayVisuallyHidden: "xsDisplayVisuallyHidden",
  xsDirectionRow: "xsDirectionRow",
  xsDirectionColumn: "xsDirectionColumn",
  xsDirectionRowReverse: "xsDirectionRowReverse",
  xsDirectionColumnReverse: "xsDirectionColumnReverse"
}

const Columns = {
  xsCol1: "xsCol1",
  xsCol2: "xsCol2",
  xsCol3: "xsCol3",
  xsCol4: "xsCol4",
  xsCol5: "xsCol5",
  xsCol6: "xsCol6",
  xsCol7: "xsCol7",
  xsCol8: "xsCol8",
  xsCol9: "xsCol9",
  xsCol10: "xsCol10",
  xsCol11: "xsCol11",
  xsCol12: "xsCol12",

  mdCol1: "mdCol1",
  mdCol2: "mdCol2",
  mdCol3: "mdCol3",
  mdCol4: "mdCol4",
  mdCol5: "mdCol5",
  mdCol6: "mdCol6",
  mdCol7: "mdCol7",
  mdCol8: "mdCol8",
  mdCol9: "mdCol9",
  mdCol10: "mdCol10",
  mdCol11: "mdCol11",
  mdCol12: "mdCol12",

  lgCol1: "lgCol1",
  lgCol2: "lgCol2",
  lgCol3: "lgCol3",
  lgCol4: "lgCol4",
  lgCol5: "lgCol5",
  lgCol6: "lgCol6",
  lgCol7: "lgCol7",
  lgCol8: "lgCol8",
  lgCol9: "lgCol9",
  lgCol10: "lgCol10",
  lgCol11: "lgCol11",
  lgCol12: "lgCol12"
}

const layout = {
  justifyStart: "justifyStart",
  justifyEnd: "justifyEnd",
  justifyCenter: "justifyCenter",
  justifyBetween: "justifyBetween",
  justifyAround: "justifyAround",
  itemsStart: "itemsStart",
  itemsEnd: "itemsEnd",
  itemsCenter: "itemsCenter",
  itemsBaseline: "itemsBaseline",
  absolute: "absolute",
  relative: "relative",
  fixed: "fixed",
  static: "static",
  top0: 'top0',
  bottom0: 'bottom0',
  right0: 'right0',
  left0: 'left0',
  overflowHidden: 'overflowHidden',
  overflowScroll: 'overflowScroll',
  overflowAuto: 'overflowAuto',
  overflowScrollX: 'overflowScrollX',
  overflowScrollY: 'overflowScrollY',
  flexGrow: 'flexGrow',
  flexNone: 'flexNone',
  flexShrink: 'flexShrink',
  flexWrap: 'flexWrap'
}

const whitespace = {
  marginStart1: "marginStart1",
  marginStart2: "marginStart2",
  marginStart3: "marginStart3",
  marginStart4: "marginStart4",
  marginStart5: "marginStart5",
  marginStart6: "marginStart6",
  marginStart7: "marginStart7",
  marginStart8: "marginStart8",
  marginStart9: "marginStart9",
  marginStart10: "marginStart10",
  marginStart11: "marginStart11",
  marginStart12: "marginStart12",

  marginEnd1: "marginEnd1",
  marginEnd2: "marginEnd2",
  marginEnd3: "marginEnd3",
  marginEnd4: "marginEnd4",
  marginEnd5: "marginEnd5",
  marginEnd6: "marginEnd6",
  marginEnd7: "marginEnd7",
  marginEnd8: "marginEnd8",
  marginEnd9: "marginEnd9",
  marginEnd10: "marginEnd10",
  marginEnd11: "marginEnd11",
  marginEnd12: "marginEnd12",

  marginTop1: "marginTop1",
  marginTop2: "marginTop2",
  marginTop3: "marginTop3",
  marginTop4: "marginTop4",
  marginTop5: "marginTop5",
  marginTop6: "marginTop6",
  marginTop7: "marginTop7",
  marginTop8: "marginTop8",
  marginTop9: "marginTop9",
  marginTop10: "marginTop10",
  marginTop11: "marginTop11",
  marginTop12: "marginTop12",

  marginBottom1: "marginBottom1",
  marginBottom2: "marginBottom2",
  marginBottom3: "marginBottom3",
  marginBottom4: "marginBottom4",
  marginBottom5: "marginBottom5",
  marginBottom6: "marginBottom6",
  marginBottom7: "marginBottom7",
  marginBottom8: "marginBottom8",
  marginBottom9: "marginBottom9",
  marginBottom10: "marginBottom10",
  marginBottom11: "marginBottom11",
  marginBottom12: "marginBottom12",

  marginLeft1: "marginLeft1",
  marginLeft2: "marginLeft2",
  marginLeft3: "marginLeft3",
  marginLeft4: "marginLeft4",
  marginLeft5: "marginLeft5",
  marginLeft6: "marginLeft6",
  marginLeft7: "marginLeft7",
  marginLeft8: "marginLeft8",
  marginLeft9: "marginLeft9",
  marginLeft10: "marginLeft10",
  marginLeft11: "marginLeft11",
  marginLeft12: "marginLeft12",

  marginRight1: "marginRight1",
  marginRight2: "marginRight2",
  marginRight3: "marginRight3",
  marginRight4: "marginRight4",
  marginRight5: "marginRight5",
  marginRight6: "marginRight6",
  marginRight7: "marginRight7",
  marginRight8: "marginRight8",
  marginRight9: "marginRight9",
  marginRight10: "marginRight10",
  marginRight11: "marginRight11",
  marginRight12: "marginRight12",

  paddingX1: "paddingX1",
  paddingX2: "paddingX2",
  paddingX3: "paddingX3",
  paddingX4: "paddingX4",
  paddingX5: "paddingX5",
  paddingX6: "paddingX6",
  paddingX7: "paddingX7",
  paddingX8: "paddingX8",
  paddingX9: "paddingX9",
  paddingX10: "paddingX10",
  paddingX11: "paddingX11",
  paddingX12: "paddingX12",

  paddingY1: "paddingY1",
  paddingY2: "paddingY2",
  paddingY3: "paddingY3",
  paddingY4: "paddingY4",
  paddingY5: "paddingY5",
  paddingY6: "paddingY6",
  paddingY7: "paddingY7",
  paddingY8: "paddingY8",
  paddingY9: "paddingY9",
  paddingY10: "paddingY10",
  paddingY11: "paddingY11",
  paddingY12: "paddingY12"
}

/* transformation js */
const marginStart = bind(rangeWithoutZero("marginStart"), whitespace)
const marginEnd = bind(rangeWithoutZero("marginEnd"), whitespace)
const marginTop = bind(rangeWithoutZero("marginTop"), whitespace)
const marginRight = bind(rangeWithoutZero("marginRight"), whitespace)
const marginBottom = bind(rangeWithoutZero("marginBottom"), whitespace)
const marginLeft = bind(rangeWithoutZero("marginLeft"), whitespace)
const margin = union(marginTop, marginBottom, marginLeft, marginRight)
const paddingX = bind(rangeWithoutZero("paddingX"), whitespace)
const paddingY = bind(rangeWithoutZero("paddingY"), whitespace)
const padding = union(paddingX, paddingY)

const props: any = {
  display: mapping({
    none: styles.xsDisplayNone,
    flex: styles.xsDisplayFlex,
    block: styles.xsDisplayBlock,
    inlineBlock: styles.xsDisplayInlineBlock,
    visuallyHidden: styles.xsDisplayVisuallyHidden
  }),
  alignItems: mapping({
    start: layout.itemsStart,
    end: layout.itemsEnd,
    center: layout.itemsCenter,
    baseline: layout.itemsBaseline,
    // default: stretch
  }),
  column: bind(range("xsCol"), Columns),
  xsColumn: bind(range("xsCol"), Columns),
  mdColumn: bind(range("mdCol"), Columns),
  lgColumn: bind(range("lgCol"), Columns),
  justifyContent: mapping({
    end: layout.justifyEnd,
    center: layout.justifyCenter,
    between: layout.justifyBetween,
    around: layout.justifyAround
  }),
  direction: mapping({
    row: styles.xsDirectionRow,
    column: styles.xsDirectionColumn,
    rowReverse: styles.xsDirectionRowReverse,
    columnReverse: styles.xsDirectionColumnReverse
  }),
  position: mapping({
    absolute: layout.absolute,
    relative: layout.relative,
    fixed: layout.fixed,
    // default: static
  }),
  marginStart,
  marginEnd,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingX,
  paddingY,
  overflow: mapping({
    hidden: layout.overflowHidden,
    scroll: layout.overflowScroll,
    auto: layout.overflowAuto,
    scrollX: layout.overflowScrollX,
    scrollY: layout.overflowScrollY,
    // default: visible
  }),
  right: toggle(layout.right0),
  left: toggle(layout.left0),
  top: toggle(layout.top0),
  bottom: toggle(layout.bottom0),
  maxHeight: (maxHeight:any) => fromInlineStyle({maxHeight}),
  height: (height:any) => fromInlineStyle({height}),
  flex: mapping({
    grow: layout.flexGrow,
    none: layout.flexNone,
    // default: shrink
  }),
  wrap: toggle(layout.flexWrap),
  width: (width:any) => fromInlineStyle({ width }),
  color: colorMappingFunc
}

export default Vue.extend({
  name:'FishTankBox',
  render(createElement) {
    return createElement(
        (this as any).tagElement, (this as any).boxProps, this.$slots.default
      )
  },
  props:{
    tag:{
      default:'div',
      required:false,
      type:String,
      validator: function (value: IsBoxType) {
        return ["div", "span", "section", "article", "aside", "footer", "header", "details", "figcaption", "figure", "main", "nav", "summary", "time"].indexOf(value) !== -1
      },
      description:"Box semantic element"
    },
    alignItems: {
      type:String,
      default:null,
      required:false,
      validator: function (value: AlignItemType) {
        return ["start" , "end" , "center" , "baseline" , "stretch"].indexOf(value) !== -1
      },
      description:'Box flexbox align-content property sets how the browser distributes space between and around content items along the cross-axis of a Box, and the main-axis of a grid container.',
    },
    // AlignItemType,
    // // @Prop()
    display: {
      type:String,
      default:"block",
      required:false,
      validator: function(value: DisplayType){
        return ["none", "flex", "block", "inlineBlock", "visuallyHidden"].indexOf(value) !== -1
      },
      description:'Box display property',
    },
    // DisplayType,
    // // @Prop()
    column: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns',
    },
    xsColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns',
    },
    mdColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns',
    },
    lgColumn: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Column){
        return (0<value && 13>value)
      },
      description:'Box grid columns',
    },
    // Column, /* 1 -12 */
    // // @Prop()
    direction: {
      type:String,
      default:null,
      required:false,
      validator: function(value: Direction){
        return ["row" , "column", "rowReverse" , "columnReverse"].indexOf(value) !== -1
      },
      description:'Box flex-direction property sets how flex items are placed in the Box defining the main axis; either row or column',
    },
    justifyContent: {
      type:String,
      default:null,
      required:false,
      validator: function(value: JustifyContent){
        return ["start" , "end" , "center" , "between" , "around"].indexOf(value) !== -1
      },
      description:'Box flexbox justify-content property defines how the browser distributes space between and around content items along the main-axis of a Box, and the inline axis of a grid container.',
    },
    margin: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Margin){
        return (-13<(value) && 13>value)
      },
      description:'',
    },
    marginStart: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Margin){
        return (-13<(value) && 13>value)
      },
      description:'',
    },
    marginEnd: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Margin){
        return (-13<(value) && 13>value)
      },
      description:'',
    },
    marginTop: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Margin){
        return (-13<(value) && 13>value)
      },
      description:'',
    },
    marginRight: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Margin){
        return (-13<(value) && 13>value)
      },
      description:'',
    },
    marginBottom: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Margin){
        return (-13<(value) && 13>value)
      },
      description:'',
    },
    marginLeft: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Margin){
        return (-13<value && 13>value)
      },
      description:'',
    },
    padding: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Padding){
        return (-1<value && 13>value)
      },
      description:'Box padding, applied to horizontally and vertically',
    },
    paddingX: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Padding){
        return (-1<value && 13>value)
      },
      description:'Box padding, applied horizontally',
    },
    paddingY: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Padding){
        return (-1<value && 13>value)
      },
      description:'Box padding, applied vertically',
    },
    width: {
      type: [ Number, String ],
      default:null,
      required:false,
      description:'Box width property sets an boxes\'s width.',
    },
    wrap:{
      type: Boolean,
      default:false,
      required:false,
      description:'Box flex-wrap property sets flex-wrap:wrap, setting flex items to wrap onto multiple lines.',
    },
    position: {
      type:String,
      default:null,
      required:false,
      validator: function(value: Position){
        return ['absolute' , 'relative' , 'fixed'].indexOf(value) !== -1
      },
      description:'Box position property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.',
    },
    top:{
      type: Boolean,
      default:false,
      required:false,
      description:'Box top position property participates in specifying a vertical position of 0 of positioned element. It has no effect on non-positioned elements.',
    },
    bottom:{
      type: Boolean,
      default:false,
      required:false,
      description:'Box bottom position  property participates in specifying a vertical position of 0 of positioned element. It has no effect on non-positioned elements.',
    },
    left:{
      type: Boolean,
      default:false,
      required:false,
      description:'Box left position \ property participates in specifying a horizontal position of 0 of positioned element. It has no effect on non-positioned elements.',
    },
    right:{
      type: Boolean,
      default:false,
      required:false,
      description:'Box right position property participates in specifying a horizontal position of 0 of positioned element. It has no effect on non-positioned elements.',
    },
    maxHeight: {
      type: [ Number, String ],
      default:null,
      required:false,
      description:'Box max-height property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.',
    },
    height: {
      type: [ Number, String ],
      default:null,
      required:false,
      description:'Box height property specifies the height of an element. By default, the property defines the height of the content area.',
    },
    overflow: {
      type:String,
      default:null,
      required:false,
      validator: function(value: OverFlow){
        return ['visible' , 'hidden' , 'scroll' , 'scrollX' , 'scrollY' , 'auto'].indexOf(value) !== -1
      },
      description:'Box overflow property sets what to do when an element\'s content is too big to fit in its block formatting context.',
    },
    flex: {
      default:'shrink',
      type:String,
      required:false,
      validator: function (value: Flex) {
        return ['grow' , 'shrink' , 'none'].indexOf(value) !== -1
      },
      description:'Box flexbox flex property; sets how a flex type Box will grow or shrink to fit the space available in its flex container.',
    },
    color: {
      type:String,
      required:false,
      default:null,
      // validator: function (value: Color) {
      //   return ['color', 'array', 'here'].indexOf(value) !== -1
      // }
      description:'Box background color property'
    },
  },
  computed: {
    moduleClassNames () {
      let style = (<any>this).$style
      return style
    },

    boxProps() {
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
        // class: boxProps.className,
        class: modulesClasses.join(' '),
        style: boxProps.style,
      }
    },

    tagElement () {
      return (this as any).tag
    }
  }
})
</script>
<style module lang="scss">
@import "../styles/mixins";
@import "../styles/box/box-style";
@import "../styles/box/box-whitespaces";
@import "../styles/box/box-layout";
@import "../styles/box/box-column";
@import "../../node_modules/@fishtank/colors/dist/css-variable-stylesheet";
input {
  width: 100%;
  height: $baseline * 10;
  padding: $baseline * 3;
  padding-right: $baseline * 9;
  box-sizing: border-box;
  font-family: $font-primary;
  border: $color-gray-lighter 1px solid;

  @include font-base-md();

  &:focus {
    outline: $color-selected 2px solid;
  }

  &:disabled {
    background-color: $color-secondary;
    color: $color-gray-lighter;
  }
}
textarea {
  width: 100%;
}
@custom-media --sm (max-width: 576px);
@custom-media --md (max-width: 768px);
@custom-media --lg (max-width: 1312px);
</style>
