<template>
  <div>
    <br>
    <h1>FishTankCards V1</h1>
    <br>

    <card>
      I am a plain card
    </card>

    <card 
      heading="I am a card heading">
      I am card content
    </card>

    <card>
      <div
        slot="heading"
        slot-scope="{ headerClass }"
        :class="headerClass"
        class="custom-heading">
        Heading with custom background
      </div>
      I am card content
    </card>

    <card 
      branded="card-sample-brand-class">
      I am a branded card
    </card>

    <br>
    <h1>FishTankCards V2</h1>
    <em>Card content padding provided by FishTankBox component</em>
    <br>

    <card-v2>
      <box :padding="2">
        I am a plain card
      </box>
    </card-v2>

    <card-v2
      :branded="brandedColor">
      <box :padding="2">
        I am a branded plain card
      </box>
    </card-v2>

    <card-v2 
      heading="I am a card heading">
      <box :padding="2">
        I am card content
      </box>
    </card-v2>

    <card-v2
      heading="Heading with custom background"
      :customHeadingBg="brandedColor"
      :customHeadingText="brandedColorText">
      <box :padding="2">
        I am card content
      </box>
    </card-v2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { 
  Card,
  CardV2,
  FishTankBox 
} from '@/index'
import { mapClassName } from '@/util/style'

import{
  colorAction,
  colorWhite,
}from '@fishtank/colors/dist/index.common'

// const BgColor = require('@fishtank/colors/dist/index.common').colorAction

export default Vue.extend({
  components: {
    Card,
    CardV2,
    box: FishTankBox
  },
  data(){
    return{
      brandedColor: colorAction,
      brandedColorText: colorWhite
    }
  }
})
</script>

<style lang="scss" scoped>
.content {
  height: 100px;
  width: 200px;
}

.custom-heading {
  background-color: #0D3B91;
  border: none;
  color: #FFFFFF;
}
</style>

