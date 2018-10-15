<template>

  <ContentLoader
    :height="530"
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
      height="268" 
    />

    <rect 
      x="0" 
      y="288" 
      rx="5" 
      ry="0" 
      width="257" 
      height="36" 
    />

    <rect 
      x="0" 
      y="288" 
      rx="5" 
      ry="0" 
      width="257" 
      height="36" 
    />

    <rect 
      x="0" 
      y="342" 
      rx="5" 
      ry="0" 
      width="257" 
      height="24" 
    />

    <rect 
      x="0" 
      y="374" 
      rx="5" 
      ry="0" 
      width="400" 
      height="24" 
    />

    <rect 
      x="0" 
      y="434" 
      rx="5" 
      ry="0" 
      width="171" 
      height="40" 
    />

    <rect 
      x="0" 
      y="490" 
      rx="5" 
      ry="0" 
      width="400" 
      height="16" 
    />

    <rect 
      x="0" 
      y="514" 
      rx="5" 
      ry="0" 
      width="383" 
      height="16" 
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
