/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import {FishTankCheckbox} from "@/index"


import Vue from "vue"

describe('FishTankCheckbox', () => {
  let propsData : any = {}
  let slots : any = {}

  const mountInput = () => {
    return shallow(FishTankCheckbox, {
      propsData,
      slots,
    })
  }

  afterEach(() => {
    propsData = {}
    slots = {}
  })

  
})