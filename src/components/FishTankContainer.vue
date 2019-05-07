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
} from '../util/style'

import {
  union,
  bind,
  range,
  toggle,
  mapping,
  rangeWithoutZero
} from '../util/transform'

const Columns = require('../util/boxColumns.js')

const styles = {
  // container:"layoutContainer",
  fluid:"layoutFluid",
}

const props: any = {
  // container:toggle(styles.container),
  // fluid:toggle(styles.fluid),
}
import { boxMixin } from "../util/mixins"

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
} from '../util/types/boxTypes'

import Vue from 'vue'
export default Vue.extend({
  name:"FishTankContainer",
  render(createElement) {
    return createElement(
        'div', (this as any).boxProps, this.$slots.default
      )
  },
  mixins:[
    boxMixin
  ],
  props:{
    container:Boolean,
    fluid: Boolean
  },
  methods:{
    isFluid(){
      return this.$props.fluid ? ` ` :  ` ${this.$style.layoutFixed} `
    },
  },
  computed:{
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
      // debugger
      return {
        // class: boxProps.className,
        class: (modulesClasses.join(' ') 
          +( (this as any).isFluid())
          + " "
          +this.$style.layoutContainer
          ),
        style: boxProps.style,
      }
    },
  }
})
</script>
<style module lang="scss">
@import "../styles/box/layout-style";

</style>
