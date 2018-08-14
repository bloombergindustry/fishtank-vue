<template>
  <div 
    :class="[isDisabled ? 'tag--multiselect--disabled': (isActive ? 'tag--multiselect--active' : 'tag--multiselect--inactive')]">
    <popper 
      :options="{placement: 'bottom-end'}" 
      :disabled="isPopperDisabled" 
      trigger="click">
      <a 
        slot="reference" 
        class="top">
        <span @click="showOptions()">
          <p class="tag--text">
            {{ activeOptions.length }} selected
            <ChevronDownIcon 
              :class="[isDisabled ? 'tag-collapse-icon' : (dropdownState? 'tag-expand-icon' : 'tag-collapse-icon')]" /> 
          </p>
        </span>
      </a>
      <div class="popper">
        <div 
          class="multiselect-options-active">
          <div v-if="!(isDisabled)">
            <!-- <label 
              v-for="(option,index) in options"  
              :key="index">
              <input
                :multiVals="multiVals"
                v-model="activeOptions"
                :value="option"
                type="checkbox"
                @change="$emit('selectVal', activeOptions)">
              {{ option }} 
            </label> -->
            <slot />
          </div >
        </div>
      </div>
    </popper>
  </div>
</template>

<script>
  import Vue from "vue"
  import Popper from 'vue-popperjs'
  import { ChevronSmlDown24 as ChevronDownIcon } from "@fishtank/icons-vue"

  export default Vue.extend({
    name: 'MultiSelectTag',
    components:{
      ChevronDownIcon,
      Popper
    },
    model:{
      prop: 'multiVals',
      event:'selectVal'
    },
    props:{
      disabled:{
        type: Boolean,
        default: false
      },
      dropdown:{
        type:Boolean,
        default:true
      },
      options:{
        type: Array,
        default: () => []
      },
      multiVals:{
        type:Array,
        default:()=>[]
      }
    },
    data () {
      return {
        // activeOptions: [],
        dropdownState: false
      }
    },
    computed: {
      isActive: function () { 
        return this.activeOptions.length > 0
      },
      isDisabled: function () { 
        return this.disabled 
      },
      activeOptions: function(){
        return this.multiVals
      },
      isPopperDisabled: function(){
        if (this.disabled) {
          return this.disabled
        } else if (!this.dropdown){
          return !this.dropdown
        }
        
      }
    },
    methods: {
      showOptions(){
        //  this.dropdownState = !(this.dropdownState)  
      }
    }
  })
</script>
