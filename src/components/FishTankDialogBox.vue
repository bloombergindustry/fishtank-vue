<template>
  <Modal
    :active="active"
    :heading="heading"
    :width="width"
    escapeable
    dialog
    @change="onChange">
    <!-- @slot Slot for custim dialog-box content -->
    <slot />
    <!-- @slot Slot for foter -->
    <slot
      slot="footer"
      name="footer" />
    <!-- @slot Slot for left footer-->
    <slot
      slot="footerLeft"
      name="footerLeft" />
    <!-- @slot Slot for right footer-->
    <slot
      slot="footerRight"
      name="footerRight" />
  </Modal>
</template>

<script lang="ts">

import { Component, Prop, Vue, Model } from 'vue-property-decorator'
import { CreateElement, VNode } from 'Vue'
import { default as Modal} from './FishTankModal.vue'

@Component({
  components: {
    Modal
  }
})
export default class FishTankDialogBox extends Vue {
  /**
   * Dialog box is active.
   */
  @Model('change', {type:Boolean, required:true}) active:Boolean 

  /**
   * Dialog box heading text
   */
  @Prop({
    type: String,
    required: false,
    default: undefined
  })
  heading:String

  /**
   * Dialog box width
   */
  @Prop({
    type: String,
    required: false,
    default: undefined,
  })
  width:String

  // Component methods
  onChange(value: Boolean) {
    /**
    * Change event.
    *
    * @type {Boolean}
    */
    this.$emit('change', value)
  }
}
</script>
