<template>
  <data-fetcher :url="dataUrl" enable-cache>
    <div class="Autocomplete" :focused="focused" :name="name" :orientation="orientation" slot-scope="{ loading, fetchedData: { data: { items } } }" @keydown="e => _handleKeydown(e, items)" >
      <div 
        :id="`${id}-combobox`"
        class="input-wrapper"
        role="combobox">
        <text-input 
          :id="`${id}-input`"
          ref="query"
          v-model="query"
          type="text"
          icon="search_24"
          :label="label" 
          :orientation="orientation" 
          :placeholder="placeholder" 
          :aria-expanded="(focused && items ? true: false)"
          :aria-controls="`${id}-listbox`"
          aria-haspopup="listbox"  
          aria-autocomplete="list" 
          :aria-activedescendant="`option-${focusedItem}`"
          :aria-labelledby="label" 
          @blur="focused=false" 
          @focus="focused=true">
          <div
            v-if="focused && items"
            :id="`${id}-listbox`"
            slot="below"
            role="listbox"
            class="items">
            <HighlightedText
              v-for="(item, index) in items"
              :id="`option-${index}`"
              :key="index"
              :aria-labelledby="label"
              :focused="focusedItem===index"
              :class="['item', {'focused':focusedItem===index}]"
              :content="item.label"
              :term="query"
              role="option"
              @mousedown.native="() => _selectResult(item)"
              @mouseover.native="focusedItem=index" />
          </div>
        </text-input>
      </div>
    </div>
  </data-fetcher>
</template>

<script>
import DataFetcher from './BLAWDataFetcher.vue'
import HighlightedText from './FishTankHighlightedText.vue'
import TextInput from './FishTankTextInput.vue'

/** Triggered when selecting a result
 * @event change
 * @type {Event}
 */

export default {
  components: { DataFetcher, HighlightedText, TextInput },
  name: 'FishTankLookup',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /**
     * Input element id
     */
    id: String,

    /**
     * Label to display with input box
     */
    label: String,

    /**
     * Input name attribute
     */
    name: String,

    /**
     * Label/input orientation (rtf, ltr, ttb)
     */
    orientation: {
      type: String,
      default: 'ttb'
    },

    /**
     * Placeholder to display in input element
     */
    placeholder: String,

    /**
     * Url to request items, will append ?query=...
     */
    url: String,

    /**
     * Current selected value
     * @param {Object} value - Value hash
     * @param {Boolean} value.label - Display value
     * @param {Boolean} value.value - Selected value
     */
    value: Object
  },
  data () {
    return {
      dataUrl: '',
      focused: false,
      focusedItem: -1,
      query: this.value ? this.value.label : ''
    }
  },
  watch: {
    query () {
      this.dataUrl = `${this.url}?query=${this.query}`

      // Only fire the change if the value doesn't match to
      // avoid dup event when selecting from dropdown
      if (this.query && (!this.value || this.value.label !== this.query)) {
        this.$emit('change', { label: this.query, value: null })
      }
    }
  },
  methods: {
    /**
     * Clears current value
     */
    clear () { this.query = '' },

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
          e.preventDefault()
          this._selectResult(items[this.focusedItem] || { label: this.query, value: null })
          break
        default:
          this.focused = true
      }
    },
    _selectResult (item) {
      this.focused = false
      this.$emit('change', item)
      this.query = item.label
    },
  }
}
</script>

<style scoped lang="scss">
@import '../styles/mixins';
.Autocomplete {
  font-family: 'Open Sans', sans-serif;

  .input-wrapper {
    position: relative;

    .items {
      background-color: #fff;
      border: 1px solid $color-gray-lighter;
      border-radius: 2px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.4);
      position: absolute;
      top: 100%;
      width: calc(100% - 2px);
      z-index: 10;
      margin-top:$baseline;

      &:empty { display: none; }
      .item {
        display: block;
        padding: $baseline *2;
      }
      .HighlightedText {
        cursor: pointer;
        font-size: var(--font-size, 14px);
        line-height: 20px;
      }
      .focused {
        background-color: #b9d1f3;
        color: #225379;
      }
    }
  }
}
</style>