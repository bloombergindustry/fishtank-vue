/* eslint no-unused-expressions: "off" */

import { mount } from '@vue/test-utils'
import { expect } from "chai"
import Select from '@/components/FishTankSelect.vue'

describe('FishTankSelect', function () {
  var wrapper:any
  beforeEach(function () {
    const props = {
      propsData: {
        items: [{label: 'Option 1', value: 'OPTION1'},
          {label: 'Option 2', value: 'OPTION2'},
          {label: 'Option 3', value: 'OPTION3'},
          {label: 'Option 4', value: 'OPTION4'}]
      }
    }
    wrapper = mount(Select, props)
  })
  it('selects default item, if provided', function () {
    const props = {
      propsData: {
        items: [{label: 'Option 1', value: 'OPTION1'},
          {label: 'Option 2', value: 'OPTION2'},
          {label: 'Option 3', value: 'OPTION3'},
          {label: 'Option 4', value: 'OPTION4'}],
        value: 'OPTION3'
      }
    }
    wrapper = mount(Select, props)
    expect(wrapper.vm.displayLabel).to.eq('Option 3')
  })

  it('opens dropdown when clicked', function () {
    expect(wrapper.find('.items').exists()).to.be.false
    wrapper.find('.selected').trigger('click')
    expect(wrapper.find('.items').exists()).to.be.true
  })

  it('emits change event when new item is clicked', function () {
    wrapper.find('.selected').trigger('click')
    wrapper.findAll('.items div').at(3).trigger('click')
    expect(wrapper.find('.items').exists()).to.be.false

    var eventData = wrapper.emitted().change[0][0]
    expect(eventData).to.eq('OPTION4')
  })

  it('closes dropdown when mouse is outside component', function () {
    expect(wrapper.find('.items').exists()).to.be.false
    wrapper.find('.selected').trigger('click')
    expect(wrapper.find('.items').exists()).to.be.true
    wrapper.find('.select').trigger('mouseleave')
    expect(wrapper.find('.items').exists()).to.be.false
  })

  it('defaults items to empty list', () => {
    wrapper = mount(Select)
    expect(wrapper.vm.items).to.eql([])
  })
})