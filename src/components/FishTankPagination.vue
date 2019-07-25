<template>
  <vue-paginate
    :page-count="pageCount"
    :click-handler="paginateSearch"
    :page-range="5"
    :force-page="pageNum-1"
    :break-view-class="breakViewClass"
    :container-class="'ft-pagination'">
    <template slot="prevContent">
      <chevron-left-icon />
    </template>
    <template slot="nextContent">
      <chevron-right-icon />
    </template>
  </vue-paginate>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Model } from 'vue-property-decorator'
  import { VueConstructor } from 'Vue'
  import * as VueJsPaginate from "vuejs-paginate"
  import {
    ChevronLeft24 as ChevronLeftIcon,
    ChevronRight24 as ChevronRightIcon,
  } from '@fishtank/icons-vue'

  @Component({
    components:{
      'vue-paginate':VueJsPaginate,
      ChevronLeftIcon,
      ChevronRightIcon,
    }
  })

  export default class FishTankPagination extends Vue {
    @Model('paginate', {type:Number,required:false, default: 0}) pageNum:Number

    /**
     * Maximum pages to show at a time
     */
    @Prop({
      type:Number,
      required:true,
    })
    pageCount:Number

    /**
     * Show the last available page.
     */
    @Prop({
      type:Boolean,
      required:false,
      default: true,
    })
    showLastPage:Boolean

    // Computed methods
    get breakViewClass(): string {
      return this.showLastPage ? '' : 'break-out'
    }

    // Component methods
    paginateSearch(pageNum: number): void {
      this.$emit('paginate', pageNum)
    }

    // Data
    name: 'FT-Pagination'
    description: 'FishTank Pagination'
  }
</script>

<style lang="scss">
  @import '../../node_modules/@fishtank/type/dist/index';
  @import '../../node_modules/@fishtank/colors/dist/index';
  @import '../../node_modules/@fishtank/space/dist/index';

  .ft-pagination {
    font-weight: $fontweight-semi;
    border: none;
    font-size: $fontsize-base-lg;
    
    // Reshow the ellipsis for the first page
    li:nth-child(2) + .break-out {
      display: inline-block;
    }

    // Hides the last page link for pagination
    .break-out + li:nth-last-child(2) {
      display: none;
    }

    // Hides the ellipsis for the last page
    .break-out {
      display: none;
    }

    li {
      display: inline-block;
      text-align: center;
      width: 2em;
      height: 2em;
      line-height: inherit;
      margin: 0px 5px;
      vertical-align: middle;

      &:focus {
        outline: none;
      }

      &:hover {
        cursor: pointer;
      }

      &.active {
        background-color: $color-blaw-blue;
        border-radius: 2px;

        a {
          color: $color-white;
        }
      }

      &.disabled {
        a {
          color: $color-gray-lighter;
        }
      }

      a {
        color: $color-gray-dark;
        vertical-align: middle;
        display: table-cell;
        width: 2em;
        height: 2em;

        svg {
          vertical-align: middle;
        }

        &:focus {
          outline: none;
          text-decoration: none;
        }

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
</style>
