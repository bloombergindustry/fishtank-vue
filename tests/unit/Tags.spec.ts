/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import { FishTankTag } from "@/index"


import Vue from "vue"

describe('FishTankTag', () => {
    
  describe('FishTankTag', () => {
    
    it('changes states when the binary tag is clicked', () => {
      let TagWrapper = Vue.extend({
        components: {
          FishTankTag
        },
        render(h) {
          return h(FishTankTag, {
            props: {
              disabled: false,
              label:'Tag Label',
              checked:false
            },
          })
        }
      })
      let tagWrapper = mount(TagWrapper)
      // console.log('tagWrapper', tagWrapper)
      let tag = tagWrapper.find('input')
      let mockTag = tagWrapper.find('[class^="FishTankTag_tag"]') 
      tag.trigger('input')
      console.log(mockTag.element)
      // console.log(mockTag.element.classList) 
      // expect(tag.classes()).to.include('tag--active') // starts as active state
      // tag.trigger('click')
      // expect(tag.classes()).to.include('tag--inactive')  // clicking changes binary tag to inactive state
    })

    context('disabled property is true', () => {
      let TagWrapper = Vue.extend({
        components: {
          FishTankTag
        },
        render(h) {
          return h(FishTankTag, {
            props: {
              disabled: true,
            },
          })
        }
      })

      // it('has a disabled class', () => {
      //   let tag = mount(TagWrapper)
      //   expect(tag.classes()).to.include('tag--disabled')
      // })
      // it('does not change from disabled if clicked')
      //   let tag = mount(TagWrapper)

      //   tag.trigger('click')
      //   expect(tag.classes()).to.include('tag--disabled')
    })
  })
})