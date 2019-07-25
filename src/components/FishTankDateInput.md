FishTankDateInput Example
```js
<template>
  <div>
    <FishTankDateInput v-model="value1" @toggleCalendar="events.push('toggleCalendar')"/>
    <div>{{value}}</div>
    <div v-for="(e, index) in events" :key="index">{{e}}</div>
    <hr />
    <FishTankDateInput v-model="value2" hide-clear hide-calendar-toggle />
  </div>
</template>

<script>

export default {
  components: {FishTankDateInput},
  data () {
    return {
      events: [],
      value1: null,
      value2: new Date()
    }
  }
}
</script>
```
