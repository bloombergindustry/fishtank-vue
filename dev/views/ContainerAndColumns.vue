<template>
  <div>
    <container as="header">
      <column display="block" as="nav">
        <heading level="1">Page Layout Example using FishTankContainer and FishTank Column</heading>
        <ftext>The container and column components, when used together define and provide Fish Tank Layout.</ftext>
        <ftext>Container provides centered positioning, responsive breakpoints from 752px and larger, and a fluid max width breakpoint below 752px. </ftext>
        <ftext>The container has an optional property to make it fluid through all breakpoint for full width layouts.</ftext>
        <br>
        <ftext>Column provides a responsive, flexbox grid with Fish Tank defined gutters. Column can be set across xs, sm, md, lg, and xl breakpoint, <a target="_blank" href="https://fishtank.bna.com/space">defined by Fish Tank UX guidelines.</a></ftext>
      </column>
    </container>
    <br>
    <br>
    <container>
      <column :xs-column="12" as="nav">
        Navigation 
      </column>
    </container>
    <container>
      <column>
        <box flex="grow">
          <card>
            Card
          </card>
        </box>
      </column>
      <column>
        <box flex="grow">
          <card>
            Card
          </card>
        </box>
      </column>
      <column>
        <box flex="grow">
          <card>
            Card
          </card>
        </box>
      </column>
    </container>
    <br>
    <br>
    <br>
    <container>
      <column :xs-column="12" :md-column="8">
        <box flex="grow">
          <card>
            Stacked Card
          </card>
          <card>
            <div v-if="selected">{{selected.label}}</div>
            <lookup
              id="autocomplete_example"
              label="Autocomplete Label"
              orientation="ltr"
              url="/some_autocomplete_endpoint"
              :width="400"
              v-model="selected" />
          </card>
          <card>
            Stacked Card
          </card>
          <card>
            Stacked Card
          </card>
        </box>
      </column>
      <column :xs-column="12" :md-column="4">
        <box flex="grow">
          <card>
            Stacked Card
          </card>
        </box>
      </column>
    </container>
    
    <container>
      <column :xs-column="12">
        <heading level="2">Container and Column layout examples, including gutter and padding highlights, with Box component with flex-grow properties.</heading>
        <ftext>The container and column components, when used together define and provide Fish Tank Layout.</ftext>
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
      <column class="column" :column="8">
        <box  color="grayDark" :padding="4">
          <ftext color="white">
            Column, box without flex grow
          </ftext>
        </box>
      </column>
      <column class="column" :column="4">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
      </column>
    </container>
    <br/>
    <container fluid>
      <column class="column" :xs-column="7">
        <box flex="grow" color="grayLighter" :padding="4">Column</box>
        <!-- <box flex="grow">
          <card>Hello World</card>
        </box> -->
      </column>
      <column class="column" :xs-column="3">
        <box display="flex" flex="grow" color="grayLighter" :padding="4">
          <box :sm-column="3">Nested 3 col box</box>
          <box :sm-column="9">Nested 9 col box</box>
        </box>
      </column>
      <column class="column">
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
  FishTankCard,
  FishTankText,
  FishTankHeading,
  FishTankLookup
} from "@/index"
const moxios = require('moxios')
export default Vue.extend({
  components:{
    container:FishTankContainer,
    column:FishTankColumn,
    box:FishTankBox,
    card:FishTankCard,
    ftext:FishTankText,
    heading:FishTankHeading,
    lookup:FishTankLookup,
  },
  data(){
    return {
      selected: null,
    }
  },
  created () {
    moxios.install()
    moxios.stubRequest(/\/some_autocomplete_endpoint\?query=.+$/, {
      status: 200,
      response: {
        "data": {
          "items": [
            { label: "Some item 1", value: "Some item 1" },
            { label: "Some item 2", value: "Some item 2" },
            { label: "Some item 3", value: "Some item 3" },
            { label: "Some item 4", value: "Some item 4" },
            { label: "Some item 5", value: "Some item 5" }
          ]
        }
      }
    })

    // Mock empty request
    // moxios.stubRequest(/\/some_autocomplete_endpoint\?query=$/, {
    //   status: 200,
    //   response: {
    //     "data": {
    //       "items": []
    //     }
    //   }
    // })
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


