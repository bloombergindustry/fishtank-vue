<script lang ="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import {
        FishTankContainer,
        FishTankColumn,
        FishTankBox,
        FishTankCard,
        FishTankText,
        FishTankHeading,
        FishTankLookup,
        FishTankBadge
    } from "@/index";
        @Component({
            components: {
                heading:FishTankHeading,
                card:FishTankCard,
                badge:FishTankBadge
            }
        })
    export default class Badges extends Vue {
    }
</script>

<template>
    <div class = "content">
        <heading level="1">
            Text Badges 
        </heading>
        <card>
            <table class = "tbl">
                <tr>
                    <td>
                        <badge text-shade="light" theme="notification-1" :removable ="false">Text Badge</badge>
                    <td>
                        <badge text-shade="dark" theme="notification-2" :removable ="false">Text Badge</badge>

                    </td>
                    <td>
                        <badge text-shade="light" theme="notification-3" :removable ="false">Text Badge</badge>

                    </td>
                    <td>
                        <badge text-shade="light" theme="bgov" :removable ="false">Text Badge</badge>
                    </td>
                    <td>
                        <badge text-shade="light" theme="btax" :removable ="false">Text Badge</badge>
                    </td>
                    <td>
                        <badge text-shade="disabled" theme="disabled" :removable ="false">Text Badge</badge>
                    </td>
                </tr>
            </table>

        </card>

        <heading level="1">
            Removable Text Badges
        </heading>
        <card>
            <table class = "tbl">
                <tr>
                    <td>
                        <badge text-shade="light" theme="notification-1" :removable ="true">Text Badge</badge>
                    </td>
                    <td>
                        <badge text-shade="dark" theme="notification-2" :removable ="true">Text Badge</badge>
                    </td>
                    <td>
                        <badge text-shade="light" theme="notification-3" :removable ="true">Text Badge</badge>
                    </td>
                    <td>
                        <badge text-shade="light" theme="bgov" :removable ="true">Text Badge</badge>
                    </td>
                    <td>
                        <badge text-shade="light" theme="btax" :removable ="true">Text Badge</badge>
                    </td>
                    <td>
                        <badge text-shade="disabled" theme="disabled" :removable ="true">Text Badge</badge>
                    </td>
                </tr>
            </table>
        </card>
    </div>
</template>

<style lang="scss">
.card {
    display:inline-block;
}
.tbl {
    border-spacing:25px;
}
.content {
    margin: 50px;
}
</style>