<template>
  <Modal
    :active="active"
    :heading="heading"
    :width="width"
    escapeable
    dialog
    @change="onChange">
    <slot/>
    <slot
      slot="footer"
      name="footer" />
    <slot
      slot="footerLeft"
      name="footerLeft" />
    <slot
      slot="footerRight"
      name="footerRight" />
  </Modal>
</template>

<script lang="ts">
import Vue, { CreateElement, VNode } from 'vue'
import {default as Modal} from './FishTankModal.vue'

export default Vue.extend({
  components: {
    Modal,
  },
  model: {
    prop: 'active',
    event: 'change'
  },
  props: {
    active: {
      type: Boolean,
      required: true,
      description:"Dialog box is active"
    },
    heading: {
      type: String,
      required: false,
      default: undefined,
      description:"Dialog box heading text"
    },
    width: {
      type: String,
      required: false,
      default: undefined,
      description:"Dialog box width"
    }
  },
  methods: {
    onChange(value: Boolean) {
      this.$emit('change', value)
    }
  },
})
</script>

