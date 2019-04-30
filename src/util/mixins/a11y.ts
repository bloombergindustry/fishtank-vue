import Vue from "vue"
export default Vue.extend({
  created(){
    window.addEventListener('keydown', this.handleFirstTab)
  },
  mounted(){
    this.setBodyAriaForLoader(this)
  },
  destroyed(){
    this.removeBodyAriaForLoader(this)
  },
  methods:{
    handleFirstTab(e:KeyboardEvent):void {
      if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing')
        
        window.removeEventListener('keydown', this.handleFirstTab)
        window.addEventListener('mousedown', this.handleMouseDownOnce)
      }
    },
    handleMouseDownOnce():void {
      document.body.classList.remove('user-is-tabbing')
      
      window.removeEventListener('mousedown', this.handleMouseDownOnce)
      window.addEventListener('keydown', this.handleFirstTab)
    },
    setBodyAriaForLoader(vm: any){
      if (["FishTankLoaderSpinner", "FishTankLoaderContent"].indexOf(vm.$options.name) >=0){
        document.body.getAttribute('aria-busy') === null ?
          document.body.setAttribute('aria-busy','true') :
            document.body.getAttribute('aria-busy') === 'false' ? document.body.setAttribute('aria-busy','true') : null 
      }
    },
    removeBodyAriaForLoader(vm: any){
      if (["FishTankLoaderSpinner", "FishTankLoaderContent"].indexOf(vm.$options.name) >=0){
        document.body.getAttribute('aria-busy') === null ?
          null : document.body.setAttribute('aria-busy','false')
      }
    }
  },
})
