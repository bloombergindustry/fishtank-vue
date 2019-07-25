<template>
  <div :inline="inline" class="FishTankPickerDay" @mousedown.prevent @mouseleave="hoverDate = null">
    <header>
      <span
        role="button"
        :disabled="isPreviousYearDisabled"
        class="prev double"
        @click="_previousYear"
      >
        <chevron-left24 />
        <chevron-left24 />
      </span>
      <span role="button" :disabled="isPreviousMonthDisabled" class="prev" @click="_previousMonth">
        <chevron-left24 />
      </span>
      <span
        :disabled="disableMonth"
        class="current-month"
      >{{ currentMonthName }} {{ currentYearName }}</span>
      <span role="button" :disabled="isNextMonthDisabled" class="next" @click="_nextMonth">
        <chevron-right24 />
      </span>
      <span role="button" :disabled="isNextYearDisabled" class="next double" @click="_nextYear">
        <chevron-right24 />
        <chevron-right24 />
      </span>
    </header>

    <div class="cells">
      <span v-for="d in daysOfWeek" :key="d.timestamp" class="cell day-header">{{ d.toUpperCase() }}</span>
      <template v-if="blankDays > 0">
        <span v-for="d in blankDays" :key="d.timestamp" class="cell day blank" />
      </template>
      <span
        v-for="(day, index) in days"
        :class="_dayClasses(day)"
        :disabled="day.isDisabled"
        :key="index"
        @click="$emit('change', new Date(day.timestamp))"
        @mouseover="_updateHoverDate(day)"
        v-html="day.date"
      />
    </div>
    <footer>
      <span role="button" class="select-today" @click="$emit('change', new Date())">Today</span>
    </footer>
  </div>
</template>

<script>
import { ChevronLeft24, ChevronRight24 } from "@fishtank/icons-vue";
import en from "../locale/translations/en";
import { makeFishTankDateUtils } from "../util/FishTankDateUtils";

/**
 * A date selector calendar that displays days in a given month
 *
 * NOTE: MONTH AND YEAR PICKER HAVE BEEN DISABLED
 */
export default {
  name: "FishTankPickerDay",
  components: { ChevronLeft24, ChevronRight24 },
  // model: {
  //   prop: 'value',
  //   event: 'change'
  // },
  props: {
    /**
     * Disable month toggle
     */
    disableMonth: Boolean,

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
     * Highlight date range from cursor back to the "from" highlight date
     * Useful for visualizing selection of the end of a date range
     */
    floatHighlightEnd: Boolean,

    /**
     * Highlight date range from cursor up to the "to" highlight date
     * Useful for visualizing selection of the start of a date range
     */
    floatHighlightStart: Boolean,

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
     * Show the calendar inline
     */
    inline: Boolean,

    /**
     * Start the week on Monday
     */
    mondayFirst: Boolean,

    /**
     * Should we display full month names on calendar page header
     */
    showFullMonthName: {
      type: Boolean,
      default: true
    },

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
  data() {
    return {
      hoverDate: null,
      pageDate: this.value || this.initialPageDate || new Date(),
      utils: makeFishTankDateUtils(this.utc)
    };
  },
  computed: {
    /**
     * Returns the day number of the week less one for the first of the current month
     * Used to show amount of empty cells before the first in the day calendar layout
     * @return {Number}
     */
    blankDays() {
      const d = this.pageDate;
      let dObj = this.utc
        ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1))
        : new Date(
            d.getFullYear(),
            d.getMonth(),
            1,
            d.getHours(),
            d.getMinutes()
          );
      if (this.mondayFirst) {
        return this.utils.getDay(dObj) > 0 ? this.utils.getDay(dObj) - 1 : 6;
      }
      return this.utils.getDay(dObj);
    },

    /**
     * Returns computed days for the current page date
     * @return {Object[]}
     */
    days() {
      const d = this.pageDate;
      let days = [];
      // set up a new date object to the beginning of the current 'page'
      let dObj = this.utc
        ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1))
        : new Date(
            d.getFullYear(),
            d.getMonth(),
            1,
            d.getHours(),
            d.getMinutes()
          );
      let daysInMonth = this.utils.daysInMonth(
        this.utils.getFullYear(dObj),
        this.utils.getMonth(dObj)
      );
      for (let i = 0; i < daysInMonth; i++) {
        days.push({
          date: this.utils.getDate(dObj),
          timestamp: dObj.getTime(),
          isSelected: this._isSelectedDate(dObj),
          isDisabled: this._isDisabledDate(dObj),
          isHighlighted: this._isHighlightedDate(dObj),
          isHighlightStart: this._isHighlightStart(dObj),
          isHighlightEnd: this._isHighlightEnd(dObj),
          isToday: this.utils.compareDates(dObj, new Date()),
          isWeekend:
            this.utils.getDay(dObj) === 0 || this.utils.getDay(dObj) === 6,
          isSaturday: this.utils.getDay(dObj) === 6,
          isSunday: this.utils.getDay(dObj) === 0
        });
        this.utils.setDate(dObj, this.utils.getDate(dObj) + 1);
      }
      return days;
    },

    /**
     * Returns an array of day names
     * @return {String[]}
     */
    daysOfWeek() {
      if (this.mondayFirst) {
        const tempDays = this.translation.days.slice();
        tempDays.push(tempDays.shift());
        return tempDays;
      }
      return this.translation.days;
    },

    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    currentMonthName() {
      const monthName = this.showFullMonthName
        ? this.translation.months
        : this.translation.monthsAbbr;
      return this.utils.getMonthNameAbbr(
        this.utils.getMonth(this.pageDate),
        monthName
      );
    },

    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */
    currentYearName() {
      const yearSuffix = this.translation.yearSuffix;
      return `${this.utils.getFullYear(this.pageDate)}${yearSuffix}`;
    },

    /**
     * Is the next month disabled?
     * @return {Boolean}
     */
    isNextMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }
      let d = this.pageDate;
      return (
        this.utils.getMonth(this.disabledDates.from) <=
          this.utils.getMonth(d) &&
        this.utils.getFullYear(this.disabledDates.from) <=
          this.utils.getFullYear(d)
      );
    },

    /**
     * Is the next year disabled?
     * @return {Boolean}
     */
    isNextYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false;
      }
      return (
        this.utils.getFullYear(this.disabledDates.from) <=
        this.utils.getFullYear(this.pageDate)
      );
    },

    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */
    isPreviousMonthDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }
      return (
        this.utils.getMonth(this.disabledDates.to) >=
          this.utils.getMonth(this.pageDate) &&
        this.utils.getFullYear(this.disabledDates.to) >=
          this.utils.getFullYear(this.pageDate)
      );
    },

    /**
     * Is the previous year disabled?
     * @return {Boolean}
     */
    isPreviousYearDisabled() {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false;
      }
      return (
        this.utils.getFullYear(this.disabledDates.to) >=
        this.utils.getFullYear(this.pageDate)
      );
    }
  },
  methods: {
    /**
     * Sets current page date
     * @param {Date} date
     */
    setPageDate(date) {
      this.pageDate = date;
    },

    /**
     * Change the page month
     * @param {Number} incrementBy
     */
    _changeMonth(incrementBy) {
      let date = this.pageDate;
      this.utils.setMonth(date, this.utils.getMonth(date) + incrementBy);
      this.pageDate = new Date(date);
    },

    /**
     * Change the page year
     * @param {Number} incrementBy
     */
    _changeYear(incrementBy) {
      let date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.pageDate = new Date(date);
    },

    /**
     * Returns hash of classes to include on supplied day
     * @param {Object} day
     * @return {Object}
     */
    _dayClasses(day) {
      return {
        "cell day": true,
        selected: day.isSelected,
        highlighted: day.isHighlighted,
        today: day.isToday,
        weekend: day.isWeekend,
        sat: day.isSaturday,
        sun: day.isSunday,
        "highlight-start": day.isHighlightStart,
        "highlight-end": day.isHighlightEnd
      };
    },

    /**
     * Helper
     * @param  {mixed}  prop
     * @return {Boolean}
     */
    _isDefined(prop) {
      return typeof prop !== "undefined" && prop;
    },

    /**
     * Whether a day is disabled
     * @param {Date}
     * @return {Boolean}
     */
    _isDisabledDate(date) {
      let disabledDates = false;

      if (typeof this.disabledDates === "undefined" || !this.disabledDates) {
        return false;
      }

      if (typeof this.disabledDates.dates !== "undefined") {
        this.disabledDates.dates.forEach(d => {
          if (this.utils.compareDates(date, d)) {
            disabledDates = true;
            return true;
          }
        });
      }
      if (
        typeof this.disabledDates.to !== "undefined" &&
        this.disabledDates.to &&
        date < this.disabledDates.to
      ) {
        disabledDates = true;
      }
      if (
        typeof this.disabledDates.from !== "undefined" &&
        this.disabledDates.from &&
        date > this.disabledDates.from
      ) {
        disabledDates = true;
      }
      if (typeof this.disabledDates.ranges !== "undefined") {
        this.disabledDates.ranges.forEach(range => {
          if (
            typeof range.from !== "undefined" &&
            range.from &&
            typeof range.to !== "undefined" &&
            range.to
          ) {
            if (date < range.to && date > range.from) {
              disabledDates = true;
              return true;
            }
          }
        });
      }
      if (
        typeof this.disabledDates.days !== "undefined" &&
        this.disabledDates.days.indexOf(this.utils.getDay(date)) !== -1
      ) {
        disabledDates = true;
      }
      if (
        typeof this.disabledDates.daysOfMonth !== "undefined" &&
        this.disabledDates.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1
      ) {
        disabledDates = true;
      }
      if (
        typeof this.disabledDates.customPredictor === "function" &&
        this.disabledDates.customPredictor(date)
      ) {
        disabledDates = true;
      }
      return disabledDates;
    },

    /**
     * Whether a day is highlighted and it is the end date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    _isHighlightEnd(date) {
      return (
        this._isHighlightedDate(date) &&
        this.highlighted.to instanceof Date &&
        this.utils.getFullYear(this.highlighted.to) ===
          this.utils.getFullYear(date) &&
        this.utils.getMonth(this.highlighted.to) ===
          this.utils.getMonth(date) &&
        this.utils.getDate(this.highlighted.to) === this.utils.getDate(date)
      );
    },

    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    _isHighlightStart(date) {
      return (
        this._isHighlightedDate(date) &&
        this.highlighted.from instanceof Date &&
        this.utils.getFullYear(this.highlighted.from) ===
          this.utils.getFullYear(date) &&
        this.utils.getMonth(this.highlighted.from) ===
          this.utils.getMonth(date) &&
        this.utils.getDate(this.highlighted.from) === this.utils.getDate(date)
      );
    },

    /**
     * Whether a day is highlighted (only if it is not disabled already except when highlighted.includeDisabled is true)
     * @param {Date}
     * @return {Boolean}
     */
    _isHighlightedDate(date) {
      if (
        !(this.highlighted && this.highlighted.includeDisabled) &&
        this._isDisabledDate(date)
      ) {
        return false;
      }

      let highlighted = false;

      if (typeof this.highlighted === "undefined") {
        return false;
      }

      if (typeof this.highlighted.dates !== "undefined") {
        this.highlighted.dates.forEach(d => {
          if (this.utils.compareDates(date, d)) {
            highlighted = true;
            return true;
          }
        });
      }

      if (
        this._isDefined(this.highlighted.from) &&
        this._isDefined(this.highlighted.to)
      ) {
        highlighted =
          date >= this.highlighted.from && date <= this.highlighted.to;
      }

      if (
        this._isDefined(this.highlighted.from) &&
        this._isDefined(this.hoverDate) &&
        this.floatHighlightEnd
      ) {
        highlighted = date >= this.highlighted.from && date <= this.hoverDate;
      }

      if (
        this._isDefined(this.highlighted.to) &&
        this._isDefined(this.hoverDate) &&
        this.floatHighlightStart
      ) {
        highlighted = date >= this.hoverDate && date <= this.highlighted.to;
      }

      if (
        typeof this.highlighted.days !== "undefined" &&
        this.highlighted.days.indexOf(this.utils.getDay(date)) !== -1
      ) {
        highlighted = true;
      }

      if (
        typeof this.highlighted.customPredictor === "function" &&
        this.highlighted.customPredictor(date)
      ) {
        highlighted = true;
      }

      return highlighted;
    },

    /**
     * Whether a day is selected
     * @param {Date}
     * @return {Boolean}
     */
    _isSelectedDate(dObj) {
      return this.value && this.utils.compareDates(this.value, dObj);
    },

    /**
     * Increment the current page month
     */
    _nextMonth() {
      if (!this.isNextMonthDisabled) {
        this._changeMonth(+1);
      }
    },
    /**
     * Increment the current page year
     */
    _nextYear() {
      if (!this.isNextMonthDisabled) {
        this._changeYear(+1);
      }
    },
    /**
     * Decrement the page month
     */
    _previousMonth() {
      if (!this.isPreviousMonthDisabled) {
        this._changeMonth(-1);
      }
    },

    /**
     * Decrement the current page year
     */
    _previousYear() {
      if (!this.isPreviousMonthDisabled) {
        this._changeYear(-1);
      }
    },

    /**
     * Sets hover date
     * @param {Object} day
     */
    _updateHoverDate(day) {
      this.hoverDate = new Date(day.timestamp);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../../node_modules/@fishtank/colors/dist/css-variable-stylesheet-text";
@import "../../node_modules/@fishtank/type/dist/css-variable-stylesheet";
@import "../../node_modules/@fishtank/type/dist/index.custom-properties";
@import "../../node_modules/@fishtank/space/dist/index.custom-properties";
.FishTankPickerDay {
  font-family: var(--font-primary);
  box-sizing: border-box;
  border: 1px solid var(--color-gray-lighter);
  border-radius: 2px;
  background-color: var(--color-white);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.4);
  position: relative;
  width: 375px;
  padding: 15px;
  margin-top: 5px;

  &:not([inline]) {
    position: absolute;
    z-index: 100;
  }

  & * {
    box-sizing: border-box;
  }

  hr {
    display: block;
  }
  footer {
    padding: 10px 0px 0px 0px;
  }
  header {
    align-items: center;
    //background-color:var(--color-selected);
    display: flex;
    padding: 0px 0px 10px 0px;

    .current-month {
      font-size: var(--fontsize-base-lg);
      font-weight: var(--fontweight-bold);
      color: var(--color-gray);
      //cursor: pointer;  re-enable style when month/year picker are completed
      flex-grow: 1;
      text-align: center;

      &[disabled] {
        pointer-events: none;
      }
    }

    .prev,
    .next {
      cursor: pointer;
      display: flex;
      font-size: 36px;
      border-radius: 2px;
      text-align: right;
      &:hover {
        background: var(--color-gray-lightest);
      }
      &:active {
        background: var(--color-gray-lighter);
      }

      &[disabled] {
        pointer-events: none;
        .FishtankIcon {
          opacity: 0.5;
        }
      }

      &.double :first-child {
        margin-right: -18px;
      }

      .FishtankIcon {
        width: 24px;
      }
    }
  }

  .cells {
    padding-left: 2px;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid var(--color-gray-lighter);
    background: var(--color-background);
    border-radius: 2px;
    align-items: center;
  }

  .cell {
    font-size: var(--fontsize-base-sm);
    font-weight: var(--fontweight-semi);
    color: var(--color-gray);
    display: inline-flex;
    flex-direction: column;
    margin: 2px;
    width: calc(100% / 7.7);
    height: 35px;
    line-height: 35px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    border-radius: 2px;
    background: var(--color-background);
    &[disabled] {
      color: var(--color-white);
      fill: var(--color-disabled);
      cursor: default;
    }
  }
  .cell:not(.blank):not([disabled]).day,
  .cell:not(.blank):not([disabled]).month,
  .cell:not(.blank):not([disabled]).year {
    cursor: pointer;
  }
  .cell.day.today {
    border: 1px solid var(--color-gray);
  }
  .cell:not(.blank):not([disabled]).day:hover,
  .cell:not(.blank):not([disabled]).month:hover,
  .cell:not(.blank):not([disabled]).year:hover {
    background-color: var(--color-selected);
    color: var(--color-gray-lightest);
  }
  .cell.selected {
    background-color: var(--color-selected);
    color: var(--color-gray-lightest);
  }
  .cell.selected:hover {
    background-color: var(--color-selected);
    color: var(--color-gray-lightest);
  }
  .cell.selected.highlighted,
  .cell.highlighted.highlight-end,
  .cell.highlighted.highlight-start {
    color: var(--color-gray-lightest);
    background-color: var(--color-selected);
  }
  .cell.highlighted {
    background: var(--color-selected-lightest);
  }
  .cell.highlighted[disabled] {
    color: var(--color-disabled);
  }
  .cell.grey {
    color: var(--color-gray);
  }
  .cell.grey:hover {
    background: inherit;
  }
  .cell.day-header {
    //font-size: 75%;
    color: var(--color-gray-dark);
    white-space: nowrap;
    cursor: inherit;
  }
  .cell.day-header:hover {
    background: inherit;
  }
  .select-today {
    cursor: pointer;
    color: var(--color-link);
    font-size: var(--fontsize-base-md);
    font-weight: var(--fontweight-semi);
    margin-left: 88%;
    &:hover {
      opacity: 0.9;
    }
    &:active {
      color: (--color-link-visited);
    }
  }
}
</style>
