<template>
  <section>
    <inputtext
      :value="text"
      label="Text Input Type"
      placeholder="Text Input Type"
      type="text"
      @input="text = $event">
      <searchicon 
        slot="leftIcon" 
        class="test" 
        @click="exampleSearchFunc(text)" />
    </inputtext>

    <inputtext
      :value="text"
      label="Text Input Type"
      placeholder="Text Input Type"
      type="text"
      orientation="rtl"
      @input="text = $event">
      <searchicon slot="leftIcon" />
      <ftext slot="rightIcon">
        @bna.com
      </ftext>
    </inputtext>

    <inputtext
      class="custom"
      :value="text"
      label="Text Input Type"
      placeholder="Text Input Type"
      type="text"
      orientation="ltr"
      @input="text = $event">
      <searchicon slot="leftIcon" />
    </inputtext>


    <inputtext
      v-model="password"
      label="Password Input Type"
      type="password" />
    <inputtext
      v-model="number"
      label="Number Input Type"
      type="number"
      error />
    <inputtext
      label="Input Required Example"
      type="number"
      required
      @reset="clearError" />
    <inputtext
      v-model="val"
      label="Input Number Error Example"
      type="number"
      :error="error"
      @reset="clearError" />
    <!--
    <InputText
      :value="val"
      label="Telephone Input Type"
      type="tel"/>
    <InputText
      :value="val"
      label="Search Input Type"
      type="search"/>
    <InputText
      :value="val"
      label="Email Input Type"
      type="email"/>
    <InputText
      :value="val"
      label="URL Input Type"
      type="url"/>-->
    <h3> List of Input Values</h3>
    <p><b>Text Input Value : </b> {{ text }} </p>
    <p><b>Password Input Value : </b> {{ password }} </p>
    <p><b>Number Input Value : </b> {{ number }} </p>
    <p><b>Number Error Input Value : </b> {{ val }} </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { FishTankTextInputV2 , FishTankText} from '@/index'
import { Search24 } from '@fishtank/icons-vue'


export default Vue.extend({
  components:{
    inputtext:FishTankTextInputV2,
    searchicon: Search24,
    ftext:FishTankText
  },
  data(){
    return {
      val:"",
      text: "",
      password: "",
      number: "",
      text_area: "",
      error:"Error: Please Provide a Valid Pin"
    }
  }, 
  methods:{
    clearError(){
      if (this.error.length) this.error=""
    },
    exampleSearchFunc(t:String){
      // eslint-disable-next-line no-console
      console.log("search")
      this.$emit('input', t)
    }
  }
  
})
</script>
<style>
.custom .input-wrapper{
  flex:1 0 auto;
}
.custom .label-wrapper{
  width:50%;
}
</style>
