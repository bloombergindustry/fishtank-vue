<template>
  <div
    :id="(id !==null? id: labelId)"
    :aria-labelledby="(id !==null? id: labelId)" 
    :class="[ 'buttongroup',{'buttongroup--small':small}, {'buttongroup--is-focused':isFocused}]"
    role="radiogroup">
    <slot/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import a11y from '@/util/a11y'

export default Vue.extend({
  mixins:[
    a11y
  ],
  model:{
    prop: 'modelValue',
    event:'change'
  },
  provide: function(){
    const fishtankButtonGroupShared = {}

    Object.defineProperty(fishtankButtonGroupShared, 'isSmall', {
       enumerable: true,
       get: () => this.isSmall,
       set: (val)=> this.isSmall = val
    })

    Object.defineProperty(fishtankButtonGroupShared, 'isFocused', {
       enumerable: true,
       get: () => this.isFocused,
       set: (val)=> this.isFocused = val
    })

    return {fishtankButtonGroupShared}
  },
  props:{
    small:{
      required:false,
      default:false,
      type: Boolean
    },
    modelValue: {
      type:[String,Boolean,Object,Number],
      default: "",
      require:true
    },
    id:{
      type:String,
      default:null,
      required:false
    },
  },
  data: function(){
    return {
      isSmall:this.small,
      isFocused:false
    }
  },
  computed:{
    labelId(): string {
      return `button-group-${(this as any)._uid}`
    },
  }
})
</script>

<style lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

.buttongroup--is-focused ,.buttongroup__button--is-focused {
    box-shadow: 0 0 0 2px $color-selected;
    border-radius: 2px;
  }

  .buttongroup__button--small.buttongroup--is-focused{
    border-radius: 4px;
  }
  .buttongroup{
    display: flex;
    width: 100%;
    color: $color-gray-dark;
    justify-content: space-between;
    box-sizing: border-box;
  }
</style>