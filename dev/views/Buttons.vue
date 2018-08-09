<template>
  <div>
    <div><ButtonPrimary>Button Primary</ButtonPrimary></div>
    <br>
    <div><ButtonSecondary>Button Secondary</ButtonSecondary></div>
    <br>
    <div><ButtonDestructive>Button Destructive</ButtonDestructive></div>
    <br>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ButtonPrimary,ButtonSecondary,ButtonDestructive } from '@/index'

export default Vue.extend({
  components: {
    ButtonPrimary,
    ButtonSecondary,
    ButtonDestructive
  }
})
</script>

