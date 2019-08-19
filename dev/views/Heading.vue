<template>
  <div>
    <div class="text-wrapper">
      <fish-tank-heading
        :level="level.toString()"
        :color="textColor"
        :size="textSize"
        :align="align"
        :uppercase="uppercase"
        :font="font">
        Heading
      </fish-tank-heading>
    </div>

    <div>
      <label>
        <div>
          <br>
          <fish-tank-text
            bold
            italic>
            Level
          </fish-tank-text>
          <select v-model="level">
            <option 
              v-for="op in 6" 
              :key="op" 
              :value="op">
              {{ op }}
            </option>
          </select>
        </div>
        <div>
          <br>
          <fish-tank-text
            bold
            italic>
            Font
          </fish-tank-text>
          <select v-model="font">
            <option value="primary">
              primary
            </option>
            <option value="accent">
              accent
            </option>
          </select>
        </div>

        <div>
          <br>
          <fish-tank-text
            color="black"
            bold
            italic>
            Colors
          </fish-tank-text>
          <select v-model="textColor">
            <option
              v-for="(color, index) in options.colors"
              :key="index"
              :value="color">
              {{ color }}
            </option>
          </select>
        </div>
      </label>

      <div>
        <br>
        <fish-tank-text
          bold
          italic>
          Font Size
        </fish-tank-text>
        <select v-model="textSize">
          <option value="headingLg">
            headingLg
          </option>
          <option value="headingMd">
            headingMd
          </option>
          <option value="headingSm">
            headingSm
          </option>
          <option value="baseLg">
            baseLg
          </option>
          <option value="baseMd">
            baseMd
          </option>
          <option value="baseSm">
            baseSm
          </option>
        </select>
      </div>

      <div>
        <br>
        <fish-tank-text
          bold
          italic>
          Align
        </fish-tank-text>
        <select v-model="align">
          <option value="left">
            left
          </option>
          <option value="center">
            center
          </option>
        </select>
      </div>

      <div>
        <br>
        <fish-tank-checkbox
          v-model="bold"
          label="Bold" />
        <fish-tank-checkbox
          v-model="semiBold"
          label="SemiBold" />
        <fish-tank-checkbox
          v-model="uppercase"
          label="Uppercase" />
      </div>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { FishTankText, FishTankCheckbox, FishTankHeading} from "@/index"
import {
  fishtankToPropName
} from '../../src/util/mappers'
import * as heading from '@fishtank/colors/dist/heading.common.js'
import _ from 'lodash'

const fontSizes = ['headingLg', 'headingMd', 'headingSm', 'baseLg', 'baseMd', 'baseSm']
const align = ['left', 'right', 'center', 'justify']
const colors = _.keys(heading).map(fishtankToPropName)
export default Vue.extend({
  components: {
    FishTankText,
    FishTankCheckbox,
    FishTankHeading
  },
  data () {
    return {
      level:"1",
      textColor: 'black',
      textSize: 'baseLg',
      bold: false,
      semiBold: false,
      inline: false,
      italic: false,
      align: 'left',
      font:'primary',
      uppercase: false,
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


