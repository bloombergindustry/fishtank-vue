<template>
  <div>
    <br/>
    <fish-tank-text bold> Modals Version 1 </fish-tank-text>
    <br/>
    <div>
      <button-primary @click="modal1 = true">Open Standard Modal</button-primary>
      <button-primary @click="modal2 = true">Open Fixed Modal</button-primary>
      <button-primary @click="dialog = true">Open Dialog</button-primary>
    </div>
    <br/>
    <div>
      <button-primary @click="modal3 = true">Health Analytics Search</button-primary>
    </div>
    <br/>
    <fish-tank-text bold> Modals Version 2 </fish-tank-text>
    <br/>
    <div>
      <button-primary @click="modal4 = true">Health Analytics Search</button-primary>
    </div>
    <modal
      v-model="modal1"
      heading="Heading"
      escapeable>
      modal body content
      <div slot="footerRight">
        <button-primary>Action</button-primary>
      </div>
      <div slot="footerLeft">
        <button-primary>Search</button-primary>
      </div>
    </modal>

    <modal
      v-model="modal2"
      heading="Fixed Modal"
      class="my-custom-class"
      fixed>
      <Search24 slot="headingIcon" />
      <LoremIpsum/>
      <template slot="headingExtra">
        <ButtonFeatureLabel >
          <template slot="icon"> <Home24/> </template>
          <template slot="label"> Set as Home </template>
        </ButtonFeatureLabel>
      </template>
      <div slot="footerRight">
        <!-- <ButtonSecondary disabled>Close</ButtonSecondary> -->
        <ButtonPrimary >Search</ButtonPrimary>
      </div>
    </modal>

    <DialogBox
      v-model="dialog"
      width="250px"
      heading="Heading"
      escapeable
      dialog
    >
      message
    </DialogBox>

    <modal
      v-model="modal3"
      heading="Health Analytics Search"
      width="70%"
      fixed
    >
      <Search32 slot="headingIcon"/>

      <template slot="headingExtra">
        <ButtonFeatureLabel >
          <template slot="icon"> <Home24/> </template>
          <template slot="label"> Set as Home </template>
        </ButtonFeatureLabel>
        <ButtonFeatureLabel >
          <template slot="icon"> <Favorite24/> </template>
          <template slot="label"> Set as Favorite </template>
        </ButtonFeatureLabel>
      </template>

      <FishTankText> 
        <LoremIpsum/> 
      </FishTankText>

      <template slot="footerRight">
        <a href="#" class="clear_link"><FishTankText color="gray">Clear All</FishTankText></a>
        <button-primary>Action</button-primary>
      </template>

      <template slot="footerLeft">
        <ButtonFeatureLabel >
          <template slot="icon"> <AlertAdd24/> </template>
          <template slot="label"> Create Alert </template>
        </ButtonFeatureLabel>
        <ButtonFeatureLabel >
          <template slot="icon"> <Duplicate24/> </template>
          <template slot="label"> Add Search to Dashboard </template>
        </ButtonFeatureLabel>
      </template>
    </modal>

    <modal-v2
      v-model="modal4"
      width="80%"
      fixed
    > 
      <Search32 slot="headingIcon"/>

      <template slot="heading" > 
        <fish-tank-text
          color="grayDark"
          size="headingSm"
        >
        Health Analytics Search2 
        </fish-tank-text> 
      </template>

      <template slot="headingExtra">
        <ButtonFeatureLabel >
          <template slot="icon"> <Home24/> </template>
          <template slot="label"> Set as Home </template>
        </ButtonFeatureLabel>
        <ButtonFeatureLabel >
          <template slot="icon"> <Favorite24/> </template>
          <template slot="label"> Set as Favorite </template>
        </ButtonFeatureLabel>
      </template>

      <FishTankText> 
        <LoremIpsum/> 
      </FishTankText>

      <template slot="footerRight">
        <a href="#" class="clear_link"><FishTankText color="gray">Clear All</FishTankText></a>
        <button-primary>Action</button-primary>
      </template>

      <template slot="footerLeft" >
        <ButtonFeatureLabel >
          <template slot="icon"> <AlertAdd24/> </template>
          <template slot="label"> Create Alert </template>
        </ButtonFeatureLabel>
        <ButtonFeatureLabel >
          <template slot="icon"> <Duplicate24/> </template>
          <template slot="label"> Add Search to Dashboard </template>
        </ButtonFeatureLabel>
      </template>
    </modal-v2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { 
  Modal,
  ModalV2, 
  DialogBox, 
  ButtonPrimary, 
  ButtonSecondary, 
  ButtonFeatureLabel,
  FishTankText 
} from '@/index'

import LoremIpsum from '../LoremIpsum.vue'
import { 
  Search24, 
  Search32, 
  HomeO24 as Home24,
  Alert24,
  AlertAdd24,
  FavoriteO24 as Favorite24,
  Duplicate24
} from '@fishtank/icons-vue'

export default Vue.extend({
  components: {
    Modal,
    ModalV2,
    DialogBox,
    ButtonPrimary,
    ButtonFeatureLabel,
    FishTankText,
    LoremIpsum,
    Search24,
    Search32,
    Home24,
    AlertAdd24,
    Favorite24,
    Duplicate24
  },
  data() {
    return {
      modal1: false,
      modal2: false,
      dialog: false,
      modal3: false,
      modal4: true
    }
  }
})
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
}

.clear_link{
  margin-right: 12px;
}

.padding{
  margin: 12px;
}

.heading-text{
  font-size: 28px;
}
</style>
