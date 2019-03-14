import { shallowMount as  shallow } from '@vue/test-utils'
import { expect } from "chai"
import FishTankLoaderSpinner from '@/components/FishTankLoaderSpinner.vue'

const getCleanClassNames = function(classList:any):Array<string>{
  let classArray = Array.from(classList)
  let cleanClasses = classArray.map((c:any)=>{
    return c.split('_')[1]
  })
  return cleanClasses
}

describe('FishTankLoaderSpinner.vue', () => {
  let propsData:any = {}
  let slotsData:any = {}
  
  afterEach(() => {
    propsData = {}
    slotsData = {}
  })
  const mountInput = () => {
    return shallow(FishTankLoaderSpinner, {
      slots: slotsData,
      propsData
    })
  }
  
  const wrapper = mountInput()

  it('mounts and renders without issues', () => {
    expect(wrapper.contains('div'))
  })
  it('renders with the default bgov gradient', () => {
    let linearGradient = wrapper.find('linearGradient')
    expect(linearGradient.attributes('id')).to.eq('spinner--bgov-gradient')
  })
  describe('when a theme prop is provided', () => {
    beforeEach(() => {
      propsData.theme = 'blaw'
    })
    it('renders with the blaw gradient', () => {
      const wrapper = mountInput()
      let linearGradient = wrapper.find('linearGradient')
      // console.log(linearGradient)
      expect(linearGradient.attributes('id')).to.eq('spinner--blaw-gradient')
    })
  })

  describe('when a size prop is provided', () => {
    beforeEach(() => {
      propsData.size = 'small'
    })
    it('renders at the small size', () => {
      const wrapper = mountInput()
      expect(wrapper.element.classList.contains('spinner--small')).to.be.true
    })
  })

  describe('when a loading state changes', () => {
    beforeEach(() => {
      propsData.loading = true
    })
    it('renders at the small size', () => {
      const wrapper = mountInput()
      propsData.loading = false
      setTimeout(function(){
        console.log(wrapper.html())
      }, 5000)
      // expect(wrapper.element.classList.contains('spinner--small')).to.be.true
    })
  })
  // it('contains text', () =>{
  //   slotsData.default = 'Alternate Text'
  //   const wrapper = mountInput()
  //   expect(wrapper.text()).to.equal('Alternate Text')
  // })

  // it('contains default classes of alignLeft, antialiased, colorBlack, fontSizeBaseLg and primary', () =>{
  //   const defaultClasses = [ 'alignLeft','antialiased','colorBlack','fontSizeBaseLg','primary' ]
  //   const wrapper = mountInput()
  //   let cleanClasses = getCleanClassNames(wrapper.element.classList)
  //   cleanClasses.forEach(c=>{
  //     expect(defaultClasses.indexOf(c) >-1)
  //   })
  // })
  // describe('when a font prop is provided', () => {
  //   beforeEach(() => {
  //     propsData.font = "accent"
  //   })
  //   it('render the accent font stack', () =>{
  //     const expectedClass = [ "accent" ]
  //     const wrapper = mountInput()
  //     let cleanClasses = getCleanClassNames(wrapper.element.classList)

  //     let classExists = cleanClasses.filter(c=>{
  //       return (expectedClass.indexOf(c) > -1)
  //     })
  //     expect(classExists[0]).to.equal(expectedClass[0])
  //   })
  // })

  // describe('when a size prop is changed', () => {
  //   beforeEach(() => {
  //     propsData.size = "baseLg"
  //   })
  //   it('render the accent font stack', () =>{
  //     const expectedClass = [ "fontSizeBaseLg" ]
  //     const wrapper = mountInput()
  //     let cleanClasses = getCleanClassNames(wrapper.element.classList)

  //     let classExists = cleanClasses.filter(c=>{
  //       return (expectedClass.indexOf(c) > -1)
  //     })
  //     expect(classExists[0]).to.equal(expectedClass[0])
  //   })
  // })

  // describe('when a color prop is changed', () => {
  //   beforeEach(() => {
  //     propsData.color = "blawBlue"
  //   })
  //   it('render the blawBlue font color', () =>{
  //     const expectedClass = [ "colorBlawBlue" ]
  //     const wrapper = mountInput()
  //     let cleanClasses = getCleanClassNames(wrapper.element.classList)
  //     let classExists = cleanClasses.filter(c=>{
  //       return (expectedClass.indexOf(c) > -1)
  //     })
  //     expect(classExists[0]).to.equal(expectedClass[0])
  //   })
  // })

  // describe('when a weight prop is changed', () => {
  //   beforeEach(() => {
  //     propsData.bold = true
  //   })
  //   it('render the bold font weight', () =>{
  //     const expectedClass = [ "fontWeightBold" ]
  //     const wrapper = mountInput()
  //     let cleanClasses = getCleanClassNames(wrapper.element.classList)
  //     let classExists = cleanClasses.filter(c=>{
  //       return (expectedClass.indexOf(c) > -1)
  //     })
  //     expect(classExists[0]).to.equal(expectedClass[0])
  //   })
  // })

  // describe('when a weight prop is changed', () => {
  //   beforeEach(() => {
  //     propsData.semiBold = true
  //   })
  //   it('render the bold font weight', () =>{
  //     const expectedClass = [ "fontWeightSemiBold" ]
  //     const wrapper = mountInput()
  //     let cleanClasses = getCleanClassNames(wrapper.element.classList)
  //     let classExists = cleanClasses.filter(c=>{
  //       return (expectedClass.indexOf(c) > -1)
  //     })
  //     expect(classExists[0]).to.equal(expectedClass[0])
  //   })
  // })

  // describe('when a alignment prop is changed', () => {
  //   beforeEach(() => {
  //     propsData.align = 'right'
  //   })
  //   it('render the alignment to the right', () =>{
  //     const expectedClass = [ "alignRight" ]
  //     const wrapper = mountInput()
  //     let cleanClasses = getCleanClassNames(wrapper.element.classList)
  //     let classExists = cleanClasses.filter(c=>{
  //       return (expectedClass.indexOf(c) > -1)
  //     })
  //     expect(classExists[0]).to.equal(expectedClass[0])
  //   })
  // })
})