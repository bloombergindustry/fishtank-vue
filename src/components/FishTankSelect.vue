<template>
  <div 
    class="select" 
    :name="name" 
    :orientation="orientation" 
    @mouseleave="opened=false">
    <slot 
      v-if="label" 
      name="label">
      {{ label }}
    </slot>
    <div class="positionWrap">
      <button 
        class="selected a11y" 
        aria-haspopup="listbox"
        :placeholder="!value" 
        @click="opened=!opened">
        <box 
          class="selectedWrap" 
          display="flex" 
          justify-content="between" 
          :padding=2> 
          <ftext
            color="grayDark">
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
        class="items a11y-within" 
        role="listbox">
        <a 
          v-for="(item, index) in items" 
          :key="index" 
          tabindex="0" 
          @keyup.enter="$emit('change', item.value, $nextTick(()=>opened=false))" 
          @click="$emit('change', item.value); opened = false"
          @blur="closeDropdown(items, index)"
          class="listItem">
            <ftext>{{ item.label }}</ftext>
        </a>
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
    value: String | Number
  },
  model: {
    event: 'change',
    prop: 'value'
  },
  data () {
    return {
      opened: false
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
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/mixins';
@import '../../node_modules/@fishtank/colors/dist/index.scss';

.select{
  --select-background: var(--color-secondary);
  --selected-wrap: var(--color-secondary-lighter);
}
.positionWrap{
  position: relative;
}
.selected{
  background-color:transparent;
  border: 0;
  width: 100%;
  text-align: left;
  padding: 0;
  outline: 0;
}
body.user-is-tabbing .a11y:focus, body.user-is-tabbing .a11y-within:focus-within{
  box-shadow: 0 0 0 2px $color-selected;
}
.selectedWrap{
  background-color: var(--select-background);
  border: 1px solid #C5CACD;
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
.listItem{
  display: block;
  padding: $baseline * 2;
  &:hover, &:focus {
    background-color: var(--hover-background-color, #E7F5FB);
    outline: none;
  }
}
</style>