<template>
  <body>
    <div>
      <h1 class="tags--heading">Binary Tags</h1>
      <span>
        <p class="tags--text"><Tag text="Label"/> Active/Inactive and hover functionality </p>
      </span>
      <span>
        <p class="tags--text"> <Tag text="Label" disabled/> Disabled</p>
      </span>
    </div>
    <div>
      <h1 class="tags--heading">Removeable Tags </h1>
      <span>
        <p class="tags--text"> <Tag text="Label" close/> Only active state, with hover functionality</p>
      </span>
      <span>
        <p class="tags--text"> <Tag text="Label" close disabled/> Disabled</p>
      </span>
    </div>
    <div>
      <h1 class="tags--heading">Multi-Tags</h1>
      <span>
        <p class="tags--text"><MultiSelectTag/> Active/Inactive and hover functionality</p>
      </span>
      <span>
        <p class="tags--text"><MultiSelectTag disabled/> Disabled</p>
      </span>
      <span>
        <p class="tags--text"><MultiSelectTag :options= this.newOptions  /> Non-default options</p>
      </span>
    </div>
    <div>
      <h1 class="tags--heading">InputBox with Removeable Tags</h1>
      <span>
        <InputTagRemove/>
      </span>
    </div>
  </body>
</template>

<script lang="ts">
import Vue from "vue"
import { Tag } from "@/index"
import { MultiSelectTag } from "@/index"
import { InputTagRemove } from "@/index"


export default Vue.extend({
  components: {
    Tag,
    MultiSelectTag,
    InputTagRemove  
  },
  data () {
    return{
      newOptions: ["Different", "Options", "Array","Of", "Longer", "Length"]
    }
  }
})
</script>

<style lang="scss" scoped>
  @import "./src/styles/components/_tags";
</style>

