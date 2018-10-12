<template>

  <ContentLoader
    :height="107"
    :width="340"
    :speed="2"
    primary-color="#f3f3f3"
    secondary-color="#ecebeb"
  >
    
    <rect 
      x="0" 
      y="12" 
      rx="5" 
      ry="0" 
      width="85" 
      height="20" 
    />

    <rect 
      x="0" 
      y="40" 
      rx="5" 
      ry="0" 
      width="257" 
      height="16" 
    />

    <rect 
      x="0" 
      y="60" 
      rx="5" 
      ry="0" 
      width="171" 
      height="16" 
    />

    <rect 
      x="0" 
      y="80" 
      rx="5" 
      ry="0" 
      width="400" 
      height="16" 
    />

    <rect 
      x="0" 
      y="106" 
      rx="5" 
      ry="0" 
      width="400" 
      height="1" 
    />

  </ContentLoader>

</template>
<script lang="ts">
import { ContentLoader } from "vue-content-loader"
import Vue from 'vue'

export default Vue.extend({
  components:{
    ContentLoader
  },
  
})
</script>
