<template>
  <div>
    <div style="display: table; text-align: right;">
      <h1 style="text-align: left;">themes</h1>
      <div style="display: table-row;">
        <div style="display: table-cell; vertical-align: middle;">bgov </div>
        <div style="display: table-cell;">
          <spinner 
            theme="bgov" 
            size="medium"/>
        </div>
      </div>
      <div style="display: table-row;">
        <div style="display: table-cell; vertical-align: middle;">blaw</div>
        <div style="display: table-cell;">
          <spinner
            theme="blaw"
            size="medium"
          />
        </div>
      </div>
      <div style="display: table-row;">
        <div style="display: table-cell; vertical-align: middle;">notification-1</div>
        <div style="display: table-cell;">
          <spinner
            theme="notification-1"
            size="medium"
          />
        </div>
      </div>
      <div style="display: table-row;">
        <div style="display: table-cell; vertical-align: middle;">notification-2</div>
        <div style="display: table-cell;">
          <spinner
            theme="notification-2"
            size="medium"
          />
        </div>
      </div>
      <div style="display: table-row;">
        <div style="display: table-cell; vertical-align: middle;">notification-3</div>
        <div style="display: table-cell;">
          <spinner
            theme="notification-3"
            size="medium"
          />
        </div>
      </div>
      <h1 style="text-align: left;">sizes</h1>
      <div style="display: table-row;">
        <div style="display: table-cell; vertical-align: middle;">small</div>
        <div style="display: table-cell;">
          <spinner
            theme="bgov"
            size="small" 
            alpha
          />
        </div>
      </div>
      <div style="display: table-row;">
        <div style="display: table-cell; vertical-align: middle;">medium </div>
        <div style="display: table-cell;">
          <spinner
            theme="bgov"
            size="medium" 
          />
        </div>
      </div>
      <div style="display: table-row;">
        <div style="display: table-cell; vertical-align: middle;">large</div>
        <div style="display: table-cell;">
          <spinner
            theme="bgov"
            size="large"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FishTankSpinner as Spinner } from '@/index'

export default Vue.extend({
  components: {
    Spinner
  }
})
</script>
