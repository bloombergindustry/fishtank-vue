<template>
  <section>
    <div class="ft-nested-checkbox">
      <label class="ft-nested-checkbox__label">
        <input class="ft-nested-checkbox__input" type='checkbox' :checked="allChecked" @click="areNoneChecked">
        <div class="ft-nested-checkbox__icon" :class="{someChecked: someChecked, allChecked: allChecked}">
          <AddIconCheckboxPartial v-if="!allChecked && someChecked" class="ft-checkbox-selected"/>
          <AddIconCheckboxSelected v-if="allChecked" class="ft-checkbox-selected"/>
          <AddIconCheckboxUnselected v-if="noneChecked"/>
        </div>
        <div class="ft-nested-checkbox__label-content">
          <span>
            {{label}}
          </span>
        </div>
      </label>
      <div class="ft-nested-checkbox__wrap">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  export interface NestedChildren {
    child:Vue
  }
  import {CheckboxGroup} from 'types'
  import Vue from "vue"
  //Consider this for recusively building a tree of components
  //https://vuejsdevelopers.com/2017/10/23/vue-js-tree-menu-recursive-components/
  import {
    CheckboxSelected24 as AddIconCheckboxSelected,
    CheckboxUnselected24 as AddIconCheckboxUnselected,
    CheckboxPartial24 as AddIconCheckboxPartial
    } from '@fishtank/icons-vue'
import { Component } from 'vue-router/types/router';

  export default Vue.extend({ 
    props: {
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
        children: <NestedChildren[]>[],
        EventBus: new Vue(),
        childCount:0,
      }
    },
    provide: function(){
      const checkboxGroup:CheckboxGroup = {
        children:this.children,
        childCount:this.childCount,
        register: this.register,
        unregister: this.unregister,
        EventBus: this.EventBus
      }

      Object.defineProperty(checkboxGroup, 'childCount',{
        enumerable : true,
        get: () => this.childCount,
        set: (val) => this.childCount = val
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
        console.log(this.$slots)
      },
      unregister(checkbox:any) {
        let index = this.children.indexOf(checkbox);
        if (index > -1) {
          this.children.splice(index, 1);
        }
      },  
      areNoneChecked() {
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
      allChecked: function(): boolean {
        // console.log(this.$slots)
        return (this.children.length === this.value.length)
      },
      someChecked: function(): boolean {
        return ((0 < this.value.length) && (this.value.length< this.children.length))
      },
      noneChecked: function(): boolean {
        return (this.value.length===0)
      }
    }
  })
</script>
