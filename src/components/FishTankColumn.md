
```vue
<template>
  <section>
    <fish-tank-container as="header">
      <fish-tank-column display="block" as="nav" :column="12">
        <fish-tank-heading level="1">Page Layout Example using FishTankContainer and FishTank Column</fish-tank-heading>
        <fish-tank-text>The container and column components, when used together define and provide Fish Tank Layout.</fish-tank-text>
        <fish-tank-text>Container provides centered positioning, responsive breakpoints from 752px and larger, and a fluid max width breakpoint below 752px. </fish-tank-text>
        <fish-tank-text>The container has an optional property to make it fluid through all breakpoint for full width layouts.</fish-tank-text>
        <br>
        <fish-tank-text>Column provides a responsive, flexbox grid with Fish Tank defined gutters. Column can be set across xs, sm, md, lg, and xl breakpoint, <a target="_blank" href="https://fishtank.bna.com/space">defined by Fish Tank UX guidelines.</a></fish-tank-text>
      </fish-tank-column>
    </fish-tank-container>
  </section>
</template>
```

