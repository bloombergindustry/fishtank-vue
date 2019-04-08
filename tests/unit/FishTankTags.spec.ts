/* eslint-disable no-console */
import { expect } from "chai"
import { shallowMount as  shallow } from "@vue/test-utils"
import {FishTankTag} from "@/index"


import Vue from "vue"

describe('FishTankTag', () => {
  let propsData : any = {}
  let slots : any = {}

  const mountInput = () => {
    return shallow(FishTankTag, {
      propsData,
      slots,
    })
  }

  afterEach(() => {
    propsData = {}
    slots = {}
  })

  describe('Basic Usage', () => {
    beforeEach(() => {
      propsData = {label:'label'}
    })

    it('creates a basic instance of the FishTankTag', () => {
      propsData.modelValue = false
      const wrapper = mountInput()
      let tag = wrapper.find(`.${wrapper.vm.$style.tag}`)
      let input = wrapper.find('input')
      expect(tag.text()).to.eq("label")
    })

    it('has a checked state', () => {
      propsData.modelValue = true
      const wrapper = mountInput()
      expect(wrapper.find(wrapper.vm.$style.checked)).to.not.be.undefined
    })

    it('emits a change event with an updated value when clicked', () => {
      propsData.modelValue = false
      const wrapper = mountInput()
      wrapper.find('input').trigger('click')
      expect(wrapper.emitted().change[0][0]).to.be.true
    })
  })
})