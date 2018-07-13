<template>
  <section>
    <div class="ft-nested-checkbox">
      <label class="ft-input-checkbox-label">
        <input type='checkbox' :checked="allChecked" @click="areNoneChecked">
          <div class="ft-nested-checkbox-wrap" :class="{someChecked: someChecked, allChecked: allChecked}">
            <AddIconCheckboxPartial v-if="!allChecked && someChecked"/>
            <AddIconCheckboxSelected v-if="allChecked"/>
            <AddIconCheckboxUnselected v-if="noneChecked"/>
          </div>
          <div class="label-content">
            <slot v-if="label === null"></slot>
            <span v-else>
              {{label}}
              <slot/>
            </span>
          </div>
        </label>
    </div>
    <div class="nested">
      <!-- <slot></slot> -->
    </div>
  </section>
</template>
<script lang="ts">
  import Vue from "vue"
  //Consider this for recusively building a tree of components
  //https://vuejsdevelopers.com/2017/10/23/vue-js-tree-menu-recursive-components/
  import {
    CheckboxSelected24 as AddIconCheckboxSelected,
    CheckboxUnselected24 as AddIconCheckboxUnselected,
    CheckboxPartial24 as AddIconCheckboxPartial
    } from '@fishtank/icons-vue'

  export default {
    props: {
      values:[String, Number, Object, Array],
      value: {
        default:"",
        required:true,
        type:[String, Number, Boolean, Array, Object, Number],
      },
      name:{
        type:String,
        default:null
      },
      label:{
        type:String,
        default:null
      },
    },
    data: function(){
      return {
        checkboxGroupModel:[],
        checkboxGroupLength:0,
        someSelected:false,
        children:[],
        EventBus: new Vue()
      }
    },
    provide: function(){
      const checkboxGroup = {
        register: this.register,
        unregister: this.unregister,
        areNoneChecked:this.areNoneChecked,
        isNestedCheckbox:true,
        EventBus: this.EventBus
      }
      Object.defineProperty(checkboxGroup, 'checkboxGroupModel',{
        enumerable : true,
        get: () => this.checkboxGroupModel
      })
      Object.defineProperty(checkboxGroup, 'checkboxGroupLength',{
        enumerable : true,
        get: () => this.checkboxGroupModel
      })
      Object.defineProperty(checkboxGroup, 'allSelected',{
        enumerable : true,
        get: () => this.allSelected
      })
      return {checkboxGroup}
    },
    components:{
      AddIconCheckboxPartial,
      AddIconCheckboxSelected,
      AddIconCheckboxUnselected
    },
    methods:{
      register(checkbox:any) {
        this.children.push(checkbox);
      },
      unregister(checkbox:any) {
        let index = this.children.indexOf(checkbox);
        if (index > -1) {
          this.children.splice(index, 1);
        }
      },  
      areNoneChecked(){
        console.log("this", this)
        let state = false;
        if (this.allChecked){
          console.log("all checked")
        } else if (this.someChecked){
          console.log("some checked")
          state = true
        } else{
          console.log("none checked")
          state = true
        }
        this.EventBus.$emit('updateState', state);
      }
    },
    computed:{
      allChecked: {
        get: function(){
          return (this.children.length === this.value.length)
        }
      },
      someChecked: {
        get: function(){
          return ((0 < this.value.length) && (this.value.length< this.children.length))
        }
      },
      noneChecked:{
        get: function(){
          return (this.value.length===0)
        }
      }
    }
  }
</script>
