<template>
  <div class="modal__entry-point">
    <div
      ref="content"
      :class="classObj"
      class="modal"
    >
      <div
        v-if="escapeable"
        class="modal__escapable-background"
        @click="close"
      />
      <div 
        :style="styles"
        class="modal__container"
      >
        <div
          class="modal__heading"
        >
          <div class="modal__heading-title-container">
            <div
              v-if="$slots.headingIcon"
              class="modal__heading-icon-wrapper"
              tabindex="-1"
            >
              <div 
                class="modal__heading-icon" 
                tabindex="-1">
                <slot name="headingIcon"/>
              </div>
            </div>
            <div
              class="modal__heading-title"
            >
              <slot name="heading"/>
            </div>
          </div>
          <div
            v-if="$slots.headingExtra"
            class="modal__heading-extra"
          >
            <slot 
              name="headingExtra"/>
          </div>
          <div class="modal__close">
            <span
              v-if="!dialog"
              class="modal__close-separator"
            />
            <div class="modal__close-icon-wrapper">
              <Close24
                tabindex="0"
                aria-label="Close Modal"
                class="modal__close-icon"
                @click="close"
                @keydown.enter="accessibilityClick"
              />
            </div>
          </div>
        </div>

        <div class="modal__body">
          <slot/>
        </div>

        <div
          v-if="showFooter"
          class="modal__footer"
        >
          <div
            v-if="$slots.footer"
            class="modal__footer-container"
          >
            <slot name="footer"/>
          </div>
          <div
            v-else-if="$slots.footerLeft || $slots.footerRight"
            class="modal__footer-container"
          >
            <div class="modal__footerLeft">
              <slot name="footerLeft"/>
            </div>
            <div class="modal__footerRight">
              <slot name="footerRight"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Detachable from '@/util/detachable'
import { Close24 } from '@fishtank/icons-vue'

let overlayTimeout: null | number = null
let overlay: null | HTMLElement = document.querySelector('.overlay')

export default Vue.extend({
  components: {
    Close24
  },
  mixins: [
    Detachable,
  ],
  model: {
    prop: 'active',
    event: 'change'
  },
  props: {
    heading: {
      type: String,
      required: false,
      default: undefined,
      description: "Modal heading text"
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
      description: "Modal has a fixed of it's maximum possible size in the viewport"
    },
    dialog: {
      type: Boolean,
      required: false,
      default: false,
    },
    active: {
      type: Boolean,
      required: true,
      description: "Modal is active"
    },
    escapeable: {
      type: Boolean,
      required: false,
      default: false,
      description: "Modal can be closed using the ESC key"
    },
    width: {
      type: String,
      required: false,
      default: undefined,
      description: "Modal width"
    },
  },
  data() {
    return {
      overlayTransitionDuration: 500 + 150, // transition + delay
      isActive: false,
    }
  },
  computed: {
    showFooter() : Boolean {
      return this.fixed ||
             !!this.$slots.footer ||
             !!this.$slots.footerRight ||
             !!this.$slots.footerLeft
    },
    styles() : Record<string, string> {
      let styles : Record<string, string> = {}

      if (this.width) {
        styles['max-width'] = this.width
      }

      return styles
    },
    classObj() : Record<any, any> {
      let classObj : Record<string, boolean> = {
        'modal--active': this.active,
        'modal--fixed': this.fixed,
        'modal--dialog': this.dialog,
      }

      // This is a bit of a hack, but since our rendered modal doesn't actually appear
      // as a child of the top-level in the DOM, we can't simply allow a user to apply
      // a custom class and have it take effect on the modal styling.  This copies any
      // custom classes from the top-level item onto the actual modal div.
      if (this.$el) {
        let parentClasses = this.$el.className.split(' ').forEach((classVal) => {
          if(classVal !== "modal__entry-point") {
            classObj[classVal] = true
          }
        })
      }

      return classObj
    }
  },
  watch: {
    active(value : Boolean) {
      this.updateState()
    }
  },
  mounted() {
    this.updateState()
  },
  methods: {
    close() {
      this.$emit('change', false)
    },
    open() {
      this.$emit('change', true)
    },
    show() {
      if (this.escapeable) {
        document.addEventListener('keyup', this.escapeListener)
      }

      this.isActive = true
      this.genOverlay()
    },
    hide() {
      if (this.escapeable) {
        document.removeEventListener('keyup', this.escapeListener)
      }

      // Don't remove the overlay unless this modal is currently active
      if (this.isActive) {
        this.isActive = false
        this.removeOverlay()
      }
    },
    updateState() {
      if (this.active) {
        this.show()
      } else {
        this.hide()
      }
    },
    genOverlay() : Boolean {
      // If fn is called and timeout is active
      // or overlay already exists
      // cancel removal of overlay and re-add active
      if (overlayTimeout || overlay) {
        this.clearTimeout()

        return overlay ?
                !!overlay.classList.add('overlay--active') :
                false
      }

      if (!overlay) {
        overlay = document.querySelector('.overlay') as HTMLElement | null
      }
      if (!overlay) {
        overlay = document.createElement('div')
      }
      overlay.className = 'overlay'

      this.hideScroll()

      document.body.appendChild(overlay)

      // eslint-disable-next-line no-unused-expressions
      overlay.clientHeight // Force repaint
      requestAnimationFrame(() => {
        if (!overlay) return
        overlay.className += ' overlay--active'
      })

      return true
    },
    removeOverlay () {
      if (!overlay) {
        return this.showScroll()
      }

      overlay.classList.remove('overlay--active')

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
          console.log(e)
        }
      }, this.overlayTransitionDuration)
    },
    clearTimeout() {
      if (overlayTimeout) {
        clearTimeout(overlayTimeout)
        overlayTimeout = null
      }
    },
    hideScroll () {
      window.addEventListener('wheel', this.scrollListener)
      window.addEventListener('keydown', this.scrollListener)
    },
    showScroll () {
      document.documentElement.classList.remove('overflow-y-hidden')
      window.removeEventListener('wheel', this.scrollListener)
      window.removeEventListener('keydown', this.scrollListener)
    },
    escapeListener(e : KeyboardEvent) {
      if(e.keyCode === 27) {
        this.close()
      }
    },
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
    },
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
    },
        /**
     * @param {Event} e
     * @returns void
     */
    hasScrollbar (el : any) {
      if (!el || el.nodeType !== Node.ELEMENT_NODE) return false

      const style : any = window.getComputedStyle(el)
      return ['auto', 'scroll'].indexOf(style['overflow-y']) >= 0 && el.scrollHeight > el.clientHeight
    },
    shouldScroll (el : any, delta : any) {
      if (el.scrollTop === 0 && delta < 0) return true
      return el.scrollTop + el.clientHeight === el.scrollHeight && delta > 0
    },
    isInside (el : any, parent : any) : Boolean {
      if (el === parent) {
        return true
      } else if (el === null || el === document.body) {
        return false
      } else {
        return this.isInside(el.parentNode, parent)
      }
    },
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
    },
    accessibilityClick(){
      this.close()
    }
  }
})
</script>

<style scoped lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  $modal-border: 1px solid $color-gray-lighter;


.modal {
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

.modal__escapable-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
}

.modal__container {
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

.modal--active {
  display: flex;
}

.modal--fixed {
  .modal__container {
    height: 100%;
  }
}

.modal__heading {
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

.modal__heading,
.modal__footer {
  box-sizing: border-box;
}

.modal__footer {
  // padding: $baseline * 3;
  padding: 0px;
  white-space: nowrap;
}

.modal__footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal__heading-title-container {
  display: flex;
  align-items: center;
}

.modal__heading-icon {
  display: flex;
}

.modal__heading-icon-wrapper  + .modal__heading-title {
  margin-left: 8px;
}

.modal__heading-extra {
  flex: 0 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 12px;
}

.modal__close {
  display: flex;
  align-items: center;
  margin-left: 12px;
}

.modal__close-separator {
  display: inline-block;
  width: 1px;
  height: 32px;
  background-color: $color-gray-lighter;
}

.modal__close-icon-wrapper {
  padding-left: 12px;
  display: flex;
}

.modal__close-icon {
  cursor: pointer;
}

.modal__body {
  // padding: $baseline * 3;
  overflow-y: auto;
  overflow-x: hidden;
}

.modal--fixed {
  .modal__footer {
    // padding: $baseline * 3;
    background-color: $color-gray-lightest;
    border-top: $modal-border;
    border-radius: 0 0 2px 2px;
  }

  .modal__body {
    flex: 1 100%;
  }
}

.modal--dialog {
  .modal__heading {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    margin: 0 $baseline * 3;
  }
}

@include breakpoint-sm-or-lesser {
  .modal__container {
    height: 100%;
    max-height: 100%;
  }

  .modal__body {
    flex: 1 100%;
  }

  .modal--fixed {
    .modal__footer {
      // padding-bottom: $baseline * 3;
    }
  }
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(black, 0.5)
}

.overlay--active {
  display: block;
}

.modal__footerLeft{
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.modal__footerRight{
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
</style>
