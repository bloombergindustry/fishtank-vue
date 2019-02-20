<template>
  <fish-tank-box 
    position="relative" 
    @blur.native="close" 
    @mouseleave.native="close">
    <fish-tank-box
      :id="instanceId" 
      color="grayLightest" 
      :padding="2" 
      display="flex" 
      :class="[$style.wrapper, 'a11y']" 
      :tabindex="(displaySelect ? null : 0)" 
      aria-haspopup="listbox"
      @click.native="toggle"
      :aria-expanded="(displaySelect ? true : null)"
      @keyup.enter.native="openSelect"
      :aria-label="selected.label">
      <fish-tank-box>
        <fish-tank-text 
          color="grayDark">{{ selected.label }} 
        </fish-tank-text>
      </fish-tank-box>
      <fish-tank-box 
        v-if="!noItems" 
        align="right">
        <CaretDown24 
          v-if="!displaySelect" 
        />
        <CaretUp24 
          v-if="displaySelect" 
        />
      </fish-tank-box>
    </fish-tank-box>
    <fish-tank-box
      v-if="displaySelect"
      :class="[$style.selectOpen]" 
      :aria-expanded="`${displaySelect}`"
      :aria-labelledby="instanceId">
      <fish-tank-box
        v-for="(item, index) in items" 
        :key="index"
        color="white"
        role="listbox"
        @keyup.up.native="prevItem"
        @keyup.down.native="nextItem"
        @click.native="handleChange(item)"
        @focus.native="accessibleHandleChange(item)"
        @keyup.enter.native="close()"
        @keydown.tab.prevent.native="close()"
        @blur.native="close()">
        <a
          :ref="item.label"
          :aria-selected="(selected.label === item.label ? true: null)"
          :class="[$style.selectOption, {[$style.selectedOption]:(selected.label === item.label)}]"
          :padding="2"
          :tabindex="(selected.label === item.label ? 0: -1)"
          
          role="option">
          <fish-tank-box
            :padding="2">
            <div class="option-text">
              <fish-tank-text 
              color="grayDark">
              {{ item.label }}</fish-tank-text>
            </div>
          </fish-tank-box>
        </a>
      </fish-tank-box>
    </fish-tank-box>
  </fish-tank-box>
</template>

<script>
  import {
    FishTankText,
    FishTankBox
    } from '../index'
  import {
    CaretDown24,
    CaretUp24
  } from '@fishtank/icons-vue'
  import mixins from '../util/a11y'
  import {uuid} from '../util/uuid'

  const id = ''
/**
 * Custom dropdown menu
 *
 * Style variables:
 * --border-color
 * --hover-background-color
 * --dropdown-background-color
 * --dropdown-icon-color
 */

export default {
  name: 'FishTankSelect',
  components:{
    FishTankText,
    FishTankBox,
    CaretDown24,
    CaretUp24
  },
  mixins:[mixins],
  beforeCreate () {
    this.instanceId = `FishTankSelect_${uuid()}`
  },

  props: {
    /**
     * Array of dropdown items
     */
    items: {
      type: Array,
      default () {
        return []
      },
      description:"Array of dropdown items"
    },
    /**
     * Current selected item
     */
    selected: {
      type: Object,
      default () {
        if (this.items.length > 0) {
          return this.items[0]
        } else { // if no items or selected value are passed
          return {label: 'No items'}
        }
      },
      description: "Current selected item"
    }
  },
  data () {
    return {
      displaySelect: false
    }
  },
  methods: {
    handleChange (newItem) {
      this.close()
      /**
       * Change event.
       *
       * @event change
       * @type {object}
       */
      this.$emit('change', { new: newItem, old: this.selected })
    },
    accessibleHandleChange (newItem) {
      // this.close()
      /**
       * Change event.
       *
       * @event change
       * @type {object}
       */
      this.$emit('change', { new: newItem, old: this.selected })
    },
    /**
     * Toggle (open/close) dropdown list
     *
     * @public
     */
    toggle () {
      this.displaySelect = !this.displaySelect
    },
    /**
     * Close dropdown list
     *
     * @public
     */
    close () {
      this.displaySelect = false
    },
    /**
     * Arrow navigate to the next item in the dropdown list
     *
     * @public
     */
    nextItem () {
      this.$nextTick(function(){
        let ind = 0
        this.items.forEach((el, i) => {
          if (el.label === this.selected.label){
            ind = i
          }
        })
        if (ind === (this.items.length - 1)){
          this.$emit('change', { new: this.items[0], old: this.selected })
        } else {
          this.$emit('change', { new: this.items[ind+1], old: this.selected })
        }
      }) 
    },
    /**
     * Arrow navigate to the previous item in the dropdown list
     *
     * @public
     */
    prevItem () {
      this.$nextTick(function(){
        let ind = 0
        this.items.forEach((el, i) => {
          if (el.label === this.selected.label){
            ind = i
          }
        })
        if (ind === 0){
          this.$emit('change', { new: this.items[(this.items.length - 1)], old: this.selected })
        } else {
          this.$emit('change', { new: this.items[ind-1], old: this.selected })
        }
      }) 
    },
    /**
     * open select list
     *
     * @public
     */
    openSelect () {
      this.displaySelect = true
      if (event.key === 'Enter'){
        this.$nextTick(function(){
          let el = this.$refs[this.selected.label][0]
          el.focus()
        })
      }
    },
  },
  computed: {
    noItems () {
      return this.items.length === 0
    }
  }
}
</script>
<style lang="scss">
@import '../../node_modules/@fishtank/colors/dist/index.custom-properties';
.user-is-tabbing .a11y:focus{
    box-shadow: 0 0 0 2px var(--color-selected);
  }
</style>

<style module lang="scss">
  @import '../../node_modules/@fishtank/colors/dist/index.custom-properties';
  @import '../../node_modules/@fishtank/space/dist/index.custom-properties';

  .wrapper{
    border:  1px solid var(--color-gray-lighter);
    position: relative;
    outline: 0;
  }

  .selectOpen {
    z-index: 100;
    position: absolute;
    width: 100%;
    transition: transform 0.4s;
    transform-style: preserve-3d;
    border:  1px solid var(--color-gray-lighter);
    margin-top: -45px;
    outline: 0;
    &:focus{
      background-color: red;
    }
  }
  .selectOption{
    display:block;
    outline: 0;
  }
  .selectOption:hover, .selectOption:focus, .selectedOption{
    background-color: var(--color-selected-lightest);
  }
</style>
