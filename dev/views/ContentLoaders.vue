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
        <LoaderContent theme="AlertList"/>
        
      </div>
    </div>

    <div>
      <div><h1> Alert Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="AlertResult"/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Calendar Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="CalendarResult"/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Commitee Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="CommiteeResult"/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Directories Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="DirectoriesResult"/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Legislation List Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="LegislationList"/>
        <LoaderContent theme="LegislationList"/>
        <LoaderContent theme="LegislationList"/>
        <LoaderContent theme="LegislationList"/>
        <LoaderContent theme="LegislationList"/>
        <LoaderContent theme="LegislationList"/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Legislation Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="LegislationResult"/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Members Of Congress List Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="MembersOfCongressList"/>
        <LoaderContent theme="MembersOfCongressList"/>
        <LoaderContent theme="MembersOfCongressList"/>
        <LoaderContent theme="MembersOfCongressList"/>
        <LoaderContent theme="MembersOfCongressList"/>
        <LoaderContent theme="MembersOfCongressList"/>
        <LoaderContent theme="MembersOfCongressList"/>
        <LoaderContent theme="MembersOfCongressList"/>
        <LoaderContent theme="MembersOfCongressList"/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Members Of Congress Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="MembersOfCongressResult"/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> News List Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="NewsList"/>
        <LoaderContent theme="NewsList"/>        
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> News Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="NewsResult"/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Profile Result Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="ProfileResult"/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div><h1> Congressional Staffers List Loader </h1></div>
      <div 
        class="screen-container"
      >
        <LoaderContent theme="StaffersList"/>
        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div>
      <div>
        <h1> Customized Loader</h1>
        <h1>(No Theme)</h1>
      </div>
      <div 
        class="screen-container"
      >
        <LoaderContent
          :loader-height = "100" 
          :loader-width = "400"
          :loader-speed = "1.5"
          loader-primary-color = "#0018Ab" 
          loader-secondary-color = "#9933CC"
        >

          <rect 
            x="0" 
            y="12" 
            rx="5" 
            ry="0" 
            width="400" 
            height="24" 
          />

          <rect 
            x="0" 
            y="42" 
            rx="5" 
            ry="0" 
            width="156" 
            height="18" 
          />

        </LoaderContent>

        <div class="footer"/>
        <div class="nav"/>
      </div>
    </div>

    <div style="width: 340px;">
      <div><h1> Documentation for Loaders </h1></div>
      <div>
        <!--h4> Vue-markdown Output </h4>
        <vue-markdown> {{ mdDocs }} </vue-markdown-->
        <FishTankPropsDoc :properties="docs"/>
      </div>
    </div>

  </div>

</template>

<script lang="ts">

import Vue from 'vue'

import { 
  FishTankLoaderContent as LoaderContent,
  FishTankPropsDoc,
} from '@/index'

import VueMarkdown from 'vue-markdown'

export default Vue.extend({
  components:{
    LoaderContent,
    FishTankPropsDoc,
    VueMarkdown
  },
  data(){
    return{
      docs: LoaderContent.options.props,
     // mdDocs: LoaderContent.options.props
    }
  }
})
</script>
