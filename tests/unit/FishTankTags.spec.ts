/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallowMount as  shallow, mount } from "@vue/test-utils"
import {FishTankTag} from "@/index"


import Vue from "vue"

describe('FishTankTag', () => {
  let propsData : any = {}
  let slots : any = {}

  const mountInput = () => {
    return shallow(FishTankTag, {
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
      // slots = {default: 'initial text'}
      propsData = {label:'label', value: "false"}
    })

    it('creates a basic instance of the FishTankTag', () => {
      const wrapper = mountInput()
      let tag = wrapper.find('[class^="FishTankTag_tag"]')
      let input = wrapper.find('input')
      expect(tag.text()).to.eq("label")
    })

  })

  describe('Tag toggles on click', () => {
    beforeEach(() => {
      // slots = {default: 'initial text'}
      propsData = {label:'label', value: true}
    })

    it('creates a basic instance of the FishTankTag', () => {
      const wrapper = mountInput()
      

      let tag = wrapper.find('[class^="FishTankTag_tag"]')
      let input = wrapper.find('input')
      
      // input.trigger('click')
      
      // console.log((input.element as HTMLInputElement).checked)
      // expect((input.element as HTMLInputElement).checked).toBe(true)
      // expect(tag.text()).to.eq("label")
    })
  })

  describe('Tag toggles to false on click', () => {
    beforeEach(() => {
      // slots = {default: 'initial text'}
      propsData = {label:'label', value: true}
    })

    it('creates a basic instance of the FishTankTag', () => {
      const wrapper = mountInput()
      let tag = wrapper.find('[class^="FishTankTag_tag"]')
      let input = wrapper.find('input')
      
      input.trigger('click')
      // console.log((input.element as HTMLInputElement).checked)
      // expect((input.element as HTMLInputElement).checked).to.be.false
      // expect(tag.text()).to.eq("label")
    })
  })

  // describe('FishTankTag with heading', () => {
  //   beforeEach(() => {
  //     propsData.heading = 'initial heading',
  //     slots = {default: 'initial text'}
  //   })

  //   it('creates a basic instance of the FishTankTag with a heading', () => {
  //     const wrapper = mountInput()
  //     let tag = wrapper.find('[class^="ft-tag__body"]')
  //     let heading = wrapper.find('[class^="ft-tag__heading"]')
  //     expect(tag.text()).to.eq("initial text")
  //     expect(heading.text()).to.eq("initial heading")
  //   })

  // })

  // describe('Custom branded FishTankTag', () => {
  //   beforeEach(() => {
  //     propsData.branded = 'tag-sample-brand-class',
  //     slots = {default: 'initial text'}
  //   })

  //   it('creates a basic instance of the FishTankTag to be branded', () => {
  //     const wrapper = mountInput()
  //     let branded = wrapper.find('.tag-sample-brand-class') 
  //     expect(branded.classes()).to.contain("tag-sample-brand-class")
  //   })

  // })
})

// /* eslint-disable no-console */
// import { expect } from "chai"
// import sinon, { spy, stub, restore } from 'sinon'
// import { shallow, mount } from "@vue/test-utils"
// import { FishTankTag } from "@/index"


// import Vue from "vue"

// describe('FishTankTag', () => {
    
//   it('should exist', () => {
//     let TagWrapper = Vue.extend({
//       components: {
//         FishTankTag
//       },
//       render(h) {
//         return h(FishTankTag, {
//           props: {
//             disabled: false,
//             label:'Tag Label',
//           },
//         })
//       }
//     })
//     let tagWrapper = mount(TagWrapper)
//     let tag = tagWrapper.find('input')
//     let mockTag = tagWrapper.find('[class^="FishTankTag_tag"]') 
//     expect(tag).to.exist
//     expect(mockTag).to.exist
//   })

//   // it('changes states when the binary tag is clicked', () => {
//   //   let TagWrapper = Vue.extend({
//   //     components: {
//   //       FishTankTag
//   //     },
//   //     render(h) {
//   //       return h(FishTankTag, {
//   //         props: {
//   //           disabled: false,
//   //           label:'Tag Label',
//   //           checked:false
//   //         },
//   //       })
//   //     }
//   //   })
//   //   let tagWrapper = mount(TagWrapper)
//   //   let tag = tagWrapper.find('input')
//   //   let mockTag = tagWrapper.find('[class^="FishTankTag_tag"]') 
//   //   tag.trigger('input')
//   //   // console.log(tag.attributes())
//   // })

//   context('disabled property is true', () => {
//     let TagWrapper = Vue.extend({
//       components: {
//         FishTankTag
//       },
//       render(h) {
//         return h(FishTankTag, {
//           props: {
//             disabled: true,
//             label:'Tag Label',
//           },
//         })
//       }
//     })

//     it('has a disabled class', () => {
//       let tagWrapper = mount(TagWrapper)
//       let tag = tagWrapper.find('input')
//       let tagAttrs = tag.attributes()
//       expect(tagAttrs.disabled).to.equal('disabled')
//     })
//     // it('does not change from disabled if clicked')
//     //   let tag = mount(TagWrapper)

//     //   tag.trigger('click')
//     //   expect(tag.classes()).to.include('tag--disabled')
//   })
// })