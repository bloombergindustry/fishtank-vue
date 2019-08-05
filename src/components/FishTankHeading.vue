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
    toProps
  } from '../util/style'

  import {
    mapping,
    toggle
  } from '../util/transform'

  import ftColorsObj from '@fishtank/colors/dist/heading.common.js'
  import {
    propToFishtankColorName
  } from '../util/mappers'

  import _ from 'lodash'

  const fontSizes = ['headingLg', 'headingMd', 'headingSm', 'baseLg', 'baseMd', 'baseSm']
  const align = ['left', 'center']

  export default Vue.extend({
    name:"FishTankHeading",
    props: {
      level:{
        type:String,
        default:'1',
        validator: function (value: string) {
          return (0<(parseInt(value) && 7>parseInt(value)))
        },
        description:"Heading Semantic Level"
      },
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
        description:"Text color"
      },
      bold: {
        type: Boolean,
        required: false,
        default: false,
      },
      semiBold: {
        type: Boolean,
        required: false,
        default: false
      },
      size: {
        type: String,
        default: 'baseLg',
        validator: function (value: string) {
          return fontSizes.indexOf(value) !== -1
        },
        description:"Heading text size"
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
        description:"Heading font type"
      },
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
          size: (<any>this).fontMappingFunc,
          font: mapping(style)
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
      fontMappingFunc(value: string) {
        if (!value) return identity()
        let style = (<any>this).styles
        let allFontNameToClass = mapping(style)
        let mapFontNameToClass = (textName: string) => {
          let [prefix, rest] = [textName[0], textName.substring(1, textName.length)]
          let colorClassName = `fontSize${prefix.toUpperCase()}${rest}`
          return colorClassName
        }
        return allFontNameToClass(mapFontNameToClass(value))
      },
      colorMappingFunc (value: string) {
        if (!value) return identity()
        let style = (<any>this).styles
        let allColorMappings = mapping(style)
        return allColorMappings(propToFishtankColorName(value))
      }
    },
    render(createElement) {
      let textProps = (<any>this).textProps as {class: string, style: InlineStyle}

      return createElement(
        'h'+(<any>this).level, {class: textProps.class, style: textProps.style}, this.$slots.default
      )
    }
  })
</script>

<style lang="scss">
  @import '../../node_modules/@fishtank/type/dist/index.scss';
  @import url($cdn-url);
</style>

<style module lang="scss">
  @import '../../node_modules/@fishtank/colors/dist/css-variable-stylesheet-heading';
  @import '../../node_modules/@fishtank/type/dist/css-variable-stylesheet';
  @import '../../node_modules/@fishtank/type/dist/index.custom-properties';

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

  // .alignRight {
  //   text-align: right;
  // }

  .alignCenter {
    text-align: center;
  }

  // .textJustify {
  //   text-align: justify;
  // }

</style>
