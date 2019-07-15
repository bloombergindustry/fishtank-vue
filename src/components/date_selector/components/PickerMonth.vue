<template>
  <div class="PickerMonth" :inline="inline" @mousedown.prevent>
    <header>
      <span class="prev" :disabled="isPreviousYearDisabled" @click="_previousYear">
        <FishtankIcon color="white" name="chevron-left_24" width="24" height="24" />
      </span>
      <span class="current-year" :disabled="disableYear" @click="$emit('showYearCalendar')">{{pageYearName}}</span>
      <span class="next" :disabled="isNextYearDisabled" @click="_nextYear">
        <FishtankIcon color="white" name="chevron-right_24" width="24" height="24" />
      </span>
    </header>

    <span v-for="(month, index) in months"
      :class="{'cell month': true, 'selected': month.isSelected}"
      :disabled="month.isDisabled"
      :key="index"
      @click.stop="_selectMonth(month)">{{month.label}}</span>
  </div>
</template>

<script>
import FishtankIcon from 'components/fishtank/FishtankIcon.vue'
import en from '../locale/translations/en'
import { makeDateUtils } from '../utils/DateUtils'

/**
 * A date selector calendar that displays months in a given year
 */
export default {
  components: { FishtankIcon },
  name: 'PickerMonth',
  props: {
    /**
    * User specified function that determines if a given view (day, month, year) can be displayed
    */
    disableYear: Boolean,

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
     * Initial calendar date to open to
     */
    initialPageDate: Date,

    /**
     * Show the calendar inline
     */
    inline: Boolean,

    /**
    * Language to use for month name abbreviations
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
    * The selected date
    */
    value: Date
  },
  data () {
    return {
      pageDate: this.initialPageDate || this.value || new Date(),
      utils: makeDateUtils(this.utc)
    }
  },
  computed: {
    /**
     * Is the next year disabled?
     * @return {Boolean}
     */
    isNextYearDisabled () {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false
      }
      return this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(this.pageDate)
    },

    /**
     * Is the previous year disabled?
     * @return {Boolean}
     */
    isPreviousYearDisabled () {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false
      }
      return this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(this.pageDate)
    },

    /**
     * @return {Object[]}
     */
    months () {
      const d = this.pageDate
      let months = []
      // set up a new date object to the beginning of the current 'page'
      let dObj = this.utc
        ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate()))
        : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes())
      for (let i = 0; i < 12; i++) {
        months.push({
          label: this.utils.getMonthName(i, this.translation.months),
          timestamp: dObj.getTime(),
          isSelected: this._isSelectedMonth(dObj),
          isDisabled: this._isDisabledMonth(dObj)
        })
        this.utils.setMonth(dObj, this.utils.getMonth(dObj) + 1)
      }
      return months
    },

    /**
     * Get year name on current page.
     * @return {String}
     */
    pageYearName () {
      const yearSuffix = this.translation.yearSuffix
      return `${this.utils.getFullYear(this.pageDate)}${yearSuffix}`
    }
  },
  methods: {
    /**
     * Sets current page date
     * @param {Date} date
     */
    setPageDate (date) {
      this.pageDate = date
    },

    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */
    _changeYear (incrementBy) {
      let date = this.pageDate
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy)
      this.pageDate = new Date(date)
    },

    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {Boolean}
     */
    _isDisabledMonth (date) {
      let disabledDates = false

      if (typeof this.disabledDates === 'undefined' || !this.disabledDates) {
        return false
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (
          (this.utils.getMonth(date) < this.utils.getMonth(this.disabledDates.to) && this.utils.getFullYear(date) <= this.utils.getFullYear(this.disabledDates.to)) ||
          this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)
        ) {
          disabledDates = true
        }
      }
      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (
          (this.utils.getMonth(date) > this.utils.getMonth(this.disabledDates.from) && this.utils.getFullYear(date) >= this.utils.getFullYear(this.disabledDates.from)) ||
          this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)
        ) {
          disabledDates = true
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true
      }
      return disabledDates
    },

    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {Boolean}
     */
    _isSelectedMonth (date) {
      return (this.value &&
        this.utils.getFullYear(this.value) === this.utils.getFullYear(date) &&
        this.utils.getMonth(this.value) === this.utils.getMonth(date))
    },

    /**
     * Increments the year
     */
    _nextYear () {
      if (!this.isNextYearDisabled) {
        this._changeYear(1)
      }
    },

    /**
     * Decrements the year
     */
    _previousYear () {
      if (!this.isPreviousYearDisabled) {
        this._changeYear(-1)
      }
    },

    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    _selectMonth (month) {
      if (month.isDisabled) {
        return false
      }
      this.$emit('selectMonth', month)
    }
  }
}
</script>

<style lang="scss" scoped>
.PickerMonth {
  box-sizing: border-box;
  border: 1px solid #ccc;
  background-color: #f0f3f7;
  position: relative;
  width: 300px;

  &:not([inline]) {
    position: absolute;
    z-index: 100;
  }

  & * { box-sizing: border-box; }

  header {
    align-items: center;
    background-color: #0D9DDB;
    display: flex;
    padding: 0 8px;

    .current-year {
      color: white;
      cursor: pointer;
      flex-grow: 1;
      text-align: center;

      &[disabled] { pointer-events: none; }
    }

    .prev, .next {
      cursor: pointer;
      display: flex;
      font-size: 36px;

      &[disabled] {
        pointer-events: none;
        .FishtankIcon { opacity: 0.5; }
      }

      .FishtankIcon { width: 24px; }
    }
  }

  .cell {
    display: inline-flex;
    flex-direction: column;
    padding: 0 5px;
    width: calc(100%/3);
    height: 40px;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;

    &[disabled] {
      color: #ddd;
      fill: #a3a3a3;
      cursor: default;
    }
  }
  .cell:not(.blank):not([disabled]).day,
  .cell:not(.blank):not([disabled]).month,
  .cell:not(.blank):not([disabled]).year { cursor: pointer; }
  .cell.day.today { border: 1px solid var(--primary-color, #777C7F); }
  .cell:not(.blank):not([disabled]).day:hover,
  .cell:not(.blank):not([disabled]).month:hover,
  .cell:not(.blank):not([disabled]).year:hover { background-color: #0D9DDB; }
  .cell.selected { background-color: #0D9DDB; }
  .cell.selected:hover { background-color: #0D9DDB; }
  .cell.selected.highlighted,
  .cell.highlighted.highlight-end,
  .cell.highlighted.highlight-start { background-color: #0D9DDB; }
  .cell.highlighted { background: #72c6ea; }
  .cell.highlighted[disabled] { color: #a3a3a3; }
  .cell.grey { color: #888; }
  .cell.grey:hover { background: inherit; }
  .cell.day-header {
    font-size: 75%;
    white-space: nowrap;
    cursor: inherit;
  }
  .cell.day-header:hover { background: inherit; }
}
</style>
