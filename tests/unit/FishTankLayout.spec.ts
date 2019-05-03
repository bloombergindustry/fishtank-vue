/* eslint-disable no-console */
import { expect } from "chai"
import {  mount } from "@vue/test-utils"
import { FishTankLayout as Layout } from "@/index"

// describe('FishTankRadio', () => {
//   let propsData : any = {}
//   let slots : any = {}

//   const mountInput = () => {
//     return shallow(FishTankRadio, {
//       propsData,
//       slots,
//     })
//   }

//   afterEach(() => {
//     propsData = {}
//     slots = {}
//   })
// })

describe('FishTankLayout', () => {
  let propsData : any = {}
  let slots : any = {}

  const props = {
    propsData: propsData,
    slots:slots
  }
  afterEach(() => {
    props.propsData = {}
    props.slots = {}
  })
  it('should render a basic layout column component', () => {
    let wrapper = mount(Layout, props)
    expect(wrapper.element.classList.contains(wrapper.vm.$style.layoutColumn)).to.be.true
  })
  context('when it is a container Layout element', () => {
    beforeEach(() => {
      props.propsData.container = true
    })
    it('renders as a container Layout element', () =>{
      let wrapper = mount(Layout, props)
      expect(wrapper.element.classList.contains(wrapper.vm.$style.layoutContainer)).to.be.true
    })
    it('renders as a fixed container layout element', () =>{
      props.propsData.container = true
      let wrapper = mount(Layout, props)
      expect(wrapper.element.classList.contains(wrapper.vm.$style.layoutFixed)).to.be.true
    })
  })
  context('when it is a Layout column element', () => {
    it('should render a basic layout column component with a six column width at the xs breakpoint', () => {
      props.propsData.xsColumn = 6
      let wrapper = mount(Layout, props)
      expect(wrapper.element.classList.contains(wrapper.vm.$style.xsCol6)).to.be.true
    })

    it('should render a basic layout column component with a six column width at the xs breakpoint, a four column width at the large breakpoint, and a three column width at the extra large breakpoint', () => {
      props.propsData.xsColumn = 6
      props.propsData.lgColumn = 4
      props.propsData.xlColumn = 3
      let wrapper = mount(Layout, props)
      expect(wrapper.element.classList.contains(wrapper.vm.$style.xsCol6)).to.be.true
      expect(wrapper.element.classList.contains(wrapper.vm.$style.lgCol4)).to.be.true
      expect(wrapper.element.classList.contains(wrapper.vm.$style.xlCol3)).to.be.true
      expect(wrapper.element.classList.contains(wrapper.vm.$style.mdCol7)).to.be.false
    })
  })
})