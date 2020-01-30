<template>
  <div>
    <box :margin-bottom="2">
      <fish-tank-base-alert heading="BBNA Alert" />
    </box>
    <box :margin-bottom="2">
      <fish-tank-alert-success heading="Update Complete" />
    </box>
    <box :margin-bottom="2">
      <fish-tank-alert-error heading="Update Did Not Complete" />
    </box>
    <box class="override">
      <box :margin-bottom="2">
        <fish-tank-alert-info heading="Completed Tasks" />
      </box>
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
  data(){
    return{
    }
  }
})
</script>

<style scoped>
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

