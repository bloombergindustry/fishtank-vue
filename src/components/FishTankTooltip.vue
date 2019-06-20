<template>
    <div>
        <slot
            @focus="showTooltip()"
            
        />
        <div id="input-element"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Popper from 'popper.js'

import {
    FishTankText
} from '@/index'

export default Vue.extend({
    name: 'FishTankTooltip',
    components: {
        FishTankText
    },
    props: {
        orientation: {
            type: String,
            required: true,
            default: 'top'
        },
        placeholder: String
    },
    methods:{
        showTooltip(){
             
            var popper = new Popper(this.document.querySelector('#input-element') , this.$props.placeholder,{
                placement: this.$props.orientation,
            })

            return popper;
        }
    }
})
</script>

<style lang="scss" scoped>

</style>

