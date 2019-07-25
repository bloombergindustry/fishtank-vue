FishTankDatePicker Example
```js
<template>
  <div>
    <FishTankDatePicker v-model="value1" inline />
    {{value1}}
    <hr />
    <FishTankDatePicker v-model="value2" open-on-focus />
    {{value2}}
  </div>
</template>

<script>

export default {
  components: {FishTankDatePicker},
  data () {
    return {
      value1: null,
      value2: new Date()
    }
  }
}
</script>
```
