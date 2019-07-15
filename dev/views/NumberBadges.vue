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
        FishTankNumberBadge
    } from "@/index";

    import{ 
        Inbox32,
        Email32,
        Like32,
        Twitter32
        
    } from '@fishtank/icons-vue'
        @Component({
            components: {
                heading:FishTankHeading,
                card:FishTankCard,
                badge:FishTankNumberBadge,
                email:Email32,
                like:Like32,
                inbox:Inbox32,
                twitter:Twitter32
            }
        })
    export default class NumberBadges extends Vue {

    }
</script>

<template>
    <div class = "content">
        <heading level="1">
            Number Badges
        </heading>
        <card>
            <table class = "tbl">
                <tr>
                    <td>
                        <badge theme ="bgov" :value="9" >
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                    <td>
                        <badge theme ="btax" :value="99">
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                    <td>
                        <badge theme ="notification-1" :value="999" >
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                    <td>
                        <badge theme ="notification-2" text-shade="dark" :value="9999" >
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                    <td>
                        <badge theme ="notification-3" :value="1" >
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                    <td>
                        <badge theme ="neutral" text-shade="dark" :value="1" >
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                    <td>
                        <badge theme ="disabled" text-shade="disabled" :value="0" >
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                </tr>
            </table>

        </card>

        <heading level="1">
            Indeterminate Badges
        </heading>
        <card>
            <table class = "tbl">
                <tr>
                    <td>
                        <badge theme ="bgov">
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                    <td>
                        <badge theme ="btax">
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                    <td>
                        <badge theme ="notification-1">
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                    <td>
                        <badge theme ="notification-2">
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                    <td>
                        <badge theme ="notification-3">
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
                    </td>
                    <td>
                        <badge theme ="disabled" text-shade="disabled">
                            <template v-slot:content>
                                <inbox />
                            </template>
                        </badge>
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
