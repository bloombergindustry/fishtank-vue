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

describe("InputCheckbox", () => {
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
      propsData.value = ""
      propsData.name = "New Name"
      propsData.label = "New Label"

      // propsData.children = []
      // propsData.EventBus = new Vue()
      // propsData.childCount = 0
    })
  })
})