<template>
  <div>
    <div>
      <ButtonPrimary @click="modal1 = true">Open Standard Modal</ButtonPrimary>
      <ButtonPrimary @click="modal2 = true">Open Fixed Modal</ButtonPrimary>
      <ButtonPrimary @click="dialog = true">Open Dialog</ButtonPrimary>
    </div>
    <Modal
      v-model="modal1"
      heading="Heading"
      escapeable
    >
      modal body content
      <div slot="footerRight">
        <ButtonPrimary>Action</ButtonPrimary>
      </div>
      <div slot="footerLeft">
        <ButtonPrimary>Search</ButtonPrimary>
      </div>
    </Modal>

    <Modal
      v-model="modal2"
      heading="Fixed Modal"
      class="my-custom-class"
      fixed
    >
      <Search24 slot="headingIcon"/>
      <LoremIpsum/>
      <template slot="headingExtra">
        <Home24/>
        Set as Home
      </template>
      <div slot="footerRight">
        <!-- <ButtonSecondary disabled>Close</ButtonSecondary> -->
        <ButtonPrimary disabled>Search</ButtonPrimary>
      </div>
    </Modal>

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
import { Modal, DialogBox, ButtonPrimary, ButtonSecondary } from '@/index'
import LoremIpsum from '../LoremIpsum.vue'
import { Search24, HomeO24 as Home24 } from '@fishtank/icons-vue'

export default Vue.extend({
  components: {
    Modal,
    DialogBox,
    ButtonPrimary,
    ButtonSecondary,
    LoremIpsum,
    Search24,
    Home24,
  },
  data() {
    return {
      modal1: false,
      modal2: true,
      dialog: false,
    }
  }
})
</script>

