
import { shallowMount as  shallow, mount } from "@vue/test-utils"
import { expect } from "chai"
import  RadioList from "@/components/FishTankRadioList.vue"


describe('FishTankRadioList.vue', () => {
  it('should fire change event when value changes', () => {
    const props = {
      propsData: {
        items: [{ label: 'Item 1', value: '1' }]
      }
    }
    const wrapper = mount(RadioList, props)
    wrapper.find('input[type=radio]').trigger('click')
    expect(wrapper.emitted().change[0][0].length).to.eq(1)
  })
})