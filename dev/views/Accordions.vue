<template>
    <div>
        <FishTankAccordionLarge 
            heading="Section Heading"
        >
            <FishTankLoaderContent theme="AlertList"/>
        </FishTankAccordionLarge>

        <FishTankAccordionLarge 
            heading="Section Heading"
            subheading="Sub-heading"
        >
            <FishTankLoaderContent theme="AlertList"/>
        </FishTankAccordionLarge>
        <FishTankAccordionLarge 
            heading="Section Heading"
            subheading="Another Sub-heading"
        >
            <FishTankLoaderContent theme="MembersOfCongressList"/>
        </FishTankAccordionLarge>

        <FishTankAccordionLarge 
            heading="Disabled Section Heading"
            subheading="Disabled Sub-heading"
            :disabled="disabledAccordion"
        >
            <FishTankLoaderContent theme="AlertList"/>
        </FishTankAccordionLarge>


    </div>
</template>

<script>
    import{
        FishTankAccordionLarge,
        FishTankLoaderContent 
    }from '@/index'

    export default {
        components: {
            FishTankAccordionLarge,
            FishTankLoaderContent
        },
        data: function() {
            return{
                disabledAccordion : true
            }
        }
        
    }
</script>

<style scoped>
    .title{
        margin: 24px 0px;
    }

</style>