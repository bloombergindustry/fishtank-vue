/* eslint-disable no-console */
import { expect } from "chai"
import { mount } from "@vue/test-utils"
import {FishTankCheckboxV2 as Checkbox} from "@/index"

describe('FishTankCheckbox', () => {
  const props = {
    propsData: {
      label: 'Item 1', value: false
    }
  }
  it('should fire change event when checkbox changes', () => {
    const wrapper = mount(Checkbox, props)
    wrapper.find('label').trigger('click')
    console.log(wrapper.emitted().change[0][0])
    expect(wrapper.emitted().change[0].length).to.eq(1)
    expect(wrapper.emitted().change[0][0]).to.be.true
  })
})