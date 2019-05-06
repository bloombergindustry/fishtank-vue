<template>
  <div class="page">
    <box class="nav-brand-wrap">
      <layout container tag="nav">
        <layout xsCol="12">
          <heading level="1">Page Title</heading>
        </layout>
      </layout>
    </box>
    <layout container class="main-content" tag="main">
      <layout xsCol="12" mdCol="4">
        <box justify-content="center" flex="grow">
          <fcard>Card</fcard>
        </box>
      </layout>
      <layout xsCol="12" mdCol="4">
        <box justify-content="center" flex="grow">
          <fcard>Card</fcard>
        </box>
      </layout>
      <layout xsCol="12" mdCol="4">
        <box justify-content="center" flex="grow">
          <fcard>Card</fcard>
        </box>
      </layout>
    </layout>
    <box class="nav-brand-wrap" bottom>
      <layout container tag="footer">
        <layout xsCol="12">
          <heading level="1">Page Title</heading>
        </layout>
      </layout>
    </box>
  </div>
</template>
<script>
import {
  FishTankBox as box,
  FishTankLayout as layout,
  FishTankHeading as heading,
  FishTankCard as fcard
  } from "@/index"
export default {
  components:{
    box,
    layout,
    heading,
    fcard
  }
}
</script>
<style>
.page{
  height: 100vh;
}
.nav-brand-wrap{
  background-color: lightgray;
}
.main-content {
  margin-top:24px;
  margin-bottom:24px;
}
</style>
