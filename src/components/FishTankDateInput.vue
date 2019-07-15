<template>
  <span class="FishTankDateInput" :disabled="disabled" :readonly="readonly" :hide-calendar-toggle="hideCalendarToggle" :hide-clear="hideClear">
    <!-- Calendar Button -->
    <FishtankIcon
      class="calendar-icon"
      color="#505558"
      height="24"
      name="calendar_24"
      width="24"
      @click.native="$emit('toggleCalendar')"
    />

    <!-- Input -->
    <input
      v-model="formattedValue"
      autocomplete="off"
      ref="input"
      type="text"
      :id="id"
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder || format"
      :readonly="readonly"
      :required="required"
      @blur="_handleBlur"
      @focus="$emit('focus')"
      @keyup="_handleKeyup"
    />

    <!-- Clear Button -->
    <span v-if="formattedValue" class="clear-icon" @click="$emit('change', null)">&times;</span>
  </span>
</template>
<script>
import { makeFishTankDateUtils } from '../utils/FishTankDateUtils'
import FishtankIcon from 'components/fishtank/FishtankIcon.vue'

/**
 * A date input field. Validates input according to specified format
 */
export default {
  components: { FishtankIcon },
  name: 'FishTankDateInput',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /**
    * Input disabled state
    */
    disabled: Boolean,

    /**
    * Date format
    */
    format: {
      type: String,
      default: 'MM/DD/YYYY'
    },

    /**
     * Hide calendar toggle icon
     */
    hideCalendarToggle: Boolean,

    /**
     * Hides clear icon
     */
    hideClear: Boolean,

    /**
    * Id of input element (for labels etc)
    */
    id: String,

    /**
    * Name of input element (for forms etc)
    */
    name: String,

    /**
    * Input placeholder
    */
    placeholder: String,

    /**
    * Input readonly state
    */
    readonly: Boolean,

    /**
    * Input required state
    */
    required: Boolean,

    /**
    * Use UTC for time calculations
    */
    utc: Boolean,

    /**
    * Current value
    */
    value: Date
  },
  data () {
    return {
      formattedValue: this.value ? this._formatDate(this.value) : null
    }
  },
  watch: {
    value (newValue) {
      this.formattedValue = newValue ? this._formatDate(newValue) : null
    }
  },
  methods: {
    /**
     * Sets focus on input element
     */
    focus () {
      this.$refs.input.focus()
    },

    _dateStringIsValid (str) {
      const ts = Date.parse(str)
      return !isNaN(ts) && this._formatDate(ts) === str
    },

    _formatDate (d) {
      return makeFishTankDateUtils(this.utc).formatDate(new Date(d), this.format)
    },

    _handleBlur (e) {
      // Set the value if valid, clear otherwise
      if (this._dateStringIsValid(e.target.value)) {
        this.$emit('change', new Date(e.target.value))
      } else {
        this.formattedValue = null
      }
    },

    _handleKeyup (e) {
      // Only change on Enter
      if (e.key !== 'Enter') return

      // Set the value if valid, clear otherwise
      if (this._dateStringIsValid(e.target.value)) {
        this.$emit('change', new Date(e.target.value))
      } else {
        this.formattedValue = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.FishTankDateInput {
  align-items: center;
  height: 100%;
  display: inline-flex;
  font-family: var(--font-family, 'Open Sans', arial, sans-serif);
  position: relative;

  &[disabled], &[readonly] { pointer-events: none; }
  &[disabled] { opacity: 0.5; }
  &[hide-calendar-toggle] {
    input { padding-left: 8px; }
    .FishtankIcon { display: none; }
  }
  &[hide-clear] {
    input { padding-right: 8px; }
    .clear-icon { display: none; }
  }

  input {
    border: 1px solid var(--border-color, #C5CACD);
    border-radius: var(--border-radius, 2px);
    font-size: 14px;
    height: 38px;
    padding-left: 30px;
    padding-right: 20px;
    width: 82px;

    &::-webkit-input-placeholder { font-size: 12px; font-style: italic; }
    &:-moz-placeholder { font-size: 12px; font-style: italic; }
    &::-moz-placeholder { font-size: 12px; font-style: italic; }
    &:-ms-input-placeholder { font-size: 12px; font-style: italic; }
    &:focus { outline: none; }
  }

  .FishtankIcon {
    cursor: pointer;
    left: 5px;
    position: absolute;
    top: 9px;
  }

  .clear-icon {
    cursor: pointer;
    position: absolute;
    right: 9px;
    top: 13px;
  }
}
</style>
