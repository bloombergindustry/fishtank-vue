<template>
  <body>
    <div>
      Default
    </div>
    <fishtank-pagination
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
    <fishtank-pagination
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
    <fishtank-pagination
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
  import { FishtankPagination } from '@/index';

  export default Vue.extend({
    name: 'Pagination',

    components: {
      FishtankPagination,
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
