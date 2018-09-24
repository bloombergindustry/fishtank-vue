<template>
  <body>
    <div>
      <h1 class="tags--heading">Binary Tags</h1>
      <span>
        <p class="tags--text">
          <FishTankTag 
            v-model="tagOne"
            label="Label"/> Active/Inactive and hover functionality </p>
      </span>
      <span>
        <p class="tags--text"> 
          <FishTankTag 
            v-model="tagTwo"
            label="Label" 
            disabled/> Disabled</p>
      </span>
    </div>
    <div>
      <h1 class="tags--heading">Removeable Tags </h1>
      <span>
        <p class="tags--text"> 
          <FishTankTag 
            label="Label" 
            close/> Only active state, with hover functionality</p>
      </span>
      <span>
        <p class="tags--text"> 
          <FishTankTag 
            label="Label" 
            close 
            disabled/> Disabled</p>
      </span>
    </div>
    <div>
      <h1 class="tags--heading">Multi-Tags</h1>
      <p class="tags--text"> Inactive with no values populated</p>
    </div>
    <div>
      <h1 class="tags--heading">Multi-Tags</h1>
      <p class="tags--text"> Active with values populated</p>
    </div>
    <!-- <br> -->
    <div>
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
      <FishTankTag
        v-model="multiToggle"
        label="Multi-select Tag Label"
        multiselect/>
      <p class="tags--text">Disabled</p>
      <FishTankTag
        v-model="multiToggle"
        label="Multi-select Tag Label"
        multiselect
        disabled/>
    </div>
    <div>
      <h1 class="tags--heading">InputBox with Removeable Tags</h1>
      <template v-for="( tagInstance, index) in tags">
        <FishTankTag
          :key="index"
          :v-model="tagInstance"
          :label="tagInstance.tagVal"
          close/>
      </template>
    </div>

  </body>
</template>

<script lang="ts">
import Vue from "vue"
import { FishTankTag, MultiSelectTag, InputText , InputTagRemove} from "@/index"



export default Vue.extend({
  components: {
    FishTankTag,
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
      tags:[{tagVal:"tag1", tagTing:"ting"},{tagVal:"tag2"},{tagVal:"tag3"},],
      multiToggle:false
    }
  }
})
</script>

