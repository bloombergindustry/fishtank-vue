<template>
  <body>
    <div>
      <h1 class="tags--heading">Binary Tags</h1>
      <FishTankTag
        v-model="tagOne"
        label="Binary Tags"/> &nbsp; | &nbsp;
      <span>Tag Value: {{ tagOne }}</span>
      <h2>Documentation for Tags</h2> 
      
      <vue-markdown>{{ mdDocs[0] }}</vue-markdown>
      <FishTankPropsDoc :properties="docs"/>
      <br>
      <br>
      <FishTankTag
        v-model="tagOne"
        :disabled="true"
        label="Binary Tags - Active &amp; Disabled"/> &nbsp; | &nbsp; <span>Tag Value: {{ tagOne }}</span>
      <br>
      <br>
      <FishTankTag
        v-model="tagTwo" 
        label="Binary Tags"/>&nbsp; | &nbsp; <span>Tag Value: {{ tagTwo }}</span>
      <br>
      <br>
      <FishTankTag
        v-model="tagTwo"
        :disabled="true"
        label="Binary Tags - Inactive &amp; Disabled"/> &nbsp; | &nbsp; <span>Tag Value: {{ tagTwo }}</span>
      <br>
      <br>
      <template>
        <FishTankTag
          v-for="(option, index) in newOptions"
          :key="index"
          v-model="option.val"
          label="Tag"
          removable/> 
      </template>
      <br>
      <br>
      <FishTankTag
        v-model="tagTwo" 
        label="Binary Tags">
        <Flag24/>
      </FishTankTag> &nbsp; | &nbsp; <span>Tag Value: {{ tagTwo }}</span>
      <hr>
      
      <!-- <p class="tags--text"> Active with Dropdown [WIP]</p> -->
      <!-- <MultiSelectTag 
        :options="newOptions"
        v-model="selectedOptions"
      > 
        <Tag 
          v-for="(option, index) in newOptions" 
          :key="index"
          :label="option"  
        />
      </MultiSelectTag>   -->
      <!-- <FishTankTag
        v-model="multiToggle"
        label="Multi-select Tag Label"
        multiselect/>
      <p class="tags--text">Disabled</p>
      <FishTankTag
        v-model="multiToggle"
        label="Multi-select Tag Label"
        multiselect
        disabled/>
    </div>-->
    </div>

  </body>
</template>

<script lang="ts">
import Vue from "vue"
import { FishTankTag } from "@/index"
import FishTankPropsDoc from '@/components/FishTankPropsDoc.vue'
import { Flag24 } from '@fishtank/icons-vue' 
import VueMarkdown from 'vue-markdown'

export default Vue.extend({
  components: {
    FishTankTag,
    Flag24,
    FishTankPropsDoc,
    VueMarkdown
  },
  data () {
    return{
      tagOne:true,
      tagTwo:false,
      stringOptions: ["Different", "Options", "Array","Of", "Longer", "Length"],
      newOptions: [{val:true}, {val:true}, {val:true}, {val:true}],
      emptyArray:[],
      selectedOptions: ["Different", {value:null}, ["ArrayValue"]],
      newTag:"",
      tags:[{tagVal:"tag1", tagTing:"ting"},{tagVal:"tag2"},{tagVal:"tag3"},],
      multiToggle:false,
      docs: FishTankTag.options.props,
      mdDocs: FishTankTag.options.token
    }
  }
})
</script>

