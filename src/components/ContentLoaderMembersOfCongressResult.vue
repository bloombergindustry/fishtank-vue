<template>

  <ContentLoader
    :height="64"
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
      width="32" 
      height="40" 
    />

    <rect 
      x="44" 
      y="20" 
      rx="5" 
      ry="0" 
      width="128" 
      height="24" 
    />

    <rect 
      x="189" 
      y="24" 
      rx="5" 
      ry="0" 
      width="76" 
      height="16" 
    />

    <rect 
      x="281" 
      y="24" 
      rx="5" 
      ry="0" 
      width="76" 
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
