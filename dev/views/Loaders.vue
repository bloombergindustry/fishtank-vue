<template>
  <div>
    <div style="display: table; text-align: right;">
      <h1 style="text-align: left;">themes</h1>
      <div style="display: table-row;">
        <div style="display: table-cell; vertical-align: middle;">bgov </div>
        <div style="display: table-cell;">
          <spinner 
            ref="bGovSpinner"
            :loading="bgloading" 
            theme="bgov"
            size="medium"/>
          <ftbutton @click="bgloading = !bgloading">Click to show loading animation</ftbutton>
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
            :loading="lgbgloading" 
            theme="bgov"
            size="large"
          />
          <ftbutton @click="lgbgloading = !lgbgloading">Click to show loading animation</ftbutton>
        </div>
      </div>

      <h1> Loader Documentation </h1>
      <div>
        <FishTankPropsDoc :properties="docs"/>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FishTankSpinner as Spinner, FishTankButtonPrimary as ftbutton } from '@/index'
import FishTankPropsDoc from '@/components/FishTankPropsDoc.vue'
import VueMarkdown from 'vue-markdown'

export default Vue.extend({
  components: {
    Spinner,
    ftbutton,
    FishTankPropsDoc,
    VueMarkdown
  },
  data(){
    return {
      bgloading: true,
      lgbgloading:true,
      docs: Spinner.options.props
    }
  },
})
</script>
