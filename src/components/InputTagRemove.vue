<template>
  <div class = "input-tag-remove" >
    <transition-group name="list-fade">
      <span 
        v-for="(tag, index) in innerTags" 
        :key="index" 
        class="list-fade-item">
        <Tag 
          :text = "tag" 
          :label="tag"
          close 
          @removetag="remove(index)"/>
      </span>
    </transition-group>
    
    
  </div>
</template>

<script>
  import Vue from "vue"
  import InputText from "./InputText.vue"
  import Tag from "./Tag.vue"
  import TagRemoveMixin from "@/util/tagRemoveMixin.js"
  export default {
    name: 'InputTagRemove',
    components:{
      InputText,
      Tag
    },
    model:{
      prop:"multiVals",
      events:"updateTags"
    },
    props:{
      value:{
        type:[String,Boolean,Object,Number],
        default:null
        },
      tags:{
        type: Array,
        default: () => []
      },
      modelValue: {
        type:[String,Object, Number,Boolean],
        default: ""
      },
      multiVals:{
        type:Array,
        default:()=>[]
      }
    },
    data(){
      return {
        newTag: '',
        innerTags: [...this.tags],
        isActive: false
      }
    },
    watch:{
      tags () {
        this.innerTags = [...this.tags]
      }
    },
    methods:{
      addTag(){
        if(this.innerTags.indexOf(this.newTag) === -1){
          this.innerTags.push(this.newTag)
          this.newTag = ''
        }
      },
      remove (index) {
        this.innerTags.splice(index,1)
      },
      removeLastTag () {
        if (this.newTag) { return }
          this.innerTags.pop()
      }
    }
  }
</script>
