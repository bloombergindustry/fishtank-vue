<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import FishTankText from './FishTankText.vue'

@Component({
  components:{FText:FishTankText}
})
export default class Node extends Vue {
  @Prop({
    type:[Object, Number, String],
    required:false,
    default:false,
  })
  node: any

  _onFocus (event:any) {
    this.focused = true
    this.focusedItem = -1
    event.target.select()
  }

  focused = false;
  focusedItem = -1;
  
  @Prop({
    type:String,
    required:false,
    default:''
  })
  query: string

  _selectResult (item: any) { 
    this.$emit('change', item)
    this.focused = false
  }
}
</script>
<template>
  <div 
    :class="['ft-lookup-node-tree', node.children && node.children.length>0 ? 'ft-lookup-node-tree_has-children': null]">
    <f-text 
      class="ft-lookup-label"
      @mousedown.native="_selectResult(node)"
      @keyup.enter="_selectResult(node)">
      {{ node.text }}
    </f-text>
    <ul 
      v-if="node && node.children && node.children.length"
      class="ft-lookup-node-children">
      <node
        v-for="(child, i) in node.children" 
        :key="`${child.text+i}`" 
        :node="child" />
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/mixins";
.ft-lookup-node-tree{
  list-style: none;
  margin: 0;
  padding: 0;
}
.ft-lookup-node-children{
  margin: 0px;
  padding:0 0 0 $baseline *2;
}
.ft-lookup-label {
  &:hover,
  &:focus {
    background-color: #e7f5fb;
  }
}
.ft-lookup-node-tree_has-children > .ft-lookup-label {
  font-weight:600;
}
</style>