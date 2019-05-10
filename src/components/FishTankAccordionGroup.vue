<template>
    <div
        :id="(id !== null? id:labelId)"
        role="accordion group"
    >
        <slot/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    interface AccordionComponent extends Vue{
        setFocus(): void,
        toggle(): void 
    }

    export default Vue.extend({
        data(){
            return{
                registeredChildren: [],
            }
        },
        props:{
            id:{
                type: String,
                default: null,
                required: false,
                description:"Accordion group ID."
            },
            single:{
                type: Boolean,
                default: false,
                required: true,
                description:"Allows only one accordion to be open at a time."
            }
        },
        provide: function(){
            const fishtankAccordionGroupShared = {
                register: this.register,
                unregister: this.unregister,
                closeSiblings: this.closeSiblings,
            }
            return {fishtankAccordionGroupShared}
        },
        computed:{
            labelId(): string{
                return `accordion-group-${(this as any)._uid}`
            }
        },
        methods:{
            register(componentAsThis:any):void {
                (this as any).registeredChildren.push(componentAsThis);
            },
            unregister(componentAsThis:any):void{
                let index = ((this as any).registeredChildren as any[]).indexOf(componentAsThis);
                if(index > -1){
                    (this as any).registeredChildren.splice(index, 1);
                }
            },
            closeSiblings(componentAsThis:any):void{
                (this as any).registeredChildren.map((i:any)=>{
                    i.visible = false
                })
                
            },
            // focusRadio(){
            //     let activeIndex = 0;
            //     (this as any).registeredChildren.map((c:AccordionComponent)=> {
            //         if (c.visible) { 
            //             c.setFocus() 
            //             return
            //         } else {
            //             (this as any).registeredChildren[0].setFocus()
            //         }
            //     }) 
            // }
           
        }
    })
</script>

<style scoped>

</style>
<!--
Accordion tab index accessibility issue git 'er done today. !!!! 
-->