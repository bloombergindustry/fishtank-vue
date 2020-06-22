<script lang="ts">
import { Component, Prop, Model, Vue, Watch } from 'vue-property-decorator'
import Detachable from '../util/detachable'
import { Close24 } from '@fishtank/icons-vue'
import { mixins } from 'vue-class-component';

let overlayTimeout: null | number = null
let overlay: null | HTMLElement = document.querySelector('.ft-overlay')

@Component({
  components: {
    Close24
  }
})
export default class FishTankModalV2 extends mixins(Detachable) {
  /**
   * Modal is active
   */
  @Model('change', { type: Boolean, required: true}) active: boolean

  /**
   * Modal heading text 
   */
  @Prop({
    type:String,
    required:false,
    default: undefined
  })
  heading:String

  /**
   * Modal has a fixed of it's maximum possible size in the viewport
   */
  @Prop({
    type:Boolean,
    required:false,
    default:false
  })
  fixed:boolean

  /**
   * Dialog exists
   */
  @Prop({
    type:Boolean,
    required:false,
    default:false
  })
  dialog:boolean

  /**
   * Modal can be closed using the ESC key
   */
  @Prop({
    type:Boolean,
    required:false,
    default:true,
  })
  escapeable:boolean

  /**
   * Modal width
   */
  @Prop({
    type:String,
    required: false,
    default: undefined
  })
  width:string

    /**
   * Modal content overflow
   */
  @Prop({
    type:String,
    required: false,
    default: undefined
  })
  overflow:string

  /**
   * Modal content overflow
   */
  @Prop({
    type:Boolean,
    required: false,
    default: true
  })
  modalLocked:boolean

  // Data
  overlayTransitionDuration = 650 // transition (500) + delay (150)
  isActive = false

  // Computed functions
  get showFooter() : Boolean {
    return this.fixed ||
            !!this.$slots.footer ||
            !!this.$slots.footerRight ||
            !!this.$slots.footerLeft
  }
  
  get styles() : Record<string, string> {
    let styles : Record<string, string> = {}

    if (this.width) {
      styles['max-width'] = this.width
    }

    return styles
  }
  get classObj() : Record<any, any> {
    let classObj : Record<string, boolean> = {
      'ft-modal--active': this.active,
      'ft-modal--fixed': this.fixed,
      'ft-modal--dialog': this.dialog,
    }

    // This is a bit of a hack, but since our rendered modal doesn't actually appear
    // as a child of the top-level in the DOM, we can't simply allow a user to apply
    // a custom class and have it take effect on the modal styling.  This copies any
    // custom classes from the top-level item onto the actual modal div.
    if (this.$el) {
      let parentClasses = this.$el.className.split(' ').forEach((classVal) => {
        if(classVal !== "ft-modal__entry-point") {
          classObj[classVal] = true
        }
      })
    }

    return classObj
  }

   @Watch('active')
   change(value : Boolean) {
     this.updateState()
   }

  mounted() {
    this.updateState()
  }

  // Component methods
  close() {
    /**
    * Change event.
    *
    * @type {Boolean}
    */
    this.$emit('change', false)
    this.$emit('close', {})
  }
  open() {
    /**
    * Change event.
    *
    * @type {Boolean}
    */
    this.$emit('change', true)
    this.$emit('open', {})
  }
  show() {
    if (this.escapeable) {
      document.addEventListener('keyup', this.escapeListener)
    }
    this.isActive = true
    this.open()
    this.genOverlay()
  }
  hide() {
    if (this.escapeable) {
      document.removeEventListener('keyup', this.escapeListener)
    }

    // Don't remove the overlay unless this modal is currently active
    if (this.isActive) {
      this.isActive = false
      this.close()
      this.removeOverlay()
    }
  }
  updateState() {
    if (this.active) {
      if (this.modalLocked === true){
        document.body.classList.add('ft-modal-locked')
      }
      this.show()
    } else {
      if (this.modalLocked === true){
        document.body.classList.remove('ft-modal-locked')
      }
      this.hide()
    }
  }
  genOverlay() : Boolean {
    // If fn is called and timeout is active
    // or overlay already exists
    // cancel removal of overlay and re-add active
    if (overlayTimeout || overlay) {
      this.clearTimeout()

      //  return overlay ?
      //          !!overlay.classList.add('overlay--active') :
      //          false
      // not pretty
      if(overlay) {
        var len = overlay.classList.length
        overlay.classList.add('ft-overlay--active')
        if(overlay.classList.length > len) {
          return true;
        } else {
          return false;
        }
      }
    }

    if (!overlay) {
      overlay = document.querySelector('.ft-overlay') as HTMLElement | null
    }
    if (!overlay) {
      overlay = document.createElement('div')
    }
    overlay.className = 'ft-overlay'

    this.hideScroll()

    document.body.appendChild(overlay)

    // eslint-disable-next-line no-unused-expressions
    overlay.clientHeight // Force repaint
    requestAnimationFrame(() => {
      if (!overlay) return
      overlay.className += ' ft-overlay--active'
    })

    return true
  }

  removeOverlay () {
    if (!overlay) {
      return this.showScroll()
    }
    if(document.body.classList.contains('ft-modal-locked')){
      document.body.classList.remove('ft-modal-locked')
    }
    overlay.classList.remove('ft-overlay--active')

    overlayTimeout = window.setTimeout(() => {
      // IE11 Fix
      try {
        if (overlay && overlay.parentNode) {
          overlay.parentNode.removeChild(overlay)
        }
        overlay = null
        this.showScroll()
        this.clearTimeout()
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }, this.overlayTransitionDuration)
  }

  clearTimeout() {
    if (overlayTimeout) {
      clearTimeout(overlayTimeout)
      overlayTimeout = null
    }
  }

  hideScroll () {
    window.addEventListener('wheel', this.scrollListener)
    window.addEventListener('keydown', this.scrollListener)
  }

  showScroll () {
    document.documentElement.classList.remove('ft-overflow-y-hidden')
    window.removeEventListener('wheel', this.scrollListener)
    window.removeEventListener('keydown', this.scrollListener)
  }

  escapeListener(e : KeyboardEvent) {
    if(e.keyCode === 27) {
      this.close()
    }
  }
  scrollListener (e : any) {
    if (e.type === 'keydown') {
      if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(e.target.tagName) >= 0) return

      const keyCodes = {
        up: 38,
        down: 40,
        pageup: 33,
        pagedown: 34
      }

      const up = [keyCodes.up, keyCodes.pageup]
      const down = [keyCodes.down, keyCodes.pagedown]

      if (up.indexOf(e.keyCode) >= 0) {
        e.deltaY = -1
      } else if (down.indexOf(e.keyCode) >= 0) {
        e.deltaY = 1
      } else {
        return
      }
    }

    if (e.target === overlay ||
      (e.type !== 'keydown' && e.target === document.body) ||
      this.checkPath(e)) e.preventDefault()
  }

  /**
   * Polyfill for Event.prototype.composedPath
   * @param {Event} e
   * @returns Element[]
   */
  composedPath (e : any) {
    if (e.composedPath) return e.composedPath()

    const path = []
    let el = e.target

    while (el) {
      path.push(el)

      if (el.tagName === 'HTML') {
        path.push(document)
        path.push(window)

        return path
      }

      el = el.parentElement
    }
  }

  /**
   * @param {Event} e
   * @returns void
   */
  hasScrollbar (el : any) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return false

    const style : any = window.getComputedStyle(el)
    return ['auto', 'scroll'].indexOf(style['overflow-y']) >= 0 && el.scrollHeight > el.clientHeight
  }

  shouldScroll (el : any, delta : any) {
    if (el.scrollTop === 0 && delta < 0) return true
    return el.scrollTop + el.clientHeight === el.scrollHeight && delta > 0
  }

  isInside (el : any, parent : any) : Boolean {
    if (el === parent) {
      return true
    } else if (el === null || el === document.body) {
      return false
    } else {
      return this.isInside(el.parentNode, parent)
    }
  }

  /**
   * @param {Event} e
   * @returns boolean
   */
  checkPath (e : any) {
    const path = e.path || this.composedPath(e)
    const delta = e.deltaY || -e.wheelDelta

    if (e.type === 'keydown' && path[0] === document.body) {
      const dialog = this.$refs.dialog
      const selected = window.getSelection().anchorNode
      if (this.hasScrollbar(dialog) && this.isInside(selected, dialog)) {
        return this.shouldScroll(dialog, delta)
      }
      return true
    }

    for (let index = 0; index < path.length; index++) {
      const el = path[index]

      if (el === document) return true
      if (el === document.documentElement) return true
      if (el === this.$refs.content) return true

      if (this.hasScrollbar(el)) return this.shouldScroll(el, delta)
    }

    return true
  }

  accessibilityClick(){
    this.close()
  }
}

</script>

<template>
  <div class="ft-modal__entry-point">
    <div
      ref="content"
      :class="classObj"
      class="ft-modal"
    >
      <div
        v-if="escapeable"
        class="ft-modal__escapable-background"
        @click="close"
      />
      <div 
        :style="styles"
        class="ft-modal__container"
      >
        <div
          class="ft-modal__heading"
        >
          <div class="ft-modal__heading-title-container">
            <div
              v-if="$slots.headingIcon"
              class="ft-modal__heading-icon-wrapper"
              tabindex="-1"
            >
              <div 
                class="ft-modal__heading-icon" 
                tabindex="-1">
                <!-- @slot Slot for heading icon -->
                <slot name="headingIcon"/>
              </div>
            </div>
            <div
              class="ft-modal__heading-title"
            >
              <!-- @slot Slot for heading -->
              <slot name="heading"/>
            </div>
          </div>
          <div
            v-if="$slots.headingExtra"
            class="ft-modal__heading-extra"
          >
            <!-- @slot Slot for extra heading -->
            <slot 
              name="headingExtra"/>
          </div>
          <div class="ft-modal__close">
            <span
              v-if="!dialog"
              class="ft-modal__close-separator"
            />
            <div class="ft-modal__close-icon-wrapper">
              <Close24
                tabindex="0"
                aria-label="Close Modal"
                class="ft-modal__close-icon"
                @click="close"
                @keydown.enter="accessibilityClick"
              />
            </div>
          </div>
        </div>

        <div 
          class="ft-modal__body"
          :style="overflow === undefined ? {'overflow-y':'auto'} : {'overflow-y':overflow} ">
          <!-- @slot Slot for modal body -->
          <slot/>
        </div>

        <div
          v-if="showFooter"
          class="ft-modal__footer"
        >
          <div
            v-if="$slots.footer"
            class="ft-modal__footer-container"
          >
          <!-- @slot Slot for footer -->
            <slot name="footer"/>
          </div>
          <div
            v-else-if="$slots.footerLeft || $slots.footerRight"
            class="ft-modal__footer-container"
          >
            <div class="ft-modal__footerLeft">
              <!-- @slot Slot for footer left -->
              <slot name="footerLeft"/>
            </div>
            <div class="ft-modal__footerRight">
              <!-- @slot Slot for footer right -->
              <slot name="footerRight"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../node_modules/@fishtank/type/dist/index.scss';
  @import url($cdn-url);
</style>

<style scoped lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  $modal-border: 1px solid $color-gray-lighter;


.ft-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: none;
  justify-content: center;
  align-items: center;
}

.ft-modal__escapable-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
}

.ft-modal__container {
  position: relative;
	box-sizing: border-box;
  border: $modal-border;
	border-radius: 2px;
	background-color: $color-white;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.4);
  width: 100%;
  overflow: hidden;
  max-width: 500px;
  max-height: calc(100% - (36px * 2));
  display: flex;
  flex-direction: column;
  z-index: 1002;
}

.ft-modal--active {
  display: flex;
}

.ft-modal--fixed {
  .ft-modal__container {
    height: 100%;
  }
}

.ft-modal__heading {
  padding: $baseline * 3;
  background-color: $color-gray-lightest;
  box-sizing: border-box;
  border-bottom: $modal-border;
  border-radius: 2px 2px 0 0;
  height: $baseline * 12;
  min-height: $baseline * 12;
  // font-size: $fontsize-base-lg;
  line-height: $lineheight-base-lg;
  font-family: $font-primary;
  font-weight: $fontweight-semi;
  display: flex;
  align-content: center;
  justify-content: space-between;
  white-space: nowrap;
}

.ft-modal__heading,
.ft-modal__footer {
  box-sizing: border-box;
}

.ft-modal__footer {
  // padding: $baseline * 3;
  padding: 0px;
  white-space: nowrap;
}

.ft-modal__footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ft-modal__heading-title-container {
  display: flex;
  align-items: center;
}

.ft-modal__heading-icon {
  display: flex;
}

.ft-modal__heading-icon-wrapper  + .ft-modal__heading-title {
  margin-left: 8px;
}

.ft-modal__heading-extra {
  flex: 0 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 12px;
}

.ft-modal__close {
  display: flex;
  align-items: center;
  margin-left: 12px;
}

.ft-modal__close-separator {
  display: inline-block;
  width: 1px;
  height: 32px;
  background-color: $color-gray-lighter;
}

.ft-modal__close-icon-wrapper {
  padding-left: 12px;
  display: flex;
}

.ft-modal__close-icon {
  cursor: pointer;
}

.ft-modal__body {
  overflow-x: hidden;
}

.ft-modal--fixed {
  .ft-modal__footer {
    // padding: $baseline * 3;
    background-color: $color-gray-lightest;
    border-top: $modal-border;
    border-radius: 0 0 2px 2px;
  }

  .ft-modal__body {
    flex: 1 100%;
  }
}

.ft-modal--dialog {
  .ft-modal__heading {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    margin: 0 $baseline * 3;
  }
}

@include breakpoint-sm-or-lesser {
  .ft-modal__container {
    height: 100%;
    max-height: 100%;
  }

  .ft-modal__body {
    flex: 1 100%;
  }

  .ft-modal--fixed {
    .ft-modal__footer {
      // padding-bottom: $baseline * 3;
    }
  }
}


.ft-modal__footerLeft{
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.ft-modal__footerRight{
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

</style>

<style>
  .ft-modal-locked {
    height: 100%;
    overflow: hidden;
  }

.ft-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0,0,0, 0.5)
}

.ft-overlay--active {
  display: block;
}

</style>
