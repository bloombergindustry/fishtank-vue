# Testing
## Frameworks
* Assertions Library: [Chai](http://www.chaijs.com/api/bdd/)
* Testing Utils: [Vue Test Utils](https://vue-test-utils.vuejs.org/)
* Spies, Stubs, Mocks: [Sinon](http://sinonjs.org/)

## Linter exceptions
Chai BDD-style assertions look like expressions to es-lint, so I turn the rule off in test files:

in test file test/unit/MyComponent.spec.js:
```js
/* eslint no-unused-expressions: "off" */
```

## Testing Vue Components
###Mounting and Testing rendering
Use vue-test-utils mount utility to mount with options
```js
import { mount } from '@vue/test-utils'
import MyComponent from 'components/MyComponent.vue'

describe('MyComponent.vue', () => {
  it('mounts and renders without issues', () => }
    const propsData = {
      prop1: '',
      prop2: []
    }
    const wrapper = mount(
      MyComponent,
      { propsData }
    )
    expect(wrapper.html()).to.equal('<div></div>')
    expect(wrapper.find('.does-not-exist').exists()).to.be.false
  })
})
```

Use shallowMount to stub child components
```js
import { shallowMount } from '@vue/test-utils'
```

The wrapper contains helpful methods for testing the rendered dom, as well as access to the vue instance itself.
See (https://vue-test-utils.vuejs.org/api/wrapper/) for more info.
Also, the wrapper's find/findAll method returns wrappers themselves.

### Testing data and methods
The wrapper has access to the vue instance thru the vm property
```js
const wrapper = mount(MyComponent)
expect(wrapper.vm.myDataProperty).to.equal('some value')
expect(wrapper.vm.myMethod('arg1')).to.equal('return value')
```

### Testing events
The wrapper can trigger events on the vue component or its child elements
```js
const wrapper = mount(MyComponent)
wrapper.trigger('click')
wrapper.find('button.primaryButton').trigger('click', {value: 'custom value'})
```
The wrapper can also check events emitted by the component. 
```js
wrapper.vm.$emit('customEvent')
expect(wrapper.emitted().customEvent).to.be.true
```
