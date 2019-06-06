<script lang="ts">
import FishTankText from './FishTankText.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

/**
 * Issues So Far:
 * the Content child css is not preserving it's properties
 * Some of the theme colors are not gradients, maybe issue in the yaml exports?
 * Need proper vue decorator inline comments
 */

@Component({
    components: {
        badgeNumber:FishTankText
    },
    mixins: [

    ]
})
export default class FishTankBadgeV2 extends Vue {
    
    //properties
    @Prop()
    indeterminate:boolean
    @Prop({default:'light'})
    textShade:String
    availableShades:["light","dark"]
    @Prop()
    value:number
    @Prop({default:'notification-1'})
    theme:String;
    required:false;
    description:"Sets a theme to the badge"
    availableThemes:["theme","bgov", "btax", "notification-1", "notification-2", "notification-3","disabled"]
    
    // need to properly format for vue property decorator
    get themeClass() {
        switch(this.theme) {
            case "bgov":
                return "badge--grad-bgov-bluepurple"
            case "btax":
                return "badge--grad-btax-blue"              
            case "notification-2":
                return "badge--color-notification-2"
            case "notification-3":
                return "badge--color-notification-3"
            case "disabled":
                return "badge--color-disabled"
            default:
                return "badge--color-notification-1"
        }
    }

    get textClass() {
        switch(this.textShade) {
            case "dark":
                return "text--color-dark"
            default:
                return "text--color-light"
        }
    }
}
</script>

<template>
    <div>
    <div class="area">
        <div 
            class="badge"
            :theme="theme"
            :textShade="textShade"
            :class = "[themeClass, textClass]" 
            :indeterminate="indeterminate">
            <div
                v-if="indeterminate"
                class="inner-circle">
            </div>
            <span
                v-else
                :value="value"
                class ="number"
            >
                <slot name="badge_content">

                </slot>
            </span>
        </div>
        <slot name="content">

        </slot>
    </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../styles/mixins';
    @import '../../node_modules/@fishtank/colors/dist/css-variable-stylesheet-text';
    @import '../../node_modules/@fishtank/type/dist/css-variable-stylesheet';
    @import "../../node_modules/@fishtank/type/dist/index.custom-properties";

    .area {
        position:relative;
        //display:block;
    }
    .badge{
        top:-8px;
        right:-8px;
        display: inline-block; // unnes??
        border-radius: 8px;
        height:16px;
        min-width:16px;
        position: absolute;
        background: var(--badge-background-color, $color-notification-1);

        //border: 1px solid var(--badge-border-color, $color-gray-lighter);
    }

    .content {
        display: block; //uness
        //z-index: -1;
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
        //border: 1px solid var(--badge-border-color, $color-gray-lighter);
    }

    .number{
        //padding:4px;
        padding-right:6px;
        padding-left:6px;
        //vertical-align:middle; //unness? 
        font-family: "OpenSans",arial,sans-serif;
        font-size: $fontsize-base-sm;
        font-weight: $fontweight-semi;
        text-align:center;
    }

    //colors NEED TO USS CSS CUSTOM VARIABLES refactor later
    .badge{
        &.badge--grad-bgov-bluepurple {
            background: var(--badge-background-color, $color-bgov-navy);
        }
    }

    .badge{
        &.badge--grad-btax-blue {
            background: var(--badge-background-color, $color-btax-dark-blue);
        }
    }

    .badge{
        &.badge--color-notification-1 {
            background: var(--badge-background-color, $color-notification-1);
        }
    }

    .badge{
        &.badge--color-notification-2 {
            background: var(--badge-background-color, $color-notification-2);
        }
    }

    .badge{
        &.badge--color-notification-3 {
            background: var(--badge-background-color, $color-notification-3);
        }
    }

    .badge{
        &.badge--color-notification-3 {
            background: var(--badge-background-color, $color-notification-3);
        }
    }

    .badge{
        &.badge--color-disabled {
            background: var(--badge-background-color, $color-disabled);
        }
    }

    //text colors

    .badge{
        &.text--color-light {
            color: $color-white;
        }
    }

    .badge{
        &.text--color-dark {
            color: $color-black;
        }
    }
</style>