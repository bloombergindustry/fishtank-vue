<template>
  <div class="FishTankDatePicker">
    <!-- Base input -->
    <FishTankDateInput
      ref="input"
      :disabled="disabled"
      :hide-calendar-toggle="hideCalendarToggle"
      :hide-clear="hideClear"
      :name="name"
      :date="value"
      @change="$emit('change', $event)"
      @focus="activePicker = openOnFocus ? 'day' : activePicker"
      @toggleCalendar="activePicker = activePicker ? null : 'day'"/>

    <!-- Day View -->
    <FishTankPickerDay
      v-show="activePicker === 'day'"
      ref="day"
      :disabled-dates="disabledDates"
      :full-month-name="fullMonthName"
      :highlighted="highlighted"
      :inline="inline"
      :monday-first="mondayFirst"
      :translation="translation"
      :value="value"
      :utc="utc"
      :float-highlight-end="floatHighlightEnd"
      :float-highlight-start="floatHighlightStart"
      @change="$emit('change', $event)"
      @showMonthCalendar="activePicker = 'month'"/>

      <!-- Month View
    <FishTankPickerMonth
      v-show="activePicker === 'month'"
      ref="month"
      :disabledDates="disabledDates"
      :inline="inline"
      :translation="translation"
      :utc="utc"
      :date="value"
      @selectMonth="_selectMonth"
      @showYearCalendar="activePicker = 'year'"
    />

    Year View 
    <FishTankPickerYear
      v-if="activePicker === 'year'"
      :disabledDates="disabledDates"
      :inline="inline"
      :translation="translation"
      :utc="utc"
      :date="value"
      @selectYear="_selectYear"
    /> -->
  </div>
</template>
<script>
import en from '../locale/translations/en'
import FishTankDateInput from './FishTankDateInput.vue'
import FishTankPickerDay from './FishTankPickerDay.vue'
import FishTankPickerMonth from './FishTankPickerMonth.vue'
import FishTankPickerYear from './FishTankPickerYear.vue'
import { makeFishTankDateUtils } from '../util/FishTankDateUtils'

/**
 * A date picker with text or interactive calendar input. Accepts a variety of languages and text input formats
 */
export default {
  name: 'FishTankDatePicker',
  // model: {
  //   prop: 'value',
  //   event: 'change'
  // },
  components: { FishTankDateInput, FishTankPickerDay, FishTankPickerMonth, FishTankPickerYear },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    /**
    * Input id
    */
    id: String,

    /**
    * If true, disable FishTankDatePicker on screen
    */
    disabled: Boolean,

    /**
    * Non-selectable dates, can be specified up to or from a date, over a range, by day,
    * by individual date, or by user-specified function
    *
    *disabledDates: {
    *  to: new Date(2016, 0, 5), // Disable all dates up to specific date
    *  from: new Date(2016, 0, 26), // Disable all dates after specific date
    *  days: [6, 0], // Disable Saturday's and Sunday's
    *  daysOfMonth: [29, 30, 31], // Disable 29th, 30th and 31st of each month
    *  dates: [ // Disable an array of dates
    *    new Date(2016, 9, 16),
    *    new Date(2016, 9, 17),
    *    new Date(2016, 9, 18)
    *  ],
    *  ranges: [{ // Disable dates in given ranges (exclusive).
    *    from: new Date(2016, 11, 25),
    *    to: new Date(2016, 11, 30)
    *  }, {
    *    from: new Date(2017, 1, 12),
    *    to: new Date(2017, 2, 25)
    *  }],
    *  // a custom function that returns true if the date is disabled
    *  // this can be used for wiring you own logic to disable a date if none
    *  // of the above conditions serve your purpose
    *  // this function should accept a date and return true if is disabled
    *  customPredictor: function(date) {
    *    // disables the date if it is a multiple of 5
    *    if(date.getDate() % 5 == 0){
    *      return true
    *    }
    *  }
    *}
    */
    disabledDates: Object,

    /**
    * Highlight date range from cursor up to the "to" highlight date
    * Useful for visualizing selection of the start of a date range
    */
    floatHighlightStart: Boolean,

    /**
    * Highlight date range from cursor back to the "from" highlight date
    * Useful for visualizing selection of the end of a date range
    */
    floatHighlightEnd: Boolean,

    /**
    * Date formatting string or function
    */
    format: {
      type: String,
      default: 'MM/DD/YYYY'
    },

    /**
    * To show the full month name
    */
    fullMonthName: Boolean,

    /**
     * Hide calendar toggle icon
     */
    hideCalendarToggle: Boolean,

    /**
     * Hides clear icon
     */
    hideClear: Boolean,

    /**
    * Dates can be highlighted (e.g. for marking an appointment or date range)
    * highlighted: {
    *   to: new Date(2016, 0, 5), // Highlight all dates up to specific date
    *   from: new Date(2016, 0, 26), // Highlight all dates after specific date
    *   days: [6, 0], // Highlight Saturday's and Sunday's
    *   daysOfMonth: [15, 20, 31], // Highlight 15th, 20th and 31st of each month
    *   dates: [ // Highlight an array of dates
    *     new Date(2016, 9, 16),
    *     new Date(2016, 9, 17),
    *     new Date(2016, 9, 18)
    *   ],
    *   // a custom function that returns true of the date is highlighted
    *   // this can be used for wiring you own logic to highlight a date if none
    *   // of the above conditions serve your purpose
    *   // this function should accept a date and return true if is highlighted
    *   customPredictor: function(date) {
    *     // highlights the date if it is a multiple of 4
    *     if(date.getDate() % 4 == 0){
    *       return true
    *     }
    *   },
    *  includeDisabled: true // Highlight disabled dates
    * }
    */
    highlighted: Object,

    /**
     * Initial calendar date to open to
     */
    initialPageDate: Date,

    /**
    * To show the FishTankDatePicker always open
    */
    inline: Boolean,

    /**
    * To start the week on Monday
    */
    mondayFirst: Boolean,

    /**
    * Input name property
    */
    name: String,

    /**
     * Show picker on focus
     */
    openOnFocus: Boolean,

    /**
    * Input placeholder text
    */
    placeholder: String,

    /**
    * Sets html required attribute on input
    */
    required: Boolean,

    /**
    * Translation for days and months
    */
    translation: {
      type: Object,
      default: () => en
    },

    /**
    * Use UTC for time calculations
    */
    utc: Boolean,

    /**
    * Date value of the FishTankDatePicker
    */
    value: Date
  },
  data () {
    return {
      activePicker: null,
      pageDate: this.initialPageDate || this.value || new Date(),
      utils: makeFishTankDateUtils(this.utc)
    }
  },
  watch: {
    value (newValue) {
      this.activePicker = null
    }
  },
  mounted () {
    window.addEventListener('click', this._resetActivePicker)
  },
  beforeDestroy () {
    window.removeEventListener('click', this._resetActivePicker)
  },
  methods: {
    /**
     * @public
     * Focus on text input
     */
    focus () {
      this.$refs.input.focus()
    },
    /**
     * @param {Object} month
     * @type {Object}
     */
    _selectMonth (month) {
      this.$refs.day.setPageDate(new Date(month.timestamp))
      this.activePicker = 'day'
    },

    /**
     * @param {Object} year
     * @type {Object}
     */
    _selectYear (year) {
      this.$refs.month.setPageDate(new Date(year.timestamp))
      this.activePicker = 'month'
    },

    /**
     * Closes picker calendar when user clicks outside component
     * @param {Event} e
     */
    _resetActivePicker (e) {
      if (this.activePicker != null && !this.$el.contains(e.target)) {
        this.activePicker = null
      }
    }
  }
}
</script>
