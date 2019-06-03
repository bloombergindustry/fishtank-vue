<template>
  <div>
    <div>
      <button-primary @click="modal1 = true">Open Standard Modal</button-primary>
      <button-primary @click="modal2 = true">Open Fixed Modal</button-primary>
      <button-primary @click="dialog = true">Open Dialog</button-primary>
    </div>
    <br/>
    <div>
      <button-primary @click="modal3 = true">Health Analytics Search</button-primary>
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
        <FishTankText>Clear All</FishTankText>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { 
  Modal, 
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
    DialogBox,
    ButtonPrimary,
    ButtonSecondary,
    ButtonFeatureLabel,
    FishTankText,
    LoremIpsum,
    Search24,
    Search32,
    Home24,
    Alert24,
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
    }
  }
})
</script>

