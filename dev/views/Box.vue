<template>
  <section>
    <fish-tank-text bold>
      Boxed used in laying out a component
    </fish-tank-text>
    <box 
      color="highlight2"
      :sm-margin="6"
      :md-margin="2"
      :lg-margin="4"
      :xl-margin="10">
      <div>
        <fish-tank-text bold>
          Custom Component
        </fish-tank-text>
        <fish-tank-text>
          More content here
        </fish-tank-text>
      </div>

      <box display="flex"
           width="100%">
        <box flex="grow">
          Footer Module Content
        </box>
        <box flex="grow">
          Aligned to bottom of container
        </box>
      </box>
    </box>
    <hr/>
    <fish-tank-text bold>
      Box Flexbox Layout model
    </fish-tank-text>
    <box
      tag="section"
      justify-content="between">
      <box
        color="highlight1"
        :padding-x="4"
        :margin-top="4"
        :xs-column="12"
        :md-column="6"
        :lg-column="3"
        wrap>
        <fish-tank-text>
          Text in a FishTankBox component in a 12 column space
        </fish-tank-text>
        <br>
        <br>
      </box>
    </box>
    <box
      tag="section"
      display="flex"
      justify-content="between">
      <box
        flex="grow"
        color="highlight1"
        :padding-x="4"
        :margin-top="4"
        :xs-column="12"
        :md-column="6"
        :lg-column="3"
        wrap>
        <fish-tank-text>
          Text in a FishTankBox component in a 12 column space with flex-grow property
        </fish-tank-text>
        <br>
        <br>
      </box>
    </box>
    <box
      display="flex"
      md-display="block"
      xl-display="flex"
      justify-content="between">
      <box
        color="action"
        :padding="4"
        :margin="2"
        :column="8">
        <fish-tank-text>
          Text in a FishTankBox component in a 8 column space with margin
        </fish-tank-text>
      </box>
      <box
        color="btaxOrange">
        <fish-tank-text>
          Text in another box justified in the remaining space, shared the remaining space, based on the size of the text content, with a background color
        </fish-tank-text>
      </box>
      <box>
        <fish-tank-text color="error">
          Text in another box justified in the remaining space, shared equally, with a text component with red text.
        </fish-tank-text>
      </box>
    </box>

    <box
      display="flex"
      xs-direction="column"
      md-direction="row"
      xl-direction="column"
      justify-content="between">
      <box
        color="action"
        :padding="4"
        :margin="2"
        :column="4">
        <fish-tank-text>
          Column 1
        </fish-tank-text>
      </box>
      <box
        color="btaxOrange"
        :column="4">
        <fish-tank-text>
          Column 2
        </fish-tank-text>
      </box>
      <box
        :column="4">
        <fish-tank-text 
          color="error">
          Column 3
        </fish-tank-text>
      </box>
    </box>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { FishTankText } from "@/index"
import FishTankBox from "@/components/FishTankBox.vue"

export default Vue.extend({
  components: {
    FishTankText,
    box:FishTankBox
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

