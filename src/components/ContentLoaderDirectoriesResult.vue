<template>

  <ContentLoader
    :height="504"
    :width="400"
    :speed="2"
    primary-color="#f3f3f3"
    secondary-color="#ecebeb"
  >
    
    <rect 
      x="0" 
      y="0" 
      rx="5" 
      ry="0" 
      width="400" 
      height="108" 
    />

    <rect 
      x="0" 
      y="132" 
      rx="5" 
      ry="0" 
      width="400" 
      height="108" 
    />

    <rect 
      x="0" 
      y="264" 
      rx="5" 
      ry="0" 
      width="400" 
      height="108" 
    />

    <rect 
      x="0" 
      y="396" 
      rx="5" 
      ry="0" 
      width="400" 
      height="108" 
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
