<template>
  <body>
    <div>
      <h1 class="tags--heading">Binary Tags</h1>
      <span>
        <p class="tags--text">
          <Tag 
            v-model="tagOne"
            label="Label"/> Active/Inactive and hover functionality </p>
      </span>
      <span>
        <p class="tags--text"> <Tag 
          v-model="tagTwo"
          label="Label" 
          disabled/> Disabled</p>
      </span>
    </div>
    <div>
      <h1 class="tags--heading">Removeable Tags </h1>
      <span>
        <p class="tags--text"> 
          <Tag 
            label="Label" 
            close/> Only active state, with hover functionality</p>
      </span>
      <span>
        <p class="tags--text"> 
          <Tag 
            label="Label" 
            close 
            disabled/> Disabled</p>
      </span>
    </div>
    <div>
      <h1 class="tags--heading">Multi-Tags</h1>
      <p class="tags--text"> Inactive with no values populated</p>
      <MultiSelectTag 
        :options="newOptions" 
        v-model="emptyArray"
        :dropdown="false"
        :plurallabels="['committee','committees']" 
      />
    </div>
    <div>
      <h1 class="tags--heading">Multi-Tags</h1>
      <p class="tags--text"> Active with values populated</p>
      <MultiSelectTag 
        :options="newOptions" 
        v-model="selectedOptions"
        :dropdown="false"
      />
    </div>
    <br>
    <div>
      <p class="tags--text"> Active with Dropdown [WIP]</p>
      <MultiSelectTag 
        :options="newOptions"
        v-model="selectedOptions"
      > 
        <Tag 
          v-for="(option, index) in newOptions" 
          :key="index"
          :label="option" 
          close 
        />
      </MultiSelectTag>  
      <p class="tags--text">Disabled</p>
      <MultiSelectTag disabled/>
    </div>
    <div>
      <h1 class="tags--heading">InputBox with Removeable Tags</h1>
      <template v-for="( tagInstance, index) in tags">
        <InputTagRemove
          :key="index"
          :label="tagInstance"/>
      </template>
    </div>

  </body>
</template>

<script lang="ts">
import Vue from "vue"
import { Tag, MultiSelectTag, InputText , InputTagRemove} from "@/index"



export default Vue.extend({
  components: {
    Tag,
    MultiSelectTag,
    InputTagRemove,
    InputText 
  },
  data () {
    return{
      tagOne:true,
      tagTwo:false,
      newOptions: ["Different", "Options", "Array","Of", "Longer", "Length"],
      emptyArray:[],
      selectedOptions: ["Different", {value:null}, ["ArrayValue"]],
      newTag:"",
      tags:["tag1", "tag2", "tag3"]
    }
  }
})
</script>

