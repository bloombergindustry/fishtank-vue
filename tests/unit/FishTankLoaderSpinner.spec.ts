import { shallowMount as  shallow, Wrapper, WrapperArray } from '@vue/test-utils'
import { expect } from "chai"
import { spy} from 'sinon'
import FishTankLoaderSpinner from '@/components/FishTankLoaderSpinner.vue'

const getCleanClassNames = function(classList:any):Array<string>{
  let classArray = Array.from(classList)
  let cleanClasses = classArray.map((c:any)=>{
    return c.split('_')[1]
  })
  return cleanClasses
}

describe('FishTankLoaderSpinner.vue', () => {
  let propsData:any = {}
  let slotsData:any = {}
  
  afterEach(() => {
    propsData = {}
    slotsData = {}
  })
  const mountInput = () => {
    return shallow(FishTankLoaderSpinner, {
      slots: slotsData,
      propsData,
      // use sync:false to supress async warning related to using versions of vue before Vue@2.5.18
      sync:false
    })
  }
  
  const wrapper = mountInput()

  it('mounts and renders without issues', () => {
    expect(wrapper.contains('div'))
  })
  it('renders with the default bgov gradient', () => {
    let linearGradient = wrapper.find('linearGradient')
    expect(linearGradient.attributes('id')).to.eq('spinner--bgov-gradient')
  })
  describe('when a BLAW theme prop is provided', () => {
    beforeEach(() => {
      propsData.theme = 'blaw'
    })
    it('renders with the blaw gradient', () => {
      const wrapper = mountInput()
      let linearGradient = wrapper.find('linearGradient')
      // console.log(linearGradient)
      expect(linearGradient.attributes('id')).to.eq('spinner--blaw-gradient')
    })
  })

  describe('when a BTAX theme prop is provided', () => {
    beforeEach(() => {
      propsData.theme = 'btax'
    })
    it('renders with the btax gradient', () => {
      const wrapper = mountInput()
      let linearGradient = wrapper.find('linearGradient')
      // console.log(linearGradient)
      expect(linearGradient.attributes('id')).to.eq('spinner--btax-gradient')
    })
  })

  describe('when a Notification 1 theme prop is provided', () => {
    beforeEach(() => {
      propsData.theme = 'notification-1'
    })
    it('renders with the notification-1 gradient', () => {
      const wrapper = mountInput()
      let linearGradient = wrapper.find('linearGradient')
      // console.log(linearGradient)
      expect(linearGradient.attributes('id')).to.eq('spinner--notification-1-gradient')
    })
  })

  describe('when a Notification 2 theme prop is provided', () => {
    beforeEach(() => {
      propsData.theme = 'notification-2'
    })
    it('renders with the notification-2 gradient', () => {
      const wrapper = mountInput()
      let linearGradient = wrapper.find('linearGradient')
      // console.log(linearGradient)
      expect(linearGradient.attributes('id')).to.eq('spinner--notification-2-gradient')
    })
  })

  describe('when a Notification 3 theme prop is provided', () => {
    beforeEach(() => {
      propsData.theme = 'notification-3'
    })
    it('renders with the notification-3 gradient', () => {
      const wrapper = mountInput()
      let linearGradient = wrapper.find('linearGradient')
      // console.log(linearGradient)
      expect(linearGradient.attributes('id')).to.eq('spinner--notification-3-gradient')
    })
  })

  describe('when a `theme` theme prop is provided', () => {
    beforeEach(() => {
      propsData.theme = 'theme'
    })
    it('renders with the notification-3 gradient', () => {
      const wrapper = mountInput()
      let linearGradient = wrapper.find('linearGradient')
      // console.log(linearGradient)
      expect(linearGradient.attributes('id')).to.eq('spinner--theme-gradient')
    })
  })

  context('when a small size prop is provided', () => {
    beforeEach(() => {
      propsData.size = 'small'
    })
    it('renders at the small size', () => {
      const wrapper = mountInput()
      expect(wrapper.element.classList.contains('spinner--small')).to.be.true
    })
  })

  context('when a large size prop is provided', () => {
    beforeEach(() => {
      propsData.size = 'large'
    })
    it('renders at the small size', () => {
      const wrapper = mountInput()
      expect(wrapper.element.classList.contains('spinner--large')).to.be.true
    })
  })

  context('when a loading state is set to false', () => {
    beforeEach(() => {
      propsData.loading = false
    })
    it('pauses loading animation', () => {
      const wrapper = mountInput()
      // wrapper.findAll('circle')
      const circles = new Promise(function(resolve, reject){
        resolve(wrapper.findAll('circle'))
      })
      circles.then(res =>{
        // second, visible circle in the SVG has the "pause-spinner" class
        return (res as any).wrappers[1]   
      }).then(res=>{
        expect(res.element.classList.contains('pause-spinner')).to.be.true
      })
    })
  })
})