<script lang="ts">
import FishTankText from './FishTankText.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'


@Component({
    components: {
        badgeNumber:FishTankText
    }
})
export default class FishTankNumberBadge extends Vue {
    
    //properties
    @Prop({default:undefined})
    value:String;
    @Prop({default:'light'})
    textShade:String
    availableShades:["light","dark","disabled"]
    @Prop({default:'notification-1'})
    theme:String;
    required:false;
    description:"Sets a theme to the badge"
    availableThemes:["theme","bgov", "btax", "notification-1", "notification-2", "notification-3","disabled"]
    
    // need to properly format for vue property decorator
    get themeClass() {
        switch(this.theme) {
            case "bgov":
                return "badge-chip--grad-bgov-bluepurple"
            case "btax":
                return "badge-chip--grad-btax-blue"              
            case "disabled":
                return "badge-chip--color-disabled"
            case "notification-2":
                return "badge-chip--color-notification-2"
            case "notification-3":
                return "badge-chip--color-notification-3"
            default:
                return "badge-chip--color-notification-1"
        }
    }

    get textClass() {
        switch(this.textShade) {
            case "dark":
                return "text--color-dark"
            case "disabled":
                return "text--color-disabled"
            default:
                return "text--color-light"
        }
    }

    get determineIndeterminate() {
        return (this.value === undefined)
    }
}
</script>

<template>
  <div class="badge-area">
      <div 
          class="badge-chip"
          :theme="theme"
          :textShade="textShade"
          :class = "[themeClass, textClass]">
          <div
              v-if="determineIndeterminate"
              class="inner-circle">
          </div>
          <span
              v-else
              :value = "value"
              class ="number">
              {{this.value}}
          </span>
      </div>
      <slot name="content">

      </slot>
  </div>
</template>

<style scoped lang="scss">
    @import '../styles/mixins';
    @import '../../node_modules/@fishtank/colors/dist/css-variable-stylesheet-text';
    @import '../../node_modules/@fishtank/type/dist/css-variable-stylesheet';
    @import "../../node_modules/@fishtank/type/dist/index.custom-properties";

    .badge-area {
        position:relative;
        display:inline-block;
    }

    .badge-chip{
        top:calc(-1*(var(--baseline)*1));
        left:calc(-3.5*var(--baseline));
        margin-left: 100%;
        border-radius:calc(var(--baseline)*2);
        height:calc(var(--baseline)*4);
        min-width:calc(var(--baseline)*4);
        position: absolute;
    }

    .inner-circle{
        display: block;
        border-radius: 2px;
        top:50%;
        left:50%;
        margin:-1.5px -1.5px;
        height:3px;
        width:3px;
        position: absolute;
        background: $color-white;
    }

    .number{
        display:flex;
        padding-right:calc(var(--baseline)*1.5);
        padding-left:calc(var(--baseline)*1.5);
        font-family: var(--font-primary);
        font-size: $fontsize-base-sm;
        font-weight: $fontweight-semi;
        float:right;
        text-align:center;
    }

    // badge colors
    .badge-chip{
        &.badge-chip--grad-bgov-bluepurple {
            background: linear-gradient(to right,  var(--badge-background-color,$color-bgov-navy) , var(--badge-background-color, $color-bgov-purple))
        }
    }

    .badge-chip{
        &.badge-chip--grad-btax-blue {
            background: linear-gradient(to right,  var(--badge-background-color,$color-bna-blue) , var(--badge-background-color, $color-btax-blue))
        }
    }

    .badge-chip{
        &.badge-chip--color-notification-1 {
            background: var(--badge-background-color, $color-notification-1);
        }
    }

    .badge-chip{
        &.badge-chip--color-notification-2 {
            background: var(--badge-background-color, $color-notification-2);
        }
    }

    .badge-chip{
        &.badge-chip--color-notification-3 {
            background: var(--badge-background-color, $color-notification-3);
        }
    }

    .badge-chip{
        &.badge-chip--color-notification-3 {
            background: var(--badge-background-color, $color-notification-3);
        }
    }

    .badge-chip{
        &.badge-chip--color-disabled {
            background: var(--badge-background-color, $color-disabled);
        }
    }

    //text colors
    .badge-chip{
        &.text--color-light {
            color: $color-white;
        }
    }

    .badge-chip{
        &.text--color-dark {
            color: $color-black;
        }
    }

    .badge-chip{
        &.text--color-disabled {
            color: $color-gray-light;
        }
    }
</style>