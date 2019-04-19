<template>
  <section>
    <box display="block" :margin="2">
      <fh size="headingMd">FishTankButton Component</fh>
      <ft>You can pass standard button attributes on the component, and they will be rendered on the button element</ft>
      <fcheck label="Disable Buttons" v-model="disabled">
        <ft 
          size="baseMd"
          color="grayDark">
          Disable Buttons: {{ disabled }}
        </ft>
      </fcheck>
      <fcheck label="Small Buttons" v-model="small">
        <ft 
          size="baseMd"
          color="grayDark">
          Small Buttons: {{ small }}
        </ft>
      </fcheck>
      <fbutton 
        :disabled="disabled" 
        :small="small" 
        type="submit">
        Click Here
      </fbutton>
    </box>

    <box display="block" :margin="2" >
      <fbutton 
        :disabled="disabled" 
        :small="small" 
        role="primary" 
        block>
        Save
      </fbutton>
    </box>

    <box display="block" :margin="2" >
      <fbutton 
        :disabled="disabled" 
        :small="small" 
        role="secondary" 
        block>
        Increment
      </fbutton>
    </box>

    <box display="block" :margin="2" >
      <fbutton 
        :disabled="disabled" 
        :small="small" 
        role="destructive" 
        name="remove-element">
        Delete
      </fbutton>
    </box>

    <box display="block" :margin="2" >
      <fbutton 
        :disabled="disabled" 
        :small="small" 
        role="outline">
        Update
      </fbutton>
    </box>

    <box display="block" :margin="2" >
      <fbutton 
        :disabled="disabled" 
        :small="small" 
        role="warning">
        Caution
      </fbutton>
    </box>
  </section>
</template>
<script>
import { FishTankButton, FishTankCheckboxV2, FishTankBox, FishTankText, FishTankHeading } from '@/index';

export default {
  components:{
    fbutton:FishTankButton,
    fcheck: FishTankCheckboxV2,
    box: FishTankBox,
    ft: FishTankText,
    fh: FishTankHeading
  },
  data(){
    return {
      disabled:false,
      small:false
    }
  }
}
</script>