<template>
    <div
        class="popper"
        @mouseenter="createPop"
        @mouseleave="destroyPop"
    >
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
    props: {
        orientation: {
            type: String,
            required: false,
            default: 'top'
        },
        placeholder: String
    },
    data(){
        return{
            // focus: Boolean,
            popObj: undefined,
            inputEl: undefined,
            slot: undefined
        }
    },
    // destroyed(){
    //     if(this.popObj!==undefined) this.destroyPop()
    // },
    methods:{
        createPop(){
            // element = document.querySelector('.input')
            // reference = document.querySelector('.query')
             
            // var popper = new Popper(this.element, this.reference,{
            //     placement: this.$props.orientation,
            // })

           console.log("true")

           this.$data.inputEl = document.querySelector('.popper')
           this.$data.slot = document.querySelector('slot')
        
            this.$data.popObj = new Popper(this.$data.inputEl, this.$props.placeholder,{
                placement: this.$props.orientation,
                modifiers:{
                    computeStyle:{
                        gpuAcceleration:true
                    }
                }
            })

            //    this.$data.popObj.show()
        },
        destroyPop(){
            console.log("false")
        //     this.$nextTick(function(){
        //         if(this.popObj !== undefined) this.popObj.destroy()
        //     })
        }
    }
})
</script>

<style lang="scss" scoped>

</style>

