<template>
  <div 
    class="Tabs" 
    :disabled="disabled"
  >
    <div 
      class="header" 
      v-bind:style="headerStyleObject"
      :class="[divider ? 'seperator': 'no-seperator']"
    >
      <div 
        class="title" 
        v-bind:style="titleStyleObject" 
        v-for="(item, index) in items" 
        :key="`${index}-title`" 
        :active="item.name===active" 
        :disabled="item.disabled" 
        :hidden="item.hidden" 
        @click="$emit('change', item.name)"
        tabindex="0"
        role="button"
      >
        <slot :name="`${item.name}-title`">
          <span>{{item.label}}</span>
        </slot>
      </div>
    </div>

    <div class="body">
      <div 
        class="content" v-for="(item, index) in items" 
        :key="index" 
        :hidden="item.renderHidden && item.name!==active" 
      >
        <slot 
          v-if="item.renderHidden || item.name===active" 
          :name="item.name"
        ></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {  },
  name: 'FishTankTabs',
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
    items: Array,

    /**
     * Render tab content hidden instead of conditionally
     */
    renderHidden: Boolean,

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

})
</script>

<style scoped lang='scss'>
.Tabs .header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 6px;
  margin-bottom: var(--tab-header-margin-bottom, unset);
}

.seperator{
  border-bottom: 1px solid var(--border-color, lightgray);
}

.no-seperator{
  border-bottom: 1px solid transparent;
}

.title {
  align-self: center;
  border-bottom: 3px solid var(--border-color, lightgray);
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  padding: 5px 4px;
  width: var(--tab-title-width, unset);
  color: var(--color-gray-dark);
  // background-color: var(--tab-title-background-color);
  transition: all .3s ease-in-out;

  > span {
    margin-left: var(--tab-title-span-margin-left, 5px);
    margin-right: var(--tab-title-span-margin-right, unset);
  }

  &:not(:last-child) {
    margin-right: var(--tab-title-margin-right, 15px);
  }
  &:hover {
    font-weight: 600;
    color: var(--active-tab-title-color);
    background-color: var(--active-tab-title-background-color);
    pointer-events: var(--active-tab-title-pointer-events);
    cursor: var(--active-tab-title-cursor);
  }
  &:active {
    border-color: var(--active-color, #0D9DDB);
    border-width: 4px;
    // font-weight: 600;
    color: var(--active-tab-title-color);
    background-color: var(--active-tab-title-background-color);
    pointer-events: var(--active-tab-title-pointer-events);
    cursor: var(--active-tab-title-cursor);
  }
  &:disabled {
    color: var(--disabled-tab-title-color);
    background-color: var(--disabled-tab-title-background-color);
    border-color: var(--disabled-tab-title-border-color);
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
  .body .content {
      &[hidden] { display: none; }
  }

  &[disabled],[disabled] {
    opacity: 0.25;
    pointer-events: none;
  }
}
</style>