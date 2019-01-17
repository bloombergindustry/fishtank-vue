<template>
  <body>
    <div>
      Default
    </div>
    <fish-tank-pagination
      v-model="pageNumOne"
      :page-count="100" />
    <div>
      Page Number: {{ pageNumOne }}
    </div>
    <hr>
    <br />
    <div>
      Don't show last page
    </div>
    <fish-tank-pagination
      v-model="pageNumTwo"
      :page-count="100"
      :show-last-page="false" />
    <div>
      Page Number: {{ pageNumTwo }}
    </div>
    <hr>
    <br />
    <div>
      V-model works
    </div>
    <fish-tank-pagination
      v-model="pageNumThree"
      :page-count="100" />
    <div>
      Page Number: {{ pageNumThree }}
    </div>
    <button @click="pageNumThree++"> Click to add to pageNumThree </button>
  </body>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { FishTankPagination } from '@/index';

  export default Vue.extend({
    name: 'Pagination',

    components: {
      FishTankPagination,
    },

    data() {
      return {
        pageNumOne: 1 as number,
        pageNumTwo: 1 as number,
        pageNumThree: 5 as number,
      };
    },
  });
</script>
