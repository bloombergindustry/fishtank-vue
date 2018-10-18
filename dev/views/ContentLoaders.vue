<style>
  .page-container{
    width: 100vw;
    display: flex; 
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    flex-wrap: wrap;
    text-align: center;
    }
  .screen-container{
    width : 300px;
    height: 500px;  
    border: 6px solid #292e31;
    border-radius: 12px;
    margin: 24px;
    padding-top: 80px;
    overflow: hidden;
    position: relative;
  }
  div h1{
    width: 340px;
  }
  .nav{
    width: 100%;
    height: 80px;
    background:#292e31;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .footer{
    width: 100%;
    height: 80px;
    background:#292e31;
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
      <div><h1> Alert List Loader </h1></div>
      <div 
        class="screen-container"
      >
        <div class="footer"/>
        <div class="nav"/>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>
        <ContentLoaderAlertList/>  
      </div>
    </div>

    <div>
      <div><h1> Alert Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderAlertResult/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Calendar Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderCalendarResult/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Commitee Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderCommiteeResult/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Directories Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderDirectoriesResult/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Legislation List Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderLegislationList/>
        <ContentLoaderLegislationList/>
        <ContentLoaderLegislationList/>
        <ContentLoaderLegislationList/>
        <ContentLoaderLegislationList/>
        <ContentLoaderLegislationList/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Legislation Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderLegislationResult/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Members Of Congress List Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderMembersOfCongressList/>
        <ContentLoaderMembersOfCongressList/>
        <ContentLoaderMembersOfCongressList/>
        <ContentLoaderMembersOfCongressList/>
        <ContentLoaderMembersOfCongressList/>
        <ContentLoaderMembersOfCongressList/>
        <ContentLoaderMembersOfCongressList/>
        <ContentLoaderMembersOfCongressList/>
        <ContentLoaderMembersOfCongressList/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Members Of Congress Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderMembersOfCongressResult/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> News List Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderNewsList/>
        <ContentLoaderNewsList/>
        <ContentLoaderNewsList/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> News Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderNewsResult/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Profile Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderProfileResult/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Congressional Staffers List Loader </h1></div>
      <div 
        class="screen-container"
      >
        <ContentLoaderStaffersList/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

  </div>

</template>

<script lang="ts">

import Vue from 'vue'

import {
  ContentLoaderAlertList,
  ContentLoaderAlertResult, 
  ContentLoaderCalendarResult,
  ContentLoaderCommiteeResult,
  ContentLoaderDirectoriesResult,
  ContentLoaderLegislationList,
  ContentLoaderLegislationResult,
  ContentLoaderMembersOfCongressList,
  ContentLoaderMembersOfCongressResult,
  ContentLoaderNewsList,
  ContentLoaderNewsResult,
  ContentLoaderProfileResult,
  ContentLoaderStaffersList
} from '@/index'

export default Vue.extend({
  components:{
    ContentLoaderAlertList,
    ContentLoaderAlertResult,
    ContentLoaderCalendarResult,
    ContentLoaderCommiteeResult,
    ContentLoaderDirectoriesResult,
    ContentLoaderLegislationList,
    ContentLoaderLegislationResult,
    ContentLoaderMembersOfCongressList,
    ContentLoaderMembersOfCongressResult,
    ContentLoaderNewsList,
    ContentLoaderNewsResult,
    ContentLoaderProfileResult,
    ContentLoaderStaffersList
  },

})
</script>
