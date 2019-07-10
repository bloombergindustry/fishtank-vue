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
import { Component, Prop, Vue, Model, Provide } from 'vue-property-decorator'
import { a11y } from "../util/mixins"

interface RadioComponent extends Vue{
  value?:[Object],
  modelValue?:[Object],
  setFocus(): void
}
@Component({
    token:[
    `<fish-tank-radio-group>
      <FishTankRadio 
        v-model="val" 
        value="beta" 
        label="beta"
        name="beta"/>
      <FishTankRadio 
        v-model="val" 
        value="beta" 
        label="beta"
        name="beta"/>
    <fish-tank-radio-group>`
  ],
  mixins:[
    a11y
  ]
})
export default class FishTankRadioGroup extends Vue {

  @Model('change',{type:[String,Boolean,Object,Number], default: "", required:true}) modelValue:string

  @Provide() fishtankRadioGroupShared = {
    register : function(componentAsThis:any):void {
      (this as any).registeredChildren.push(componentAsThis);
    },
    unregister : function(componentAsThis:any):void {
      let index = ((this as any).registeredChildren as any[]).indexOf(componentAsThis);
      if (index > -1) {
        (this as any).registeredChildren.splice(index, 1);
      }
    }
  }

  @Prop({
    required:false,
    default:false,
    type: Boolean
  })
  small:boolean

  @Prop({
    type:String,
    default:null,
    required:false
  })
  id:string

  // Data
  isSmall = this.small
  isFocused = false
  registeredChildren = []

  // Computed functions
  labelId(): string {
    return `ft-radio-group-${(this as any)._uid}`
  }

  // Component methods
  focusRadio(){
    let activeIndex = 0;
    (this as any).registeredChildren.map((c:RadioComponent)=> {
      if (c.value === c.modelValue) { 
        c.setFocus() 
        return
      } else {
      (this as any).registeredChildren[0].setFocus()
      }
    }) 
  }
  // These funuctions are noe in the Provide decorator
  // register(componentAsThis:any):void {
  //   (this as any).registeredChildren.push(componentAsThis);
  // }
  // unregister(componentAsThis:any):void {
  //   let index = ((this as any).registeredChildren as any[]).indexOf(componentAsThis);
  //   if (index > -1) {
  //     (this as any).registeredChildren.splice(index, 1);
  //   }
  // }
}
</script>
