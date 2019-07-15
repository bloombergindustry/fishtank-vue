<template>
  <section>
    <h1>Fish Tank Examples</h1>
    <ul>
      <li><a href="#/accordions">Accordions</a></li>
      <li><a href="#/alerts">Alerts</a></li>
      <li><a href="#/badges">Badges</a></li>
      <li><a href="#/box">Box</a></li>
      <li><a href="#/buttons">Buttons</a></li>
      <li><a href="#/buttonsV2">ButtonsV2</a></li>
      <li><a href="#/buttongroup">Button Group</a></li>
      <li><a href="#/cards">Cards</a></li>
      <li><a href="#/checkboxes">Checkboxes</a></li>
      <li><a href="#/checkboxesv2">CheckboxesV2</a></li>
      <li><a href="#/container-columns">Containers and Columns</a></li>
      <li><a href="#/contentloaders">Content Loaders</a></li>
      <li><a href="#/heading">Heading</a></li>
      <li><a href="#/lookup">Lookup</a></li>
      <li><a href="#/modals">Modals</a></li>
      <li><a href="#/numberbadges">Number Badges</a></li>
      <li><a href="#/pagination">Pagination</a></li>
      <li><a href="#/radios">Radios</a></li>
      <li><a href="#/select">Select</a></li>
      <li><a href="#/spinnerloader">Spinner Loader</a></li>
      <li><a href="#/switches">Switches</a></li>
      <li><a href="#/tabs">Tabs</a></li>
      <li><a href="#/tables">Tables</a></li>
      <li><a href="#/tags">Tags</a></li>
      <li><a href="#/text">Text</a></li>
      <li><a href="#/textinput">Text Input</a></li>
      <li><a href="#/textinputv2">Text Input V2</a></li>
      <li><a href="#/tooltips">Tooltips</a></li>
      <li><a href="#/verticaltabs">VerticalTabs</a></li>
    </ul>
    <p>
      For additional documentation and code examples, please visit the <a href="https://fishtank.bna.com">Fish Tank guide website</a>.
    </p>
  </section>
</template>

<script lang ="ts">
import Vue from 'vue'
import {
        FishTankText,
        FishTankHeading
} from "@/index";

 export default Vue.extend({
   components: {
    FishTankText,
    FishTankHeading
   }
 })
</script>

<style lang="scss">
@import '../node_modules/@fishtank/colors/dist/css-variable-stylesheet-text';
  a {
    text-decoration: none;
    color: var(--color-link);
  }

  a:visited {
    color: var(--color-link-visited);
  }

  section {
    margin-left: 25px;
  }
</style>

