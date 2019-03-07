import { shallowMount as  shallow } from '@vue/test-utils'
import { expect } from "chai"
import FishTankText from '@/components/FishTankText.vue'
const getCleanClassNames = function(classList:any):Array<string>{
  let classArray = Array.from(classList)
  let cleanClasses = classArray.map((c:any)=>{
    return c.split('_')[1]
  })
  return cleanClasses
}
describe('FishTankText.vue', () => {
  let propsData:any = {}
  let slotsData:any = {}
  
  afterEach(() => {
    propsData = {}
    slotsData = {}
  })
  const mountInput = () => {
    return shallow(FishTankText, {
      slots: slotsData,
      propsData
    })
  }
  
  const wrapper = mountInput()

  it('mounts and renders without issues', () => {
    expect(wrapper.contains('div'))
  })
  
  it('contains text', () =>{
    slotsData.default = 'Alternate Text'
    const wrapper = mountInput()
    expect(wrapper.text()).to.equal('Alternate Text')
  })

  it('contains default classes of alignLeft, antialiased, colorBlack, fontSizeBaseLg and primary', () =>{
    const defaultClasses = [ 'alignLeft','antialiased','colorBlack','fontSizeBaseLg','primary' ]
    const wrapper = mountInput()
    let cleanClasses = getCleanClassNames(wrapper.element.classList)
    cleanClasses.forEach(c=>{
      expect(defaultClasses.indexOf(c) >-1)
    })
  })
  describe('when a font prop is provided', () => {
    beforeEach(() => {
      propsData.font = "accent"
    })
    it('render the accent font stack', () =>{
      const expectedClass = [ "accent" ]
      const wrapper = mountInput()
      let cleanClasses = getCleanClassNames(wrapper.element.classList)

      let classExists = cleanClasses.filter(c=>{
        return (expectedClass.indexOf(c) > -1)
      })
      expect(classExists[0]).to.equal(expectedClass[0])
    })
  })

  describe('when a size prop is changed', () => {
    beforeEach(() => {
      propsData.size = "baseLg"
    })
    it('render the accent font stack', () =>{
      const expectedClass = [ "fontSizeBaseLg" ]
      const wrapper = mountInput()
      let cleanClasses = getCleanClassNames(wrapper.element.classList)

      let classExists = cleanClasses.filter(c=>{
        return (expectedClass.indexOf(c) > -1)
      })
      expect(classExists[0]).to.equal(expectedClass[0])
    })
  })

  describe('when a color prop is changed', () => {
    beforeEach(() => {
      propsData.color = "blawBlue"
    })
    it('render the blawBlue font color', () =>{
      const expectedClass = [ "colorBlawBlue" ]
      const wrapper = mountInput()
      let cleanClasses = getCleanClassNames(wrapper.element.classList)
      let classExists = cleanClasses.filter(c=>{
        return (expectedClass.indexOf(c) > -1)
      })
      expect(classExists[0]).to.equal(expectedClass[0])
    })
  })

  describe('when a weight prop is changed', () => {
    beforeEach(() => {
      propsData.bold = true
    })
    it('render the bold font weight', () =>{
      const expectedClass = [ "fontWeightBold" ]
      const wrapper = mountInput()
      let cleanClasses = getCleanClassNames(wrapper.element.classList)
      let classExists = cleanClasses.filter(c=>{
        return (expectedClass.indexOf(c) > -1)
      })
      expect(classExists[0]).to.equal(expectedClass[0])
    })
  })

  describe('when a weight prop is changed', () => {
    beforeEach(() => {
      propsData.semiBold = true
    })
    it('render the bold font weight', () =>{
      const expectedClass = [ "fontWeightSemiBold" ]
      const wrapper = mountInput()
      let cleanClasses = getCleanClassNames(wrapper.element.classList)
      let classExists = cleanClasses.filter(c=>{
        return (expectedClass.indexOf(c) > -1)
      })
      expect(classExists[0]).to.equal(expectedClass[0])
    })
  })

  describe('when a alignment prop is changed', () => {
    beforeEach(() => {
      propsData.align = 'right'
    })
    it('render the alignment to the right', () =>{
      const expectedClass = [ "alignRight" ]
      const wrapper = mountInput()
      let cleanClasses = getCleanClassNames(wrapper.element.classList)
      let classExists = cleanClasses.filter(c=>{
        return (expectedClass.indexOf(c) > -1)
      })
      expect(classExists[0]).to.equal(expectedClass[0])
    })
  })
})