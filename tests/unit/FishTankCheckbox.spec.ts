/* eslint-disable no-console */
import { expect } from "chai"
import { shallowMount as  shallow, mount } from "@vue/test-utils"
import {FishTankCheckboxV2 as Checkbox} from "@/index"


import Vue from "vue"

describe('FishTankCheckbox', () => {
  const props = {
    propsData: {
      items: [{ label: 'Item 1', value: '1' }]
    }
  }
  it('should fire change event when checkbox changes', () => {
    const wrapper = mount(Checkbox, props)
    wrapper.find('label').trigger('click')
    expect(wrapper.emitted().change.length).to.eq(1)
  })

  // afterEach(() => {
  //   props.propsData = {}
  //   slots = {}
  // })
  
})