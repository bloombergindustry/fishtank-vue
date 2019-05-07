/* eslint-disable no-console */
import { expect } from "chai"
import {  mount } from "@vue/test-utils"
import { FishTankContainer as Container } from "@/index"

describe('FishTankContainer', () => {
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
  it('should render a basic layout Container component', () => {
    let wrapper = mount(Container, props)
    expect(wrapper.element.classList.contains(wrapper.vm.$style.layoutContainer)).to.be.true
    expect(wrapper.element.classList.contains(wrapper.vm.$style.layoutFixed)).to.be.true
  })
  context('should render a fluid layout Container component, with no breakpoints', () => {
    beforeEach(() => {
      props.propsData.fluid = true
    })
    it('renders as a container Container element', () =>{
      let wrapper = mount(Container, props)
      expect(wrapper.element.classList.contains(wrapper.vm.$style.layoutContainer)).to.be.true
      expect(wrapper.element.classList.contains(wrapper.vm.$style.layoutFixed)).to.be.false
    })
  })
})