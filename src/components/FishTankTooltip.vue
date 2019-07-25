<script lang="ts">
import Vue from 'vue'
import Popper from 'popper.js'
import Tooltip from 'tooltip.js'
import FishTankText from './FishTankText.vue'
type Orientation = "left" | "auto" | "auto-start" | "auto-end" | "top-start" | "top" | "top-end" | "right-start" | "right" | "right-end" | "bottom-end" | "bottom" | "bottom-start" | "left-end" | "left-start" | undefined
export default Vue.extend({
    name: 'FishTankTooltip',
    components: {
        ftext: FishTankText
    },
    props: {
        label: {
          type:String,
          default:'',
          required:false
        },
      /** 
       * Tooltip Orientation
       * Uses Popper.js placement orientations (https://popper.js.org/popper-documentation.html#Popper.placements)
       * - auto
       * - top
       * - bottom
       * - right
       * - left
       * More varient located on Popper.js docs
      */
        orientation: {
          type:String,
          default:'auto',
          required:false
        }
    },
    data(){
        return{
            focus: false,
            popObj: undefined,
            inputEl: undefined,
            content: undefined,
        }
    },
    destroyed(){
        if(this.$data.popObj!==undefined) this.destroyPop()
    },
    methods:{
      createPop() {
        console.log(this.label);
        (this as any).inputEl = this.$refs.content
        this.$nextTick(function() {
          (this as any).popObj = new Tooltip(
            (this as any).inputEl,{
              title: this.$props.label,
              placement: this.orientation as Orientation,
              boundariesElement: 'viewport'
            }
          )
        });
      },
      destroyPop(){
          if(this.$data.popObj !== undefined) this.$data.popObj.dispose()
      },
      focusToggle(){
        if(this.$data.focus){
            this.$data.focus = false;
        }
        else if(!this.$data.focus){
            this.$data.focus = true
        }
      }
    },
    mounted () {
      this.createPop()
    }
})
</script>

<template>
  <div
    class="tooltip-wrap"
    @mouseover="popObj.show()"
    @mouseleave="popObj.hide()">
    <div
      class="content"
      role="button"
      :aria-label="label"
      ref="content"
      >
      <slot/>
    </div>
    <div>
      <div 
        class="tooltip-content"
        ref="tooltip"
        v-if="focus">
        <!-- <span v-if="['bottom', 'right'].indexOf(orientation) >= 0" :class="['tooltip-arrow', `tooltip-arrow-${orientation}`]" />
        <ftext
          role="tooltip"
          class="tooltip-label">
          {{ label }}
        </ftext>
        <span v-if="['top', 'left'].indexOf(orientation) >= 0" :class="['tooltip-arrow', `tooltip-arrow-${orientation}`]" /> -->
          <!-- <span :class="['tooltip-arrow', `tooltip-arrow-${orientation}`]" /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/mixins';

// .popper-content{
//     padding: 4px;
//     border-radius: 2px;
//     background: var(--tooltip-arrow, $color-gray-lightest);
//     box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);
// }
.tooltip-wrap {
  display: inline-block;
}
// .tooltip-label {
  
//   padding:$baseline * 2;
//   // box-shadow: 0 2px 5px 0 rgba(0,0,0,0.3);
// }

// // .popper[x-placement^="top"]{
// //     visibility: visible;
// //     padding: 4px; 
// //     width: 120px;
// //     top: -60px;  
// // }
// .tooltip-arrow {
//   display: flex;
//   &:after {
//     content: ' ';
//     width: 0; 
//     height: 0; 
//     box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);
//   }
// }
// .tooltip-arrow-top {
//   text-align: center;
//   // width: 100%;
//   position: relative;
//   // top:9px;
//   &:after{
//     transform: rotateZ(45deg);
//     border-left: 5px solid var(--tooltip-arrow,transparent);
//     border-top: 5px solid var(--tooltip-arrow,transparent);
//     border-right: 5px solid $color-gray-lightest;
//     border-bottom: 5px solid var(--tooltip-arrow, $color-gray-lightest);
//     // box-shadow: 0 2px 5px 0 rgba(0,0,0,0.3);
//   }
// }
// .tooltip-arrow-bottom {
//   text-align: center;
//   // width: 100%;
//   position: relative;
//   // transform: rotateZ(180deg);
//   top:-10px;
//   &:after{
//     border-left: 10px solid transparent;
//     border-right: 10px solid transparent;
//     border-bottom: 10px solid var(--tooltip-arrow, $color-gray-lightest);
//     // box-shadow: 0 2px 5px 0 rgba(0,0,0,0.3);
//   }
// }
// .tooltip-arrow-left {
//   position: relative;
//   right:6px;
//   transform: rotateZ(90deg);
//   &:after{
//     border-left: 10px solid transparent;
//     border-right: 10px solid transparent;
//     border-bottom: 10px solid var(--tooltip-arrow, $color-gray-lightest);    
//   }
// }
// .tooltip-arrow-right {
//   position: relative;
//   left:6px;
//   transform: rotateZ(-90deg);
//   &:after{
//     border-left: 10px solid transparent;
//     border-right: 10px solid transparent;
//     border-bottom: 10px solid var(--tooltip-arrow, $color-gray-lightest);  
//   }
// }
// .is-horizontal {
//   display: flex;
//   // flex-direction: row;
// }
</style>
<style lang="scss">
  @import '../styles/mixins';
  .tooltip {
   background: var(--color-gray-lightest);
   padding: $baseline * 2;
   margin-bottom: 10px;
  }
  .tooltip-arrow {
    border-color: var(--color-gray-lightest);
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }
  .tooltip[x-placement^="top"] .tooltip-arrow{
    border-width: 10px 10px 0 10px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    bottom: -9px;
    left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

   .tooltip[x-placement^="left"] .tooltip-arrow{
    border-color: var(--color-gray-lightest);
    border-width: 10px 0 10px 10px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    right: -15px;
    margin-top: -5px;
    margin-bottom: 0;
  }
</style>


