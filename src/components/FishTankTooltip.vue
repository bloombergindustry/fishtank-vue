<template>
    <div
        class="content"
        @mouseenter="focusToggle();createPop(); "
        @mouseleave="focusToggle();destroyPop();"
    >
        <slot/>
        <div 
            :class="focus ? 'popper': 'popper-hide'"
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
           console.log(this.$data.focus)

           this.$data.inputEl = document.querySelector('.content')
           this.$data.content = document.querySelector('.popper')
           let popperLocation = this.$props.orientation
        //    console.log(this.$props.orientation)
        
            this.$data.popObj = new Popper(this.$data.inputEl, this.$data.content,{
                placement: popperLocation,
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

.popper-hide{
    display: none;
}

.popper[x-placement="top"]{
    background: $color-highlight-1;
    padding: 4px;
    text-align: center;
    .popper-arrow{
        border-width: 5px 5px 0px 5px;
        border-style: solid;
        background: $color-highlight-3;

    }
}
</style>

