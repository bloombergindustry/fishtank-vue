<template>
  <div class="PickerYear" :inline="inline" @mousedown.prevent>
    <header>
      <span class="prev" :disabled="isPreviousDecadeDisabled" @click="_previousDecade">
        <FishtankIcon color="white" name="chevron-left_24" width="24" height="24" />
      </span>
      <span class="current-decade">{{getPageDecade}}</span>
      <span class="next" :disabled="isNextDecadeDisabled" @click="_nextDecade">
        <FishtankIcon color="white" name="chevron-right_24" width="24" height="24" />
      </span>
    </header>

    <span v-for="(year, index) in years"
      :class="{'cell year': true, 'selected': year.isSelected}"
      :disabled="year.isDisabled"
      :key="index"
      @click.stop="_selectYear(year)">{{year.label}}</span>
  </div>
</template>
<script>
import FishtankIcon from 'components/fishtank/FishtankIcon.vue'
import en from '../locale/translations/en'
import { makeDateUtils } from '../utils/DateUtils'

/**
 * A date selector calendar that displays years in a given decade
 */
export default {
  name: 'PickerYear',
  components: { FishtankIcon },
  props: {
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
  computed: {
    /**
     * @return {String}
     */
    getPageDecade () {
      const decadeStart = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10
      const decadeEnd = decadeStart + 9
      const yearSuffix = this.translation.yearSuffix
      return `${decadeStart} - ${decadeEnd}${yearSuffix}`
    },

    /**
     * Is the previous decade disabled?
     * @return {Boolean}
     */
    isPreviousDecadeDisabled () {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false
      }
      const disabledYear = this.utils.getFullYear(this.disabledDates.to)
      const lastYearInPreviousPage = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10 - 1
      return disabledYear > lastYearInPreviousPage
    },

    /**
     * Is the next decade disabled?
     * @return {Boolean}
     */
    isNextDecadeDisabled () {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false
      }
      const disabledYear = this.utils.getFullYear(this.disabledDates.from)
      const firstYearInNextPage = Math.ceil(this.utils.getFullYear(this.pageDate) / 10) * 10
      return disabledYear < firstYearInNextPage
    },

    /**
     * Generates year cells
     * @return {Object[]}
     */
    years () {
      const d = this.pageDate
      let years = []
      // set up a new date object to the beginning of the current 'page'7
      let dObj = this.utc
        ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate()))
        : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes())
      for (let i = 0; i < 10; i++) {
        years.push({
          label: this.utils.getFullYear(dObj),
          timestamp: dObj.getTime(),
          isSelected: this._isSelectedYear(dObj),
          isDisabled: this._isDisabledYear(dObj)
        })
        this.utils.setFullYear(dObj, this.utils.getFullYear(dObj) + 1)
      }
      return years
    }
  },
  data () {
    return {
      pageDate: this.initialPageDate || this.value || new Date(),
      utils: makeDateUtils(this.utc)
    }
  },
  methods: {
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
     * Decrements the decade
     */
    _previousDecade () {
      if (this.isPreviousDecadeDisabled) {
        return false
      }
      this._changeYear(-10)
    },

    /**
     * Increments the decade
     */
    _nextDecade () {
      if (this.isNextDecadeDisabled) {
        return false
      }
      this._changeYear(10)
    },

    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {Boolean}
     */
    _isDisabledYear (date) {
      let disabledDates = false
      if (typeof this.disabledDates === 'undefined' || !this.disabledDates) {
        return false
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true
        }
      }
      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true
      }

      return disabledDates
    },

    /**
     * Whether the selected date is in this year
     * @param {Date}
     * @return {Boolean}
     */
    _isSelectedYear (date) {
      return this.value && this.utils.getFullYear(this.value) === this.utils.getFullYear(date)
    },

    /**
     * Sets current year
     * @param {Date} year
     */
    _selectYear (year) {
      if (year.isDisabled) {
        return false
      }
      this.$emit('selectYear', year)
    }
  }
}
</script>

<style lang="scss" scoped>
.PickerYear {
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

    .current-decade {
      color: white;
      flex-grow: 1;
      text-align: center;
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
  .cell:not(.blank):not([disabled]).year { cursor: pointer; }
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
