<script lang ="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import {
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
          {character: "Elmo", color:"Red" , age:"45" , height: "2", food: "Pizza", address: "Sesame Street", phoneNumber:"(323) 319-6060", netWorth: "$1.6B", check: "__slot:check"},
          {character: "Barney", color:"Purple" , age:"67" , height: "10", food: "Meteors", address: "1101 K Street NW", phoneNumber:"(212) 458-1902", netWorth: "$200M", check: "__slot:check"},
          {character: "Oscar", color:"Green" , age:"34" , height: "4", food: "Garbage", address: "Various Trash Cans", phoneNumber:"(240) 678-1945", netWorth: "$7", check: "__slot:check"},
          {character: "Cookie Monster", color:"Blue" , age:"56" , height: "5", food: "Cookies", address: "619 Cookie Place", phoneNumber:"(903) 234-6196", netWorth: "$900,000", check: "__slot:check"},
          {character: "Big Bird", color:"Yellow" , age:"346" , height: "12", food: "His Enemies", address: "Unknown", phoneNumber:"4", netWorth: "$3.2T", check: "__slot:check"}
        ],
        fields: [
          {title: "Character", name: "character", width:"200px"}, 
          {title: "Color", name:"color"},
          {title: "Age", name:"age", colAlignment:"right"},
          {title: "Height (Feet)", name:"height",colAlignment:"right"}, 
          {title: "Food", name:"food"},
          {title: "Address", name:"address"},
          {title: "Phone Number", name:"phoneNumber"},
          {title: "Net Worth", name:"netWorth", colAlignment:"right"},
          {title: "Select", name:"check", colAlignment:"center"},
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
        <div class ="scroll">
        <ft-table :table-data = "tableData">
          <template slot="check" scope="props">
            <check
              v-model = "selected[props.rowIndex]"
              class = "check"
              value="selected[props.rowIndex]"
              @change = "displaySelected(props.rowData , selected[props.rowIndex])" />
          </template>
        </ft-table>
      </div>
      </card>
      <card>
        <heading level="1">Selected Rows</heading>
        <span> {{ displayData }} </span>
      </card>
    </div>
</template>

<style lang="scss">
  .scroll {
    overflow: hidden;
    overflow-x:auto;
    overflow-y:auto;
  }

  h1 {
    margin-top: 0px;
  }
  .content {
      margin: 25px;
      width: 97%;
  }
  .check {
    margin-left:40%;
  }
</style>
