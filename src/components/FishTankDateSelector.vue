<template>
  <div class="FishTankDateSelector" :orientation="orientation">
    <!-- Preset type -->
    <Dropdown
      v-model="value.preset"
      :items="rangeTypeOptions"
      :label="label"
      :orientation="orientation"
      @change="_handlePresetChange"
    />

    <div v-if="value.preset == 'single_date' || value.preset == 'date_range'" class="inputs">
      <!-- From/single date -->
      <FishTankDatePicker
        class="from-date"
        float-highlight-start
        hide-clear
        open-on-focus
        ref='from'
        :disabled-dates="{ from: value.to }"
        :highlighted="{ from: value.from, to: value.to }"
        :value="value.from"
        @change="_handleFromChange"
      />

      <!-- To date -->
      <FishTankDatePicker
        v-if="value.preset == 'date_range'"
        class="to-date"
        float-highlight-end
        hide-calendar-toggle
        hide-clear
        open-on-focus
        ref='to'
        :disabled-dates="{ to: value.from }"
        :highlighted="{ from: value.from, to: value.to }"
        :value="value.to"
        @change="$emit('change', { from: value.from, to: $event, preset: value.preset })"
      />
    </div>
  </div>
</template>

<script>
import FishTankDatePicker from './FishTankDatePicker'
//import Dropdown from '../../Dropdown'
import FishTankSelect from './FishTankSelect.vue'

/**
 * A date selector with options for preset intervals or custom single date or date range
 */
export default {
  name: 'FishTankDateSelector',
  components: { FishTankDatePicker, Dropdown:FishTankSelect },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    /**
     * Input label
     */
    label: {
      type: String,
      default: 'Date'
    },

    /**
     * Component orientation
     */
    orientation: {
      type: String,
      default: 'ltr'
    },

    /**
     * Range type options
     */
    rangeTypeOptions: {
      type: Array,
      default: () => [
        { label: 'Any', value: 'no_date' },
        { label: 'Single date', value: 'single_date' },
        { label: 'Date range', value: 'date_range' },
        { label: 'Last 7 days', value: 'last_7_days' },
        { label: 'Last 30 days', value: 'last_30_days' },
        { label: 'Last 12 months', value: 'last_12_months' },
        { label: 'Last 5 years', value: 'last_5_years' }
      ]
    },

    /**
     * Current value
     * @param {Object} value - Value hash
     * @param {String} preset - Preset string (no_date, single_date, etc)
     * @param {Date} [value.from] - From date
     * @param {Date} [value.to] - To date
     */
    value: {
      type: Object,
      default: () => {
        return { from: null, to: null, preset: 'no_date' }
      }
    }
  },
  methods: {
    _handleFromChange (date) {
      this.$emit('change', { from: date, to: this.value.to, preset: this.value.preset })

      // Focus on 'to' picker if preset is date_range
      if (this.value.preset === 'date_range') {
        // Have to delay to avoid race with click-away behavior
        // NOTE: Do not use this pattern unless absolutely needed
        setTimeout(() => this.$refs.to.focus(), 5)
      }
    },
    _handlePresetChange (preset) {
      this.$emit('change', { from: null, to: null, preset: preset })

      // Focus on 'from' picker if selecting preset that requires picker
      if (this.value.preset === 'date_range' || this.value.preset === 'single_date') {
        // Have to delay to avoid race with click-away behavior
        // NOTE: Do not use this pattern unless absolutely needed
        setTimeout(() => this.$refs.from.focus(), 5)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../styles/mixins';
  @import '../../node_modules/@fishtank/colors/dist/css-variable-stylesheet-text';
  @import '../../node_modules/@fishtank/type/dist/css-variable-stylesheet';
  @import "../../node_modules/@fishtank/type/dist/index.custom-properties";
  @import "../../node_modules/@fishtank/space/dist/index.custom-properties";
  .FishTankDateSelector {
    display: flex;
    font-family: $font-primary;

    &[orientation="ttb"] {
      flex-direction: column;

      .Dropdown {
        --selector-width: 218px;
        margin-bottom: 10px;
      }

      .inputs {
        margin-bottom: 10px;
        .from-date { padding-left: 0; }
      }
    }

    .Dropdown {
      --background-color: #F0F3F7;
      --primary-color: #505558;
      --selector-width: 150px;
    }

    .inputs {
      display: flex;

      .FishTankDatePicker {
        padding-left: 10px;
        --font-family: $font-primary;
        --primary-color: #505558;

        &.to-date {
          position: relative;

          & /deep/ input {
            border-left: none;
            margin-left: -11px;
          }

          &:after {
            content: '-';
            display: block;
            left: -6px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
</style>
