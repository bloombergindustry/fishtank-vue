<style>
  .page-container{
    width: 100vw;
    display: flex; 
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    }
  .screen-container{
    width : 300px;
    height: 600px;  
    border: 4px solid #292e31;
    border-radius: 12px;
    overflow: scroll;
    margin: 24px;
    padding-top: 90px;
    position: relative;
  }
  .nav{
    width: 100%;
    height: 80px;
    background:#EDF2F5;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .footer{
    width: 100%;
    height: 80px;
    background:#EDF2F5;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
</style>

<template>

  <div
    class="page-container"
  >

    <div>
      <div><h1> Alert Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderAlertResult/>
        <div class="footer"></div>
        <div class="nav"></div>
      </div>
    </div>

    <div>
      <div><h1> Alert List Loader </h1></div>
      <div 
        class="screen-container"
      >
        <div class="footer"></div>
        <div class="nav"></div>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>
      </div>
    </div>

  </div>

  

</template>

<script lang="ts">
import Vue from 'vue'
import {ContentLoaderAlertList, ContentLoaderAlertResult} from '@/index'

export default Vue.extend({
  components:{
    ContentLoaderAlertList,
    ContentLoaderAlertResult
  },

})
</script>
