<template>
  <box>
    <box>
      <box display="flex" md-direction="row" xs-direction="columnReverse">
        <box color="highlight2" :md-column="3" :md-margin-right="1" :xs-margin-bottom="2">
          <box-text bold>Sidear Component**</box-text>
        </box>
        <box color="highlight1" :md-column="9" :md-margin-left="1" :xs-margin-bottom="2" flex-grow>
          <box-text bold>Main Component</box-text>
          <box-text>Main Component Content</box-text>
        </box>
      </box>
      <box display="flex" margin-top="12" md-direction="row" xs-direction="column">
        <box color="highlight2" :md-column="3" :md-margin-right="1" :xs-margin-bottom="2">
          <box-text bold>Sidear Component**</box-text>
        </box>
        <box color="highlight1" :md-column="9" :md-margin-left="1" :xs-margin-bottom="2" flex-grow>
          <box-text bold>Main Component</box-text>
          <box-text>Main Component Content</box-text>
        </box>
      </box>
    </box>

    <box display="flex" justify-content="center" :margin-top="12" :margin-bottom="12">
      <box-text font="accent" size="headingMd">Main Title</box-text>
    </box>
    <box
      display="flex"
      flex="grow"
      sm-direction="column"
      md-direction="row"
      md-flex-direction="column"
    >
      <box color="grayLightest" :md-column="3" md-margin-right="3" padding-y="4" padding-x="4">
        <card>
          <box-text bold>Side-bar</box-text>
        </card>
      </box>

      <box
        color="grayLightest"
        :md-column="9"
        :style="{'min-height': '80vh'}"
        padding-y="4"
        padding-x="4"
      >
        <card display="flex" flex="grow">
          <box-text bold>mainContent-Area</box-text>
        </card>
      </box>
    </box>
  </box>
</template>

