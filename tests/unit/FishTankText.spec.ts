import { mount, shallowMount as  shallow } from '@vue/test-utils'
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
  const propsData = {
    prop1: '',
    prop2: []
  }
  const slotsData = {
    default: "Test slot text"
  }
  // const wrapper = mount(
  //   FishTankText,
  //   { propsData }
  // )

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
})