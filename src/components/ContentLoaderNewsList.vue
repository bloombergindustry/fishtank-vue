<template>

  <ContentLoader
    :height="240"
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
      width="340" 
      height="24" 
    />

    <rect 
      x="0" 
      y="40" 
      rx="5" 
      ry="0" 
      width="257" 
      height="24" 
    />

    <rect 
      x="0" 
      y="76" 
      rx="5" 
      ry="0" 
      width="171" 
      height="12" 
    />

    <rect 
      x="0" 
      y="92" 
      rx="5" 
      ry="0" 
      width="171" 
      height="12" 
    />

    <rect 
      x="0" 
      y="116" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="140" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="164" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="188" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="212" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="212" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="239" 
      rx="5" 
      ry="0" 
      width="340" 
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
