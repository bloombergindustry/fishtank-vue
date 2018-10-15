<template>

  <ContentLoader
    :height="528"
    :width="340"
    :speed="2"
    primary-color="#f3f3f3"
    secondary-color="#ecebeb"
  >
    
    <rect 
      x="0" 
      y="20" 
      rx="5" 
      ry="0" 
      width="171" 
      height="36" 
    />

    <rect 
      x="0" 
      y="68" 
      rx="5" 
      ry="0" 
      width="340" 
      height="24" 
    />

    <rect 
      x="0" 
      y="96" 
      rx="5" 
      ry="0" 
      width="257" 
      height="24" 
    />

    <rect 
      x="0" 
      y="156" 
      rx="5" 
      ry="0" 
      width="171" 
      height="40" 
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
      y="236" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="260" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="284" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="308" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="360" 
      rx="5" 
      ry="0" 
      width="171" 
      height="40" 
    />

    <rect 
      x="0" 
      y="416" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="440" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="464" 
      rx="5" 
      ry="0" 
      width="340" 
      height="16" 
    />

    <rect 
      x="0" 
      y="488" 
      rx="5" 
      ry="0" 
      width="325" 
      height="16" 
    />

    <rect 
      x="0" 
      y="512" 
      rx="5" 
      ry="0" 
      width="340" 
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
