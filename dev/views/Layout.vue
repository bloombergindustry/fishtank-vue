<template>
  <div>
    <container fluid>
      <column :xs-column="7">
        <!-- <box flex="grow" color="grayLighter" :padding="4">Column</box> -->
        <box flex="grow">
          <card>Hello World</card>
        </box>
        
      </column>
      <column class="column" :xs-column="3">
        <box display="flex" flex="grow" color="grayLighter" :padding="4">
          <box :xs-column="3">three</box>
          <box :xs-column="9">nine</box>
        </box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
    </container>
    <br/>
    <container class="container">
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
    </container>
    <br/>
    <container class="container">
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
      <column class="column">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
    </container>

    <br/>
    <container class="container">
      <column class="column" :xs-column="8">
        <box  color="grayDark" :padding="4">Column</box>
      </column>
      <column class="column" :xs-column="4">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
    </container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { 
  FishTankContainer,
  FishTankColumn,
  FishTankBox,
  FishTankCard
} from "@/index"
import PageExample from "./LayoutPageExample.vue"

export default Vue.extend({
  components:{
    container:FishTankContainer,
    column:FishTankColumn,
    box:FishTankBox,
    card:FishTankCard

  }
})

</script>
<style scoped>
  .container {
    background-color: aqua;
  }
  .column {
    background-color: blanchedalmond;
  }
  .cardClass {
    width:100%;
  }
</style>


