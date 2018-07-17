<template>
  <div class = "input-tag-remove" >
    <span v-for="(tag, index) in innerTags" :key="index" class="input-tag-container">
      <Tag :text = tag close v-on:removetag="remove(index)"> </Tag>
    </span>

    <InputText
      type                     = "text"
      v-model                  = "newTag"
      v-on:keydown.delete.stop = "removeLastTag"
      v-on:keyup.enter         = "addTag"
      v-on:keydown.tab         = "addTag"
      class                    = "new-tag"
    />
    
  </div>
</template>

<script>
  import Vue from "vue"
  import InputText from "./InputText.vue"
  import Tag from "./Tag.vue"

  export default {
    name: 'InputTagRemove',
    components:{
      InputText,
      Tag
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
      },
    },
  }
</script>

<style lang="scss">
  @import "./src/styles/components/_tags";
</style>
