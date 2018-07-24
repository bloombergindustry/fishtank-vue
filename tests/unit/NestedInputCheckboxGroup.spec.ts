/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import {NestedInputCheckboxGroup} from "@/index"
import {NestedInputCheckbox} from "@/index"
import {
  CheckboxSelected24 as CheckboxSelected,
  CheckboxUnselected24 as CheckboxUnselected
} from "@fishtank/icons-vue"

import Vue from '*.vue'

describe("NestedInputCheckboxGroup", () => {
  let propsData : any = {}
  let slots : any = {}
  let components: any = {}

  const mountInput = () => {
    return shallow(NestedInputCheckboxGroup, {
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
      propsData.value = ["beta"]
      propsData.name = "New Name"
      propsData.label = "New Label"
    })
    
    it('sets the initial input value, while bound to an array', () => {
      const wrapper = mountInput()
      let input = wrapper.find('input')
      expect(wrapper.vm.$props.value).to.eql([ "beta"])
    })
    
  })
})