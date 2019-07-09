<template>
  <button
    :class="{[$style.button] : true , [$style.buttonDisabled] : disabled , [$style.buttonBlock] : block}"
    :disabled="disabled"
    type="button"
    v-on="$listeners">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { a11y } from "../util/mixins"

@Component({
  mixins:[
    a11y
  ]
})

export default class FishTankBaseButton extends Vue {

  /**
   * Specify if button should be disabled
   */
  @Prop({
    default: false,
    type:Boolean
  })
  disabled:Boolean

  /**
   * Changes Button to full width block element
   */
  @Prop({
    default:false,
    type: Boolean
  })
  block:Boolean

  /**
   * Optional name of the button, which can be used with the form data.
   */
  @Prop({
    type:String,
    default:"",
    required:false
  })
  name:String

  // computed functions
  get listeners(): Record<string, Function | Function[]> {
    return {
      ...this.$listeners,
      click: ($event: MouseEvent) => {
        if (this.disabled) return
        /**
        * Mouse click event.
        * @event click
        * @type {Event}
        */
        this.$emit("click", $event)
      }
    }
  }
  // data
}
</script>

<style module lang="scss">
  @import '../styles/mixins';

  body.user-is-tabbing button:focus {
    box-shadow: 0 0 0 2px $color-selected;
  }

  .baseButton{
    @include baseButton();
  }
  .baseButtonSm{
    @include baseButtonSm();
  }
  .button {
    @include baseButton();
    box-sizing: border-box;

    border-radius: 2px;
    border-width: 1px;
    border-style: solid;

    outline: none;

    &:active,
    &:hover {
      cursor: pointer;

      &:disabled {
        cursor: default;
        box-shadow: none;
      }
    }

    &:active {
      box-shadow: none;
    }

  }

  .buttonBlock {
    display: block;
    width: 100%;
  }
</style>
