<template>
  <div 
    :disabled="disabled" 
    class="tabs">
    <div 
      :style="headerStyleObject" 
      :class="[divider ? 'seperator': 'no-seperator']"
      class="header"
      role="menubar">
      <div 
        v-for="(item, index) in items" 
        :key="`${index}-title`" 
        :class="['title', focus ? 'no-focus' : 'focus']" 
        :style="[titleStyleObject, setIndividualTabWidth()]" 
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
          <span>{{ item.label }}</span>
        </slot>
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
  name: 'FishTankTabsV2',
  components: {  },
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

    /**
     * Disables seperator style line on tab component
     */
    divider: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Array of children with nested grandchildren
     * @param {Object[]} [items=[]] - Child tab definitions
     * @param {Boolean} [items[].disabled] - Tab disabled state
     * @param {Boolean} [items[].hidden] - Tab hidden state
     * @param {String} [items[].label] - Tab label to display
     * @param {String} [items[].name] - Tab name to use for defining slots, use '-title' suffix for title slot
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
    setIndividualTabWidth(): any {
      // return `{'width': ${100 / this.items.length}%}`
      return {width: '100%'}
    },
    addFocus(){
      this.focus = false
    }
  },
})
</script>

<style scoped lang='scss'>
  @import '../styles/mixins';
  .header {
    display: flex;
    margin: 0 auto;
  }
  .title {
    text-align: center;
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