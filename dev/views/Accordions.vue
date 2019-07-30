<template>
  <div>
    <h1>Single Accordions [ Default ]</h1>

    <fish-tank-accordion 
      heading="Section Heading">
      <fish-tank-loader-content theme="AlertList"/>
    </fish-tank-accordion>

    <fish-tank-accordion 
      heading="Another Section Heading; Flush to the container"
      subheading="A Sub-heading"
      flush>
      <fish-tank-button-primary> Click Big </fish-tank-button-primary>
    </fish-tank-accordion>

    <fish-tank-accordion 
      heading="Disabled Section Heading"
      subheading="Disabled Sub-heading"
      :disabled="disabledAccordion">
      <fish-tank-loader-content theme="AlertList"/>
    </fish-tank-accordion>

    <br/>

    <h1> Single Accordion [ Small ]</h1>

    <br/>

    <fish-tank-accordion
      :small="true"
      heading="Small Section Heading">
      <fish-tank-button-primary> Click </fish-tank-button-primary>
    </fish-tank-accordion>

    <fish-tank-accordion
      :small="true"
      heading="Disabled Small Section Heading"
      :disabled="disabledAccordion">
      <fish-tank-loader-content theme="AlertList"/>
    </fish-tank-accordion>

    <br/>

    <h1>Accordion Group </h1>

    <br/>

    <fish-tank-accordion-group
      :single="true">

      <fish-tank-accordion 
        heading="Group Section Heading"
        subheading="Group Sub-heading">
        <FishTankLoaderContent theme="AlertList"/>
      </fish-tank-accordion>
      <fish-tank-accordion 
        heading="Another Group Section Heading"
        subheading="Another Group Sub-heading">
        <FishTankLoaderContent theme="MembersOfCongressList"/>
      </fish-tank-accordion>

      <fish-tank-accordion 
        heading="Yet Another Group Section Heading"
        subheading="Yet Another Group Sub-heading">
        <FishTankButtonPrimary> Click </FishTankButtonPrimary>
      </fish-tank-accordion>
        
    </fish-tank-accordion-group>

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
           
        }
        
    }
</script>

<style scoped lang="scss">
    .title{
        margin: 24px 0px;
    }

</style>