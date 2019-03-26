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
  describe('when a theme prop is provided', () => {
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

  context('when a size prop is provided', () => {
    beforeEach(() => {
      propsData.size = 'small'
    })
    it('renders at the small size', () => {
      const wrapper = mountInput()
      expect(wrapper.element.classList.contains('spinner--small')).to.be.true
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
        const classes = (res as any).wrappers[1]
        expect(classes.element.classList.contains('pause-spinner')).to.be.true
      })
    })
  })
})