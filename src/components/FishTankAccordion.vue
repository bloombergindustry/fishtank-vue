<template>
    <div
        v-if="!small"
        :class="[disabled ? 'accordion-container-gray' : 'accordion-container']"
        :id="( id !==null? id: labelId )"
        tabindex="0"
        role="accordion"
    > 
        <div 
            class="accordion-wrapper-lg"
            @click="toggle"
            @keyup.enter="toggle"
            ref="accordion"
        >
            <div 
                class="accordion-heading-wrapper"
            >
                <p 
                    class="accordion-heading"
                    role="heading"
                    aria-level="3"
                > 
                    {{ heading }} 
                </p>
                <p 
                    class="accordion-sub-heading"
                    v-if="subheading"
                    role="heading"
                    aria-level="4"
                > {{ subheading }} </p>
            </div>

            <ChevronUp24 
                :class="[ visible ? 'accordion-svg-down' : 'accordion-svg-up' ]"
                aria-label="collapse / expand content"
            />
        </div>
        <div 
            class="accordion-panel"
            v-show="visible"
        >
            <slot/>
        </div>
    </div>
    <div
        v-else 
        :class="[disabled ? 'accordion-container-gray' : 'accordion-container']"
        :id="( id !==null? id: labelId )"
        tabindex="0"
        role="accordion"
    > 
        <div 
            class="accordion-wrapper-sm"
            @click="toggle"
            @keyup.enter="toggle"
            ref="accordion"
        >
            <div 
                class="accordion-heading-wrapper"
                v-if="!small"
            >
                <p 
                    class="accordion-heading"
                    role="heading"
                    aria-level="3"
                > 
                    {{ heading }} 
                </p>
                <p 
                    class="accordion-sub-heading"
                    v-if="subheading"
                    role="heading"
                    aria-level="4"
                > {{ subheading }} </p>
            </div>
            <div 
                class="accordion-heading-wrapper"
                v-else
            >
                <p 
                    class="accordion-heading-small"
                    role="heading"
                    aria-level="3"
                > 
                    {{ heading }} 
                </p>
            </div>

            <ChevronSmlUp24 
                :class="[ visible ? 'accordion-svg-down' : 'accordion-svg-up' ]"
                aria-label="collapse / expand content"
            />
        </div>
        <div 
            class="accordion-panel"
            v-show="visible"
        >
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    import { 
        ChevronUp24,
        ChevronSmlUp24 
    }  from "@fishtank/icons-vue"

    interface AccordionComponentGroup {
        register(cmp:any):void,
        unregister(cmp:any):void,
        closeSiblings(cmp:any):void
    }

    export default Vue.extend({
        components: {
            ChevronUp24,
            ChevronSmlUp24
        },
        data: function(){
            return{
                visible: false
                
            }
        },
        props:{
            heading: {
                type: String,
                required: false,
                description:"Main heading text for large accordian."
            },
            subheading: {
                type: String,
                required: false,
                description: "Sub-heading text for large accordian."
            },
            disabled:{
                type: Boolean,
                required: false,
                default: false,
                description:"Specify if accordian should be disabled."
            },
            small:{
                type: Boolean,
                required: false,
                default: false,
                description:"Specify is accordian style should be small"
            },
            id:{
                type: String,
                default: null,
                required: false
            },
            fishtankAccordionGroupShared: {
                type: Object as () => AccordionComponentGroup,
                required: false
            }
        },
        inject:{
            fishtankAccordionGroupShared: {
                default: {
                    register(){},
                    unregister(){},
                    closeSiblings(){}
                }
            }
        },
        mounted(){
            this.fishtankAccordionGroupShared.register(this)
        },
        destroyed(){
            this.fishtankAccordionGroupShared.unregister(this)
        },
       
        methods:{
            toggle(){               
                if( !this.disabled ){
                    if( this.visible ){
                        this.visible = false
                    }else{     
                        this.fishtankAccordionGroupShared.closeSiblings(this)
                        this.visible = true
                    }
                }
            },
            setFocus(){
                (this.$refs.accordion as HTMLElement).focus()
            }
        },
        computed:{ 
            labelId(): string{
                return `accordion-${(this as any)._uid}`
            }
        }
    })                                                                                                                                                                                                                                                                                                          
</script>

<style  lang="scss">
    @import "../../node_modules/@fishtank/colors/dist/index";
    @import "../../node_modules/@fishtank/type/dist/index";

    *{
        margin: 0px;
    }

    .accordion-container{
        display: flex;
        flex-direction: column;
        margin: 12px;
    }

    .accordion-wrapper-lg{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid $color-gray-lighter;
    }
    .accordion-wrapper-sm{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 6px;
        border-bottom: 1px solid $color-gray-lighter;
    }

    .accordion-container .accordion-wrapper-lg{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid $color-gray-lighter;

        &:hover{

            .accordion-heading-wrapper{

                .ft-accordion-heading{
                    color: $color-black;
                }

                .accordion-sub-heading{
                    color: $color-black;
                }

            }

            svg{
                color: $color-black;
            }

        }

    }
    .accordion-container .accordion-wrapper-sm{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 6px;
        border-bottom: 1px solid $color-gray-lighter;

        &:hover{

            .accordion-heading-wrapper{

                .ft-accordion-heading{
                    color: $color-black;
                }

                .accordion-sub-heading{
                    color: $color-black;
                }

            }

            svg{
                color: $color-black;
            }

        }

    }

    .accordion-heading-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .accordion-heading{
        color: $color-gray-dark;
        font-size: $fontsize-base-lg;
        font-weight: $fontweight-regular;
        line-height: $lineheight-base-lg;
        letter-spacing: $letterspacing-base-lg;
    } 

    .accordion-sub-heading{
        color: $color-gray;
        font-size: $fontsize-base-sm;
        font-weight: $fontweight-regular;
        line-height: $lineheight-base-sm;
        letter-spacing: $letterspacing-small;
    }

    .accordion-heading-small{
        color: $color-gray;
        font-size: $fontsize-base-md;
        font-weight: $fontweight-semi;
        line-height: $lineheight-base-md;
        letter-spacing: $letterspacing-base-md;
    } 

    svg{
        color: $color-gray;      
    }

    .accordion-panel{
        padding: 0px
    }

    .accordion-container-gray{
        display: flex;
        flex-direction: column;
        margin: 12px;
    }

    .accordion-container-gray .accordion-heading{
        color: $color-gray-lighter;
    }

    .accordion-container-gray .accordion-heading-small{
        color: $color-gray-lighter;
    }

    .accordion-container-gray .accordion-sub-heading{
        color: $color-gray-lighter;
    }
    .accordion-container-gray svg{
        color: $color-gray-lighter;
    }

    .accordion-svg-up{
        transition: 0.3s ease-in-out;
        transform: rotate(180deg);
    }
    .accordion-svg-down{
        transition: 0.3s ease-in-out;
        transform: rotate(0deg);
    }

</style>

