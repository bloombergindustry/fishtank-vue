<template>
    <div
        v-if="!small"
        :class="[ disabled ? $style.accordionContainerGray : $style.accordionContainer]"
        :id="( id !==null? id: labelId )"
        role="accordion"
    > 
        <div 
            :class="[$style.accordionWrapperLg]"
            tabindex="0"
            @keypress="toggle"
            @keydown.enter="toggle"
            @keyup.enter="toggle"
            @keyup.13="toggle"
            @keydown.13="toggle"
            @click="toggle"
            ref="accordion"
        >
            <div 
                :class="[$style.accordionHeadingWrapper]"
            >
                <p 
                    :class="[$style.accordionHeading]"
                    role="heading"
                    aria-level="3"
                > 
                    {{ heading }} 
                </p>
                <p 
                    :class="[$style.accordionSubHeading]"
                    v-if="subheading"
                    role="heading"
                    aria-level="4"
                > {{ subheading }} </p>
            </div>

            <ChevronUp24 
                :class="[ visible ? $style.accordionSvgDown : $style.accordionSvgUp ]"
                aria-label="collapse / expand content"
            />
        </div>
        <div 
            :class="[$style.accordionPanel]"
            v-show="visible"
            :tabindex='( visible ? "0" : null)'
        >
            <slot/>
        </div>
    </div>
    <div
        v-else 
        :class="[disabled ? $style.accordionContainerGray : $style.accordionContainer]"
        :id="( id !==null? id: labelId )"
        tabindex="0"
        role="accordion"
    > 
        <div 
            :class="[$style.accordionWrapperSm]"
            @click="toggle"
            @keyup.enter="toggle"
            ref="accordion"
        >
            <div 
                :class="[$style.accordionHeadingWrapper]"
                v-if="!small"
            >
                <p 
                    :class="[$style.accordionHeading]"
                    role="heading"
                    aria-level="3"
                > 
                    {{ heading }} 
                </p>
                <p 
                    :class="[$style.accordionSubHeading]"
                    v-if="subheading"
                    role="heading"
                    aria-level="4"
                > {{ subheading }} </p>
            </div>
            <div 
                :class="[$style.accordionHeadingWrapper]"
                v-else
            >
                <p 
                    :class="[$style.accordionHeadingSmall]"
                    role="heading"
                    aria-level="3"
                > 
                    {{ heading }} 
                </p>
            </div>

            <ChevronSmlUp24 
                :class="[ visible ? $style.accordionSvgDown : $style.accordionSvgUp ]"
                aria-label="collapse / expand content"
            />
        </div>
        <div 
            :class="[$style.accordionPanel]"
            v-show="visible"
            :tabindex='( visible ? "0" : null)'
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
            // setFocus(){
            //     (this.$refs.accordion as HTMLElement).focus()
            // }
        },
        computed:{ 
            labelId(): string{
                return `accordion-${(this as any)._uid}`
            }
        }
    })                                                                                                                                                                                                                                                                                                          
</script>

<style module lang="scss">
    @import "../../node_modules/@fishtank/colors/dist/index";
    @import "../../node_modules/@fishtank/type/dist/index";

    
    .accordionContainer{
        display: flex;
        flex-direction: column;
        margin: 12px;
    }

    .accordionWrapperLg{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid $color-gray-lighter;
    }
    .accordionWrapperSm{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 6px;
        border-bottom: 1px solid $color-gray-lighter;
    }

    .accordionContainer .accordionWrapperLg{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid $color-gray-lighter;

        &:hover{

            .accordionHeadingWrapper{

                .accordionHeading{
                    color: $color-black;
                }

                .accordionSubHeading{
                    color: $color-black;
                }

            }

            svg{
                color: $color-black;
            }

        }

    }
    .accordionContainer .accordionWrappeSm{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 6px;
        border-bottom: 1px solid $color-gray-lighter;

        &:hover{

            .accordionHeadingWrapper{

                .accordionHeading{
                    color: $color-black;
                }

                .accordionSubHeading{
                    color: $color-black;
                }

            }

            svg{
                color: $color-black;
            }

        }
        
    }

    .accordionHeadingWrapper{
        margin: 0px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .accordionHeading{
        margin: 0px;
        color: $color-gray-dark;
        font-size: $fontsize-base-lg;
        font-weight: $fontweight-regular;
        line-height: $lineheight-base-lg;
        letter-spacing: $letterspacing-base-lg;
    } 

    .accordionSubHeading{
        margin: 0px;
        color: $color-gray;
        font-size: $fontsize-base-sm;
        font-weight: $fontweight-regular;
        line-height: $lineheight-base-sm;
        letter-spacing: $letterspacing-small;
    }

    .accordionHeadingSmall{
        margin: 0px;
        color: $color-gray;
        font-size: $fontsize-base-md;
        font-weight: $fontweight-semi;
        line-height: $lineheight-base-md;
        letter-spacing: $letterspacing-base-md;
    } 

    svg{
        color: $color-gray;      
    }

    .accordionPanel{
        padding: 0px
    }

    .accordionContainerGray{
        display: flex;
        flex-direction: column;
        margin: 12px;
    }

    .accordionContainerGray .accordionHeading{
        color: $color-gray-lighter;
    }

    .accordionContainerGray .accordionHeadingSmall{
        color: $color-gray-lighter;
    }

    .accordionContainerGray .accordionSubHeading{
        color: $color-gray-lighter;
    }
    .accordionContainerGray svg{
        color: $color-gray-lighter;
    }

    .accordionSvgUp{
        transition: 0.3s ease-in-out;
        transform: rotate(180deg);
    }
    .accordionSvgDown{
        transition: 0.3s ease-in-out;
        transform: rotate(0deg);
    }

</style>

