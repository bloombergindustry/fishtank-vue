<template>
  <div>
    <box :marginBottom="2">
      <fish-tank-base-alert heading="BBNA Alert"></fish-tank-base-alert>
    </box>
    <box :marginBottom="2">
      <fish-tank-alert-success heading="Update Complete"></fish-tank-alert-success>
    </box>
    <box :marginBottom="2">
      <fish-tank-alert-error heading="Update Did Not Complete"></fish-tank-alert-error>
    </box>
    <box :marginBottom="2">
      <fish-tank-alert-info heading="Completed Tasks"></fish-tank-alert-info>
    </box>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { 
  FishTankBaseAlert,
  FishTankAlertSuccess,
  FishTankAlertError,
  FishTankAlertInfo,
  FishTankBox
} from '@/index'
import { mapClassName } from '@/util/style'

export default Vue.extend({
  components: {
    FishTankBaseAlert,
    FishTankAlertSuccess,
    FishTankAlertError,
    FishTankAlertInfo,
    Box: FishTankBox
  },
  data: function(){
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

