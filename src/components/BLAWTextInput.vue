<template>
  <div class="TextInput" :name="name" :orientation="orientation" @blur="$refs.input.blur()">
    <label v-if="label">{{label}}</label>
    <div class="input-wrapper">
      <slot name="icon">
        <!-- <FishtankIcon v-if="icon" color="#777C7F" :name="icon" width="24" height="24" /> -->
      </slot>
      <input
        autocomplete="new-password"
        ref="input"
        type="text"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
        @input="$emit('input', $event.target.value)"
      />
      <slot name="below" />
    </div>
  </div>
</template>

<script>
// import FishtankIcon from './fishtank/FishtankIcon.vue'

/** Triggered input element is blurred
 * @event blur
 * @type {Event}
 */

/** Triggered input element is focused
 * @event focus
 * @type {Event}
 */

/** Triggered input element is changed (compatible with v-model)
 * @event input
 * @type {Event}
 */

/**
 * Default text input element.
 * NOTE: Uses autocomplete="new-password" to disable native autocomplete from Chrome
 */
export default {
  name: 'TextInput',
  // components: { FishtankIcon },
  props: {
    /**
     * Input element id
     */
    id: String,

    /**
     * Icon to display in input box
     */
    icon: String,

    /**
     * Label to display with input
     */
    label: String,

    /**
     * Orientation to display with label/input (ie ttb, rtl, ltr)
     */
    orientation: {
      type: String,
      default: 'ttb'
    },

    /**
     * Input element name
     */
    name: String,

    /**
     * Placeholder to display
     */
    placeholder: String,

    /**
     * Current value
     */
    value: String
  }
}
</script>

<style scoped lang="scss">
.TextInput {
  label {
    color: var(--primary-color, #777c7f);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--font-family, 'Open Sans', sans-serif);
    line-height: 26px;
    width: var(--label-width, auto);
  }

  &[orientation='ltr'] {
    align-items: center;
    display: flex;

    label { margin-right: 10px; }
  }

  &[orientation='rtl'] {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;

    label { margin-left: 10px; }
  }

  .input-wrapper {
    display: flex;
    flex-grow: 1;
    position: relative;

    .FishtankIcon {
      left: 6px;
      position: absolute;
      top: 8px;

      +input[type=text] { padding-left: 32px; }
    }

    input[type=text] {
      border-radius: 3px;
      border: 1px solid var(--border-color, #C5CACD);
      flex-grow: 1;
      font-family: var(--font-family, 'Open Sans', sans-serif);
      font-size: 16px;
      padding: 10px;

      &:focus {
        border: 1px solid #0D9DDB;
        box-shadow: inset 0 0 0 1px #0D9DDB;
        outline: none;
      }

      &::placeholder {
        color: #C5CACD;
        font-style: italic;
      }
    }
  }
}
</style>