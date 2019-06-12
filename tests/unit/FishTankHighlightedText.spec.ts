/* eslint-disable no-console */
import { expect } from "chai"
import { mount } from '@vue/test-utils'
import {FishTankHighlight} from '@/index'

describe('FishTankHighlightedText.vue', () => {
  it('should wrap supplied term with highlights', () => {
    const wrapper = mount(FishTankHighlight, {
      attrs: {
        content: 'food',
        term: 'foo'
      }
    })
    expect(wrapper.html()).to.contain('<mark class="highlight">foo</mark>')
  })
})
