<script lang ="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import {
        FishTankContainer,
        FishTankColumn,
        FishTankBox,
        FishTankCard,
        FishTankText,
        FishTankHeading,
        FishTankTable,
        FishTankCheckbox
    } from "@/index";

        @Component({
            components: {
                heading:FishTankHeading,
                ftTable:FishTankTable,
                check: FishTankCheckbox,
                card: FishTankCard
            }
        })
    export default class Table extends Vue {
      tableData = {
        data: [
          {name: "Elmo", color:"Red" , age:"45" , height: "2", food: "Pizza",  check: "__slot:check"},
          {name: "Barney", color:"Purple" , age:"67" , height: "10", food: "Meteors",  check: "__slot:check"},
          {name: "Big Bird", color:"Yellow" , age:"346" , height: "12", food: "His Enemies",  check: "__slot:check"}
        ],
        fields: [
          {title: "Name", name: "name", width:"200px"}, 
          {title: "Color", name:"color"},
          {title: "Age", name:"age", rowAlignment:"right"},
          {title: "Height (Feet)", name:"height",rowAlignment:"right"}, 
          {title: "Food", name:"food"},
          {title: "Select", name:"check", rowAlignment:"center"},
        ]
      }
      selected = []
      displayData : {}[] = []

      displaySelected(rowData : any , rowSelected : Boolean) {
        if(rowSelected) {
          this.displayData.push(rowData)
        } else {
          this.displayData = this.displayData.filter(x => x !== rowData)
        }
      }
    }
</script>

<template>
    <div class = "content">
      <card>
        <heading level="1">
          FishTankTable
        </heading>
        <ft-table :table-data = "tableData" style = "width:100%">
          <template slot="check" scope="props">
            <check
              v-model = "selected[props.rowIndex]"
              value="selected[props.rowIndex]"
              @change = "displaySelected(props.rowData , selected[props.rowIndex])" />
          </template>
        </ft-table>
      </card>
      <card>
        <heading level="1">Selected Rows</heading>
        <span> {{ displayData }} </span>
      </card>
    </div>
</template>

<style lang="scss">
  h1 {
    margin-top: 0px;
  }
  .content {
      margin: 50px;
      width: 750px;
  }
</style>
