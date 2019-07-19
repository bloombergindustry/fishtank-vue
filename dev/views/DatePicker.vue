<template>
  <section>
    <h1>Date Picker Component Examples</h1>
    <br />
    <h2>Fish Tank Date Input</h2>
    <div>
      <FishTankDateInput v-model="value" @toggleCalendar="events.push('toggleCalendar')"/>
      <div>{{value}}</div>
      <div v-for="(e, index) in events" :key="index">{{e}}</div>
      <hr />
      <FishTankDateInput v-model="value2" hide-clear hide-calendar-toggle />
    </div>
    <br />
    <br />
    <h2>Fish Tank Date Picker</h2>
    <div>
      <FishTankDatePicker v-model="value3" inline />
      {{value3}}
      <hr />
      <FishTankDatePicker v-model="value4" open-on-focus />
      {{value4}}
    </div>
    <br />
    <br />
    <h2>Fish Tank Date Selector</h2>
    <div>
      <FishTankDateSelector v-model="value5"/>
      {{value5}}
      <hr />
      <FishTankDateSelector v-model="value6" />
      {{value6}}
      <hr />
      <FishTankDateSelector v-model="value7" orientation="ttb" />
      {{value7}}
      <hr />
      <FishTankDateSelector v-model="value8" />
      {{value8}}
    </div>
    <br />
    <br />
    <h2>Fish Tank Picker Day</h2>
    <div>Hovered Example</div>
    <div style="position: relative">
      <FishTankPickerDay
        v-model="value9"
        v-show="!hide1"
        :disabled-dates="disabledDates"
        @change="hide1=true"
      />
      <button @click="hide1=!hide1">toggle</button>
      <div>{{value9}}</div>
    </div>
    <hr />
    <div>Inline Example</div>
    <FishTankPickerDay
      v-model="value10"
      float-highlight-end
      inline
      :highlighted="highlighted"
      @showMonthCalendar="events2.push('showMonthCalendar')"
    />
    <div>{{value10}}</div>
    <hr />
    <div>events:</div>
    <div v-for="(e, index) in events2" :key="index">{{e}}</div>
    <br />
    <br />
    <h2>Fish Tank Picker Month</h2>
    <div>Hovered Example</div>
    <div style="position: relative">
      <FishTankPickerMonth
        v-model="value11"
        v-show="!hide2"
        @selectMonth="selectMonth"
        @showYearCalendar="events3.push('showYearCalendar')"
      />
      <button @click="hide2=!hide2">toggle</button>
      <div>{{value11}}</div>
    </div>
    <hr />
    <div>Inline Example</div>
    <FishTankPickerMonth
      v-model="value12"
      inline
      disable-year
      :disabled-dates="disabledDates2"
      @selectMonth="selectMonth"
    />
    <div>{{value12}}</div>
    <hr />
    <div>events:</div>
    <div v-for="(e, index) in events3" :key="index">{{e}}</div>
    <br />
    <br />
    <h2>Fish Tank Picker Year</h2>
    <div>Hovered Example</div>
    <div style="position: relative">
      <FishTankPickerYear :value="value13" v-show="!hide3" @selectYear="selectYear" />
      <button @click="hide3=!hide3">toggle</button>
      <div>{{value13}}</div>
    </div>
    <hr />
    <div>Inline Example</div>
    <FishTankPickerYear
      :value="value14"
      inline
      :disabled-dates="disabled"
      @selectYear="selectYear"
    />
    <div>{{value14}}</div>
    <hr />
    <div>events:</div>
    <div v-for="(e, index) in events4" :key="index">{{e}}</div>
    <br />
    <br />
  </section>
</template>

<script>
import {
  FishTankDateInput,
  FishTankDatePicker,
  FishTankDateSelector,
  FishTankPickerDay,
  FishTankPickerMonth,
  FishTankPickerYear
} from "@/index";
export default {
  components: {
    FishTankDateInput,
    FishTankDatePicker,
    FishTankDateSelector,
    FishTankPickerDay,
    FishTankPickerMonth,
    FishTankPickerYear
  },
  data() {
    return {
      events: [],
      value: undefined,
      value1: undefined,
      value2: null,
      value3: null,
      value4: new Date(),
      value5: undefined,
      value6: {
        from: new Date(2019, 1, 1),
        to: new Date(2019, 1, 13),
        preset: "no_date"
      },
      value7: { preset: "last_7_days" },
      value8: { from: new Date(2019, 3, 25), preset: "single_date" },
      disabledDates: {
        to: new Date(2019, 3, 14)
      },
      events2: [],
      hide1: true,
      highlighted: {
        from: new Date(2019, 3, 5),
        to: new Date(2019, 3, 14)
      },
      value9: new Date(2019, 3, 18),
      value10: new Date(2019, 3, 14),

      disabledDates2: {
        from: new Date(2020, 5, 14),
        to: new Date(2018, 3, 14)
      },
      events3: [],
      hide2: true,
      value11: new Date(),
      value12: new Date(),

      disabled: {
        from: new Date(2022, 5, 14),
        to: new Date(2002, 3, 14)
      },
      events4: [],
      hide3: true,
      value13: new Date(),
      value14: new Date()
    };
  },
  methods: {
    clearDate(v) {
      v = null
    },
    selectMonth(month) {
      this.events3.push(`selectMonth-${month.label}`);
      this.hide2 = true;
    },
    selectYear(year) {
      this.events.push(`selectYear-${year.label}`);
      this.hide1 = true;
    }
  }
};
</script>

<style lang="scss" scoped>
  section {
    margin-left:30px;
  }
</style>

