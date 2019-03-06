/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallowMount as  shallow, mount } from "@vue/test-utils"
import {FishTankDialogBox} from "@/index"


import Vue from "vue"

describe('FishTankDialogBox', () => {
  let propsData : any = {}
  let slots : any = {}

  const mountInput = () => {
    return shallow(FishTankDialogBox, {
      propsData,
      slots,
    })
  }

  afterEach(() => {
    propsData = {}
    slots = {}
  })

})