<template>
    <div class="ft-accordion-container">
        <div 
            class="ft-accordion-wrapper-lg"
            v-on:click="toggle"
        >
            <div class="ft-accordion-heading-wrapper">
                <p class="ft-accordion-heading"> {{ heading }} </p>
                <p 
                    class="ft-accordion-sub-heading"
                    v-if="subheading"
                > {{ subheading }} </p>
            </div>
            <ChevronDown24 v-show="visible"/>
            <ChevronUp24 v-show="!visible"/>
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
        ChevronDown24,
        ChevronUp24 
    }  from "@fishtank/icons-vue"

    export default {
        components: {
            ChevronDown24,
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
            }
        },
        methods:{
            toggle(){
                
                if(this.visible){
                    this.visible = false
                }else{
                    this.visible = true
                }
            }
        }
    }
</script>

<style lang="scss">

</style>

<!--- re-organize accordion classes, styles and structures, then add
 type/javascript, slots/templates to get this working -->