<script lang="ts">
 import Vue, {VNode} from 'vue'
 import {
   Style,
   InlineStyle,
   fromInlineStyle,
   identity,
   fromClassName,
   mapClassName,
   concat,
   toProps
 } from '../util/style'

 import {
   mapping,
   toggle
 } from '../util/transform'
 import ftColorsObj from '@fishtank/colors/dist/text.common.js'
 import {
   propToFishtankColorName
 } from '../util/mappers'
 import _ from 'lodash'

 const fontSizes = ['headingLg', 'headingMd', 'headingSm', 'baseLg', 'baseMd', 'baseSm']
 const align = ['left', 'right', 'center', 'justify']

 export default Vue.extend({
   name:"FishTankText",
   props: {
     align: {
       type: String,
       default: 'left',
       validator: function (value: string) {
         return align.indexOf(value) !== -1
       },
       description:"Text alignment"
     },
     color: {
       type: String,
       validator: function (value: string) {
         return propToFishtankColorName(value) in ftColorsObj
       },
       default: 'black',
       description:"Font color"
     },
     inline: {
       type: Boolean,
       required: false,
       default: false,
       description:"Text renders in an inline element (span)"
     },
     bold: {
       type: Boolean,
       required: false,
       default: false,
       description:"Bold font weight"
     },
     semiBold: {
       type: Boolean,
       required: false,
       default: false,
       description:"Semi-bold font weight"
     },
     size: {
       type: String,
       default: 'baseLg',
       validator: function (value: string) {
         return fontSizes.indexOf(value) !== -1
       },
       description:"Font size"
     },
     overflow: {
       type: String,
       default: 'breakWord',
       validator: function (value: string) {
         return ['breakWord', 'normal'].indexOf(value) !== -1
       },
     },
     truncate: {
       type: Boolean,
       default: false,
       description:"Text, within a container of fixed size, overflows with ellipsis"
     },
     font: {
       default: 'primary',
       type: String,
       validator: function (value: string) {
         return ['primary', 'accent'].indexOf(value) !== -1
       },
       description:"Text font type"
     },
     italic: {
       default: false,
       type: Boolean,
       description:"Text renders as italic"
     }
   },
   computed: {
     styles () {
       let style = (<any>this).$style
       return style
     },
     propMapping () {
       let style = (<any>this).styles
       return {
         color: (<any>this).colorMappingFunc,
         inline: toggle(style.inline),
         semiBold: toggle(style.fontWeightSemiBold),
         bold: toggle(style.fontWeightBold),
         italic: toggle(style.fontStyleItalic),
         size: mapping({
           headingLg: style.fontSizeHeadingLg,
           headingMd: style.fontSizeHeadingMd,
           headingSm: style.fontSizeHeadingSm,
           baseLg: style.fontSizeBaseLg,
           baseMd: style.fontSizeBaseMd,
           baseSm: style.fontSizeBaseSm
         }),
         font: mapping({
           primary: style.primary,
           accent: style.accent
         }),
         align: mapping({
           left: style.alignLeft,
           right: style.alignRight,
           center: style.alignCenter,
           justify: style.alignJustify
         }),
         truncate: toggle(style.truncate),
         overflow: mapping({
           normal: style.normal,
           breakWord: style.breakWord
         })
       }
     },
     textProps(): { class: string, style: InlineStyle } {
       let concatenatedClasses: Style = concat([mapping((<any>this).styles)('antialiased'), identity()])

       for (const prop in this.$props) {
         if (prop in (<any>this).propMapping) {
           let mappingFunction: (v: any) => Style = _.get((<any>this).propMapping, prop)
           concatenatedClasses = concat([concatenatedClasses, mappingFunction(this.$props[prop])])
         }
       }
       let textProps = toProps(concatenatedClasses)
       return {
         class: textProps.className,
         style: textProps.style
       }
     }
   },
   methods: {
     colorMappingFunc (value: string) {
       if (!value) return identity()
       let style = (<any>this).styles
       let allColorMappings = mapping(style)
       return allColorMappings(propToFishtankColorName(value))
     }
   },
   render(createElement) {
     let textProps = (<any>this).textProps as {class: string, style: InlineStyle}

     if (this.$props.inline) {
       return createElement(
         'span', {class: textProps.class, style: textProps.style}, this.$slots.default
       )
     } else {
       return createElement(
         'div', {class: textProps.class, style: textProps.style}, this.$slots.default
       )
     }
   }
 })
</script>
<style module lang="scss">
  @import '../styles/mixins';
  @import '../../node_modules/@fishtank/colors/dist/css-variable-stylesheet-text';
  @import '../../node_modules/@fishtank/type/dist/css-variable-stylesheet';
  @import "../../node_modules/@fishtank/type/dist/index.custom-properties";

  /* font family */
  .antialiased {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  .primary {
    font-family: $font-primary;
  }

  .accent {
    font-family: $font-accent;
  }

  /* font weight */
  .fontWeightNormal {
    font-weight: normal;
  }
  .fontWeightSemiBold {
    font-weight: 600;
  }
  .fontWeightBold {
    font-weight: 700;
  }

  /* emphasis */
  .fontStyleRegular {
    font-style: normal;
  }

  .fontStyleItalic {
    font-style: italic;
  }

  /* transforms */
  .capitalize {
    text-transform: capitalize;
  }

  /* decorations */
  .underline {
    text-decoration: underline;
  }

  .lineThrough {
    text-decoration: line-through;
  }

  .noUnderline {
    text-decoration: none;
  }

  /* overflow */

  .breakWord {
    hyphens: auto;
    word-wrap: break-word;
  }

  .truncate {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* alignment */
  .alignLeft {
    text-align: left;
  }

  .alignRight {
    text-align: right;
  }

  .alignCenter {
    text-align: center;
  }

  .alignJustify {
    text-align: justify;
  }

</style>
