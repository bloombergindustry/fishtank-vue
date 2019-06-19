<template>
    <div>
        <slot/>
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
    props: {}
})
</script>

<style lang="scss" scoped>

</style>

