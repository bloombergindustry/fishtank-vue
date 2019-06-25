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
        
    },
    data(){
        return{
            // focus: Boolean,
            popObj: undefined,
            inputEl: undefined,
            slot: undefined,
            placeholder: String,
            orientation: {
                type: String,
                required: false,
                default: 'top'
            },

        }
    },
    // destroyed(){
    //     if(this.popObj!==undefined) this.destroyPop()
    // },
    methods:{
        createPop(){
           console.log("true")

           this.$data.inputEl = document.querySelector('.popper')
           this.$data.slot = document.querySelector('slot')
        
            this.$data.popObj = new Popper(this.$data.inputEl, this.$data.placeholder,{
                placement: this.$data.orientation,
                modifiers:{
                    computeStyle:{
                        gpuAcceleration:true
                    },
                    offset:{
                        offset:4
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
@import '../styles/mixins';

</style>

