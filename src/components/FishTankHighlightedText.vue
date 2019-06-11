<template>
  <span class="HighlightedText" v-html="_transformedContent"/> 
</template>

<script>
export default {
  name: 'HighlightedText',
  props: {
    content: String,
    term: String
  },
  computed: {
    _transformedContent () {
      return this.content.replace(new RegExp(`(${this.term})`, 'ig'), `<mark class="highlight">$1</mark>`)
    }
  }
}
</script>

<style scoped lang="scss">
.HighlightedText {
  & /deep/ .highlight {
    background-color: var(--highlight-color, #FFE1A0);
    color: var(--invert-hightlight-color, #333);
  }
}
</style>
