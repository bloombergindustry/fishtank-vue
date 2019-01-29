<template>
    <div
        :id="(id !== null? id:labelId)"
        role="accordion group"
        tabindex="0"
        v-on:resetgroup="resetParent"
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

    export default  Vue.extend({
        data: function(){
            return{
                registeredChildren: [],
            }
        },
        props:{
            id:{
                type: String,
                default: null,
                required: false
            },
            single:{
                type: Boolean,
                default: false,
                required: true
            }
        },
        provide: function(){
            const fishtankAccordionGroupShared = {
                register: this.register,
                unregister: this.unregister,
                toggleGroup: this.toggleGroup
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
            resetParent():void{
                console.log("RESET")
            },

            toggleGroup(componentAsThis:any):void{
                (this as any).registeredChildren.map(i=>{
                    console.log(i)
                    i.visible = false
                })
                // for( var i = 0; i < ((this as any).registeredChildren as any[]).length ; i++ ){
                    
                    
                // }
                
            },
           
        }
    })
</script>

<style scoped>

</style>