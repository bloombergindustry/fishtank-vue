<template>
  <div 
    :disabled="disabled" 
    class="tabs">
    <div class="header-wrapper">
      <div
        :style="[headerStyleObject, getHeaderWidth(headerWidth, items.length)]" 
        :class="['header', align]"
        role="menubar">
        <div
          v-for="(item, index) in items"
          :key="`${index}-tab`"
          :class="['tab', item.name === active ? '' : 'focus', tabSize]" 
          :style="[tabStyleObject]" 
          :active="item.name === active"
          :disabled="item.disabled" 
          :hidden="item.hidden" 
          tabindex="0"
          role="menuitem"
          @click="$emit('change', item); removeFocus()"
          @keyup.13="$emit('change', item); addFocus()"
          @keyup.9="addFocus(); ">
          <slot
            :name="`${item.name}-tab`">
            <fish-tank-text
              :bold="item.name === active"
              :color="item.name === active ? 'black' : 'grayDark'"
              size="baseLg">
              {{ item.label }}
            </fish-tank-text>
          </slot>
        </div>
      </div>
    </div>

    <div class="body">
      <div 
        v-for="(item, index) in items" 
        :key="index" 
        :hidden="item.renderHidden && item.name!==active" 
        class="content">
        <slot 
          v-if="item.renderHidden || item.name===active" 
          :name="item.name" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { a11y } from "../util/mixins"
import FishTankText from "./FishTankText.vue"

export default Vue.extend({
  name: 'FishTankTabsV2',
  components: { 
    FishTankText
  },
  props: {
    /**
     * Active tab name
     */
    active: {
      type: String,
      default: ''
    },

    /**
     * Disabled state of entire component
     */
    disabled: Boolean,

    /*
      align="right" or
      align="left"
    */
    align: {
      type: String,
      required: false,
      default: 'center'
    },

    /*
      header-width="50vw" or
      header-width="40%" etc
    */
    headerWidth: {
      type: String,
      required: false,
      default: ''
    },

    // default - height: 42px, border-top: 4px, font-size: 16px
    // large   - height: 60px, boarder-top: 6px, font-size: 18px
    tabSize: {
      type: String,
      required: false,
      default: ''
    },

    /**
     * Array of children with nested grandchildren
     * @param {Object[]} [items=[]] - Child tab definitions
     * @param {Boolean} [items[].disabled] - Tab disabled state
     * @param {Boolean} [items[].hidden] - Tab hidden state
     * @param {String} [items[].label] - Tab label to display
     * @param {String} [items[].name] - Tab name to use for defining slots, use '-tab' suffix for tab slot
     * @param {Boolean} [items[].renderHidden] - Render the content when hidden instead of omitting, for forms etc
     */
    items: {
      type: Array,
      default: () => []
    } ,

    /**
     * Render tab content hidden instead of conditionally
     */
    renderHidden: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Custom styling of the header
     */
    headerStyleObject: {
      type: Object,
      default: function () {
        return {}
      }
    },

    /**
     * Custom styling of the tab
     */
    tabStyleObject: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data(){
    return{
      /*
      * Disables focus State
      */
      focus: true
    }
  },
  methods:{
    removeFocus(){
      if(!this.focus){
        if(this.focus){
          this.focus = false
        }else{
          this.focus = true
        }
      }
    },
    addFocus(){
      this.focus = false
    },
    getHeaderWidth(headerWidth: string, itemLength: number): any {
      // if header-with prop is passed, override the width to prop value
      if (headerWidth) {
        return { width: `${headerWidth}` }
      }

      // if more than 5 tabs, default header width to 100%
      let tabCount = itemLength
      if (tabCount >= 5) {
        return { width: `100%` }
      }

      // otherwise, set header width to 20 * tabCount, and 
      // (individual tab width to 20%)
      return { width: `${ 20 * tabCount }%` }
    }
  },
})
</script>

<style scoped lang='scss'>
  @import '../styles/mixins';
  .header-wrapper {
    border-bottom: 1px solid $color-gray-light;
  }
  .header {
    display: flex;
    margin: 0 auto;
    &.left {
      margin: 0;
    }
    &.right {
      margin: 0 0 0 auto;
    }
  }
  .tab {
    display: flex;
    height: $baseline * 6;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: $baseline * 2;
    background-color: $color-gray-lightest;
    border-top: 4px solid transparent;
    border-right: 1px solid $color-gray-lighter;
    border-collapse: collapse;

    &:hover {
      background-color: $color-selected-lightest;
    }

    &.large {
      height: $baseline * 10;
      border-top-width: 6px;
      div {
        font-size: 18px;
      }
    }

    &:last-child {
      border-right: none;
    }

    &[active] {
      z-index: 1;
      background-color: $color-background;
      border-top-color: $color-selected-darkest;
      border-right: 1px solid $color-gray-light;

      // hide bottom-bottom of header-wrapper
      // and border of adjacent tab when the tab is active
      margin-bottom: -1px;
      margin-left: -1px;
      border-bottom: 1px solid $color-background;
      border-left: 1px solid $color-gray-light;
    }
    // Hide focus outline all time, 
    // except when non-active the tab is focused by tab key.
    &:focus {
      outline: transparent
    }
    &.focus:focus{
      z-index: 2;
      box-shadow: 0 0 0 2px $color-selected;
      transition-property: box-shadow;
      transition-delay: 0.2s;
    }
  }
</style>

<style lang="scss">
  @import '../styles/mixins';
    body.user-is-tabbing {
      .a11y:focus{
        box-shadow: 0 0 0 2px var(--color-selected, $color-selected);
      }
    }
</style>