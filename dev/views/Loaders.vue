<template>
  <div style="display: table;">
    <div style="display: table-row;">
      <div style="display: table-cell; vertical-align: middle;">default (bgov)</div>
      <div style="display: table-cell;">
        <spinner/>
      </div>
    </div>
    <div style="display: table-row;">
      <div style="display: table-cell; vertical-align: middle;">blaw theme</div>
      <div style="display: table-cell;">
        <spinner
          theme="blaw"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Spinner } from '@/index'

export default Vue.extend({
  components: {
    Spinner
  }
})
</script>
