<template>
  <body>
    <div>
      <h1 class="tags--heading">Binary Tags</h1>
        <span>
          <p class="tags--text"><Tag text="Label"></Tag> Active/Inactive and hover functionality </p>
        </span>
        <span>
          <p class="tags--text"> <Tag text="Label" disabled></Tag> Disabled</p>
        </span>
    </div>
    <div>
      <h1 class="tags--heading">Removeable Tags </h1>
      <span>
        <p class="tags--text"> <Tag text="Label" close></Tag> Only active state, with hover functionality</p>
      </span>
      <span>
        <p class="tags--text"> <Tag text="Label" close disabled></Tag> Disabled</p>
      </span>
    </div>
  </body>
</template>

<script lang="ts">
import Vue from "vue"
import { Tag } from "@/index"

export default Vue.extend({
  components: {
    Tag  
  }
})
</script>

<style lang="scss" scoped>
  @import "./src/styles/components/_tags";
</style>

