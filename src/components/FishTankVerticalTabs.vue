<template>
  <div 
    :disabled="disabled" 
    class="Tabs">
    <div class="tabs-wrapper">
      <div 
        :style="headerStyleObject" 
        class="header"
        role="menubar">
        <div
          v-for="(item, index) in items" 
          :key="`${index}-title`" 
          :class="['title', focus ? 'no-focus' : 'focus']" 
          :style="titleStyleObject" 
          :active="item.name === active" 
          :disabled="item.disabled" 
          :hidden="item.hidden" 
          tabindex="0"
          role="menuitem"
          @click="$emit('change', item); removeFocus()"
          @keyup.13="$emit('change', item); addFocus()"
          @keyup.9="addFocus(); ">
          <slot 
            :name="`${item.name}-title`">
            <span class="label">
              {{ item.label }}
            </span>
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

export default Vue.extend({
  name: 'FishTankVerticalTabs',
  components: {  },
  props: {
    /**
     * Active tab name
     */
    active: String,

    /**
     * Disabled state of entire component
     */
    disabled: Boolean,

    /**
     * Array of children with nested grandchildren
     * @param {Object[]} [items=[]] - Child tab definitions
     * @param {Boolean} [items[].disabled] - Tab disabled state
     * @param {Boolean} [items[].hidden] - Tab hidden state
     * @param {String} [items[].label] - Tab label to display
     * @param {String} [items[].name] - Tab name to use for defining slots, use '-title' suffix for title slot
     * @param {Boolean} [items[].renderHidden] - Render the content when hidden instead of omitting, for forms etc
     */
    items: Array,

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
     * Custom styling of the tab title
     */
    titleStyleObject: {
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
    }
  }
  

})
</script>

<style scoped lang='scss'>
 @import '../styles/mixins';
 .Tabs{
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
 }


.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: var(--tab-header-margin-bottom, unset);
}

.focus:focus{
  box-shadow: 0 0 0 2px #0D9DDB;
  font-weight: 600;
}
.no-focus:focus{
  outline: transparent;
}

.title {
  cursor: pointer;                                                                                                                                             
  font-size: $fontsize-base-lg;
  font-weight: $fontweight-regular;
  line-height: $lineheight-base-lg;
  padding: 12px;
  padding-left: 0px;
  color: var(--color-gray-dark);
  border: 1px solid var(--border-color, lightgray);

  transition: all .3s ease-in-out;

  > span {
    padding-left: 12px;
    border-right: 4px solid transparent;
  }

  
  &:not(:first-child){
    border-top: transparent;
  }


  &:hover {
    font-weight: $fontweight-semi;
    color: var(--active-tab-title-color);
    background-color: var(--active-tab-title-background-color);
    pointer-events: var(--active-tab-title-pointer-events);
    cursor: var(--active-tab-title-cursor);

    > span{
      border-left: 4px solid var(--active-disabled,  #C5CaCd);
    }
  }
  &:active {
    border-right: transparent;
    border-left: transparent;
    color: var(--active-color,  #0D9DDB);
    font-weight: $fontweight-semi;
    background-color: var(--active-tab-title-background-color);
    pointer-events: var(--active-tab-title-pointer-events);
    cursor: var(--active-tab-title-cursor);

    &:first-child{
      border-top: transparent;
    }
    &:last-child{
      border-bottom:transparent;
    }
    > span{
      border-left: 4px solid var(--active-color,  #0D9DDB);
    }
  }
  &[active] {
    border-right: transparent;
    border-left: transparent;
    color: var(--active-color,  #0D9DDB);
    font-weight: $fontweight-semi;
    background-color: var(--active-tab-title-background-color);
    pointer-events: var(--active-tab-title-pointer-events);
    cursor: var(--active-tab-title-cursor);

    &:first-child{
      border-top: transparent;
    }
    &:last-child{
      border-bottom:transparent;
    }
    > span{
      border-left: 4px solid var(--active-color,  #0D9DDB);
    }
  }
  &:disabled {
    color: var(--color-disabled, #C5CACD);
    background-color: var(--disabled-tab-title-background-color);
    
    > span{
      border-left: 4px solid transparent;
    }
  }
  &[hidden] { 
    display: none; 
  }
  &:first-of-type {
    border-radius: var(--tab-title-first-of-type-border-radius, unset);
  }
  &:last-of-type {
    border-radius: var(--tab-title-last-of-type-border-radius, unset);
  }
  &:only-of-type {
    border-radius: var(--tab-title-only-of-type-border-radius, unset);
  }
}

.Tabs{
  .body{
    border: transparent;
  }
  .body .content {
      &:hidden { display: none; }
  }

  &:disabled,[disabled] {
    color: var(--color-disabled, #C5CACD);
    pointer-events: none;

    > span{
      border-left: 4px solid transparent;
    }
  }
}
</style>

<style scoped lang="scss">
  @import '../styles/mixins';
    body.user-is-tabbing {
      .a11y:focus{
        box-shadow: 0 0 0 2px var(--color-selected, $color-selected);
      }
    }
</style>