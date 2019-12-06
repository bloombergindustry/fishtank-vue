<script lang="ts">
/**
 * Fish Tank Multi-tiered Lookup Component
 * @displayName FishTankLookup
 */
import { Component, Prop, Vue } from "vue-property-decorator"
import TextInput from './FishTankTextInputV2.vue'
import Node from './FishTankLookupNode.vue'

import { mixin as clickaway } from 'vue-clickaway'
import Popper from "popper.js"

/**
 * Focus event. Triggered on mouse of keyboard focus
 *
 * @event focus
 * @type {string}
 */

/** Triggered when inputting text into the component
 * @event input
 * @type {Event}
 */


/** Triggered when selecting a result from the dropdown
 * @event change
 * @type {Event}
 */
export default {
  // name: 'Lookup',
  // components: { TextInput, Node },
  // model: {
  //   prop: 'value',
  //   event: 'change'
  // },
  // props: {
  //   /**
  //    * Input element id
  //    */
  //   id: String,

  //   /**
  //    * the icon to display, the default is the magnifying glass
  //    */
  //   icon: {
  //     type: String,
  //     default: 'search_24'
  //   },

  //   /**
  //    * Label to display with input box
  //    */
  //   label: String,

  //   /**
  //    * Input name attribute
  //    */
  //   name: String,

  //   /**
  //    * Label/input orientation (rtf, ltr, ttb)
  //    */
  //   orientation: {
  //     type: String,
  //     default: 'ttb'
  //   },

  //   /**
  //    * Placeholder to display in input element
  //    */
  //   placeholder: String,

  //   /**
  //    * Array of autocomplete items
  //    */
  //   items: {
  //     type: Array,
  //     default: () => []
  //   },

  //   /**
  //    * WIP rework of filterng functions
  //    * This input will filter your results by a regex match on the query
  //    * enable this if your autocomplete items should NOT be filterd by the query
  //    * ie. search/autocomplete has given you your items and not all of them match the query string
  //    */
  //   disableFiltering: {
  //     type: Boolean,
  //     default: false
  //   },

  //   /**
  //     * Key name of children array */
  //   children: {
  //     type: String,
  //     default:undefined
  //   },
  //   /**
  //    * Current selected value
  //    * @param {Object} value - Value hash
  //    * @param {Boolean} value.text - Display value
  //    * @param {Boolean} value.value - Selected value
  //    */
  //   value: Object
  // },
  // data () {
  //   return {
  //     focused: false,
  //     opened: false,
  //     focusedItem: -1,
  //     popObj: undefined,
  //     inputEl: { type: HTMLElement },
  //     query:''
  //   }
  // },
  // computed: {
  // },
  // methods: {
  //   destroyed() {
  //     if (this.popObj !== undefined) this.destroyPop();
  //   },
  //   /**
  //   * Closes the dropdown
  //   */
  //   closeDropdown(items: Array<String>, index: number) {
  //     if (items.length - 1 === index) {
  //       this.opened = false;
  //     }
  //   },
  //   /**
  // * Open the dropdown
  // */
  // openItems() {
  //   if (this.focused === true) this.showPop();
  // },
  // /**
  // * Trigger the pop-up tooltip container of the dropdown
  // */
  // showPop() {
  //   (this as any).inputEl = this.$refs.anchor
  //   this.$nextTick(function() {
  //     (this as any).popObj = new Popper(
  //       (this as any).inputEl,
  //       (this as any).$refs.itemsWrap,
  //       {
  //         placement: "bottom-start",
  //         modifiers: {
  //           computeStyle: {
  //             gpuAcceleration: true,
  //           },
  //         },
  //         onCreate: function(data){
  //           console.log(data);
  //         }
  //       }
  //     );
  //   });
  // },
  // /**
  //  * close pop
  //  */
  // closeItems () {
  //   if (this.popObj) {
  //     (this as any).popObj.destroy();
  //     (this as any).popObj = null;
  //     this.opened = false;
  //   }
  // },
  // /**
  // * Destroys instance of select popup
  // */
  // destroyPop() {
  //   this.$nextTick(function() {
  //     if (this.popObj !== undefined) (this as any).popObj.destroy();
  //   });
  // }
  // }
}
</script>

<template>
  <div 
    class="ft-lookup input-wrapper" >
    <!-- <text-input
      class="ft-lookup-input"
      :id="id"
      v-model="query"
      :icon="icon"
      :label="label"
      :orientation="orientation"
      :placeholder="placeholder"
      @focus="focused=true; openItems()"
      @blur="focused=false; closeItems()" />
    <div ref="anchor" />
    <div
      ref="itemsWrap" class="ft-lookup-popup-anchor">
      <div 
        v-if="focused && query.length"
        class="items">
        <div 
          v-for="(item, index) in items"
          :key="index">
          <node :node="item" />
        </div>
      </div>
    </div> -->
  </div>
</template>
<style scoped lang="scss">
// .ft-lookup {
//   position: relative;
// }
// .ft-lookup-input{
//   display: block;
// }
// .items {
//   @import "../styles/mixins";
//   border: 1px solid $color-gray-lighter;
//   border-radius: 2px;
//   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
//   background-color: $color-white;
//   min-width: 100%;
//   outline: 0;
//   margin-top: $baseline;
//   padding: $baseline;
//   color: $color-gray-dark;
//   max-height: 200px;
//   overflow: scroll;
// }
// .ft-lookup-popup-anchor{
//   width:calc(100% - 20px);
//   z-index:99;
//   position:relative;
//   margin-top:-24px;
// }
 </style>