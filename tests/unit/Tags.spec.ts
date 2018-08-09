/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import {Tag, MultiSelectTag} from "@/index"


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
  }),

  describe('MultiSelectTag', () => {
    it('starts as inactive with 0 selections', () => {
      let TagWrapper = Vue.extend({
        components: {
          MultiSelectTag
        },
        render(h) {
          return h(MultiSelectTag, {
            
          })
        }
      })

      let wrapper = mount(TagWrapper)
      let multiselect = wrapper.find('div')

      expect(multiselect.classes()).to.include('tag--multiselect--inactive') // starts as inactive state
    })

    it('becomes active when 1 or more selections are made', () => {
      let TagWrapper = Vue.extend({
        components: {
          MultiSelectTag
        },
        render(h) {
          return h(MultiSelectTag, {
            
          })
        }
      })

      let wrapper = mount(TagWrapper)
      let multiselect = wrapper.find('div')
      let checkbox = wrapper.find('input')

      expect(multiselect.classes()).to.include('tag--multiselect--inactive') // starts as inactive state
      checkbox.trigger('click')
      expect(multiselect.classes()).to.include('tag--multiselect--active') // turns active once 

    })

    context('disabled property is true', () => {
      let propsData = { disabled: true }

      it('has a disabled class', () => {
        let wrapper = mount(MultiSelectTag, { propsData })
        let multiselect = wrapper.find('div')

        expect(multiselect.classes()).to.include('tag--multiselect--disabled')
      })

    })
  })
})