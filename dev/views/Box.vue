<template>
  <section>
    <fish-tank-text bold>
      Boxed used in laying out a component
    </fish-tank-text>
    <box color="highlight3">
      <box
        :margin-top="12"
        :xl-margin-bottom="12"
        :lg-margin-bottom="8"
        :md-margin-bottom="4"
        :sm-margin-bottom="8"
        :xs-margin-bottom="12">
        <fish-tank-text 
          font-size="base-lg" 
          bold>
          Margins on different screen sizes
        </fish-tank-text>
      </box>
    </box>

    <box 
      display="flex" 
      md-direction="row" 
      xs-direction="column">
      <box 
        color="highlight2" 
        :md-column="3" 
        :md-margin-right="1" 
        :xs-margin-bottom="2">
        <fish-tank-text bold>
          Sidear Component
        </fish-tank-text>
      </box>
      <box
        color="highlight1"
        :md-column="9"
        :md-margin-left="1"
        :xs-margin-bottom="2"
        flex-grow>
        <fish-tank-text bold>
          Main Component
        </fish-tank-text>
        <fish-tank-text>
          Main Component Content
        </fish-tank-text>
      </box>
    </box>

    <box display="flex">
      <box 
        display="flex"
        width="100%">
        <box flex="grow">
          Footer Module Content
        </box>
        <box flex="grow">
          Aligned to bottom of container
        </box>
      </box>
    </box>
    <hr>
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
    
    <box
      :padding-x="4">
      <box 
        mobile-list-item
        chevron="right"
        chevron-position="top">
        <fish-tank-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </fish-tank-text>
      </box>
      <box 
        mobile-list-item
        chevron="right"
        chevron-position="bottom"
        :padding="4">
        <fish-tank-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </fish-tank-text>
      </box>

      <box 
        as="a"
        display="flex"
        mobile-list-item
        chevron="left"
        chevron-position="middle"
        :padding="4">
        <fish-tank-text>
          This is a list element for a mobile app. This is a list element for a mobile app
        </fish-tank-text>
      </box>

      <box 
        mobile-list-item
        chevron="right"
        chevron-position="top"
        :padding="0">
        <heading bold uppercase color="gray">General</heading>
        <fish-tank-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </fish-tank-text>
      </box>
    </box>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { FishTankText, FishTankHeading } from "@/index"
import FishTankBox from "@/components/FishTankBox.vue"

export default Vue.extend({
  components: {
    FishTankText,
    heading: FishTankHeading,
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
      font: 'primary',
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

