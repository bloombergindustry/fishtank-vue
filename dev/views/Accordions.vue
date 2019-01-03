<template>
    <div>
        <h3 class="title">Large Accordion 1-line </h3>

        <FishTankAccordionLarge 
            heading="Section Heading"
            subheading="Sub-heading"
        >
            <FishTankLoaderContent theme="AlertList"/>
        </FishTankAccordionLarge>

        <br/>

        <h3 class="title">Large Accordion 1-line </h3>

        <FishTankAccordionLarge 
            heading="Section Heading"
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
        }
        
    }
</script>

<style scoped>
    .title{
        margin: 24px 0px;
    }

</style>