/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallow, mount } from "@vue/test-utils"
import { FishTankTag } from "@/index"


import Vue from "vue"

describe('FishTankTag', () => {
    
  it('should exist', () => {
    let TagWrapper = Vue.extend({
      components: {
        FishTankTag
      },
      render(h) {
        return h(FishTankTag, {
          props: {
            disabled: false,
            label:'Tag Label',
          },
        })
      }
    })
    let tagWrapper = mount(TagWrapper)
    let tag = tagWrapper.find('input')
    let mockTag = tagWrapper.find('[class^="FishTankTag_tag"]') 
    expect(tag).to.exist
    expect(mockTag).to.exist
  })

  // it('changes states when the binary tag is clicked', () => {
  //   let TagWrapper = Vue.extend({
  //     components: {
  //       FishTankTag
  //     },
  //     render(h) {
  //       return h(FishTankTag, {
  //         props: {
  //           disabled: false,
  //           label:'Tag Label',
  //           checked:false
  //         },
  //       })
  //     }
  //   })
  //   let tagWrapper = mount(TagWrapper)
  //   let tag = tagWrapper.find('input')
  //   let mockTag = tagWrapper.find('[class^="FishTankTag_tag"]') 
  //   tag.trigger('input')
  //   // console.log(tag.attributes())
  // })

  context('disabled property is true', () => {
    let TagWrapper = Vue.extend({
      components: {
        FishTankTag
      },
      render(h) {
        return h(FishTankTag, {
          props: {
            disabled: true,
            label:'Tag Label',
          },
        })
      }
    })

    it('has a disabled class', () => {
      let tagWrapper = mount(TagWrapper)
      let tag = tagWrapper.find('input')
      let tagAttrs = tag.attributes()
      expect(tagAttrs.disabled).to.equal('disabled')
    })
    // it('does not change from disabled if clicked')
    //   let tag = mount(TagWrapper)

    //   tag.trigger('click')
    //   expect(tag.classes()).to.include('tag--disabled')
  })
})