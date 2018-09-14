
<template>
  <div 
    :class="[gradientClass, spinnerSize]" 
    class="ft-spinner">
    <svg 
      height="100" 
      width="100">
      <defs>
        <linearGradient 
          :id="gradientClass" 
          x1="0%" 
          y1="0%" 
          x2="100%" 
          y2="0%">
          <stop 
            class="stop-class-1" 
            offset="0%" />
          <stop 
            class="stop-class-2" 
            offset="100%" />
        </linearGradient>
      </defs>
      <circle 
        class="ft-spinner-base" 
        cx="50" 
        cy="50" />
      <circle 
        class="ft-spinner-gradient" 
        cx="50" 
        cy="50" />
    </svg>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'FishTankLoaderSpinner',
  props: {
    theme: {
      type:String,
      default:"bgov",
      required:true
    },
    size: {
      type:String,
      default: "medium",
      required:true
    }
  },
  data () {
    return{
      // gradientClass: "ft-spinner--" + this.theme + "-gradient",
      // spinnerSize: "ft-spinner--" + this.size
    }
  },
  computed:{
    gradientClass: function(){ return "ft-spinner--" + this.theme + "-gradient"},
    spinnerSize: function(){ return "ft-spinner--" + this.size}
  }
})
</script>
