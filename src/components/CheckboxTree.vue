<template>
  <li class="node-tree">
    <InputCheckbox 
      :id="node.label" 
      :label="node.label"
      :val="node"
      v-model="node.selected"
      :allkidschecked="allKidsChecked"
      :isparent="isParent"
      @click="updateState(node)"/>
    <pre>is Parent {{ isParent }} | all Kids Checked {{ allKidsChecked }} | Depth {{ depth }}</pre>
    <ul v-if="node.children && node.children.length">
      <node 
        v-for="child in node.children" 
        :node="child" 
        :key="child.label"
        :depth="depth+1"
        v-model="node.selected"
        @nodeupdated="handleEvent"/>
    </ul>
  </li>
</template>

<script lang="ts">

import Vue from 'vue'
import { 
  InputCheckbox,
  TreeInputCheckbox
  } from "@/index"

export default Vue.extend({
  name:"Node",
  components: {
    InputCheckbox,
    TreeInputCheckbox
  },
  props: {
    node:{
      type:Object,
      default:null
    },
    depth:{
      type:Number,
      default:0
    },
    selectedval:{
      type:Array,
      default:null
    }
  },
  data(){
    return {
      value:Object,
      nodeChildren:[],
      treeArray:[],
      trueCount: 0,
    }
  },
  inject: {
    nodeCheckboxTree: { 
      default: () => {} 
    }
  },
  computed:{
    isParent(){
      return this.node.children ? true : false
    },
    allKidsChecked(){
      let allKidsChecked = "none"
      if (this.node.hasOwnProperty('children')){
        this.trueCount = 0
        this.nodeChildren.forEach(nc =>{
          if (nc.selected) this.trueCount ++
        })
        if ((this.trueCount <= this.nodeChildren.length) && this.trueCount > 0){
          allKidsChecked = "some"
        }
        if (this.trueCount === this.nodeChildren.length){
          allKidsChecked = "all"
        }
      }
      return allKidsChecked 
    }
  },
  mounted() {
    console.log("node mounted", this)
    this.nodeCheckboxTree.register(this, ()=>{
      this.$nextTick(()=>{
      })
    })

    // this is a recurse and immediately-invoking function 

    this.nodeChildren = this.recursiveKids(this.node)  
  },
  destroyed(){
    this.nodeCheckboxTree.unregister(this)
  },
  methods:{
    updateState(node:any){
      // console.log(node.selected)
      if (node.hasOwnProperty('children')){
        let state = !node.selected
        this.recursiveUpdate(node, state, ()=>{
        })
      } else{
        let changedState = !node.selected;
        node.selected = !node.selected
        // let siblings = this.recursiveKids(this.$parent.node)
        // console.log("siblings", siblings)
      }
      console.log(node)
      // this.recursiveUp(this)
    },
    recursiveKids(node:any, callback?:Function){
      let kids:any = []
      if (node.hasOwnProperty('children')){
        node.children.forEach(child => {
          kids.push(child)
          this.recursiveKids(child)
        })
        return kids
      }
      if(callback){callback()}
    },
    recursiveUpdate(node:any, state:boolean, callback?:Function){
      if (node.hasOwnProperty('children')){
          node.children.forEach(child => {
            child.selected = state
            this.recursiveUpdate(child, state)
          })
      }
      if(callback){callback()}
    },
    recursiveUp(node:any, state?:Boolean){
      let recurseState = state || true;
      if ((node.depth!== undefined) && (node.depth > -1)){
        node.$emit("test", node.node)
        if (node.node.children !== undefined){
          // console.log(node.node.children)
        }
        this.recursiveUp(node.$parent, recurseState)
      }
    },
    handleEvent(node:any){
      console.log("handle",this)
    }
  }
})
</script>

