/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import {Card} from "@/index"


import Vue from "vue"

describe('Card', () => {
  let propsData : any = {}
  let slots : any = {}

  const mountInput = () => {
    return shallow(Card, {
      propsData,
      slots,
    })
  }

  afterEach(() => {
    propsData = {}
    slots = {}
  })

  
})