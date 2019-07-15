DatePicker Example
```js
<template>
  <div>
    <DatePicker v-model="value1" inline />
    {{value1}}
    <hr />
    <DatePicker v-model="value2" open-on-focus />
    {{value2}}
  </div>
</template>

<script>

export default {
  components: {DatePicker},
  data () {
    return {
      value1: null,
      value2: new Date()
    }
  }
}
</script>
```
