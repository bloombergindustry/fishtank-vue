<template>
    <div
        :id="(id !== null? id:labelId)"
        role="accordion group"
        tabindex="0"
    >
        <slot/>
    </div>
</template>

<script lang="ts">
    export default {
        data: function(){
            return{
                registeredChildren: []
            }
        },
        props:{
            id:{
                type: String,
                default: null,
                required: false
            }
        },
        provide: function(){
            const fishtankAccordionGroupShared = {
                register: this.register,
                unregister: this.unregister
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
            }
        }
    }
</script>

<style scoped>

</style>