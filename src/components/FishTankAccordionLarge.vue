<template>
    <div 
        :class="[disabled ? 'ft-accordion-container-gray' : 'ft-accordion-container']"
    > 
        <div 
            class="ft-accordion-wrapper-lg"
            @click="toggle"
        >
            <div class="ft-accordion-heading-wrapper">
                <p 
                    class="ft-accordion-heading"
                    role="heading"
                    aria-level="3"
                > 
                    {{ heading }} 
                </p>
                <p 
                    class="ft-accordion-sub-heading"
                    v-if="subheading"
                    role="heading"
                    aria-level="4"
                > {{ subheading }} </p>
            </div>
            <ChevronUp24 
                :class="[ visible ? 'ft-accordion-svg-down' : 'ft-accordion-svg-up' ]"
                aria-label="collapse / expand content"
            />
        </div>
        <div 
            class="ft-accordion-panel"
            v-show="visible"
        >
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">

    import { 
        ChevronUp24 
    }  from "@fishtank/icons-vue"

    export default {
        components: {
            ChevronUp24
        },
        data: function(){
            return{
                visible: false
            }
        },
        props:{
            heading: {
                type: String,
                required: true
            },
            subheading: {
                type: String,
                required: false
            },
            disabled:{
                type: Boolean,
                required: false,
                default: false
            }
        },
        methods:{
            toggle(){
                
                if( !this.disabled ){
                    if( this.visible ){
                        this.visible = false
                    }else{
                        this.visible = true
                    }
                }
            }
        }
    }
</script>

<style lang="scss">

</style>

