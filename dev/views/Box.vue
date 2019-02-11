<template>
  <section>
    <fish-tank-box display="flex" justify-content="between">
      <fish-tank-box 
        color="highlight1" 
        padding="space4"
        :column="12">
          <fish-tank-text>
            Text in a FishTankBox component in a 12 column space
          </fish-tank-text>
          <br>
          <br>
      </fish-tank-box>
    </fish-tank-box>
    <fish-tank-box display="flex" justify-content="between">
      <fish-tank-box 
        color="action" 
        padding="space4"
        :column="8">
        <fish-tank-text>
          Text in a FishTankBox component in a 8 column space
        </fish-tank-text>
      </fish-tank-box>
      <fish-tank-box>
        <fish-tank-text>
          Text in another box justified in the remaining space, shared equally
        </fish-tank-text>
      </fish-tank-box>
      <fish-tank-box>
        <fish-tank-text color="error">
          Text in another box justified in the remaining space, shared equally
        </fish-tank-text>
      </fish-tank-box>
    </fish-tank-box>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { FishTankText } from "@/index"
import FishTankBox from "@/components/FishTankBox.vue"

export default Vue.extend({
  components: {
    FishTankText,
    FishTankBox
  },
  data () {
    return {
      textColor: 'black',
      textSize: 'baseLg',
      bold: false,
      semiBold: false,
      inline: false,
      italic: false,
      align: 'left',
      font:'primary',
      pageTemplate:`<fish-tank-box display="flex" justify-content="between">
    <fish-tank-box 
      color="action" 
      padding="space4"
      column="4">
      <fish-tank-text> Text in a box</fish-tank-text>
    </fish-tank-box>
    <fish-tank-box>
      <fish-tank-text> Text in another box</fish-tank-text>
    </fish-tank-box>
    <fish-tank-box>
      <fish-tank-text color="error"> Text in another box</fish-tank-text>
    </fish-tank-box>`
    }
  }
})
</script>
<style scoped>
  .text-wrapper {
    width: 500px;
    border: 1px solid lightgray;
    padding: .5rem;
  }
</style>


