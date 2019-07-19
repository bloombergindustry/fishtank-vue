<template>
  <div class="date-container">
    <input type = "hidden" 
        @keyup="_handleKeyup"
        :hide-calendar-toggle="hideCalendarToggle"
        :hide-clear="hideClear"> 
      <calendar v-if="!hideCalendarToggle" 
                tabindex = "0" 
                class="icon" 
                v-on:click.self="$emit('toggleCalendar')" 
                v-on:keyup.enter.native="$emit('toggleCalendar')" />
      <input ref = "month" 
            type="text" 
            class="month" 
            v-model = "month" 
            placeholder="MM" 
            maxlength = "2"
            @keyup="_handleKeyup"/>
      <span class="slash"> / </span>
      <input ref = "day" 
            type="text" 
            class="day" 
            v-model = "day" 
            placeholder="DD" 
            maxlength = "2"
            @keyup="_handleKeyup"/>
      <span class="slash"> / </span>
      <input ref = "year" 
            type="text" 
            class="year" 
            v-model = "year" 
            placeholder="YYYY" 
            maxlength = "4"
          @keyup="_handleKeyup"/>
      <close v-if="!hideClear" 
            tabindex = "0" 
            class="icon" 
            @click="this.clearInput" />
  </div>
</template>
<script>
import{ 
  Calendar24,
  CloseSml24
} from '@fishtank/icons-vue'
import { makeFishTankDateUtils } from '../util/FishTankDateUtils'

/**
 * A date input field. Validates input according to specified format
 */
export default {
  components: { 
    calendar : Calendar24,
    close : CloseSml24
  },
  model: {
    prop: 'date',
    event: 'change',
  },
  props: {
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
     * Current Date
     */
    date: Date

  },
  data () {
    return {
      month: "",
      day: "",
      year: "",
    }
  },
  computed: {
    fullDate() {
      return (!!this.month && !!this.day && !!this.year) ? `${this.month}/${this.day}/${this.year}` : undefined
    }
  },
  watch: {
    month(newVal) {
      let re = /[^0-9]/gi;
      this.$set(this, 'month', newVal.replace(re, ''));
    },
    day(newVal) {
      let re = /[^0-9]/gi;
      this.$set(this, 'day', newVal.replace(re, ''));
    },
    year(newVal) {
      let re = /[^0-9]/gi;
      this.$set(this, 'year', newVal.replace(re, ''));
    },
    date(newVal) {
      this.getParentDate()
    }
  },
  created() {
    this.getParentDate()
  }, 
  updated() {
    if(this.month.length === 2 && this.day.length === 0) {
      this.$refs.day.focus()
    }
    if(this.$refs.month !== document.activeElement && this.month.length === 1) {
      this.month = "0" + this.month
    }

    if(this.day.length === 2 && this.year.length === 0) {
      this.$refs.year.focus()
    }
    if(this.$refs.day !== document.activeElement && this.day.length === 1) {
      this.day = "0" + this.day
    }

    if(this.month.length === 2 && this.day.length === 2 && this.year.length === 4) {
      // Code being re-used here, consolidate with a function
      if (this._dateStringIsValid(this.fullDate)) {
        this.$emit('change', new Date(this.fullDate))
      } else {
        this.formattedValue = null
      }
    }
  },
  methods: {
    getParentDate() {
      let dateArr = this._formatDate(this.date).split("/")
      this.month = dateArr[0]
      this.day = dateArr[1]
      this.year = dateArr[2]
    },
    clearInput() {
      // unsafe mutation?
      this.month = ""
      this.day = ""
      this.year = ""
      //What should we do when the input is cleared ?  -- Need feedback here
      this.$emit('change', new Date(""))
    },
    _dateStringIsValid (str) {
       const ts = Date.parse(str)
       return !isNaN(ts) && this._formatDate(ts) === str
    },
    _formatDate (d) {
      return makeFishTankDateUtils(this.utc).formatDate(new Date(d), this.format)
    },
    _handleKeyup (e) { 
      // Only change on Enter
      if (e.key !== 'Enter') return
      console.log("Enter Press Detected")
      // Correcting possible invalid date formats
      if(this.month.length === 1) {
        this.month = "0" + this.month
      }
      if(this.day.length === 1) {
        this.day = "0" + this.day
      }
      // Set the value if valid, clear otherwise
      console.log(this.fullDate)
      if (this._dateStringIsValid(this.fullDate)) {
        console.log(new Date(this.fullDate))
        this.$emit('change', new Date(this.fullDate))
      } else {
        this.formattedValue = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.FishTankDateInput {
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
}
.date-container {
  //width:175px;
  display:inline-block;
  border: 1px solid var(--border-color, #C5CACD);
  border-radius: var(--border-radius, 2px);
  user-select: none;     
}
input {
  display: inline-block;
  border: 1px solid var(--border-color, #C5CACD);
  border-radius: var(--border-radius, 2px);
  font-size: 14px;
  height: 34px;
  padding:5px 5px;
  border: none;
  &::-webkit-input-placeholder { font-size: 14px; }
  &:-moz-placeholder { font-size: 14px; }
  &::-moz-placeholder { font-size: 14px; }
  &:-ms-input-placeholder { font-size: 14px; }
  &:focus { outline: none; }
}
.month {
  padding-left:0px;
  padding-right:0px;
  width:25px;
}
.day {
  padding-left:0px;
  padding-right:0px;
  width:25px
}
.year {
  padding-left:0px;
  padding-right:0px;
  width:40px;
}
.slash {
   font-family: var(--font-family, 'Open Sans', arial, sans-serif);
   font-size: 14px;
}
.icon {
  padding:5px 5px;
}
</style>
