<template>
  <section>
    <h1>BLaw RadioList Component</h1>
    <radio-list 
      v-model="valueBlaw" 
      label="Example" 
      name="example" 
      :items="items">
      <template slot="example-title-slot-3">
        Item 3 from slot
      </template>
    </radio-list>
    <div>value={{ valueBlaw }}</div>


    <h1>BLaw RadioList Component</h1>
    <radio-list 
      v-model="valueBlaw2" 
      label="Example2" 
      name="example2" 
      :items="items2">
      <template slot="example-title-slot-3">
        Item 2 from slot
      </template>
    </radio-list>
    <div>value={{ valueBlaw2 }}</div>

    <!-- <h1>FishTank Radio and RadioGroup component</h1> -->
    <!-- <fish-tank-radio-group>
      <FishTankRadio 
        v-model="val"
        value="alpha" 
        label="alpha"
        name="alpha"/>
      <FishTankRadio 
        v-model="val" 
        disabled
        value="alpha" 
        label="alpha"
        name="alpha"/>
      <FishTankRadio 
        v-model="val"
        value="beta" 
        label="beta"
        name="beta"/>
      <FishTankRadio 
        v-model="val"
        disabled
        value="beta" 
        label="beta"
        name="beta"/>
      {{ val }}
    </fish-tank-radio-group>
    <hr>
    <fish-tank-radio-group>
      <FishTankRadio 
        v-model="valTwo"
        value="gamma" 
        label="gamma"
        name="gamma"
      />
      <FishTankRadio 
        v-model="valTwo"
        value="delta" 
        label="delta"
        name="delta"
      />
    </fish-tank-radio-group>
    <FishTankRadio 
        v-model="valTwo"
        value="theta" 
        label="theta"
        name="theta"
      /> -->
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { 
  // FishTankRadioGroup, 
  FishTankRadioList as RadioList } from '@/index'


export default Vue.extend({
  components:{
    // FishTankRadioGroup,
    RadioList,
  },
  data(){
    return {
      val:"alpha",
      valTwo:null,
      arr:['epsilon'],
      baseVal:false,
      baseArr:[],
      items: [
        { label: "Item 1", value: "1" },
        { label: "Item 2", value: "2" },
        { label: "Item 3", slot: "example-title-slot-3", value: "3" }
      ],
      valueBlaw: "1",

      items2: [
        { label: "Item 1", value: "1" },
        { label: "Item 2", value: "2" },
        { label: "Item 3", slot: "example-title-slot-3", value: "3" }
      ],
      valueBlaw2: "1"
    }
  }
  
})
</script>