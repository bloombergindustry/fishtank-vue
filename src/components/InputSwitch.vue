<template>
  <div 
    :class="[allSelected ? 'allSelected': null]">
    <BaseInput 
      :id="id"
      v-bind="$attrs"
      :label="label"
      :value="value"
      class="ft-switch"
      v-on="$listeners">
      <div class="ft-input-checkbox-wrap">
        <div class="ft-input-checkbox-target" />
      </div>
      <slot/>
    </BaseInput>
  </div>
</template>

<script>
  import Vue from "vue"
  import BaseInput from "./BaseInput.vue"

  export default Vue.extend({
  name: "InputSwitch",
  components: {
    BaseInput
  },
  props:{
    value:{
      type:[String,Boolean,Object,Number],
      default:null
      },
    modelValue:{
      type:[String,Boolean,Object,Number],
      default:false
    },
    label:{
      type:String,
      default:null
    },
    id:{
      type:String,
      default:null
    },
    inherited:{
      type:Boolean,
      default:false
    },
    allSelected:{
      type:Boolean,
      default:false
    }
  }
})
</script>
<style lang="scss">
  @import "./node_modules/@fishtank/colors/dist/index.scss";
  @import "./src/styles/components/_input-switch";
</style>