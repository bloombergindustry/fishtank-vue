<script lang="ts">
//Alignment meeds to be built
// example needs a trigger wrapping element/s to show block vs inline
// add option to show primary vs accent font stack
// add addional font weight options for regular

import Vue, {VNode} from 'vue'
  import {
    Style,
    InlineStyle,
    fromInlineStyle,
    identity,
    fromClassName,
    mapClassName,
    concat,
    toProps,
    returnFtColors,
    returnColorsArray
  } from '../util/style'

  import {
    mapping,
    toggle
  } from '../util/transform'
  import ftColorsObj from '@fishtank/colors/dist/text.common.js'
  import _ from 'lodash'

  const fontSizes = ['headingLg', 'headingMd', 'headingSm', 'baseLg', 'baseMd', 'baseSm']
  const align = ['left', 'right', 'center', 'justify']
  interface colorObject
  {
    colorname:string
  }

  const colors = returnColorsArray(ftColorsObj)

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
          return colors.indexOf(value) !== -1
        },
        default: 'black',
        description:"Font color",
        colors:`${colors}`
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
        description:"Fish Tank font stack"
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
        let mapColorNameToClass = (colorName: string) => {
          let [prefix, rest] = [colorName[0], colorName.substring(1, colorName.length)]
          let colorClassName = `color${prefix.toUpperCase()}${rest}`
          return colorClassName
        }
        return allColorMappings(mapColorNameToClass(value))
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
  @import '../../node_modules/@fishtank/colors/dist/css-variable-stylesheet-text';
  @import '../../node_modules/@fishtank/type/dist/css-variable-stylesheet';
  @import "../../node_modules/@fishtank/type/dist/index.custom-properties";

  /* font family */
  .antialiased {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  .primary {
    font-family: var(--font-primary)
  }

  .accent {
    font-family: var(--font-accent);
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
