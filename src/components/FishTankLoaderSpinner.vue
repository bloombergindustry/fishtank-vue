
<template>
  <div 
    :class="[gradientClass, spinnerSize, alignClass]" 
    :aria-busy="`${loading}`"
    class="ft-spinner" 
    role="alert">
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
        :style="{strokeDasharray: `${strokeDashArray}`}"
        :class="['ft-spinner-gradient', {'pause-spinner': !loading}]"
        cx="50" 
        cy="50" 
        @stop-spinner="stopSpinner" />
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
      required:true,
      description: "Brand color theme",
      availableThemes: ["bgov", "blaw", "notification-1", "notification-2", "notification-3"]
    },
    size: {
      type:String,
      default: "medium",
      required:true,
      description: "Component Size",
      availableSizes: ["small", "medium", "large"]
    },
    align: {
      type:String,
      default: "center",
      required: false,
    },
    loading:{
      type:Boolean,
      default:true,
      required:false,
    }
  },
  data () {
    return{
      smallDash: 26,
      smallDashMax: 52,
      mediumDash: 50,
      mediumDashMax: 100,
      largeDash: 100,
      largeDashMax: 200
    }
  },
  computed:{
    gradientClass: function(){ return "ft-spinner--" + this.theme + "-gradient"},
    spinnerSize: function(){ return "ft-spinner--" + this.size},
    alignClass: function() { return "ft-spinner--align-" + this.align},
    strokeDashArray: function(){
      let countDown = this.size === 'small' ? this.smallDash : 
        this.size === 'medium' ? this.mediumDash :this.largeDash
      return countDown
    }
  },
  watch: {
    loading: function(isLoading) {
      isLoading ? null : this.stopSpinner()
    }
  },
  methods:{
    stopSpinner: function(){
      var spinInt = window.setInterval( ()=>{
        if (this[this.size + 'Dash'] >= this[this.size + 'DashMax']){
          this.$emit('spinner-done')
          window.clearInterval(spinInt)
          this.loading = false
          return
        } else {
          this[this.size + 'Dash']++
        }
      }, (0.57*([this.size + 'Dash'] * 2)))
      
    }
  }
})
</script>
