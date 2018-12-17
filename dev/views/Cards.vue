<template>
  <div>
    <Card
      :card-container="plainContainer"
      :card-content="plainContent">
      I am a plain card
    </Card>

    <Card 
      heading="I am a card heading"
      :card-container="headingContainer"
      :card-heading="headingHeading"
      :card-content="headingContent">
      I am card content
    </Card>

    <Card
      :card-container="backgroundContainer"
      :card-heading="backgroundHeading"
      :card-content="backgroundContent">
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
      :card-brand="brandedBrand"
      :card-container="brandedContainer"
      :card-content="brandedContent">
      I am a branded card
    </Card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Card } from '@/index'
import { mapClassName } from '@/util/style';

export default Vue.extend({
  components: {
    Card
  },
  data: function(){
    return{
      // Text controlling individual card's aria-labels for screen readers

      //Plain card's Aria Labels
      plainContainer : "a plain card's container",
      plainContent: "a plain card's content",

      //Heading card's Aria Labels
      headingContainer: "a heading card's container",
      headingHeading: "a heading card's heading",
      headingContent: " a heading card's content",

      //Heading with Custom Background card's Aria Label
      backgroundContainer: "a heading w/ background card's container",
      backgroundHeading: "a heading w/ background card's heading",
      backgroundContent: "a heading w/ background card's content",

      //Branded card's Aria Label
      brandedBrand : "a branded card's brand",
      brandedContainer: "a branded card's container",
      brandedContent: "a branded card's content"
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

