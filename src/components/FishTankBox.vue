<script lang="ts">
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

import { boxMixin } from '../util/mixins'
const _ = require("lodash").noConflict()

import {
  Column,
  IsBoxType,
  AlignItemType,
  Direction,
  DisplayType,
  JustifyContent,
  Position,
  OverFlow,
  Flex,
  Margin,
  Padding ,
  Color } from '../util/types/boxTypes'

let colorMappingFunc = (value:any) => {
  if (!value) return identity()
  let allColorMappings = mapping(color())
  let mapColorNameToClass = (colorName:String) => {
    let [prefix, rest] = [colorName[0], colorName.substring(1, colorName.length)]
    let colorClassName = `color${prefix.toUpperCase()}${rest}Bg`
    return colorClassName
  }
  return allColorMappings(mapColorNameToClass(value))
}

import Columns from '../util/boxColumns.js'

const styles = {
  xsDisplayNone: "xsDisplayNone",
  xsDisplayFlex: "xsDisplayFlex",
  xsDisplayBlock: "xsDisplayBlock",
  xsDisplayInlineBlock: "xsDisplayInlineBlock",
  xsDisplayVisuallyHidden: "xsDisplayVisuallyHidden",

  smDisplayNone: "smDisplayNone",
  smDisplayFlex: "smDisplayFlex",
  smDisplayBlock: "smDisplayBlock",
  smDisplayInlineBlock: "smDisplayInlineBlock",
  smDisplayVisuallyHidden: "smDisplayVisuallyHidden",

  mdDisplayNone: "mdDisplayNone",
  mdDisplayFlex: "mdDisplayFlex",
  mdDisplayBlock: "mdDisplayBlock",
  mdDisplayInlineBlock: "mdDisplayInlineBlock",
  mdDisplayVisuallyHidden: "mdDisplayVisuallyHidden",

  lgDisplayNone: "lgDisplayNone",
  lgDisplayFlex: "lgDisplayFlex",
  lgDisplayBlock: "lgDisplayBlock",
  lgDisplayInlineBlock: "lgDisplayInlineBlock",
  lgDisplayVisuallyHidden: "lgDisplayVisuallyHidden",

  xlDisplayNone: "xlDisplayNone",
  xlDisplayFlex: "xlDisplayFlex",
  xlDisplayBlock: "xlDisplayBlock",
  xlDisplayInlineBlock: "xlDisplayInlineBlock",
  xlDisplayVisuallyHidden: "xlDisplayVisuallyHidden",
}

const direction = {
  xsDirectionRow: "xsDirectionRow",
  xsDirectionColumn: "xsDirectionColumn",
  xsDirectionRowReverse: "xsDirectionRowReverse",
  xsDirectionColumnReverse: "xsDirectionColumnReverse",

  smDirectionRow: "smDirectionRow",
  smDirectionColumn: "smDirectionColumn",
  smDirectionRowReverse: "smDirectionRowReverse",
  smDirectionColumnReverse: "smDirectionColumnReverse",

  mdDirectionRow: "mdDirectionRow",
  mdDirectionColumn: "mdDirectionColumn",
  mdDirectionRowReverse: "mdDirectionRowReverse",
  mdDirectionColumnReverse: "mdDirectionColumnReverse",

  lgDirectionRow: "lgDirectionRow",
  lgDirectionColumn: "lgDirectionColumn",
  lgDirectionRowReverse: "lgDirectionRowReverse",
  lgDirectionColumnReverse: "lgDirectionColumnReverse",

  xlDirectionRow: "xlDirectionRow",
  xlDirectionColumn: "xlDirectionColumn",
  xlDirectionRowReverse: "xlDirectionRowReverse",
  xlDirectionColumnReverse: "xlDirectionColumnReverse",

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

const responsiveSizes = ['xs', 'sm', 'md', 'lg', 'xl']
const responsiveWhiteSpace = (prefix: string) => {
  return _.reduce(whitespace, (memo: any, [first, ...rest]: string, key: string) => {
    memo[`${prefix}${_.toUpper(first)}${_.join(rest, '')}`] = `${prefix}${_.toUpper(first)}${_.join(rest, '')}`;
    return memo;
  }, {})
}

const [xsWhiteSpace, smWhiteSpace, mdWhiteSpace, lgWhiteSpace, xlWhiteSpace] = responsiveSizes.map(responsiveWhiteSpace)


/* transformation js */
const marginTypes = ['marginStart', 'marginEnd', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft']
const [marginStart, marginEnd, marginTop, marginRight, marginBottom, marginLeft] = marginTypes.map((marginType: string) => bind(rangeWithoutZero(marginType), whitespace))
const margin = union(marginTop, marginBottom, marginLeft, marginRight)

const [xsMarginStart, xsMarginEnd, xsMarginTop, xsMarginRight, xsMarginBottom, xsMarginLeft] = marginTypes.map(([first, ...rest]) => `xs${_.toUpper(first)}${_.join(rest, '')}`).map((marginType: string) => bind(rangeWithoutZero(marginType), xsWhiteSpace))
const xsMargin = union(xsMarginTop, xsMarginBottom, xsMarginLeft, xsMarginRight)

const [smMarginStart, smMarginEnd, smMarginTop, smMarginRight, smMarginBottom, smMarginLeft] = marginTypes.map(([first, ...rest]) => `sm${_.toUpper(first)}${_.join(rest, '')}`).map((marginType: string) => bind(rangeWithoutZero(marginType), smWhiteSpace))
const smMargin = union(smMarginTop, smMarginBottom, smMarginLeft, smMarginRight)

const [mdMarginStart, mdMarginEnd, mdMarginTop, mdMarginRight, mdMarginBottom, mdMarginLeft] = marginTypes.map(([first, ...rest]) => `md${_.toUpper(first)}${_.join(rest, '')}`).map((marginType: string) => bind(rangeWithoutZero(marginType), mdWhiteSpace))
const mdMargin = union(mdMarginTop, mdMarginBottom, mdMarginLeft, mdMarginRight)

const [lgMarginStart, lgMarginEnd, lgMarginTop, lgMarginRight, lgMarginBottom, lgMarginLeft] = marginTypes.map(([first, ...rest]) => `lg${_.toUpper(first)}${_.join(rest, '')}`).map((marginType: string) => bind(rangeWithoutZero(marginType), lgWhiteSpace))
const lgMargin = union(lgMarginTop, lgMarginBottom, lgMarginLeft, lgMarginRight)

const [xlMarginStart, xlMarginEnd, xlMarginTop, xlMarginRight, xlMarginBottom, xlMarginLeft] = marginTypes.map(([first, ...rest]) => `xl${_.toUpper(first)}${_.join(rest, '')}`).map((marginType: string) => bind(rangeWithoutZero(marginType), xlWhiteSpace))
const xlMargin = union(xlMarginTop, xlMarginBottom, xlMarginLeft, xlMarginRight)

const marginValidator = {
  type:Number,
  default:null,
  required:false,
  validator: function(value: Margin){
    return (-13<(value) && 13>value)
  },
  description:'',
}

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
  xsDisplay: mapping({
    none: styles.xsDisplayNone,
    flex: styles.xsDisplayFlex,
    block: styles.xsDisplayBlock,
    inlineBlock: styles.xsDisplayInlineBlock,
    visuallyHidden: styles.xsDisplayVisuallyHidden
  }),
  smDisplay: mapping({
    none: styles.smDisplayNone,
    flex: styles.smDisplayFlex,
    block: styles.smDisplayBlock,
    inlineBlock: styles.smDisplayInlineBlock,
    visuallyHidden: styles.smDisplayVisuallyHidden
  }),
  mdDisplay: mapping({
    none: styles.mdDisplayNone,
    flex: styles.mdDisplayFlex,
    block: styles.mdDisplayBlock,
    inlineBlock: styles.mdDisplayInlineBlock,
    visuallyHidden: styles.mdDisplayVisuallyHidden
  }),
  lgDisplay: mapping({
    none: styles.lgDisplayNone,
    flex: styles.lgDisplayFlex,
    block: styles.lgDisplayBlock,
    inlineBlock: styles.lgDisplayInlineBlock,
    visuallyHidden: styles.lgDisplayVisuallyHidden
  }),
  xlDisplay: mapping({
    none: styles.xlDisplayNone,
    flex: styles.xlDisplayFlex,
    block: styles.xlDisplayBlock,
    inlineBlock: styles.xlDisplayInlineBlock,
    visuallyHidden: styles.xlDisplayVisuallyHidden
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
  smColumn: bind(range("smCol"), Columns),
  mdColumn: bind(range("mdCol"), Columns),
  lgColumn: bind(range("lgCol"), Columns),
  xlColumn: bind(range("xlCol"), Columns),
  justifyContent: mapping({
    end: layout.justifyEnd,
    center: layout.justifyCenter,
    between: layout.justifyBetween,
    around: layout.justifyAround
  }),
  direction: mapping({
    row: direction.xsDirectionRow,
    column: direction.xsDirectionColumn,
    rowReverse: direction.xsDirectionRowReverse,
    columnReverse: direction.xsDirectionColumnReverse
  }),

  xsDirection: mapping({
    row: direction.xsDirectionRow,
    column: direction.xsDirectionColumn,
    rowReverse: direction.xsDirectionRowReverse,
    columnReverse: direction.xsDirectionColumnReverse
  }),

  smDirection: mapping({
    row: direction.smDirectionRow,
    column: direction.smDirectionColumn,
    rowReverse: direction.smDirectionRowReverse,
    columnReverse: direction.smDirectionColumnReverse
  }),

  mdDirection: mapping({
    row: direction.mdDirectionRow,
    column: direction.mdDirectionColumn,
    rowReverse: direction.mdDirectionRowReverse,
    columnReverse: direction.mdDirectionColumnReverse
  }),

  lgDirection: mapping({
    row: direction.lgDirectionRow,
    column: direction.lgDirectionColumn,
    rowReverse: direction.lgDirectionRowReverse,
    columnReverse: direction.lgDirectionColumnReverse
  }),

  xlDirection: mapping({
    row: direction.xlDirectionRow,
    column: direction.xlDirectionColumn,
    rowReverse: direction.xlDirectionRowReverse,
    columnReverse: direction.xlDirectionColumnReverse
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
  xsMarginStart,
  xsMarginEnd,
  xsMargin,
  xsMarginTop,
  xsMarginRight,
  xsMarginBottom,
  xsMarginLeft,
  smMarginStart,
  smMarginEnd,
  smMargin,
  smMarginTop,
  smMarginRight,
  smMarginBottom,
  smMarginLeft,
  mdMarginStart,
  mdMarginEnd,
  mdMargin,
  mdMarginTop,
  mdMarginRight,
  mdMarginBottom,
  mdMarginLeft,
  lgMarginStart,
  lgMarginEnd,
  lgMargin,
  lgMarginTop,
  lgMarginRight,
  lgMarginBottom,
  lgMarginLeft,
  xlMarginStart,
  xlMarginEnd,
  xlMargin,
  xlMarginTop,
  xlMarginRight,
  xlMarginBottom,
  xlMarginLeft,
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
  render(createElement){
    return createElement(
        (this as any).tagElement, (this as any).boxProps, this.$slots.default
      )
  },
  name:'FishTankBox',
  mixins:[
    boxMixin
  ],
  props:{
    /**
    * Box semantic element
    */
    tag:{
      default:'div',
      required:false,
      type:String,
      validator: function (value: IsBoxType) {
        return ["div", "span", "section", "article", "aside", "footer", "header", "details", "figcaption", "figure", "main", "nav", "summary", "time"].indexOf(value) !== -1
      },
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
      required:false,
      validator: function(value: DisplayType){
        return ["none", "flex", "block", "inlineBlock", "visuallyHidden"].indexOf(value) !== -1
      },
      description:'Box display property',
    },
    // // @Prop()
    xsDisplay: {
      type:String,
      default:undefined,
      required:false,
      validator: function(value: DisplayType){
        return ["none", "flex", "block", "inlineBlock", "visuallyHidden"].indexOf(value) !== -1
      },
      description:'Box display property',
    },
    // // @Prop()
    smDisplay: {
      type:String,
      default:undefined,
      required:false,
      validator: function(value: DisplayType){
        return ["none", "flex", "block", "inlineBlock", "visuallyHidden"].indexOf(value) !== -1
      },
      description:'Box display property',
    },
    // // @Prop()
    mdDisplay: {
      type:String,
      default:undefined,
      required:false,
      validator: function(value: DisplayType){
        return ["none", "flex", "block", "inlineBlock", "visuallyHidden"].indexOf(value) !== -1
      },
      description:'Box display property',
    },
    // // @Prop()
    lgDisplay: {
      type:String,
      default:undefined,
      required:false,
      validator: function(value: DisplayType){
        return ["none", "flex", "block", "inlineBlock", "visuallyHidden"].indexOf(value) !== -1
      },
      description:'Box display property',
    },
    /** 
     * Box display property
    */
    xlDisplay: {
      type:String,
      default:undefined,
      required:false,
      validator: function(value: DisplayType){
        return ["none", "flex", "block", "inlineBlock", "visuallyHidden"].indexOf(value) !== -1
      },
    },
    /**
     * Box flex-direction property sets how flex items are placed in the Box defining the main axis; either row, rowReverse, column or columnReverse
     */
    direction: {
      type:String,
      default:null,
      required:false,
      validator: function(value: Direction){
        return ["row" , "column", "rowReverse" , "columnReverse"].indexOf(value) !== -1
      },
    },
    /**
     * Box flex-direction property sets how flex items are placed in the Box defining the main axis; either row, rowReverse, column or columnReverse
     */
    xsDirection: {
      type:String,
      default:null,
      required:false,
      validator: function(value: Direction){
        return ["row" , "column", "rowReverse" , "columnReverse"].indexOf(value) !== -1
      },
    },
    /**
     * Box flex-direction property sets how flex items are placed in the Box defining the main axis; either row, rowReverse, column or columnReverse
     */
    smDirection: {
      type:String,
      default:null,
      required:false,
      validator: function(value: Direction){
        return ["row" , "column", "rowReverse" , "columnReverse"].indexOf(value) !== -1
      },
    },
    /**
     * Box flex-direction property sets how flex items are placed in the Box defining the main axis; either row, rowReverse, column or columnReverse
     */
    mdDirection: {
      type:String,
      default:null,
      required:false,
      validator: function(value: Direction){
        return ["row" , "column", "rowReverse" , "columnReverse"].indexOf(value) !== -1
      },
    },
    /**
     * Box flex-direction property sets how flex items are placed in the Box defining the main axis; either row, rowReverse, column or columnReverse
     */
    lgDirection: {
      type:String,
      default:null,
      required:false,
      validator: function(value: Direction){
        return ["row" , "column", "rowReverse" , "columnReverse"].indexOf(value) !== -1
      },
    },
    /**
     * Box flex-direction property sets how flex items are placed in the Box defining the main axis; either row, rowReverse, column or columnReverse
     */
    xlDirection: {
      type:String,
      default:null,
      required:false,
      validator: function(value: Direction){
        return ["row" , "column", "rowReverse" , "columnReverse"].indexOf(value) !== -1
      },
    },
    /**
     * Box flexbox justify-content property defines how the browser distributes space between and around content items along the main-axis of a Box, and the inline axis of a grid container.
     */
    justifyContent: {
      type:String,
      default:null,
      required:false,
      validator: function(value: JustifyContent){
        return ["start" , "end" , "center" , "between" , "around"].indexOf(value) !== -1
      },
    },
    margin: marginValidator,
    marginStart: marginValidator,
    marginEnd: marginValidator,
    marginTop: marginValidator,
    marginRight: marginValidator,
    marginBottom: marginValidator,
    marginLeft: marginValidator,
    xsMargin: marginValidator,
    xsMarginStart: marginValidator,
    xsMarginEnd: marginValidator,
    xsMarginTop: marginValidator,
    xsMarginRight: marginValidator,
    xsMarginBottom: marginValidator,
    xsMarginLeft: marginValidator,
    smMargin: marginValidator,
    smMarginStart: marginValidator,
    smMarginEnd: marginValidator,
    smMarginTop: marginValidator,
    smMarginRight: marginValidator,
    smMarginBottom: marginValidator,
    smMarginLeft: marginValidator,
    mdMargin: marginValidator,
    mdMarginStart: marginValidator,
    mdMarginEnd: marginValidator,
    mdMarginTop: marginValidator,
    mdMarginRight: marginValidator,
    mdMarginBottom: marginValidator,
    mdMarginLeft: marginValidator,
    lgMargin: marginValidator,
    lgMarginStart: marginValidator,
    lgMarginEnd: marginValidator,
    lgMarginTop: marginValidator,
    lgMarginRight: marginValidator,
    lgMarginBottom: marginValidator,
    lgMarginLeft: marginValidator,
    xlMargin: marginValidator,
    xlMarginStart: marginValidator,
    xlMarginEnd: marginValidator,
    xlMarginTop: marginValidator,
    xlMarginRight: marginValidator,
    xlMarginBottom: marginValidator,
    xlMarginLeft: marginValidator,
    /**
     * Box padding, applied vertically on the X and Y axis
     */
    padding: marginValidator,
    /**
     * Box padding, applied vertically on the X axis
     */
    paddingX: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Padding){
        return (-1<value && 13>value)
      },
      description:'Box padding, applied horizontally',
    },
    /**
     * Box padding, applied vertically on the Y axis
     */
    paddingY: {
      type:Number,
      default:null,
      required:false,
      validator: function(value: Padding){
        return (-1<value && 13>value)
      },
    },
    /**
     * Box width property sets an boxes's width.
     */
    width: {
      type: [ Number, String ],
      default:null,
      required:false,
    },
    /**
     * Box flex-wrap property sets flex-wrap:wrap, setting flex items to wrap onto multiple lines.
     */
    wrap:{
      type: Boolean,
      default:false,
      required:false,
    },
    /**
     * Box position property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.
     */
    position: {
      type:String,
      default:null,
      required:false,
      validator: function(value: Position){
        return ['absolute' , 'relative' , 'fixed'].indexOf(value) !== -1
      },
    },
    /**
     * Box top position property participates in specifying a vertical position of 0 of positioned element. It has no effect on non-positioned elements.
     */
    top:{
      type: Boolean,
      default:false,
      required:false,
    },
    /**
     * Box bottom position  property participates in specifying a vertical position of 0 of positioned element. It has no effect on non-positioned elements.
     */
    bottom:{
      type: Boolean,
      default:false,
      required:false,
    },
    /**
     * Box left position \ property participates in specifying a horizontal position of 0 of positioned element. It has no effect on non-positioned elements.
     */
    left:{
      type: Boolean,
      default:false,
      required:false,
    },
    /**
     * Box right position \ property participates in specifying a horizontal position of 0 of positioned element. It has no effect on non-positioned elements.
     */
    right:{
      type: Boolean,
      default:false,
      required:false,
    },
    /**
     * Box max-height property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.
     */
    maxHeight: {
      type: [ Number, String ],
      default:null,
      required:false,
    },
    /**
     * Box height property specifies the height of an element. By default, the property defines the height of the content area.
     */
    height: {
      type: [ Number, String ],
      default:null,
      required:false,
    },
    /**
     * Box overflow property sets what to do when an element\'s content is too big to fit in its block formatting context.
     */
    overflow: {
      type:String,
      default:null,
      required:false,
      validator: function(value: OverFlow){
        return ['visible' , 'hidden' , 'scroll' , 'scrollX' , 'scrollY' , 'auto'].indexOf(value) !== -1
      },
    },
    /**
     * Box flexbox flex property; sets how a flex type Box will grow or shrink to fit the space available in its flex container.
     */
    flex: {
      default:'shrink',
      type:String,
      required:false,
      validator: function (value: Flex) {
        return ['grow' , 'shrink' , 'none'].indexOf(value) !== -1
      },
    },
    /**
     * Box background color property
     */
    color: {
      type:String,
      required:false,
      default:null,
    },
  },
  computed: {
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
        // class: boxProps.className,
        class: modulesClasses.join(' '),
        style: boxProps.style,
      }
    },
  }
})
</script>
<style module lang="scss">
@import "../styles/mixins";
@import "../styles/box/box-style.scss";
@import "../styles/box/box-whitespaces";
@import "../styles/box/box-layout";
@import "../styles/box/box-column";
@import "../styles/box/grid";
@import "../../node_modules/@fishtank/colors/dist/css-variable-stylesheet";
</style>
