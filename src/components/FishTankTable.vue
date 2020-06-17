<script lang="ts">
  /*
   * TODO:
   * 1. [x] Get customizable text alignment for numeric rows which should be center aligned.
   * 2. [x] Get customizable alignment for custom components/slots -- this can be achieved in the user slot template css. 
   * 3. [] Use row name to insert cell data into correct column rather than relying on proper order.
   * 4. [] Create custom prop validator function to ensure that valid tableData is passed to the fish tank table.
   * 5. [] Add pagination support.  
   * 
   */

  /*
   * How To Use:
   * FishTankTable accepts a property called table-data.  table-data is an object which has two members, fields and data...i.e
   * tableData = {
   *    fields: [{title: "This is the First Column", name: "firstColumn", colAlignment:"right", colVAlignment:"top"},
   *             {title: "Second Column", name: "secondColumn", width:"250px"}]
   * 
   *    data: [{firstColumn: "Cell 1", secondColumn: "Cell 2"},
   *           {firstColumn: "Cell 1b", secondColumn: "__slot:checkBox}]
   * }
   * The `fields` array represents the contents of the header row, where `name` is an identifier for each column and `title` is what
   * is rendered.  The keys in the `data` array correspond to the `name` of the respective column header where the `data` values are rendered to the
   * cells.  These values can be slots, in which the value should take the format of __slot:`slot name here`.
   */
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({
    components:{     
    }
  })

  export default class FishTankTable extends Vue {
    
    /**
     * Input object containing heading fields and data for table
     */
    @Prop({default: {}, type:Object,})
    tableData:{
      fields: any[],
      data: any[]
    }
    
    // Should add function here verifying that heading and fields array are correctly formatted

    // Component Methods
    renderComponent(componentName: any) {
      // if (typeof(field.title) === 'function') {
      //   return field.title()
      // }
      let componentVariable = componentName.split(':')[1].trim()
      return componentVariable
    }

    isSpecialCell (fieldName: String) {
      return fieldName.slice(0, 2) === '__'
    }

    getCellType (string: String) {
      return string.split(':')[0].trim()
    }

    getColAlign(cellName : String) {
      for( let currField of this.tableData.fields) {
        if(currField.name === cellName) {
          switch(currField.colAlignment) {
            case "right":
              return "td--right"
            case "center":
              return "td--center"
            default:
              return "td--left"
          }
        }
      }
    }

    getColVerticalAlign(cellName : String) {
      for( let currField of this.tableData.fields) {
        if(currField.name === cellName) {
          switch(currField.colVAlignment) {
            // length and percentage not currently supported
            case "sub":
              return "td--sub"
            case "super":
              return "td--super"
            case "text-top":
              return "td--text-top"
            case "text-bottom":
              return "td--text-bottom"
            case "middle":
              return "td--middle"
            case "top":
              return "td--top"
            case "bottom":
              return "td--bottom"
            default:
              return "td--baseline"
          }
        }
      }
    }
  }

</script>

<template>
  <table 
    :table-data="tableData"
    class="table">
    <thead>
      <tr>
        <template v-for="(field, index) in tableData.fields">
          <template v-if="isSpecialCell(field.name)">
            <th 
              v-if="getCellType(field)=='__slot'"
              :key="index"
              :class="[]">
              <!-- @slot Slot for passing component to table header -->
              <slot 
                :name="renderComponent(cell)"
                :row-data="row"
                :row-index="rowIndex" />
            </th>
            <!--supports additional special cell types, can add more cell types here-->
          </template>
          <template v-else>
            <th
              :key="index"
              :class="[]"
              :style="{width: field.width}">
              {{ field.title.toUpperCase() }}
            </th>
          </template>
        </template>
      </tr>
    </thead>
    <tbody>
      <template v-for="(row,rowIndex) in tableData.data">
        <tr :key="rowIndex">
          <template v-for="(cell,name,index) in row">
            <template v-if="isSpecialCell(cell)">
              <td 
                v-if="getCellType(cell)=='__slot'" 
                :key="index"
                :class="[getColAlign(name), getColVerticalAlign(name)]">
                <!-- @slot Slot for passing component to table body -->
                <slot 
                  :name="renderComponent(cell)"
                  :row-data="row"
                  :row-index="rowIndex" />
              </td>
              <!--supports additional special cell types, can add more cell types here-->
            </template>
            <template v-else>
              <td
                :key="index"
                :class="[getColAlign(name), getColVerticalAlign(name)]"
                :style="{width: row.width}">
                {{ cell }}
              </td>
            </template>
          </template>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
  @import '../styles/mixins';
  @import '../../node_modules/@fishtank/type/dist/css-variable-stylesheet';
  @import "../../node_modules/@fishtank/type/dist/index.custom-properties";
  @import '../../node_modules/@fishtank/colors/dist/css-variable-stylesheet-text';
  table {
    border: solid 1px $color-gray-lighter;
    border-spacing: 0;
    border-collapse:collapse;
    width: 100%;
  }

  td, th {
    padding:10px;
    border-right: solid 1px $color-gray-lighter;
  }
  td {
    margin:auto;
    color: $color-black;
    font-size: var(--fontsize-base-md);
    font-weight: var(--fontweight-regular);

    &.td--left {
      text-align:left;
    }

    &.td--right {
      text-align:right;
    }

    &.td--center {
      text-align:center;
    }

    &.td--baseline {
      vertical-align: baseline
    }

    &.td--middle {
      vertical-align: middle
    }

    &.td--sub {
      vertical-align: sub
    }

    &.td--super {
      vertical-align: super
    }

    &.td--text-top {
      vertical-align: text-top
    }

    &.td--text-bottom {
      vertical-align: text-bottom
    }

    &.td--top {
      vertical-align: top
    }
  }

  th {
    text-align: left;
    border-bottom:solid 1px $color-gray-lighter;
    background: $color-gray-lightest;
    color: $color-gray;
    font-size: var(--fontsize-base-md);
    font-weight: var(--fontweight-semi);
  }
  
  tr {
    &:nth-child(odd) {
      background: $color-background-darker;
    }
  }
</style>
