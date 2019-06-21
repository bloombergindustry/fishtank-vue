<template>
    <div
        class="query"
        @mouseenter="showTooltip"
        @mouseleave="showTooltip"
    >
        <slot/>
        <div class="input"></div>
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
    data(){
        return{
            focus: false,
            element: Object,
            reference: Object
        }
    },
    methods:{
        showTooltip(){
            // element = document.querySelector('.input')
            // reference = document.querySelector('.query')
             
            // var popper = new Popper(this.element, this.reference,{
            //     placement: this.$props.orientation,
            // })

            if(!this.focus){
                this.focus = true
                if(this.focus){
                    console.log("true")
                }
            }else{
                this.focus = false
                console.log("false")
            }
            
        }
    }
})
</script>

<style lang="scss" scoped>

</style>

