<template>
  <div
    :id="(id !==null? id: labelId)"
    :aria-labelledby="(id !==null? id: labelId)" 
    :class="[ $style.group,{[$style.small]:small}, {[$style.focused]:isFocused}]"
    role="radiogroup">
    <slot/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import a11y from '@/util/a11y'
interface SharedButtonGroup {
  isSmall?:Boolean,
  isFocused?:Boolean,
  register?:any,
  unregister?:any,
}
export default Vue.extend({
  mixins:[
    a11y
  ],
  model:{
    prop: 'modelValue',
    event:'change'
  },
  provide: function(){
    const fishtankButtonGroupShared:SharedButtonGroup = {
      register: this.register,
      unregister: this.unregister,
    }

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
      type: Boolean,
      description:"Small Button Group"
    },
    modelValue: {
      type:[String,Boolean,Object,Number],
      default: "",
      require:true
    },
    id:{
      type:String,
      default:null,
      required:false,
      description:"Button Group ID"
    },
  },
  data: function(){
    return {
      isSmall:this.small,
      isFocused:false,
      registeredChildren:[]
    }
  },
  methods:{
    register(componentAsThis:any):void {
        (this as any).registeredChildren.push(componentAsThis);
    },
    unregister(componentAsThis:any):void{
        let index = ((this as any).registeredChildren as any[]).indexOf(componentAsThis);
        if(index > -1){
            (this as any).registeredChildren.splice(index, 1);
        }
    },
    closeSiblings(componentAsThis:any):void{
        (this as any).registeredChildren.map((i:any)=>{
            i.visible = false
        })
        
    },
    registerFirstChild():void{
      let areAnySelected = (this as any).registeredChildren.filter((i:any)=>{
            return i.shouldBeChecked === true
        })
      if (areAnySelected.length === 0){
        (this as any).registeredChildren[0].setValue()
      }
    }
  },
  computed:{
    labelId(): string {
      return `button-group-${(this as any)._uid}`
    },
  },
  mounted(){
    this.registerFirstChild()
  }
})
</script>

<style module lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

.focused ,
  // .buttongroup__button--is-focused 
  {
    box-shadow: 0 0 0 2px $color-selected;
    border-radius: 2px;
  }

  .small.focused{
    border-radius: 4px;
  }
  .group{
    display: flex;
    width: 100%;
    color: $color-gray-dark;
    justify-content: space-between;
    box-sizing: border-box;
  }
</style>