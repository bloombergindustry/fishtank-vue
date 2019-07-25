FishTankPickerDay Example
```js
<template>
  <div>
    <div>Hovered Example</div>
    <div style="position: relative">
      <FishTankPickerDay v-model="value1" v-show="!hide1" :disabled-dates="disabledDates" @change="hide1=true" />
      <button @click="hide1=!hide1">toggle</button>
      <div>{{value1}}</div>
    </div>
    <hr />

    <div>Inline Example</div>
    <FishTankPickerDay v-model="value2" float-highlight-end inline :highlighted="highlighted" @showMonthCalendar="events.push('showMonthCalendar')" />
    <div>{{value2}}</div>
    <hr />
    <div>events:</div>
    <div v-for="(e, index) in events">{{e}}</div>
  </div>
</template>

<script>

export default {
  components: {FishTankPickerDay},
  data () {
    return {
      disabledDates: {
        to: new Date(2019, 3, 14)
      },
      events: [],
      hide1: true,
      highlighted: {
        from: new Date(2019, 3, 5),
        to: new Date(2019, 3, 14)
      },
      value1: new Date(2019, 3, 18),
      value2: new Date(2019, 3, 14)
    }
  }
}
</script>
```
