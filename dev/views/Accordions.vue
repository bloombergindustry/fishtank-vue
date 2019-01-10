<template>
    <div>
        <h1>Single Accordions ( Large ) </h1>

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
            heading="Another Section Heading"
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

        <br/>

        <h1>Accordion Group ( Large ) </h1>

        <br/>

        <FishTankAccordionGroup>

            <FishTankAccordionLarge 
                heading="Group Section Heading"
                subheading="Group Sub-heading"
            >
                <FishTankLoaderContent theme="AlertList"/>
            </FishTankAccordionLarge>
            <FishTankAccordionLarge 
                heading="Another Group Section Heading"
                subheading="Another Group Sub-heading"
            >
                <FishTankLoaderContent theme="MembersOfCongressList"/>
            </FishTankAccordionLarge>

            <FishTankAccordionLarge 
                heading="Yet Another Group Section Heading"
                subheading="Yet Another Group Sub-heading"
            >
                <FishTankLoaderContent theme="AlertList"/>
            </FishTankAccordionLarge>
        
        </FishTankAccordionGroup>

    



    </div>
</template>

<script>

    import{
        FishTankAccordionLarge,
        FishTankLoaderContent,
        FishTankAccordionGroup 
    }from '@/index'

    export default {
        components: {
            FishTankAccordionLarge,
            FishTankLoaderContent,
            FishTankAccordionGroup
        },
        data: function() {
            return{
                disabledAccordion : true
            }
        }
        
    }
</script>

<style scoped lang="scss">
    .title{
        margin: 24px 0px;
    }

</style>