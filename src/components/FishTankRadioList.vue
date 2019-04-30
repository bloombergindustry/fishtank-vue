<template>
  <fieldset :id="`radio-list-${identifier}`" 
    :class="['radio-list']" :name="name">
    <div :class="orientation">
      <legend v-if="label" class="legend">
        <ftext bold primary uppercase size="baseMd" color="grayDark">{{label}}</ftext>
      </legend>
      <div class="items" role="radiogroup">
        <div :disabled="item.disabled" v-for='(item, index) in items' :key='index' class="wrap">
          <radio 
            v-model="value"
            :id="`radio-${identifier}-${item.value}`"
            :value="item.value" 
            :disabled="item.disabled"
            @click="handleClick" 
            :label="item.label"
            :name="label">
              <slot v-if="item.slot" :name="item.slot">{{item.label}}</slot>
            </radio>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts">
import Vue from 'vue'
import radio from './FishTankRadio.vue' 
import ftext from './FishTankText.vue' 
import { orientation } from "../util/mixins"
/** Triggered when value is changed
  * @event change
  * @type {Event}
  */
export default Vue.extend({
  name: 'FishTankRadioList',
  components:{
    radio,
    ftext
  },
  mixins:[
    orientation
  ],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /**
     * Available items to display
     * @param {Object[]} [items=[]] - Child object
     * @param {Boolean} [items[].disabled] - Disabled state
     * @param {String} [items[].label] - Child label
     * @param {String} [items[].slot] - Child label slot name
     * @param {String} [items[].value] - Child value
     */
    items: Array,

    /**
     * Input label
     */
    label: String,

    /**
     * Input elements name
     */
    name: String,

    /**
     * Current value
     */
    value: String,
    
    /**
     * Block orientation; inline by defaul
     */
    block:Boolean
  },
  data () {
    return {
      /**
       * Unique identifier to handle issues with duplicate ids when multiple RadioLists are present
       */
      identifier: (Math.random() * 10000).toFixed(0).toString(),
    }
  },
  methods: {
    handleClick (e:MouseEvent) {
      if (e && e.target){
        this.$emit('change', (e.target as HTMLInputElement).value)
      }
      e.preventDefault()
    },
  }
})
</script>

<style scoped lang='scss'>
// fieldset {
  
// }
.radio-list {
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-block-start: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  padding-block-end: 0;
  min-inline-size: min-content;
  border-width: 0;
  border-style: none;
  border-color: transparent;
  border-image: hidden;
  .legend{
    display: block;
    max-width: none;
  }
  .items {
    align-items: center;
    display: flex;
    padding:0;
    margin: 0;
    border:0;
  }
  .wrap{
    position: relative;
    margin-right: 25px;
  }

  .ltr, .rtl {
    display: flex;
  }
  .rtl {
    flex-direction: row-reverse;
  }
  [uppercase]{
    text-transform:uppercase;
  }
  // Internet explorer hack
  // & /deep/ {
  //   @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  //     input[type=radio]+label:after {
  //       top: 3px;
  //     }
  //   }
  // }
}
</style>