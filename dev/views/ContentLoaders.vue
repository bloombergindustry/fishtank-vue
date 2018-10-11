<template>
  <div>
    <div><h1> Page Loader </h1></div>
    <div 
      style="width : 400px;
      height: 600px;  
      border: 2px solid #292e31;
      border-radius: 4px;
      overflow: scroll;"
    >
      <ContentLoaderAlertList/>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {ContentLoaderAlertList} from '@/index'

export default Vue.extend({
  components:{
    ContentLoaderAlertList
  },
  
})
</script>
