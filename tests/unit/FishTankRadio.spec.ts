/* eslint-disable no-console */
import { expect } from "chai"
import {  mount } from "@vue/test-utils"
import { FishTankRadio as Radio } from "@/index"

// describe('FishTankRadio', () => {
//   let propsData : any = {}
//   let slots : any = {}

//   const mountInput = () => {
//     return shallow(FishTankRadio, {
//       propsData,
//       slots,
//     })
//   }

//   afterEach(() => {
//     propsData = {}
//     slots = {}
//   })
// })

describe('FishTankRadio', () => {
  const props = {
    propsData: {
      label: 'Item 1', value: "A"
    }
  }
  it('should fire change event when checkbox changes', () => {
    const wrapper = mount(Radio, props)
    wrapper.find('input').trigger('click')
    console.dir(wrapper.emitted())
    expect(wrapper.emitted().change[0][0]).to.eq("A")
  })
})