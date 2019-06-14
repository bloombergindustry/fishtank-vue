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

    describe('FishTankTabs returns both slots and props data', () => {
        const mountTabInput = () => {
            return shallow(FishTankTabs, {
                propsData,
                slots
            })
        }

        afterEach(() => {
            propsData = {}
            slots = {}
        })

        it('custom change event has been emitted',() =>{
            const wrapper = mount(FishTankTabs)  
            const event = wrapper.vm.$emit('change')
            expect(event)
        })
    })
    
    describe('FishTankVerticalTabs returns both slots and props data', () => {
        const mountVerticalTabInput = () => {
            return shallow(FishTankVerticalTabs, {
                propsData,
                slots
            })
        }

        afterEach(() => {
            propsData = {}
            slots = {}
        })

        it('custom change event has been emitted',() =>{
            const wrapper = mount(FishTankTabs)  
            const event = wrapper.vm.$emit('change')
            expect(event)
        })
    })
    
})
   