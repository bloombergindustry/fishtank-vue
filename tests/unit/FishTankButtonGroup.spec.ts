/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import {
  FishTankButtonGroup, FishTankButtonGroupButton
} from "@/index"
import { doesNotThrow } from 'assert'

describe("FishTankButtonGroup", () => {
  let propsData : any = {}
  let slots : any = {}

  const mountBGroup = () => {
    return shallow(FishTankButtonGroup, {
      propsData,
      slots,
    })
  }

  afterEach(() => {
    propsData = {}
    slots = {}
  })

  describe('Basic Usage', () => {

    it('renders', () => {
      const wrapper = mountBGroup()
      let bgroup = wrapper.find('.ft-buttongroup').element as HTMLElement
      // console.log(bgroup)
      expect(bgroup).to.exist
    })
  })

  describe('when a small prop is provided', () => {
    beforeEach(() => {
      propsData.small = true
    })
    it('renders the small buttongroup', () => {
      const wrapper = mountBGroup()
      let bgroup = wrapper.find('.ft-buttongroup').element as HTMLElement
      expect(bgroup.classList.contains('ft-buttongroup--small')).to.be.true
    })
  })
})