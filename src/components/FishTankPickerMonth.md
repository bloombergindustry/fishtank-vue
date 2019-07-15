FishTankPickerMonth Example
```js
<template>
  <div>
    <div>Hovered Example</div>
    <div style="position: relative">
      <FishTankPickerMonth v-model="value1" v-show="!hide1" @selectMonth="selectMonth" @showYearCalendar="events.push('showYearCalendar')" />
      <button @click="hide1=!hide1">toggle</button>
      <div>{{value1}}</div>
    </div>
    <hr />
    <div>Inline Example</div>
    <FishTankPickerMonth v-model="value2" inline disable-year :disabled-dates="disabledDates" @selectMonth="selectMonth" />
    <div>{{value2}}</div>
    <hr />
    <div>events:</div>
    <div v-for="(e, index) in events">{{e}}</div>
  </div>
</template>

<script>

export default {
  components: {FishTankPickerMonth},
  data () {
    return {
      disabledDates: {
        from: new Date(2020, 5, 14),
        to: new Date(2018, 3, 14)
      },
      events: [],
      hide1: true,
      value1: new Date(),
      value2: new Date()
    }
  },
  methods: {
    selectMonth(month) {
      this.events.push(`selectMonth-${month.label}`)
      this.hide1 = true
    }
  }
}
</script>
```
