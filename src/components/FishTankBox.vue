<template>
  <div v-bind="boxProps">
    <slot></slot>
  </div>
</template>
<script lang="ts">
// Trying to get the interface correct, I need to refactor once we get all the functionality
// This is the interface I am trying to use https://pinterest.github.io/gestalt/#/Box
import {
  Vue,
  Component,
  Prop
} from "vue-property-decorator";

import {
  Style,
  InlineStyle,
  fromInlineStyle,
  identity,
  fromClassName,
  mapClassName,
  concat,
  toProps,
  returnFtColors
} from '../util/style'

import {
  union,
  bind,
  range,
  toggle,
  mapping,
  rangeWithoutZero
} from '../util/transform'

import color  from '../util/ColorsClassMapping';

const _ = require("lodash").noConflict();

export type AlignItemType = "start" | "end" | "center" | "baseline" | "stretch";
export type Direction = "row" | "column";
export type DisplayType = "none"| "flex"| "block"| "inlineBlock"| "visuallyHidden";
export type JustifyContent = "start" | "end" | "center" | "between" | "around";
export type Position = 'absolute' | 'relative' | 'fixed';
export type OverFlow = 'visible' | 'hidden' | 'scroll' | 'scrollX' | 'scrollY' | 'auto'
export type Flex = 'grow' | 'shrink' | 'none'

export type Column = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Margin = -12 | -11 | -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
export type Padding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Color = returnFtColors

let colorMappingFunc = (value) => {
  if (!value) return identity()
  let allColorMappings = mapping(color)
  let mapColorNameToClass = (colorName) => {
    let [prefix, rest] = [colorName[0], colorName.substring(1, colorName.length)]
    let colorClassName = `color${prefix.toUpperCase()}${rest}Bg`
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
  xsDirectionColumn: "xsDirectionColumn"
};

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
  xsCol12: "xsCol12"
};

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
};

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
};

/* transformation js */
const marginStart = bind(rangeWithoutZero("marginStart"), whitespace);
const marginEnd = bind(rangeWithoutZero("marginEnd"), whitespace);
const marginTop = bind(rangeWithoutZero("marginTop"), whitespace);
const marginRight = bind(rangeWithoutZero("marginRight"), whitespace);
const marginBottom = bind(rangeWithoutZero("marginBottom"), whitespace);
const marginLeft = bind(rangeWithoutZero("marginLeft"), whitespace);
const margin = union(marginTop, marginBottom, marginLeft, marginRight);
const paddingX = bind(rangeWithoutZero("paddingX"), whitespace);
const paddingY = bind(rangeWithoutZero("paddingY"), whitespace);
const padding = union(paddingX, paddingY);

const props = {
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
  justifyContent: mapping({
    end: layout.justifyEnd,
    center: layout.justifyCenter,
    between: layout.justifyBetween,
    around: layout.justifyAround
  }),
  direction: mapping({
    row: styles.xsDirectionRow,
    column: styles.xsDirectionColumn
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
};

@Component
export default class Box extends Vue {
  @Prop() alignItems: AlignItemType;
  @Prop() display: DisplayType;
  @Prop() column: Column; /* 1 -12 */
  @Prop() direction: Direction; /* row column */
  @Prop() justifyContent: JustifyContent;  /* "start" | "end" | "center" | "between" | "around"; */
  @Prop() marginStart: Margin; /* between 12...12*/
  @Prop() marginEnd: Margin; /* between 12...12*/
  @Prop() marginTop: Margin; /* between 12...12*/
  @Prop() marginRight: Margin; /* between 12...12*/
  @Prop() marginBottom: Margin; /* between 12...12*/
  @Prop() marginLeft: Margin; /* between 12...12*/
  @Prop() margin: Margin; /* between 12...12*/
  @Prop() padding: Padding;
  @Prop() paddingX: Padding;
  @Prop() paddingY: Padding;
  @Prop() width: number | string; // TODO
  @Prop([Boolean]) wrap: boolean;
  @Prop() position: Position;
  @Prop([Boolean]) top: boolean;
  @Prop([Boolean]) left: boolean;
  @Prop([Boolean]) right: boolean;
  @Prop([Boolean]) bottom: boolean;
  @Prop([Number, String]) maxHeight: number | string;
  @Prop([Number, String]) height: number | string;
  @Prop() overflow: OverFlow;
  @Prop() flex: Flex;
  @Prop([String]) color: Color;

  get boxProps() {
    let concatenatedClasses: Style = identity();
    for (const prop in this.$props) {
      if (props[prop]) {
        concatenatedClasses = concat([concatenatedClasses, props[prop](this.$props[prop])])
      }
    }
    let boxProps = toProps(concatenatedClasses)
    return {
      class: boxProps.className,
      style: boxProps.style
    }
  }
}
</script>
<style lang="scss">
@import "../styles/variables";
@import "../styles/mixins";
@import "../styles/components/box/style";
@import "../styles/components/box/box-whitespaces";
@import "../styles/components/box/Layout";
@import "../styles/components/box/Column";
@import "../styles/components/box/Colors";
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
