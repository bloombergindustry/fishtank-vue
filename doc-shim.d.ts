import Vue , { VueConstructor, ComponentOptions } from 'vue'
declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface VueConstructor {
    options: ComponentOptions<Vue>
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    __docs?: string
  }
}