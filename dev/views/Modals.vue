<template>
  <div>
    <br>
<<<<<<< HEAD
    <fish-tank-text bold>
      Modals Version 1
    </fish-tank-text>
    <br>
    <div>
      <button-primary @click="modal1 = true">
        Open Standard Modal
      </button-primary>
      <button-primary @click="modal2 = true">
        Open Fixed Modal
      </button-primary>
      <button-primary @click="dialog = true">
        Open Dialog
      </button-primary>
    </div>
    <br>
    <div>
      <button-primary @click="modal3 = true">
        Health Analytics Search
      </button-primary>
    </div>
    <br>
    <fish-tank-text bold>
      Modals Version 2
    </fish-tank-text>
    <br>
    <div>
      <button-primary @click="modal4 = true">
        Health Analytics Search
      </button-primary>
=======
    <fish-tank-text bold> Modals Version 2 </fish-tank-text>
    <br>
    <div>
      <button-primary @click="modal1 = true">Health Analytics Search One</button-primary>
      <button-primary @click="modal2 = true">Health Analytics Search Two </button-primary>
      <button-primary @click="modal3 = true">Health Analytics Search Three</button-primary>
      <button-primary @click="modal4 = true">Health Analytics Search Four</button-primary>
>>>>>>> feat: Added Overflow prop to modal, to set overflow-y property on modal body content; Added open and close event emitters to allow binding to Modal open and close.
    </div>
    <modal-v2
      v-model="modal1"
      heading="Heading"
      escapeable> 
      modal body content
                 <div slot="footerRight">
                   <button-primary>Action</button-primary>
                 </div>
                 <div slot="footerLeft">
                   <button-primary>Search</button-primary>
                 </div>
<<<<<<< HEAD
    </modal>
=======
    </modal-v2>
>>>>>>> feat: Added Overflow prop to modal, to set overflow-y property on modal body content; Added open and close event emitters to allow binding to Modal open and close.

    <modal-v2
      v-model="modal2"
      heading="Fixed Modal"
      class="my-custom-class"
      fixed>
      <search24 slot="headingIcon" />
<<<<<<< HEAD
      <lorem-ipsum />
      <template slot="headingExtra">
        <button-feature-label>
          <template slot="icon">
            <home24 />
          </template>
          <template slot="label">
            Set as Home
          </template>
=======
      <lorem-ipsum/>
      <template slot="headingExtra">
        <button-feature-label >
          <template slot="icon">
            <home24 />
          </template>
          <template slot="label"> Set as Home </template>
>>>>>>> feat: Added Overflow prop to modal, to set overflow-y property on modal body content; Added open and close event emitters to allow binding to Modal open and close.
        </button-feature-label>
      </template>
      <div slot="footerRight">
        <!-- <ButtonSecondary disabled>Close</ButtonSecondary> -->
        <button-primary>Search</button-primary>
      </div>
    </modal-v2>

    <dialog-box
      v-model="dialog"
      width="250px"
      heading="Heading"
      escapeable
      dialog>
      message
    </dialog-box>

    <modal-v2
      v-model="modal3"
      heading="Health Analytics Search"
      width="70%"
<<<<<<< HEAD
      fixed>
      <search32 slot="headingIcon" />

      <template slot="headingExtra">
        <button-feature-label>
=======
      fixed
      overflow="hidden"
      @open="logger('open')">
      <search32 slot="headingIcon"/>

      <template slot="headingExtra">
        <button-feature-label >
>>>>>>> feat: Added Overflow prop to modal, to set overflow-y property on modal body content; Added open and close event emitters to allow binding to Modal open and close.
          <template slot="icon">
            <home24 />
          </template>
          <template slot="label">
            Set as Home
          </template>
        </button-feature-label>
<<<<<<< HEAD
        <button-feature-label>
=======
        <button-feature-label >
>>>>>>> feat: Added Overflow prop to modal, to set overflow-y property on modal body content; Added open and close event emitters to allow binding to Modal open and close.
          <template slot="icon">
            <favorite24 />
          </template>
          <template slot="label">
            Set as Favorite
          </template>
        </button-feature-label>
      </template>

      <fish-tank-text> 
<<<<<<< HEAD
        <lorem-ipsum /> 
=======
        <lorem-ipsum/> 
>>>>>>> feat: Added Overflow prop to modal, to set overflow-y property on modal body content; Added open and close event emitters to allow binding to Modal open and close.
      </fish-tank-text>

      <template slot="footerRight">
        <a 
          href="#"
          class="clear_link">
          <fish-tank-text color="gray">
            Clear All
          </fish-tank-text>
        </a>
        <button-primary>Action</button-primary>
      </template>

      <template slot="footerLeft">
<<<<<<< HEAD
        <button-feature-label>
          <template slot="icon">
            <alert-add24 />
          </template>
          <template slot="label">
            Create Alert
          </template>
        </button-feature-label>
        <button-feature-label>
          <template slot="icon">
            <duplicate24 />
          </template>
          <template slot="label">
            Add Search to Dashboard
          </template>
=======
        <button-feature-label >
          <template slot="icon"> <alert-add24/> </template>
          <template slot="label"> Create Alert </template>
        </button-feature-label>
        <button-feature-label >
          <template slot="icon"> <duplicate24/> </template>
          <template slot="label"> Add Search to Dashboard </template>
>>>>>>> feat: Added Overflow prop to modal, to set overflow-y property on modal body content; Added open and close event emitters to allow binding to Modal open and close.
        </button-feature-label>
      </template>
    </modal-v2>

    <modal-v2
      v-model="modal4"
      width="80%"
<<<<<<< HEAD
      fixed> 
      <search32 slot="headingIcon" />
=======
      fixed
    > 
      <search32 slot="headingIcon"/>
>>>>>>> feat: Added Overflow prop to modal, to set overflow-y property on modal body content; Added open and close event emitters to allow binding to Modal open and close.

      <template slot="heading"> 
        <fish-tank-text
          color="grayDark"
          size="headingSm">
          Health Analytics Search2 
        </fish-tank-text> 
      </template>

      <template slot="headingExtra">
<<<<<<< HEAD
        <button-feature-label>
          <template slot="icon">
            <home24 />
          </template>
          <template slot="label">
            Set as Home
          </template>
        </button-feature-label>
        <button-feature-label>
          <template slot="icon">
            <favorite24 />
          </template>
          <template slot="label">
            Set as Favorite
          </template>
=======
        <button-feature-label >
          <template slot="icon"> <home24/> </template>
          <template slot="label"> Set as Home </template>
        </button-feature-label>
        <button-feature-label >
          <template slot="icon"> <favorite24/> </template>
          <template slot="label"> Set as Favorite </template>
>>>>>>> feat: Added Overflow prop to modal, to set overflow-y property on modal body content; Added open and close event emitters to allow binding to Modal open and close.
        </button-feature-label>
      </template>

      <fish-tank-text> 
<<<<<<< HEAD
        <lorem-ipsum /> 
      </fish-tank-text>

      <template slot="footerRight">
        <a 
          href="#"
          class="clear_link">
          <fish-tank-text color="gray">
            Clear All
          </fish-tank-text>
        </a>
        <button-primary>Action</button-primary>
      </template>

      <template slot="footerLeft">
        <button-feature-label>
          <template slot="icon">
            <alert-add24 />
          </template>
          <template slot="label">
            Create Alert
          </template>
        </button-feature-label>
        <button-feature-label>
          <template slot="icon">
            <duplicate24 />
          </template>
          <template slot="label">
            Add Search to Dashboard
          </template>
=======
        <lorem-ipsum/> 
      </fish-tank-text>

      <template slot="footerRight">
        <a href="#" class="clear_link"><fish-tank-text color="gray">Clear All</fish-tank-text></a>
        <button-primary>Action</button-primary>
      </template>

      <template slot="footerLeft" >
        <button-feature-label >
          <template slot="icon"> <alert-add24/> </template>
          <template slot="label"> Create Alert </template>
        </button-feature-label>
        <button-feature-label >
          <template slot="icon"> <duplicate24/> </template>
          <template slot="label"> Add Search to Dashboard </template>
>>>>>>> feat: Added Overflow prop to modal, to set overflow-y property on modal body content; Added open and close event emitters to allow binding to Modal open and close.
        </button-feature-label>
      </template>
    </modal-v2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { 
  ModalV2, 
  DialogBox, 
  ButtonPrimary, 
  ButtonSecondary, 
  ButtonFeatureLabel,
  FishTankText 
} from '@/index'

import LoremIpsum from '../LoremIpsum.vue'
import { 
  Search24, 
  Search32, 
  HomeO24 as Home24,
  AlertAdd24,
  FavoriteO24 as Favorite24,
  Duplicate24
} from '@fishtank/icons-vue'

export default Vue.extend({
  components: {
    ModalV2,
    DialogBox,
    ButtonPrimary,
    ButtonFeatureLabel,
    FishTankText,
    LoremIpsum,
    Search24,
    Search32,
    Home24,
    AlertAdd24,
    Favorite24,
    Duplicate24
  },
  data() {
    return {
      modal1: false,
      modal2: false,
      dialog: false,
      modal3: false,
      modal4: true
    }
  },
  methods: {
    logger (msg:any):void {
      console.log(msg)
    }
  }
})
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
}

.clear_link{
  margin-right: 12px;
}

.padding{
  margin: 12px;
}

.heading-text{
  font-size: 28px;
}
</style>
