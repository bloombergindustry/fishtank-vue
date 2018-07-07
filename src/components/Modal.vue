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
            >
              <div class="ft-modal__heading-icon">
                <slot name="headingIcon"/>
              </div>
            </div>
            <div
              v-if="heading"
              class="ft-modal__heading-title"
            >
              {{ heading }}
            </div>
          </div>
          <div
            v-if="$slots.headingExtra"
            class="ft-modal__heading-extra"
          >
            <slot name="headingExtra"/>
          </div>
          <div class="ft-modal__close">
            <span
              v-if="!dialog"
              class="ft-modal__close-separator"
            />
            <div class="ft-modal__close-icon-wrapper">
              <Close24
                class="ft-modal__close-icon"
                @click="close"
              />
            </div>
          </div>
        </div>

        <div class="ft-modal__body">
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
            <slot name="footer"/>
          </div>
          <div
            v-else-if="$slots.footerLeft || $slots.footerRight"
            class="ft-modal__footer-container"
          >
            <div>
              <slot name="footerLeft"/>
            </div>
            <div>
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
let overlay: null | HTMLElement = document.querySelector('.ft-overlay')

export default Vue.extend({
  components: {
    Close24,
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
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false
    },
    dialog: {
      type: Boolean,
      required: false,
      default: false
    },
    active: {
      type: Boolean,
      required: true,
    },
    escapeable: {
      type: Boolean,
      required: false,
      default: false,
    },
    width: {
      type: String,
      required: false,
      default: undefined,
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
                !!overlay.classList.add('ft-overlay--active') :
                false
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
    },
    removeOverlay () {
      if (!overlay) {
        return this.showScroll()
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
  }
})
</script>
