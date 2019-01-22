<template>
    <div 
        :class="[disabled ? 'accordion-container-gray' : 'accordion-container']"
        :id="( id !==null? id: labelId )"
        tabindex="0"
        role="accordion"
    > 
        <div 
            class="accordion-wrapper-lg"
            @click="toggle"
            @keyup.enter="toggle"
        >
            <div class="accordion-heading-wrapper">
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
</template>

<script lang="ts">
    import Vue from 'vue'

    import { 
        ChevronUp24 
    }  from "@fishtank/icons-vue"

    interface AccordionComponentGroup {
        register(cmp:any):void,
        unregister(cmp:any):void,
        toggle(cmp:any):void
    }

    export default Vue.extend({
        components: {
            ChevronUp24
        },
        data: function(){
            return{
                visible: false
            }
        },
        props:{
            heading: {
                type: String,
                required: true
            },
            subheading: {
                type: String,
                required: false
            },
            disabled:{
                type: Boolean,
                required: false,
                default: false
            },
            id:{
                type: String,
                default: null,
                required: false
            },
            fishtankAccordionGroupShared: {
                type: Object as () => AccordionComponentGroup,
            }
        },
        inject:{
            fishtankAccordionGroupShared: {
                default: {
                    register(){},
                    unregister(){},
                    toggle(){}
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
                        this.visible = true
                        this.fishtankAccordionGroupShared.toggle(this)
                    }
                }
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

