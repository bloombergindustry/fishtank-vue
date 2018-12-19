<template>
  <div
    :id="(id !==null? id: labelId)"
    :aria-labelledby="(id !==null? id: labelId)"
    tabindex="0"
    @focus="focusRadio"
    role="radiogroup">
    <slot/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import a11y from '@/util/a11y'

export default Vue.extend ({
  mixins:[
    a11y
  ],
  model:{
    prop: 'modelValue',
    event:'change'
  },
  provide: function(){
    const fishtankRadioGroupShared = {
      register: this.register,
      unregister: this.unregister
    }
    return {fishtankRadioGroupShared}
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
      isFocused:false,
      registeredChildren:[]
    }
  },
  computed:{
    labelId(): string {
      return `ft-radio-group-${(this as any)._uid}`
    },
  },
  methods:{
    focusRadio(){
      let activeIndex = 0;
      (this as any).registeredChildren.map(c=> {
        if (c.value === c.modelValue) { 
          c.setFocus() 
          return
        } else {
       (this as any).registeredChildren[0].setFocus()
        }
      }) 
    },
    register(componentAsThis:any):void {
      (this as any).registeredChildren.push(componentAsThis);
    },
    unregister(componentAsThis:any):void {
      let index = ((this as any).registeredChildren as any[]).indexOf(componentAsThis);
      if (index > -1) {
        (this as any).registeredChildren.splice(index, 1);
      }
    },
  }
})
</script>
