<template>
    <div>
        <FishTankAccordionLarge 
            heading="Section Heading"
            subheading="Sub-heading"
        >
            <FishTankLoaderContent theme="AlertList"/>
        </FishTankAccordionLarge>

        <br/>


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