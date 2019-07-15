FishTankDateSelector Example
```js
<template>
  <div>
    <FishTankDateSelector v-model="value1" />
    {{value1}}
    <hr />
    <FishTankDateSelector v-model="value2" />
    {{value2}}
    <hr />
    <FishTankDateSelector v-model="value3" orientation="ttb" />
    {{value3}}
    <hr />
    <FishTankDateSelector v-model="value4" />
    {{value4}}
  </div>
</template>

<script>

export default {
  components: {FishTankDateSelector},
  data () {
    return {
      value1: undefined,
      value2: {from: new Date(2019, 1, 1), to: new Date(2019, 1, 13), preset: 'no_date'},
      value3: {preset: 'last_7_days'},
      value4: {from: new Date(2019, 3, 25), preset: 'single_date'}
    }
  }
}
</script>
```
