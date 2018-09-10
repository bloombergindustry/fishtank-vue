
<template>
  <div class="ft-spinner" :class="gradientClass">
    <svg height="100" width="100">
      <defs>
        <linearGradient :id="gradientClass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop class="stop-class-1" offset="0%" />
          <stop class="stop-class-2" offset="100%" />
        </linearGradient>
      </defs>
      <circle class="ft-spinner-base" cx="50" cy="50" r="18" />
      <circle class="ft-spinner-gradient" cx="50" cy="50" r="18" />
    </svg>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Spinner',
  data () {
    return{
      gradientClass: this.theme + "-loader-gradient"
    }
  },
  props: {
    theme: {
      type:String,
      default:"bgov"
    }
  }
})
</script>
