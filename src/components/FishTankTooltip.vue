<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import Popper from 'popper.js'
import Tooltip from 'tooltip.js'
import FishTankText from './FishTankText.vue'
type Orientation = "left" | "auto" | "auto-start" | "auto-end" | "top-start" | "top" | "top-end" | "right-start" | "right" | "right-end" | "bottom-end" | "bottom" | "bottom-start" | "left-end" | "left-start" | undefined;

@Component({
  components: {
      ftext: FishTankText
    },
})

export default class FishTankTooltip extends Vue {

  /** 
  * Tooltip Content
  * Either a string of text or html
  */
  @Prop({
    type:String,
    default:'',
    required:false
  })
  title: String

  /** 
  * Tooltip Content Type
  * Either a 'text' or 'html'
  */
  @Prop({
    type:String,
    default:'text',
    required:false
  })
  contentType: String
  
  /** 
     * Tooltip Orientation
     * Uses Popper.js placement orientations (https://popper.js.org/popper-documentation.html#Popper.placements)
     * - auto
     * - top
     * - bottom
     * - right
     * - left
     *  You can use the following modifiers to better set position
     * - start
     * - end
     * More varient located on Popper.js docs - (https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md)
    */
  @Prop({
    type:String,
    default:'auto',
    required:false
  })
  orientation: String

  focus = false
  popObj = undefined
  inputEl = undefined
  content = undefined
  
  public createPop(): void {
    (this as any).inputEl = this.$refs.reference;
    this.$nextTick(function() {
      (this as any).popObj = new Tooltip(
        (this as any).inputEl,{
          title: this.getCustomContentHTML,
          placement: this.orientation as Orientation,
          html: true,
          boundariesElement: 'viewport'
        }
      )
    });
  }

  public disposePop (): void {
    this.$nextTick(function() {
      if((this as any).popObj !== undefined) (this as any).popObj.dispose()
    })
  }

  public blurPop (): void {
    this.$nextTick(function() {
      if((this as any).popObj !== undefined) (this as any).popObj.dispose()
    })
  }

  get identifier () {
    return (Math.random() * 10000).toFixed(0).toString()
  }

  get listeners(): Record<string, Function | Function[]> {
    return {
      ...this.$listeners,
      focus: ($event: FocusEvent) => {
        console.log('focus');
        this.createPop()
        this.$nextTick(function(){
          (this as any).popObj.show()
        });
        /**
        * Emits a focus event when the tooltip container is focused.
        * 
        * @event FocusEvent
        */
        return this.$emit("focus", $event);
      },
      blur: ($event: FocusEvent) => {
        console.log('blur');
        this.disposePop()
        /**
        * Emits a blue event when the tooltip container is blurred.
        * 
        * @event FocusEvent
        */
        return this.$emit("blue", $event);
      },
    }
  }

  get containsCustomContentHTML (): boolean {
    return this.$slots.customContent !== undefined
  }

  private getCustomContentHTML ():string {
    let customContent = document.getElementById(this.identifier)
    return ((customContent !== null && customContent.innerHTML.length) ? customContent.innerHTML.toString() : `${this.$props.title}`)
  }

}
</script>

<template>
  <div
    :class="['tooltip-wrap', (containsCustomContentHTML ? 'custom-content':'title')]"
    @mouseenter="createPop()"
    @mouseleave="disposePop()">
    <button
      class="tooltip-reference"
      role="button"
      :aria-label="title"
      ref="reference"
      v-on="listeners">
      <slot/>
    </button>
    <div>
      <div 
        class="tooltip-content"
        ref="tooltip"
        v-if="focus">
      </div>
    </div>
    <div
      class="custom-content"
      :id="identifier">
      <slot name="customContent" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/mixins';
.tooltip-wrap {
  display: inline-block;
}
</style>
<style lang="scss">
  @import '../styles/mixins';
  .tooltip {
   padding: $baseline * 2;
   margin-bottom: 10px;
   box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);
  }
  .title .tooltip{
    background: var(--tooltip-background-color, $color-gray-lightest);
  }
  .custom-content .tooltip{
    background: var(--tooltip-background-custom-color, $color-white);
  }
  .tooltip .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }

  .tooltip .tooltip-arrow {
      border-color: #FFC107;
  }
  .style5 .tooltip .tooltip-arrow {
      border-color: #1E252B;
  }
  .tooltip[x-placement^="top"] {
      margin-bottom: 5px;
  }
  .tooltip[x-placement^="top"] .tooltip-arrow {
      border-width: 5px 5px 5px 5px;
      box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
      transform: rotateZ(45deg);
  }
  
  .title .tooltip[x-placement^="top"] .tooltip-arrow {
    border-left-color: transparent;
    border-right-color: var(--tool-tip-arrow, $color-gray-lightest);
    border-top-color: transparent;
    border-bottom-color: var(--tool-tip-arrow, $color-gray-lightest);
  }

  .custom-content .tooltip[x-placement^="top"] .tooltip-arrow {
    border-left-color: transparent;
    border-right-color: var(--tool-tip-arrow, $color-white);
    border-top-color: transparent;
    border-bottom-color: var(--tool-tip-arrow, $color-white);
  }
  
  .tooltip[x-placement^="bottom"] {
      margin-top: 5px;
      box-shadow: 4px 2px 3px 0 rgba(0, 0, 0, 0.4);
      z-index:1;
  }
  .tooltip[x-placement^="bottom"] .tooltip-arrow {
      border-width: 5px 5px 5px 5px;
      border-left-color:  var(--tool-tip-arrow, $color-gray-lightest);
      border-right-color: transparent;
      border-top-color:  var(--tool-tip-arrow, $color-gray-lightest);
      border-bottom-color: transparent;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
      transform: rotateZ(45deg);
      z-index:0;
  }
  .tooltip[x-placement^="right"]{
      margin-left: 5px;
      
  }
  .tooltip[x-placement^="right"] .tooltip-arrow {
      border-width: 5px 5px 5px 5px;
      border-left-color: var(--tool-tip-arrow, $color-gray-lightest);
      border-right-color: transparent;
      border-top-color: transparent;
      border-bottom-color: var(--tool-tip-arrow, $color-gray-lightest);
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
      transform: rotateZ(45deg);
  }
  .tooltip[x-placement^="left"] {
      margin-right: 5px;
  }
  .tooltip[x-placement^="left"] .tooltip-arrow {
      border-width: 5px 5px 5px 5px;
      border-left-color: transparent;
      border-right-color: var(--tool-tip-arrow, $color-gray-lightest);
      border-top-color: var(--tool-tip-arrow, $color-gray-lightest);
      border-bottom-color: transparent;
      box-shadow: 5px -3px 3px 0 rgba(0, 0, 0, 0.4);
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
      transform: rotateZ(45deg);
  }
  .tooltip-wrap .custom-content {
    display:none;
  }
  .tooltip-reference {
    outline:0;
    background-color: transparent;
    border: 0;
    &:focus {
      box-shadow: 0 0 0 2px $color-selected;
    }
  }
</style>


