<template>
  <div>
    <div>
      <button-primary @click="modal1 = true">Open Standard Modal</button-primary>
      <button-primary @click="modal2 = true">Open Fixed Modal</button-primary>
      <button-primary @click="dialog = true">Open Dialog</button-primary>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Modal, DialogBox, ButtonPrimary, ButtonFeatureLabel } from '@/index'
import LoremIpsum from '../LoremIpsum.vue'
import { Search24, HomeO24 as Home24 } from '@fishtank/icons-vue'

export default Vue.extend({
  components: {
    Modal,
    DialogBox,
    ButtonPrimary,
    ButtonFeatureLabel,
    LoremIpsum,
    Search24,
    Home24,
  },
  data() {
    return {
      modal1: false,
      modal2: false,
      dialog: false,
    }
  }
})
</script>

