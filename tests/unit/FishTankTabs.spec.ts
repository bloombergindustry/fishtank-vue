/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallowMount as shallow , mount } from "@vue/test-utils"
import {
    FishTankTabs,
    FishTankVerticalTabs 
} from '@/index'
import { doesNotThrow } from 'assert'
import Vue from "vue"

describe('FishTankTabs', () => {
    let propsData : any = {}
    let slots : any = {}

    const mountTabInput = () => {
        return shallow(FishTankTabs, {
            propsData,
            slots
        })
    }

    const montVerticalTabInput = () => {
        return shallow(FishTankVerticalTabs, {
            propsData,
            slots
        })
    }

    afterEach(() => {
        propsData = {}
        slots = {}
    })
  })
   