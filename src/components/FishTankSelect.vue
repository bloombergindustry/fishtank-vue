<script lang="ts">
import FishTankText from "./FishTankText.vue";
import FishTankBox from "./FishTankBox.vue";
import { CaretDown24 } from "@fishtank/icons-vue";
import { a11y } from "../util/mixins";
import Popper from "popper.js";
import { Component, Prop, Vue } from "vue-property-decorator";

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

@Component({
  components: {
    ftext: FishTankText,
    box: FishTankBox,
    caretdown: CaretDown24
  },
  mixins: [a11y],
  model: {
    event: "change",
    prop: "value"
  }
})
export default class FishTankSelect extends Vue {
  /**
   * Array of dropdown items
   */
  @Prop({ default: () => [] })
  items: Array<any>;

  /**
   * Select ID label
   */
  @Prop({})
  id: String;

  /**
   * Input label
   */
  @Prop({})
  label: String;

  /**
   * Element name (for forms use)
   */
  @Prop({})
  name: String;

  /**
   * Orientation of label/input, ie ttb/rtl/ltr
   */
  @Prop({ default: "ttb" })
  orientation: String;

  /**
   * Placeholder text
   */
  @Prop({})
  placeholder: String;

  /**
   * Current selected item value
   */
  @Prop({})
  value: String | Number;

  /**
   * Small select
   */
  @Prop({})
  small: boolean;
  /**
   * Width
   */
  @Prop({ default: 200 })
  width: number;

  //data
  opened = false;
  focusedItem = -1;
  popObj = undefined;
  inputEl = { type: HTMLElement };

  //computed methods
  get displayLabel() {
    return this.value
      ? this.items.find(x => x.value === this.value).label
      : this.placeholder;
  }

  get dropdownStyle() {
    return this.$props.width + `px` || "200px";
  }

  //lifecycle method
  destroyed() {
    if (this.popObj !== undefined) this.destroyPop();
  }

  //component methods
  closeDropdown(items: Array<String>, index: number) {
    if (items.length - 1 === index) {
      this.opened = false;
    }
  }

  _handleKeydown(e: KeyboardEvent, items = []) {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        this.focusedItem--;
        if (this.focusedItem < 0) this.focusedItem = items.length - 1;
        break;
      case "ArrowDown":
        e.preventDefault();
        this.focusedItem++;
        if (this.focusedItem >= items.length) this.focusedItem = 0;
        break;
      case "Enter":
        if (this.focusedItem > -1) {
          /**
           * An event that signals enter being pressed.
           *
           * @event change
           * @type {object}
           */
          this.$emit("change", this.items[this.focusedItem].value);
        }
        break;
      default:
        null;
    }
  }

  openItems() {
    if (this.opened === true) this.showPop();
  }

  showPop() {
    (this as any).inputEl = document.querySelector(`#${this.id}-button`);
    this.$nextTick(function() {
      (this as any).popObj = new Popper(
        (this as any).inputEl,
        (this as any).$refs.itemsWrap,
        {
          placement: "bottom-start",
          modifiers: {
            computeStyle: {
              gpuAcceleration: true
            }
          }
        }
      );
    });
  }

  destroyPop() {
    this.$nextTick(function() {
      if (this.popObj !== undefined) (this as any).popObj.destroy();
    });
  }
}
</script>

<template>
  <div
    :name="name"
    :orientation="orientation"
    class="select"
    @mouseleave="opened=false; destroyPop()"
    @keydown="e => _handleKeydown(e, items)"
  >
    <slot v-if="label">
      <span :id="`${id}-label`" name="label">{{ label }}</span>
    </slot>
    <div class="position-wrap">
      <button
        :id="`${id}-button`"
        :class="['selected', 'a11y',(small ? 'small':null)]"
        :placeholder="!value"
        :aria-expanded="opened"
        :aria-labelledby="`${id}-label ${id}-button`"
        :aria-activedescendant="`${id}-option-${focusedItem}`"
        aria-haspopup="listbox"
        @keydown.tab="opened ? opened = false: null"
        @keydown.esc="opened ? opened = false: null"
        @click="opened=!opened; openItems()"
      >
        <box display="flex" justify-content="between">
          <ftext
            :size="small ? 'baseSm': 'baseMd'"
            :class="(small ? 'small-text':null)"
            color="grayDark"
          >{{ displayLabel }}</ftext>
          <caretdown v-if="!opened" class="caret"/>
          <caretdown v-if="opened" class="caret"/>
        </box>
      </button>
      <div ref="itemsWrap" class="items-wrap">
        <div
          v-if="opened"
          :id="`${id}-listbox`"
          :class="['items', {'a11y-within': focusedItem > -1}]"
          :aria-labelledby="`${id}-label`"
          :style="{width:dropdownStyle}"
          tabindex="-1"
          role="listbox"
        >
          <ftext
            v-for="(item, index) in items"
            :id="`${id}-option-${index}`"
            :key="index"
            :class="['list-item', 'list-item-text', {'focused': focusedItem===index}]"
            :aria-selected="focusedItem===index"
            :size="small ? 'baseSm': 'baseMd'"
            role="option"
            @click.native="$emit('change', item.value); opened = false; destroyPop()"
            @blur="closeDropdown(items, index); destroyPop()"
          >{{ item.label }}</ftext>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/mixins";
// accessibility styles
body.user-is-tabbing .a11y:focus,
body.user-is-tabbing .a11y-within {
  box-shadow: 0 0 0 2px $color-selected;
}
.select {
  .selected {
    border-radius: 2px;
    border: 0;
    width: 100%;
    text-align: left;
    outline: 0;
    background-color: var(--select-background, $color-secondary);
    border: 1px solid #c5cacd;
    $paddingVal: $baseline * 2;
    padding-top: $paddingVal;
    padding-bottom: $paddingVal;
  }
  .small {
    $paddingVal: $baseline;
    padding-top: $paddingVal;
    padding-bottom: $paddingVal;
  }
  .small-text {
    padding-top: $baseline;
  }
  .items-wrap {
    z-index: 10;
  }
  .items {
    border: 1px solid var(--border-color, #c5cacd);
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    background-color: var(--dropdown-background-color, #ffffff);
    min-width: 100%;
    z-index: 100;
    outline: 0;
    margin-top: calc(var(--baseline));
  }
  .list-item {
    display: block;
    padding: $baseline;
    color: $color-gray-dark;
    &:hover,
    &:focus {
      background-color: var(--hover-background-color, #e7f5fb);
      outline: none;
      color: $color-black;
    }
  }
}
</style>
