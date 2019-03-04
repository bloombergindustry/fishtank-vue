import { mount, shallow } from '@vue/test-utils'
import { expect } from "chai"
import FishTankText from '@/components/FishTankText.vue'

describe('FishTankText.vue', () => {
  it('mounts and renders without issues', () => {
    const propsData = {
      prop1: '',
      prop2: []
    }
    const slotsData = {
      default: "Text slot text"
    }
    // const wrapper = mount(
    //   FishTankText,
    //   { propsData }
    // )

    const wrapper = shallow(FishTankText, {
      slots: slotsData,
      propsData
    })

    describe('Basic Usage', ()=>{
      slotsData.default = "overriding slot text"
      beforeEach(() => {
        // slotsData.default = "overriding slot text"
        // propsData = {}
      })      
      let alignLeftExist = wrapper.find('[class^="FishTankText_antialiased"]').element as HTMLElement
      expect(alignLeftExist).to.exist
      expect(wrapper.html()).to.contain('Text slot text')
    })
    // expect(wrapper.html()).to.equal('<div></div>')
    // expect(wrapper.find('.does-not-exist').exists()).to.be.false
  })
})