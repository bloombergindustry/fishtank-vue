<template>
  <div
    
    :class="[ disabled ? $style.accordionDisabled : $style.accordionContainer]"
    :id="( id !==null? id: labelId )"
    role="accordion"> 
    <div 
      :class="[ $style.accordionWrapper, small ? $style.accordionWrapperSm : $style.accordionWrapperLg, tabFocus ? $style.accordionClick : $style.accordionTab, 'a11y']"
      tabindex="0"
      @keypress.enter="toggle(); addAccessibilityFocus();"
      @keydown.enter=" toggle(); addAccessibilityFocus();"
      @keyup.enter="toggle(); addAccessibilityFocus();"
      @keyup.13="toggle(); addAccessibilityFocus();"
      @keydown.13="toggle(); addAccessibilityFocus();"
      @click=" toggle(); removeAccessibilityFocus();"
      ref="accordion">
      <div 
        :class="[$style.accordionHeadingWrapper]">
        <p 
          :class="[small ? $style.accordionHeadingSmall : $style.accordionHeading]"
          role="heading"
          aria-level="3"> 
          {{ heading }} 
        </p>
        <p 
          :class="[$style.accordionSubHeading]"
          v-if="subheading"
          role="heading"
          aria-level="4">{{ subheading }} </p>
      </div>

      <ChevronUp24 
        :class="[ visible ? $style.accordionSvgDown : $style.accordionSvgUp ]"
        aria-label="collapse / expand content"
      />
    </div>
    <div 
      :class="[$style.accordionPanel , tabFocus ? $style.accordionClick : $style.accordionTab, 'a11y']"
      v-show="visible"
      :tabindex='( visible ? "0" : null)'
      @keypress.enter=" addAccessibilityFocus();"
      @keydown.enter="  addAccessibilityFocus();"
      @keyup.enter=" addAccessibilityFocus();"
      @keyup.13=" addAccessibilityFocus();"
      @keydown.13=" addAccessibilityFocus();"
      @click=" removeAccessibilityFocus();">
        <slot/>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import A11y from '../util/a11y'
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
                visible: false,
                tabFocus: false
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
            removeAccessibilityFocus(){                               
                if(!this.tabFocus){
                    if(this.tabFocus){
                        this.tabFocus= false
                    }else{
                        this.tabFocus = true
                    }
                }    
            },
            addAccessibilityFocus(){
                this.tabFocus=false
            }
         
        },
        computed:{ 
            labelId(): string{
                return `accordion-${(this as any)._uid}`
            },
            getAccordionSizeClass(){
              return
            }
        }
    })                                                                                                                                                                                                                                                                                                          
</script>

<style module lang="scss">
    @import '../styles/mixins';
    .accordionClick:focus{
        outline: transparent;
    }
    .accordionTab:focus{
        outline: transparent;
    }

    .accordionContainer{
        display: flex;
        flex-direction: column;
        margin: 12px;
    }
    .accordionWrapper{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--color-gray-lighter, $color-gray-lighter);
      outline: transparent;
    }
    .accordionWrapperLg{
        padding: 12px;
    }

    .accordionWrapperSm{
        padding: 6px;
    }
   
    .accordionWrapperLg:hover .accordionSubHeading{
        color: var(--color-black, $color-black);
    }
    .accordionContainer .accordionWrapperLg:hover svg{
        color: var(--color-black, $color-black);
    }
    .accordionContainer .accordionWrapperSm:hover .accordionHeadingWrapper .accordionHeadingSmall{
        color: var(--color-black, $color-black);
    }
    .accordionContainer .accordionWrapperSm:hover svg{
        color: var(--color-black, $color-black);
    }
    .accordionHeadingWrapper{
        margin: 0px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .accordionHeading{
        margin: 0px;
        color: var(--color-gray-dark, $color-gray-dark);
        font-size: var(--fontsize-base-lg, $fontsize-base-lg);
        font-weight: var(--fontweight-regular, $fontweight-regular);
        line-height: var(--lineheight-base-lg, $lineheight-base-lg);
        letter-spacing: var(--letterspacing-base-lg, $letterspacing-base-lg);
    } 
    .accordionSubHeading{
        margin: 0px;
        color: var(--color-gray, $color-gray);
        font-size: var(--fontsize-base-sm, $fontsize-base-sm);
        font-weight: var(--fontweight-regular, $fontweight-regular);
        line-height: var(--lineheight-base-sm, $lineheight-base-sm);
        letter-spacing: var(--letterspacing-small, $letterspacing-small);
    }
    .accordionHeadingSmall{
        margin: 0px;
        color: var(--color-gray, $color-gray);
        font-size: var(--fontsize-base-md, $fontsize-base-md);
        font-weight: var(--fontweight-semi, $fontweight-semi);
        line-height: var(--lineheight-base-md, $lineheight-base-md);
        letter-spacing: var(--letterspacing-base-md, $letterspacing-base-md);
    } 
    svg{
        color: var(--color-gray, $color-gray);
    }
    .accordionPanel{
        padding: 0px        
    }
    
    .accordionDisabled{
        display: flex;
        flex-direction: column;
        margin: 12px;
    }
   
    .accordionDisabled .accordionHeading{
        color: var(--color-gray-lighter, $color-gray-lighter);
    }
    .accordionDisabled .accordionHeadingSmall{
        color: var(--color-gray-lighter, $color-gray-lighter);
    }
    .accordionDisabled .accordionSubHeading,.accordionDisabled .accordionWrapperLg:hover .accordionSubHeading{ 
        color: var(--color-gray-lighter, $color-gray-lighter);
    }
    .accordionDisabled svg{
        color: var(--color-gray-lighter, $color-gray-lighter);
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
<style lang="scss">
  @import '../styles/mixins';
    body.user-is-tabbing {
      .a11y:focus{
        box-shadow: 0 0 0 2px var(--color-selected, $color-selected);
      }
    }
</style>
