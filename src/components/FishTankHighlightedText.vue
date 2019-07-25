<template>
  <span 
    class="HighlightedText" 
    v-html="_transformedContent" />
</template>

<script>
export default {
  name: 'HighlightedText',
  props: {
    content: String,
    term: String,
    highlight: {
      type: String,
      required: false,
      default: "color-highlight-1",
      description: "highlight background color : color-highlight-1 (yellow), color-highlight-2 (blue), and color-highlight-3 (green)."
    }
  },
  computed: {
    _transformedContent () {
      return this.content.replace(new RegExp(`(${this.term})`, 'ig'), `<mark class="highlight">$1</mark>`)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/mixins';
@import "../../node_modules/@fishtank/colors/dist/index";
@import "../../node_modules/@fishtank/type/dist/index";

.HighlightedText {
  & /deep/ .highlight {
    background-color: $color-highlight-1;
  }
}

.HighlightedText2 {
  & /deep/ .highlight {
    background-color: $color-highlight-2;
  }
}

.HighlightedText3 {
  & /deep/ .highlight {
    background-color: $color-highlight-3;
  }
}
/deep/ .highlight{
  padding: 0px 4px;
}
</style>
