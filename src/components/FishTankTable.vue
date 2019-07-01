<script lang="ts">

  /**
   * TODO:
   * 1. Get customizable text alignment for numeric rows which should be center aligned
   * 2. Use row name to insert cell data rather than relying on proper order
   * 
   */
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import FishTankBox from './FishTankBox.vue'

  @Component({
    components:{
        box:FishTankBox,
    }
  })

  export default class FishTankTable extends Vue {
    @Prop({default: {}, type:Object})
    tableData:{
      fields: () => Object[],
      data: () => Object[]
    }
    // meed to right align for numeric rows
    @Prop({default:"left",type:String})
    align:String

    // can add function here verifying that heading and fields array are correct

    renderComponent(componentName: any) {
      // if (typeof(field.title) === 'function') {
      //   return field.title()
      // }

      // componentVariable is the name of the variable that references the rawHTML in the calling file
      let componentVariable = componentName.split(':')[1].trim()
      return componentVariable
    }
    isSpecialField (fieldName: String) {
      return fieldName.slice(0, 2) === '__'
    }
    getCellType (string: String) {
      return string.split(':')[0].trim()
    }

    getColumnAlgnment(cellName : String) {
      for( let currField of this.tableData.fields) {
        if(currField.name === cellName) {
          switch(currField.rowAlignment) {
            case "right":
              return "td--right";
            case "center":
              return "td--center"
            default:
              return "td--left"
          }
        }
      }
    }
  }

</script>

<template>
  <table class="table" :table-data="tableData">
    <thead>
      <tr>
        <template v-for="(field, index) in tableData.fields" >
          <template v-if="isSpecialField(field.name)">
            <th 
              v-if="getCellType(field.name)=='__component'" 
              :style="{width: field.width}" 
              :class="[]" :key="index"> 
              <div  v-html="renderComponent(field.name)">
              
              </div>
            </th>
            <th 
              v-if="getCellType(field)=='__slot'"   
              :class="[]" :key="index"> 
              <slot :name ="renderComponent(cell)" :row-data = "row" :row-index = "rowIndex" >

              </slot>
            </th>
            <!--supports additional defined cell types, can add more cell types here-->
          </template>
          <template v-else>
            <th
              :style="{width: field.width}"
              :class="[]" :key="index">
              
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
            <template v-if="isSpecialField(cell)">
              <!--__component type is not working, use slots -->
              <td
                v-if="getCellType(cell)=='__component'"
                :style="{align: getColumnAlgnment(name)}" 
                :class="[]" 
                :key="index"> 
                <component :is = "renderComponent(cell)">

                </component>
              </td>
              <td 
                v-if="getCellType(cell)=='__slot'" 
                :class="[getColumnAlgnment(name)]" 
                :key="index"> 
                <slot :name ="renderComponent(cell)" :row-data = "row" :row-index = "rowIndex" >

                </slot>
              </td>
            </template>
            <template v-else>
              <td
              :style="{width: row.width}"
              :class="[getColumnAlgnment(name)]"
              :key="index">
              
              {{ cell }}
              
              </td>
            </template>
          </template>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style lang="scss">
  @import '../styles/mixins';
  @import '../../node_modules/@fishtank/type/dist/css-variable-stylesheet';
  @import "../../node_modules/@fishtank/type/dist/index.custom-properties";
  @import '../../node_modules/@fishtank/colors/dist/css-variable-stylesheet-text';
  table {
    border: solid 1px $color-gray-lighter;
    border-spacing: 0;
    border-collapse:collapse;
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
  }

  td{
    &.td--left {
      text-align:left;
    }
  }

  td {
    &.td--right {
      text-align:right;
    }
  }

  td {
    &.td--center {
      text-align:center;
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
