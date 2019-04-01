<template>
  <div 
    class="select" 
    :name="name" 
    :orientation="orientation" 
    @mouseleave="opened=false"
    @keydown="e => _handleKeydown(e, items)">
    <slot 
      v-if="label">
      <span 
        :id="`${id}-label`"
        name="label">
        {{ label }}
      </span>
    </slot>
    <div class="position-wrap">
      <button 
        :class="['selected', 'a11y',(small ? 'small':null)]" 
        aria-haspopup="listbox"
        :placeholder="!value" 
        :aria-expanded="opened"
        :aria-labelledby="`${id}-label ${id}-button`"
        :aria-activedescendant="`${id}-option-${focusedItem}`"
        :focused="!opened"
        @blur="opened=false"
        :id="`${id}-button`"
        @click="opened=!opened">
        <box 
          display="flex" 
          justify-content="between"> 
          <ftext
            color="grayDark"
            :size="small ? 'baseSm': 'baseMd'"
            :class="(small ? 'small-text':null)">
            {{ displayLabel }}
          </ftext>
          <caretdown 
            class="caret"
            v-if="!opened"/>
          <caretdown
            class="caret"
            v-if="opened  "/>
        </box>
      </button>
      
      <div 
        v-if="opened" 
        :class="['items', {'a11y-within': focusedItem > -1}]"
        tabindex="-1" 
        role="listbox"
        :id="`${id}-listbox`"
        :aria-labelledby="`${id}-label`"
        :focused="opened">
        <ftext
          v-for="(item, index) in items" 
          :id="`${id}-option-${index}`"
          :key="index"
          :focused="focusedItem===index"
          :class="['list-item', 'list-item-text', {'focused': focusedItem===index}]"
          :aria-selected="focusedItem===index"
          role="option" 
          @click="$emit('change', item.value); opened = false"
          @blur="closeDropdown(items, index)"
          :size="small ? 'baseSm': 'baseMd'">
          {{ item.label }}
        </ftext>
      </div>
    </div>
  </div>
</template>

<script>
import FishTankText from './FishTankText.vue'
import FishTankBox from './FishTankBox.vue'
import { CaretDown24 } from '@fishtank/icons-vue'
import a11y from '../util/a11y.ts'
/**
 * Change event.
 *
 * @event change
 * @type {string}
 */

/**
 * Custom dropdown menu
 *
 * Style variables:
 * --border-color
 * --selector-height
 * --selector-width
 * --border-radius
 * --hover-background-color
 * --dropdown-background-color
 * --dropdown-icon-color
 * --text-color
 * --font-size
 */
export default {
  name: 'FishTankSelect',
  mixins:[
    a11y
  ],
  components:{
    // text is a reserved name, so using ftext
    ftext: FishTankText,
    box: FishTankBox,
    caretdown: CaretDown24
  },
  props: {
    /**
     * Array of dropdown items
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Select ID label
     */
    id: String,
    /**
     * Input label
     */
    label: String,

    /**
     * Element name (for forms use)
     */
    name: String,

    /**
     * Orientation of label/input, ie ttb/rtl/ltr
     */
    orientation: {
      type: String,
      default: 'ttb'
    },

    /**
     * Placeholder text
     */
    placeholder: String,

    /**
     * Current selected item value
     */
    value: String | Number,

    /**
     * Small Select
     */
    small:{
      type:Boolean
    } 
  },
  model: {
    event: 'change',
    prop: 'value'
  },
  data () {
    return {
      opened: false,
      focusedItem:-1
    }
  },
  computed: {
    displayLabel () {
      return this.value ? this.items.find(x => x.value === this.value).label : this.placeholder
    }
  },
  methods:{
    closeDropdown: function(items, index){
      if ((items.length - 1) === index){
        this.opened=false
      }
    },
    _handleKeydown (e, items = []) {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault()
          this.focusedItem--
          if (this.focusedItem < 0) this.focusedItem = items.length - 1
          break
        case 'ArrowDown':
          e.preventDefault()
          this.focusedItem++
          if (this.focusedItem >= items.length) this.focusedItem = 0
          break
        case 'Enter':
          if (this.focusedItem > -1) {  
            this.$emit('change', this.items[this.focusedItem].value)
          }
          break
        default:
          this.focused = true
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import '../styles/mixins';
// accessibility styles
body.user-is-tabbing .a11y:focus, body.user-is-tabbing .a11y-within{
  box-shadow: 0 0 0 2px $color-selected;
}

.position-wrap{
  position: relative;
}
.selected{
  border-radius: 2px;
  border: 0;
  width: 100%;
  text-align: left;
  outline: 0;
  background-color: var(--select-background, $color-secondary);
  border: 1px solid #C5CACD;
  $paddingVal: $baseline * 2;
  padding-top: $paddingVal;
  padding-bottom: $paddingVal;
}
.small{
  $paddingVal: $baseline;
  padding-top: $paddingVal ;
  padding-bottom: $paddingVal;
}
.small-text {
  padding-top:$baseline;
}
.items {
  border: 1px solid var(--border-color, #C5CACD);
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.3);
  background-color: var(--dropdown-background-color, #FFFFFF);
  position: absolute;
  min-width: 100%;
  z-index: 100;
  top:0;
}
.list-item{
  display: block;
  padding: $baseline;
  color:$color-gray-dark;
  &:hover, &:focus, &.focused {
    background-color: var(--hover-background-color, #E7F5FB);
    outline: none;
  }
}
.d
.list-item:focus .list-item:hover, .focused {
  color: $color-black
}
</style>