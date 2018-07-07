<template>
  <div>
    <BaseInput 
      :id="id"
      v-bind="$attrs"
      :label="label"
      :value="value"
      :close="close"
      class="fishtank-tag"
      v-on="$listeners">
      <slot/>
    </BaseInput>
  </div>
</template>

<script>
  import Vue from "vue"
  import BaseInput from "./BaseInput.vue"

  export default {
    name: 'FishtankTags',
    components:{
      BaseInput
    },
    props:{
      value:{
        type:[String,Boolean,Object,Number],
        default:null
        },
      id:{
        default:"",
        type:String
      },
      modelValue: {
        type:[String,Object, Number,Boolean],
        default: ""
      },
      label:{
        type:String,
        required:true,
        default:""
      },
      close:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        model:{
          prop: 'modelValue',
          // event: 'change'
        }
      }
    },
    computed:{

    },
    methods:{
      
    },
    events: [
      {
        "name": "input",
        "value": "boolean"
      }
    ]
  }
</script>

<style lang="scss">
  @import "./src/styles/components/_input-tag";  
</style>
