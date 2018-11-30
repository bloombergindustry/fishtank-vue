import Vue , { VueConstructor, ComponentOptions } from 'vue'
declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface VueConstructor {
    options: ComponentOptions<Vue>
  }
}

declare module 'vue/types/options' {
  interface Tokens {
      template: string;
  }
  interface ComponentOptions<V extends Vue> {
    introduction?: string,
  }
  interface ComponentOptions<V extends Vue> {
    description?: string;
  }
  interface ComponentOptions<V extends Vue> {
    token?: string | Array<String> | Tokens
  }
}