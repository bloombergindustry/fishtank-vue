<template>
  <div :class="[isDisabled ? 'tag--multiselect--disabled': (isActive ? 'tag--multiselect--active' : 'tag--multiselect--inactive')]">
    <span @click="showOptions()">
      <p class="tag--text">{{ this.message }} <ChevronDownIcon :class="[dropdownState? 'tag-expand-icon' : 'tag-collapse-icon']" /> </p>
    </span>
    <div :class="[ dropdownState ? 'multiselect-options-active' : 'multiselect-options-inactive']">
      <label v-for="(option,index) in options" :key="index" v-if="!(isDisabled)">
        <input type="checkbox"  @click="toggleOption(option)"/>{{ option }} 
      </label>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"
  import { ChevronSmlDown24 as ChevronDownIcon } from "@fishtank/icons-vue"

  export default Vue.extend({
    name: 'MultiSelectTag',
    components:{
      ChevronDownIcon
    },
    props:{
      disabled:{
        type: Boolean,
        default: false
      },
      options:{
        type: Array,
        default: () => ["Default","Options","Array"]
       
      },
    },
    data () {
      return {
        activeOptions: [],
        dropdownState: false,
        selections: 0
      }
    },
    computed: {
      message: function () {
        return this.selections + " Selected"
      },
      isActive: function () { 
        return this.selections > 0
      },
      isDisabled: function () { 
        return this.disabled 
      },
    },
    methods: {
      showOptions(){
         this.dropdownState = !(this.dropdownState)  
      },
      toggleOption(option){
        var index = this.activeOptions.indexOf(option)
        if(index < 0){
          this.activeOptions.push(option)
        }else{
          this.activeOptions.splice(index,1)
        }
        this.selections = this.activeOptions.length
      }
    }
  })
</script>

<style lang="scss">
  @import "./src/styles/components/_tags";

</style>
