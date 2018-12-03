/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import {FishTankLoaderContent} from "@/index"


import Vue from "vue"

describe('FishTankLoaderContent', () => {
  let propsData : any = {}
  let slots : any = {}

  const mountInput = () => {
    return shallow(FishTankLoaderContent, {
      propsData,
      slots,
    })
  }

  afterEach(() => {
    propsData = {}
    slots = {}
  })

})