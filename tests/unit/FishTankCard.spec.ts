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

  describe('Basic Usage', () => {
    beforeEach(() => {
      slots = {default: 'initial text'}
    })

    it('creates a basic instance of the Card', () => {
      const wrapper = mountInput()
      let card = wrapper.find('[class^="ft-card__body"]')
      expect(card.text()).to.eq("initial text")
    })

  })

  describe('Card with heading', () => {
    beforeEach(() => {
      propsData.heading = 'initial heading',
      slots = {default: 'initial text'}
    })

    it('creates a basic instance of the Card with a heading', () => {
      const wrapper = mountInput()
      let card = wrapper.find('[class^="ft-card__body"]')
      let heading = wrapper.find('[class^="ft-card__heading"]')
      expect(card.text()).to.eq("initial text")
      expect(heading.text()).to.eq("initial heading")
    })

  })

  describe('Custom branded Card', () => {
    beforeEach(() => {
      propsData.branded = 'card-sample-brand-class',
      slots = {default: 'initial text'}
    })

    it('creates a basic instance of the Card to be branded', () => {
      const wrapper = mountInput()
      let branded = wrapper.find('.card-sample-brand-class') 
      expect(branded.classes()).to.contain("card-sample-brand-class")
    })

  })
    
  // describe('Card', () => {
    
  //   it('should exist', () => {
  //     let CardWrapper = Vue.extend({
  //       components: {
  //         Card
  //       },
  //       render(h) {
  //         return h( Card, {
  //           props: {
  //             heading:"I am a card heading"
  //           },
  //         })
  //       }
  //     })
  //     let cardWrapper = mount(CardWrapper)
  //     let card = cardWrapper.find('[class^="ft-card"]') 
  //     expect(card).to.exist
  //   })

  // })
})