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
        :class="['selected', 'a11y',(small ? 'small-select':null)]" 
        aria-haspopup="listbox"
        :placeholder="!value" 
        @click="opened=!opened">
        <box 
          class="selectedWrap" 
          display="flex" 
          justify-content="between"> 
          <ftext
            color="grayDark"
            :size="small ? 'baseSm': 'baseMd'"
            :class="(small ? 'small-select-text':null)">
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
          @keyup.enter="$emit('change', item.value, $nextTick(()=>opened=true))" 
          @click="$emit('change', item.value); opened = false"
          @blur="closeDropdown(items, index)"
          class="list-item">
          <ftext
            class="list-item-text"
            :size="small ? 'baseSm': 'baseMd'">
            {{ item.label }}
          </ftext>
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
}
.positionWrap{
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
body.user-is-tabbing .a11y:focus, body.user-is-tabbing .a11y-within:focus-within{
  box-shadow: 0 0 0 2px $color-selected;
}
.small-select{
  $paddingVal: $baseline;
  padding-top: $paddingVal ;
  padding-bottom: $paddingVal;
}
.small-select-text {
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
  &:hover, &:focus {
    background-color: var(--hover-background-color, #E7F5FB);
    outline: none;
  }
}
.list-item-text {
  color:$color-gray-dark;
}
.list-item:focus .list-item-text, .list-item:hover .list-item-text{
  color: $color-black
}
</style>