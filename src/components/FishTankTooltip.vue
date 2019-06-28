<template>
    <div
        class="content"
        @mouseenter="focusToggle();createPop(); "
        @mouseleave="focusToggle();destroyPop();"
    >
        <slot/>
        <div 
            class="popper-content"
            :class="focus && orientation ? 'popper' : 'popper-hide' "
            :x-placement="orientation"
        >
            <FishTankText>{{placeholder}}</FishTankText>
            <div class="popper-arrow"></div>
        </div>
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
        placeholder: String,
        orientation: String
    },
    data(){
        return{
            focus: false,
            popObj: undefined,
            inputEl: undefined,
            content: undefined,
        }
    },
    destroyed(){
        if(this.$data.popObj!==undefined) this.destroyPop()
    },
    methods:{
        createPop(){
           this.$data.inputEl = document.querySelector('.content')
           this.$data.content = document.querySelector('.popper')
           let popperLocation = this.$props.orientation
           console.log(this.$props.orientation)
        
            this.$data.popObj = new Popper(this.$data.inputEl, this.$data.content,{
                placement: popperLocation,
                modifiers:{
                    computeStyle:{
                        gpuAcceleration:true
                    },
                    // offset:{
                    //     // offset:4
                    // }
                }
            })

            console.log(this.$data.focus)
        },
        destroyPop(){
            console.log(this.$data.focus)
                if(this.$data.popObj !== undefined) this.$data.popObj.destroy()

        },
        focusToggle(){
            if(this.$data.focus){
                this.$data.focus = false;
            }
            else if(!this.$data.focus){
                this.$data.focus = true
            }
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../styles/mixins';
.content{
    position: relative;
}

.popper-content{
    display: none;
    padding: 4px;
    background: $color-gray-lighter;
    border-radius: 2px;
}


.popper[x-placement^="top"]{
    display: block;
    padding: 4px;
    position: absolute;
    width: 120px;
    top: -60px;
    
}

</style>

