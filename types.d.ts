import Vue from 'Vue'

export interface CheckboxGroup {
  children:any
  childCount:number
  register(checkbox:any):void
  unregister(checkbox:any):void
  EventBus:Vue
}


declare module 'vue/types/vue' {
  interface Vue {
    checkboxGroup:CheckboxGroup
  }
}
