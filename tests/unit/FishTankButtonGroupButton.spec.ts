/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import {
  FishTankButtonGroupButton
} from "@/index"
import { doesNotThrow } from 'assert'
import Vue from 'vue'

describe("FishTankButtonGroup", () => {
  let propsData : any = {}
  let slots : any = {}

  const mountBGroupButton = () => {
    return shallow(FishTankButtonGroupButton, {
      propsData,
      slots,
    })
  }

  afterEach(() => {
    propsData = {}
    slots = {}
  })

  describe('Basic Usage', () => {
    propsData.label="Button Label"

    it('renders a Button Group Button', () => {
      const wrapper = mountBGroupButton()
      let bgroupbutton = wrapper.find('.ft-buttongroup__button').element as HTMLElement
      // console.log(bgroup)
      expect(bgroupbutton).to.exist
    })

    it('renders a Button Group Button with an optional value', () => {
      propsData = {
        label: "Button Label",
        value:{val:99}
      }
      const wrapper = mountBGroupButton()
      let bgroupbutton = wrapper.find('input').element as HTMLInputElement
      // console.log(bgroupbutton)
      expect(bgroupbutton.value).to.exist
    })
  })

  // describe('Active state', () => {

  //   it('On click, it becomes the active button', () => {
  //     propsData.label="Button Label"

  //     const wrapper = mountBGroupButton()

  //     console.log(wrapper.classes())
  //     let bgroupbutton = wrapper.find('.ft-buttongroup__button').element as HTMLElement
  //     let bgroupbuttonInput = wrapper.find('input')
  //     bgroupbuttonInput.element.click()
  //     expect(bgroupbutton.classList).to.exist
  //   })
  // })
})