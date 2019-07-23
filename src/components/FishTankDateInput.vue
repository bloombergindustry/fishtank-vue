<template>
  <div
    :class="['date-container', {'is-focused':isFocused}]"
    :hide-calendar-toggle="hideCalendarToggle"
    :hide-clear="hideClear"
    @keyup="_handleKeyup"
    @focus="isFocused=true"
    @blur="isFocused=false">
    <div class="flex">
      <calendar
        v-if="!hideCalendarToggle"
        tabindex="0"
        class="icon"
        role="button"
        @click.self="$emit('toggleCalendar')"
        @keyup.enter.native="$emit('toggleCalendar')"
        @focus="isFocused=true"
        @blur="isFocused=false"/>
      <div class="date-fields">
        <input
          ref="month"
          v-model="month"
          type="text"
          class="month"
          placeholder="MM"
          maxlength="2"
          @keyup="_handleKeyup"
          @focus="isFocused=true"
          @blur="isFocused=false">
        <div class="slash">/</div>
        <input
          ref="day"
          v-model="day"
          type="text"
          class="day"
          placeholder="DD"
          maxlength="2"
          @keyup="_handleKeyup"
          @focus="isFocused=true"
          @blur="isFocused=false">
        <div class="slash">/</div>
        <input
          ref="year"
          v-model="year"
          type="text"
          class="year"
          placeholder="YYYY"
          maxlength="4"
          @keyup="_handleKeyup"
          @focus="isFocused=true"
          @blur="isFocused=false">
      </div>
      <close
        v-if="!hideClear"
        tabindex="0"
        class="icon"
        role="button"
        @click="this.clearInput"
        @focus="isFocused=true"
        @blur="isFocused=false"/>
    </div>
  </div>
</template>
<script>
import { Calendar24, CloseSml24 } from "@fishtank/icons-vue"
import { makeFishTankDateUtils } from "../util/FishTankDateUtils"

/**
 * A date input field. Validates input according to specified format
 */
export default {
  components: {
    calendar: Calendar24,
    close: CloseSml24
  },
  model: {
    prop: "date",
    event: "change"
  },
  props: {
    format: {
      type: String,
      default: "MM/DD/YYYY"
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
  data() {
    return {
      month: "",
      day: "",
      year: "",
      isFocused: undefined
    }
  },
  computed: {
    fullDate() {
      return !!this.month && !!this.day && !!this.year
        ? `${this.month}/${this.day}/${this.year}`
        : undefined
    }
  },
  watch: {
    // Certainly a better way to do this, probably provide error state
    month(newVal) {
      let re = /[^0-9]/gi
      this.$set(this, "month", newVal.replace(re, ""))
      if (Number(this.month) > 12) {
        this.month = ""
      }

      if (
        this.$refs.month !== document.activeElement &&
        this.month.length === 1
      ) {
        this.month = "0" + this.month
      }
      if (this.$refs.day !== document.activeElement && this.day.length === 1) {
        this.day = "0" + this.day
      }
      if (this.month.length === 2 && this.day.length === 0) {
        this.$refs.day.focus()
      }
      
    },
    day(newVal) {
      let re = /[^0-9]/gi
      this.$set(this, "day", newVal.replace(re, ""))
      if (Number(this.day) > 31) {
        this.day = ""
      }

      if (
        this.$refs.month !== document.activeElement &&
        this.month.length === 1
      ) {
        this.month = "0" + this.month
      }
      if (this.$refs.day !== document.activeElement && this.day.length === 1) {
        this.day = "0" + this.day
      }
      if (
        this.day.length === 2 &&
        this.month.length === 2 &&
        this.year.length === 0
      ) {
        this.$refs.year.focus()
      }
    },
    year(newVal) {
      let re = /[^0-9]/gi
      this.$set(this, "year", newVal.replace(re, ""))

      if (
        this.$refs.month !== document.activeElement &&
        this.month.length === 1
      ) {
        this.month = "0" + this.month
      }
      if (this.$refs.day !== document.activeElement && this.day.length === 1) {
        this.day = "0" + this.day
      }
    },
    date(newVal) {
      this.getParentDate()
    }
  },
  created() {
    this.getParentDate()
  },
  updated() {
    if (
        this.month.length === 2 &&
        this.day.length === 2 &&
        this.year.length === 4 
      ) {
        // Code being re-used here, consolidate with a function
        if (this._dateStringIsValid(this.fullDate)) {
          this.$emit("change", new Date(this.fullDate))
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
      this.$emit("change", new Date(""))
    },
    _dateStringIsValid(str) {
      const ts = Date.parse(str)
      return !isNaN(ts) && this._formatDate(ts) === str
    },
    _formatDate(d) {
      return makeFishTankDateUtils(this.utc).formatDate(
        new Date(d),
        this.format
      )
    },
    _handleKeyup(e) {
      // Only change on Enter
      if (e.key !== "Enter") return
      // Correcting possible invalid date formats
      if (this.month.length === 1) {
        this.month = "0" + this.month
      }
      if (this.day.length === 1) {
        this.day = "0" + this.day
      }
      // Set the value if valid, clear otherwise
      if (this._dateStringIsValid(this.fullDate)) {
        this.$emit("change", new Date(this.fullDate))
      } else {
        this.formattedValue = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../../node_modules/@fishtank/colors/dist/css-variable-stylesheet-text";
@import "../../node_modules/@fishtank/type/dist/css-variable-stylesheet";
@import "../../node_modules/@fishtank/type/dist/index.custom-properties";
@import "../../node_modules/@fishtank/space/dist/index.custom-properties";
.FishTankDateInput {
  font-family: var(--font-primary);
  font-size: var(--fontsize-base-lg);
  font-weight: var(--fontweight-semi);
  position: relative;
  &[disabled],
  &[readonly] {
    pointer-events: none;
  }
  &[disabled] {
    opacity: 0.5;
  }
  &[hide-calendar-toggle] {
    input {
      padding-left: 4px;
    }
  }
  &[hide-clear] {
    input {
      padding-right: 4px;
    }
  }
}
.date-container {
  display: inline-block;
  justify-content: center;
  border: 1px solid var(--color-gray-light);
  border-radius: var(--border-radius, 2px);
  user-select: none;
  padding: 1px;
  &:focus-within,
  &.is-focused {
    border: 2px solid var(--color-notification-3);
    padding: 0px;
  }
}
.date-fields {
  display: inline-block;
  margin-left: 4px;
}

.flex {
  display: flex;
  padding: 4px;
}

input {
  display: inline-block;
  text-align: right;
  border-radius: var(--border-radius, 2px);
  height: 25px;
  padding: 0px 0px;
  border: none;
  &:focus {
    outline: 0;
  }
  &::selection {
    color: var(--color-black);
    background: var(--color-secondary-darker);
  }
  &::-webkit-input-placeholder {
    font-style: italic;
    text-align: left;
  }
  &:-moz-placeholder {
    font-style: italic;
    text-align: left;
  }
  &:-ms-input-placeholder {
    font-style: italic;
    text-align: left;
  }
}
.month {
  width: 25px;
}
.day {
  width: 20px;
}
.year {
  width: 33px;
}

.slash {
  display: inline-block;
  font-family: var(--font-primary);
  font-size: var(--fontsize-base-lg);
  width: 10px;
  text-align: center;
}
.icon {
  display: inline-block;
  align-self: center;
  outline: none;
  border-radius: var(--border-radius, 2px);
  &:active {
    background: var(--color-gray);
  }
  &:focus {
    background: var(--color-secondary-darker);
  }
}
</style>
