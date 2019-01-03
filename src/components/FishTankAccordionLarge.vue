<template>
    <div>
        <div class="ft-accordion-wrapper-lg">
            <div class="ft-accordion-heading-wrapper">
                <p class="ft-accordion-heading"> {{ heading }} </p>
                <p 
                    class="ft-accordion-sub-heading"
                    v-if="subheading"
                > {{ subheading }} </p>
            </div>
            <ChevronDown24/>
        </div>
        <div class="ft-accordion-panel">
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
    import { ChevronDown24 }  from "@fishtank/icons-vue"

    export default {
        components: {
            ChevronDown24
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
        }
    }
</script>

<style lang="scss">

</style>

<!--- re-organize accordion classes, styles and structures, then add
 type/javascript, slots/templates to get this working -->