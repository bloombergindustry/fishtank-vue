<template>
    <div>
        <h1>Single Accordions [ Default ]</h1>

        <FishTankAccordion 
            heading="Section Heading"
        >
            <FishTankLoaderContent theme="AlertList"/>
        </FishTankAccordion>

        <FishTankAccordion 
            heading="Another Section Heading"
            subheading="A Sub-heading"
        >
            <FishTankLoaderContent theme="MembersOfCongressList"/>
        </FishTankAccordion>

        <FishTankAccordion 
            heading="Disabled Section Heading"
            subheading="Disabled Sub-heading"
            :disabled="disabledAccordion"
        >
            <FishTankLoaderContent theme="AlertList"/>
        </FishTankAccordion>

        <br/>

        <h1> Single Accordion [ Small ]</h1>

        <br/>

        <FishTankAccordion
            :small="true"
            heading="Small Section Heading"
        >
            <FishTankButtonPrimary> Click </FishTankButtonPrimary>
        </FishTankAccordion>

        <FishTankAccordion
            :small="true"
            heading="Disabled Small Section Heading"
            :disabled="disabledAccordion"
        >
            <FishTankLoaderContent theme="AlertList"/>
        </FishTankAccordion>

        <br/>

        <h1>Accordion Group </h1>

        <br/>

        <FishTankAccordionGroup
            :single="true"
        >

            <FishTankAccordion 
                heading="Group Section Heading"
                subheading="Group Sub-heading"
            >
                <FishTankLoaderContent theme="AlertList"/>
            </FishTankAccordion>
            <FishTankAccordion 
                heading="Another Group Section Heading"
                subheading="Another Group Sub-heading"
            >
                <FishTankLoaderContent theme="MembersOfCongressList"/>
            </FishTankAccordion>

            <FishTankAccordion 
                heading="Yet Another Group Section Heading"
                subheading="Yet Another Group Sub-heading"
            >
                <FishTankButtonPrimary> Click </FishTankButtonPrimary>
            </FishTankAccordion>
        
        </FishTankAccordionGroup>

    </div>
</template>

<script>

    import{
        FishTankAccordion,
        FishTankLoaderContent,
        FishTankAccordionGroup,
        FishTankButtonPrimary 
    }from '@/index'

    export default {
        components: {
            FishTankAccordion,
            FishTankLoaderContent,
            FishTankAccordionGroup,
            FishTankButtonPrimary
        },
        data: function() {
            return{
                disabledAccordion : true
            }
        },
        medthods:{
            alert(){
                alert('Hey :)')
            }
        }
        
    }
</script>

<style scoped lang="scss">
    .title{
        margin: 24px 0px;
    }

</style>