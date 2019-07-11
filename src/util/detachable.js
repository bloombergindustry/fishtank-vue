import Vue from 'vue'
export default Vue.extend({
  name: 'detachable',

  data: () => ({
    hasDetached: false
  }),

  props: {
    attach: {
      type: null,
      default: () => document.body,
    },
    contentClass: {
      default: ''
    }
  },

  watch: {
    attach () {
      this.hasDetached = false
      this.initDetach()
    },
    hasContent: 'initDetach'
  },

  mounted () {
    !this.lazy && this.initDetach()
  },

  deactivated () {
    this.isActive = false
  },

  beforeDestroy () {
    if (!this.$refs.content) return

    // IE11 Fix
    try {
      this.$refs.content.parentNode.removeChild(this.$refs.content)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },

  methods: {
    initDetach () {
      if (this._isDestroyed ||
        !this.$refs.content ||
        this.hasDetached ||
        // Leave menu in place if attached
        // and dev has not changed target
        this.attach === '' || // If used as a boolean prop (<v-menu attach>)
        this.attach === true || // If bound to a boolean (<v-menu :attach="true">)
        this.attach === 'attach' // If bound as boolean prop in pug (v-menu(attach))
      ) return

      let target
      if (this.attach === false) {
        // Default, detach to app
        target = document.querySelector('[data-app]')
      } else if (typeof this.attach === 'string') {
        // CSS selector
        target = document.querySelector(this.attach)
      } else {
        // DOM Element
        target = this.attach
      }

      if (!target) {
        // eslint-disable-next-line no-console
        console.warn(`Unable to locate target ${this.attach || '[data-app]'}`, this)
        return
      }

      target.appendChild(
        this.$refs.content,
      )

      this.hasDetached = true
    }
  }
})
