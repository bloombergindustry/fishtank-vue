
import { mount } from "@vue/test-utils"
import sinon, { spy, stub, restore } from 'sinon'
import { expect } from "chai"
import { FishTankButton } from "@/index"


describe('FishTankButton.vue', () => {
  it('fires arbitrary event handlers when appropriate event triggered', () => {
    let clickHandler = spy()
    const wrapper = mount( FishTankButton, {      
      listeners: {
        click: clickHandler,
      }
    })
    wrapper.find('button').trigger('click')
    sinon.assert.called(clickHandler)
  }),
  context('Default Label', () => {
    const props = {
      propsData: {
        label:'Button Label',
        role: ""
      }
    }
    it('should fire an event when clicked', () => {
      let wrapper = mount( FishTankButton, props)
      wrapper.find('button').trigger('click')
      expect(wrapper.emitted().click[0].length).to.eq(1)
    })

    it('is a Standard button', () => {
      props.propsData.role = 'standard'
      let wrapper = mount( FishTankButton, props)
      wrapper.find('button').trigger('click')
      expect(wrapper.classes().includes('standard')).to.be.true
    })

    it('is a Primary button', () => {
      props.propsData.role = 'primary'
      let wrapper = mount( FishTankButton, props)
      wrapper.find('button').trigger('click')
      expect(wrapper.classes().includes('primary')).to.be.true
      expect(wrapper.classes().includes('standard')).to.be.false
    })

    it('is a Secondary button', () => {
      props.propsData.role = 'secondary'
      let wrapper = mount( FishTankButton, props)
      wrapper.find('button').trigger('click')
      expect(wrapper.classes().includes('primary')).to.be.false
      expect(wrapper.classes().includes('secondary')).to.be.true
    })

    it('is a Destructive button', () => {
      props.propsData.role = 'destructive'
      let wrapper = mount( FishTankButton, props)
      wrapper.find('button').trigger('click')
      expect(wrapper.classes().includes('primary')).to.be.false
      expect(wrapper.classes().includes('destructive')).to.be.true
    })

    it('is a Outline button', () => {
      props.propsData.role = 'outline'
      let wrapper = mount( FishTankButton, props)
      wrapper.find('button').trigger('click')
      expect(wrapper.classes().includes('primary')).to.be.false
      expect(wrapper.classes().includes('outline')).to.be.true
    })

    it('is a Warning button', () => {
      props.propsData.role = 'warning'
      let wrapper = mount( FishTankButton, props)
      wrapper.find('button').trigger('click')
      expect(wrapper.classes().includes('primary')).to.be.false
      expect(wrapper.classes().includes('warning')).to.be.true
    })
  })
})