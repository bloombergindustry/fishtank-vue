<template>
  <div>
    <br>
    <h1>FishTankCards V1</h1>
    <br>

    <Card>
      I am a plain card
    </Card>

    <Card 
      heading="I am a card heading"
    >
      I am card content
    </Card>

    <Card>
      <div
        slot="heading"
        slot-scope="{ headerClass }"
        :class="headerClass"
        class="custom-heading"
      >
        Heading with custom background
      </div>
      I am card content
    </Card>

    <Card 
      branded="card-sample-brand-class"
    >
      I am a branded card
    </Card>

    <br>
    <h1>FishTankCards V2</h1>
    <br>

    <CardV2>
      I am a plain card
    </CardV2>

    <CardV2
      :branded="brandedColor"
    >
      I am a branded plain card
    </CardV2>

    <CardV2 
      heading="I am a card heading"
    >
      I am card content
    </CardV2>

    <CardV2
      heading="I am a custom card heading"
    >
      I am card content
    </CardV2>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { 
  Card,
  CardV2 
} from '@/index'
import { mapClassName } from '@/util/style'

export default Vue.extend({
  components: {
    Card,
    CardV2
  },
  data: function(){
    return{
      brandedColor: "#3DA774"
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

