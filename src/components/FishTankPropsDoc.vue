<template>
  <div>
    <template v-for="(propObj, key, index) in properties">
      <div 
        v-if="propObj.description !== undefined" 
        :key="`p+${index}`"> 
        <h1>{{ key }}</h1>
        <template v-for="(prop, key, index) in propObj"> 
          <template v-if="key === 'type'">
            <div :key="`q+${index}`">{{ key }}: {{ prop.name }}</div>
          </template>
          <template v-else> 
            <div :key="`q+${index}`">{{ key }}: {{ prop }}</div>
          </template>
        </template>
      </div>
    </template>
  </div>  
</template>

<script lang="ts">
import Vue from 'vue'
import a11y from '@/util/a11y'
export default Vue.extend({
  props:{
    properties:{
      type: Object,
      reqwuired:true,
      default: ()=>{}
    }
  }
})
</script>