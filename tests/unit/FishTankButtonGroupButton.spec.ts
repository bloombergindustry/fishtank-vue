/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallowMount as shallow, mount } from "@vue/test-utils"
import {
  FishTankButtonGroupButton
} from "@/index"
import { doesNotThrow } from 'assert'
import Vue from 'vue'

describe("FishTankButtonGroup", () => {
  // let propsData : any = {}
  // let slots : any = {}

  // const mountBGroupButton = () => {
  //   return shallow(FishTankButtonGroupButton, {
  //     propsData,
  //     slots,
  //   })
  // }

  // afterEach(() => {
  //   propsData = {}
  //   slots = {}
  // })

  // describe('Basic Usage', () => {
  //   propsData.label="Button Label"

  //   it('renders a Button Group Button', () => {
  //     const wrapper = mountBGroupButton()
      
  //     let bgroupbutton = wrapper.find('[class^="FishTankButtonGroupButton"]').element as HTMLElement
  //     expect(bgroupbutton).to.exist
  //   })
  // })
})