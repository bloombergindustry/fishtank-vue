/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import {Tag} from "@/index"


import Vue from "vue"

describe('Tags', () => {
    
  describe('Tag', () => {
    
    it('changes states when the binary tag is clicked', () => {
      let TagWrapper = Vue.extend({
        components: {
          Tag
        },
        render(h) {
          return h(Tag, {
            props: {
              disabled: false,
            },
          })
        }
      })
      let tagWrapper = mount(TagWrapper)
      let tag = tagWrapper.find('span')

      expect(tag.classes()).to.include('tag--active') // starts as active state
      tag.trigger('click')
      expect(tag.classes()).to.include('tag--inactive')  // clicking changes binary tag to inactive state
    })

    context('disabled property is true', () => {
      let TagWrapper = Vue.extend({
        components: {
          Tag
        },
        render(h) {
          return h(Tag, {
            props: {
              disabled: true,
            },
          })
        }
      })

      it('has a disabled class', () => {
        let tag = mount(TagWrapper)
        expect(tag.classes()).to.include('tag--disabled')
      })
      it('does not change from disabled if clicked')
        let tag = mount(TagWrapper)

        tag.trigger('click')
        expect(tag.classes()).to.include('tag--disabled')
    })
  })
})