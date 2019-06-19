/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallowMount as  shallow, mount } from "@vue/test-utils"
import {FishTankLoaderContent} from "@/index"


import Vue from "vue"

describe('LoaderContent', () => {
  let propsData : any = {}                                                                                                                                                                                                                                                                                                                    
  let slots : any = {}

  const mountInput = () => {
    return shallow(FishTankLoaderContent, {
      propsData,
      slots,
    })
  }

  afterEach(() => {
    mountInput
  })

})