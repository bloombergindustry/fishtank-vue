/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import {FishTankModal} from "@/index"


import Vue from "vue"

describe('FishTankModal', () => {
  let propsData : any = {}
  let slots : any = {}

  const mountInput = () => {
    return shallow(FishTankModal, {
      propsData,
      slots,
    })
  }

  afterEach(() => {
    propsData = {}
    slots = {}
  })

})