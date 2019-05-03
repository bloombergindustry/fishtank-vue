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
  container:"layoutContainer",
  fluid:"layoutFluid",
}

const props: any = {
  column: bind(range("xsCol"), Columns),
  xsColumn: bind(range("xsCol"), Columns),
  smColumn: bind(range("smCol"), Columns),
  mdColumn: bind(range("mdCol"), Columns),
  lgColumn: bind(range("lgCol"), Columns),
  xlColumn: bind(range("xlCol"), Columns),
  container:toggle(styles.container),
  fluid:toggle(styles.fluid),
}
import { boxMixin } from "../util/mixins"

import Vue from 'vue'
export default Vue.extend({
  name:"FishTankLayout",
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
  computed:{
    moduleClassNames () {
      let style = (<any>this).$style
      return style
    },
    isFluid(){
      if (this.$props.container && this.$props.fluid) {
        return true
      } else {
        return false
      } 
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
          +(this.$props.container ? ``: ` ${this.$style.layoutColumn} `)
          +(this.$props.fluid ? ` `: ` ${this.$style.layoutFixed} `)
          ),
        style: boxProps.style,
      }
    },
  }
})
</script>
<style module lang="scss">
@import "../styles/box/layout-style";
@import "../styles/box/layout-column";

</style>
