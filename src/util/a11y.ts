export default {
  methods:{
    handleFirstTab(e:KeyboardEvent):void {
      if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing');
        
        window.removeEventListener('keydown', this.handleFirstTab);
        window.addEventListener('mousedown', this.handleMouseDownOnce);
      }
    },
    handleMouseDownOnce():void {
      document.body.classList.remove('user-is-tabbing');
      
      window.removeEventListener('mousedown', this.handleMouseDownOnce);
      window.addEventListener('keydown', this.handleFirstTab);
    }
  },
  created(){
    window.addEventListener('keydown', this.handleFirstTab);
  }
}
