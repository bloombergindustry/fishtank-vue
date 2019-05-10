<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Card } from '@/index'
import { mapClassName } from '@/util/style'

export default Vue.extend({
  components: {
    Card
  },
  data(){
    return{
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

