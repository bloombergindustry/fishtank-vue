import { mount } from '@vue/test-utils'
import moxios from 'moxios'
import { expect } from "chai"
import Lookup from '@/components/FishTankLookup.vue'

describe('Lookup.vue', () => {
  beforeEach(() => {
    moxios.install()
    moxios.stubRequest('/some_endpoint?query=s', {
      status: 200,
      response: {
        'data': {
          'items': [
            { label: 'Some item 1', value: 'Some item 1' },
            { label: 'Some item 2', value: 'Some item 2' },
            { label: 'Some item 3', value: 'Some item 3' },
            { label: 'Some item 4', value: 'Some item 4' },
            { label: 'Some item 5', value: 'Some item 5' }
          ]
        }
      }
    })
    moxios.stubRequest('/some_endpoint?query=', {
      status: 200,
      response: {
        'data': {
          'items': []
        }
      }
    })
  })

  afterEach(() => moxios.uninstall())

  it('should fire change event when clicking result', done => {
    const wrapper = mount(Lookup, {
      attrs: { url: '/some_endpoint' }
    })
    wrapper.setData({ focused: true, query: 's' })
    moxios.wait(() => {
      wrapper.find('.items :first-child').trigger('mousedown')
      expect(wrapper.emitted().change.length).to.eq(3)
      done()
    })
  })

  it('should fire change event when navigating to result and clicking enter', done => {
    const wrapper = mount(Lookup, {
      attrs: { url: '/some_endpoint' }
    })
    wrapper.setData({ focused: true, query: 's' })
    moxios.wait(() => {
      wrapper.find('input').trigger('keydown', { key: 'o' })
      wrapper.find('input').trigger('keydown', { key: 'ArrowUp' })
      wrapper.find('input').trigger('keydown', { key: 'ArrowUp' })
      wrapper.find('input').trigger('keydown', { key: 'ArrowDown' })
      wrapper.find('input').trigger('keydown', { key: 'ArrowDown' })
      wrapper.find('input').trigger('keydown', { key: 'ArrowDown' })
      wrapper.find('input').trigger('keydown', { key: 'Enter' })
      expect(wrapper.emitted().change[1][0]).to.eql({ label: 'Some item 2', value: 'Some item 2' })
      done()
    })
  })

  // context('.clear', () => {
  //   it('should clear query', () => {
  //     const wrapper = mount(Lookup, {
  //       attrs: { url: '/some_endpoint', value: { label: 'Some item 2', value: null } }
  //     })
  //     wrapper.vm.clear()
  //     expect(wrapper.vm.query).to.eq('')
  //   })
  // })
})