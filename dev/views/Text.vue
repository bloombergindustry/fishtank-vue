<template>
  <div>
    <div class="text-wrapper">
      <fish-tank-text
        :color="textColor"
        :size="textSize"
        :bold="bold"
        :semi-bold="semiBold"
        :inline="inline"
        :italic="italic"
        :align="align"
        :font="font"
      >
        Demo Text
      </fish-tank-text>
    </div>

    <div>
      <label>
        <div>
          <br>
          <fish-tank-text 
            bold
            italic >Font</fish-tank-text>
          <select v-model="font">
            <option value="primary">primary</option>
            <option value="accent">accent</option>
          </select>
        </div>
        
        <div>
          <br>
          <fish-tank-text 
            bold
            italic >Colors</fish-tank-text>
          <select v-model="textColor">
            <option 
              v-for="(color, index) in options.colors" 
              :value="color" 
              :key="index">{{ color }}</option>
          </select>
        </div>
      </label>

      <div>
        <br>
        <fish-tank-text 
          bold
          italic >Font Size</fish-tank-text>
        <select v-model="textSize">
          <option value="headingLg">headingLg</option>
          <option value="headingMd">headingMd</option>
          <option value="headingSm">headingSm</option>
          <option value="baseLg">baseLg</option>
          <option value="baseMd">baseMd</option>
          <option value="baseSm">baseSm</option>
        </select>
      </div>

      <div>
        <br>
        <fish-tank-text
          bold
          italic>Align</fish-tank-text>
        <select v-model="align">
          <option value="left">left</option>
          <option value="right">right</option>
          <option value="center">center</option>
          <option value="justify">justify</option>
        </select>
      </div>

      <div>
        <br>
        <fish-tank-checkbox 
          v-model="bold" 
          label="Bold"/>
        <fish-tank-checkbox 
          v-model="semiBold" 
          label="SemiBold"/>
        <fish-tank-checkbox 
          v-model="inline" 
          label="Inline"/>
        <fish-tank-checkbox 
          v-model="italic" 
          label="Italic"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { FishTankText, FishTankCheckbox} from "@/index"
import {
    returnFtColors
  } from '../../src/util/style'
const fontSizes = ['headingLg', 'headingMd', 'headingSm', 'baseLg', 'baseMd', 'baseSm']
const align = ['left', 'right', 'center', 'justify']
const colors = returnFtColors

export default Vue.extend({
  components: {
    FishTankText,
    FishTankCheckbox
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
      options: {
        colors
      }
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


