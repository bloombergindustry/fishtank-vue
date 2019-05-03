/* eslint-disable no-console */
import { expect } from "chai"
import sinon, { spy, stub, restore } from 'sinon'
import { shallowMount as  shallow, mount } from "@vue/test-utils"
import {FishTankTextInput as TextInput} from "@/index"

describe("TextInput", () => {
  let propsData : any = {}
  let slots : any = {}

  const mountInput = () => {
    return shallow(TextInput, {
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
      propsData.value = 'initial value'
    })

    it('sets the initial input value', () => {
      const wrapper = mountInput()
      let input = wrapper.find('.input-element').element as HTMLInputElement
      expect(input.value).to.eq("initial value")
    })

    it('emits input events when the text changes', () => {
      const wrapper = mountInput()
      let input = wrapper.find('.input-element')

      ;(input.element as HTMLInputElement).value = 'new value'
      input.trigger('input')
      console.log("~~~",wrapper.emitted())
      expect(wrapper.emitted().input[0]).to.eql(['new value'])
    })

    context('when input type is provided', () => {
      const validTypes = [ "text", "password", "email", "search", "number", "tel", "url" ]

      validTypes.forEach(type => {
        context(`when the type is "${type}"`, () => {
          it('sets the input type correctly', () => {
            propsData.type = type
            const wrapper = mountInput()

            let input = wrapper.find('.input-element')

            expect(input.attributes().type).to.eq(type)
          })
        })
      })

      context(`when the type is a non-whitelisted type`, () => {
        afterEach(() => {
          if ((console.error as any).restore) {
            (console.error as any).restore()
          }
        })

        it('raises a validation error', () => {
          let error = stub(console, 'error')
          propsData.type = 'foobarbaz'
          const wrapper = mountInput()

          sinon.assert.calledWith(error, sinon.match('custom validator check failed for prop "type"'))
        })
      })
    })

    context('when label is provided', () => {
      beforeEach(() => {
        propsData.label = 'I am the label'
      })

      it('contains a label element', () => {
        const wrapper = mountInput()
        let label = wrapper.find('.label')

        expect(label.text()).to.eq("I am the label")
      })

      it('assigns a "for" value matching the input id', () => {
        const wrapper = mountInput()
        let label = wrapper.find('.label')
        let input = wrapper.find('.input-element')

        expect(label.attributes().for).to.equal(input.attributes().id)
      })
    })

    context('when label is empty', () => {
      beforeEach(() => {
        propsData.label = undefined
      })

      it('does not contain a label element', () => {
        const wrapper = mountInput()
        let label = wrapper.find('.ft-input-text__label')

        expect(label.exists()).to.be.false
      })
    })

    describe('Error state', () => {
      context('error is a string', () => {
        beforeEach(() => {
          propsData.error = 'the error'
        })

        it('adds an error class to the input', () => {
          const wrapper = mountInput()
          expect(wrapper.classes()).to.contain('error')
        })

        it('displays the error', () => {
          const wrapper = mountInput()

          expect(wrapper.find('.error-message').text()).to.contain('the error')
        })
      })

      context('error is an error object', () => {
        beforeEach(() => {
          propsData.error = {
            code: 'test_error',
            attribute: 'test_attr',
            title: 'Test Error',
            message: "can't be blank",
            fullMessage: "Test Attr can't be blank",
          }
        })

        it('adds an error class to the input', () => {
          const wrapper = mountInput()

          expect(wrapper.classes()).to.contain('error')
        })

        it('displays the error', () => {
          const wrapper = mountInput()

          expect(wrapper.find('.error-text').text()).to.contain("Test Attr can't be blank")
        })
      })

      context('error is an object without a fullMessage property', () => {
        beforeEach(() => {
          propsData.error = {
            randomField: "Test Attr can't be blank",
          }
        })

        afterEach(() => {
          ;(console.error as any).restore()
          ;(console.warn as any).restore()
        })

        it('logs a validation error', () => {
          let error = stub(console, 'error')
          let warn = stub(console, 'warn')
          const wrapper = mountInput()

          sinon.assert.calledWith(warn, sinon.match('should be a string or an object'))
          sinon.assert.calledWith(error, sinon.match('custom validator check failed for prop "error"'))
        })
      })
    })
  })

  describe('Slots', () => {
    describe('leftIcon', () => {
      beforeEach(() => {
        slots.leftIcon = '<span class="the-left-icon"/>'
      })

      it('displays the icon', () => {
        const wrapper = mountInput()

        expect(wrapper.find('.left-icon').exists()).to.be.true
      })

      it('puts the left icon next to the input', () => {
        const wrapper = mountInput()

        expect(wrapper.find('.left-icon + .input-element').exists()).to.be.true
      })
    })

    describe('rightIcon', () => {
      context('when no rightIcon slot is defined', () => {
        context('when value is blank', () => {
          it('does not show a clear button', () => {
            const wrapper = mountInput()

            expect(wrapper.find('.clear').exists()).to.be.false
          })
        })

        context('when value is not blank', () => {
          beforeEach(() => {
            propsData.isFocused = true
            propsData.value = "Initial Value"
          })

          it('shows a clear button', () => {
            const wrapper = mountInput()


            let input = wrapper.find('.input-element')

            ;(input.element as HTMLInputElement).value = 'new value'
            input.element.focus()
            expect(wrapper.find('.clear').exists()).to.be.true
          })

          context('when the clear button is clicked', () => {
            beforeEach(() => {
              propsData.isFocused = true
              propsData.value = "Initial Value"
            })
            it('sets the value to undefined', () => {
              const wrapper = mountInput()
              const input = wrapper.find('.input-element')
              input.element.focus()
              const clear = wrapper.find('.clear')
              clear.element.click()
              expect(wrapper.emitted().input[0]).to.eql([undefined])
            })

            it('focuses the input', () => {
              const wrapper = mountInput()
              const focusSpy = spy(wrapper.vm as any, 'focusElement')
              let input = wrapper.find('.input-element')
              input.element.focus()
              const clear = wrapper.find('.clear')
              clear.element.click()
              sinon.assert.calledWith(focusSpy, input.element)
            })
          })

        })
      })
      context('when a rightIcon slot is defined', () => {
        beforeEach(() => {
          slots.rightIcon = '<span class="my-icon"/>'
        })

        it('should display', () => {
          const wrapper = mountInput()

          expect(wrapper.find('.my-icon').exists()).to.be.true
        })

        it('does not clear the input on click', () => {
          const wrapper = mountInput()
          const focusSpy = spy(wrapper.vm as any, 'clearText')

          wrapper.find('.my-icon').trigger('click')

          sinon.assert.notCalled(focusSpy)
        })

        context('when value is present', () => {
          beforeEach(() => {
            propsData.value = 'foobar'
          })

          it('should not show a clear button', () => {
            const wrapper = mountInput()

            expect(wrapper.find('.clear').exists()).to.be.false
          })
        })
      })
    })
  })
})
