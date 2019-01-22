<template>
    <div
        :id="(id !== null? id:labelId)"
        role="accordion group"
        tabindex="0"
        @click="toggle"
    >
        <slot/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
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
            },
            toggle(componentAsThis:any):void{
                console.log(componentAsThis.labelId)
                let focus = ((this as any).registeredChildren as any[]).indexOf(componentAsThis)
                
                for( var i = 0; i < ((this as any).registeredChildren as any[]).length ; i++ ){
                    var compared = ((this as any).registeredChildren[i])
                    if( focus !== compared ){
                        console.log("hi")
                        console.log(compared.visible)
                    }
                }
                
            }
        }
    })
</script>

<style scoped>

</style>