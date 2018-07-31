/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import {InputCheckbox} from "@/index"
import {
  CheckboxSelected24 as CheckboxSelected,
  CheckboxUnselected24 as CheckboxUnselected
} from "@fishtank/icons-vue"

describe("InputCheckbox", () => {
  let propsData : any = {}
  let slots : any = {}
  let components: any = {}

  const mountInput = () => {
    return shallow(InputCheckbox, {
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
      propsData.val = ""
      propsData.value = false
      propsData.id = "testId"
      propsData.label = "Test Label"
    })
    

    it('sets the initial input value', () => {
      const wrapper = mountInput()
      let input = wrapper.find('input').element as HTMLInputElement
  
      expect(input.checked).to.eq(false)
    })

    it('checked updated after click', () => {
      const wrapper = mountInput()
      let input = wrapper.find('input')
      input.trigger('click')
      
      let updateInput = wrapper.find('input').element as HTMLInputElement
      expect(updateInput.checked).to.eq(true)
    })

    it('value updated after click', () => {
      const wrapper = mountInput()
      let input = wrapper.find('input')
      input.trigger('click')      
      expect(wrapper.emitted().input[0][0]).to.eql(true)
    })

    it('value updated after click', () => {
      const wrapper = mountInput()
      let input = wrapper.find('input')
      input.trigger('click')    
      expect(wrapper.emitted().input[0][0]).to.eql(true)
    })

    it('shows the unselected svg on init', () => {
      const wrapper = mountInput()
      let input = wrapper.find('input')
      expect(wrapper.find(CheckboxUnselected).exists()).to.equal(true)
      expect(wrapper.find(CheckboxSelected).exists()).to.equal(false)
    })
    it('shows the Selected svg on init with a true value', () => {
      propsData.value = true
      const wrapper = mountInput()
      let input = wrapper.find('input')
      expect(wrapper.find(CheckboxUnselected).exists()).to.equal(false)
      expect(wrapper.find(CheckboxSelected).exists()).to.equal(true)
    })

    it('shows the Selected svg on init with a true value', () => {
      const wrapper = mountInput()
      let input = wrapper.find('input')
      wrapper.setProps({value:true})
      expect(wrapper.find(CheckboxUnselected).exists()).to.equal(false)
      expect(wrapper.find(CheckboxSelected).exists()).to.equal(true)
    })
    
  })
  describe('Usage with an array of values', () => {
    beforeEach(() => {
      propsData.val = "alpha"
      propsData.value = ["beta"]
      propsData.id = "testId"
      propsData.label = "Test Label"
    })

    it('sets the initial input value, while bound to an array', () => {
      const wrapper = mountInput()
      let input = wrapper.find('input')
      expect(wrapper.vm.$props.value).to.eql([ "beta"])
    })

    it('adds the input value to the array', () => {
      const wrapper = mountInput()
      let input = wrapper.find('input')
      input.trigger('click')
      expect(wrapper.emitted().input[0][0]).to.eql([ "beta","alpha"])
    })

    it('removes the input value from the array', () => {
      propsData.val = "beta"
      const wrapper = mountInput()
      let input = wrapper.find('input')
      input.trigger('click')
      expect(wrapper.emitted().input[0][0]).to.eql([])
    })

  })
})
