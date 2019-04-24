# FishTank-Vue Contribution Guide

Please read this document fully before contributing any new code to the Fish Tank Vue Component Library. It outlines some important guidelines when writing components that will help them stay aligned with the philosophy that stands behind components already part of this library.

## Terminology
There is some standard terminology used in Javascript component frameworks 
like Vue and React which should come in handy for the rest of this document.

* ***Props*** short for properties, is a collection of attributes passed to 
a component in order to customize its behavior.  Props should be considered 
immutable within the context of the component they are declared and are used 
to drive information down the DOM tree.  Props can be of many types including
 numbers, booleans, strings, arrays, objects and even functions.

* ***Component State*** is a reference to the current condition of a 
component.  These attributes are managed fully by the component itself 
and should be considered immutable from outside.  This is 
important because it gives the component control over what is it exposed via 
functions and event handlers.  If you find yourself in a situation where you 
need to change component state based on something outside the context of your
 component this might be a sign that you should consider using a prop instead. 
Possible state variables might include an integer counting how many times 
the user clicks a
button so that the component can render this count on the button label.  It 
could include which row of a table is selected so the
component knows which row to render with a highlight.

  Component State is initialized within the component; actions, functions, and event handlers within the component update it. State is also stored on the instance itself and does not include e.g. temporary variables used in methods for the component.
  
* ***Application State*** this is the current state of the entire 
application and is usually handled with a global state management library such as something based on the Flux pattern (Redux, Vuex, etc.).  Generally properties here will be things that every component will need access to, such as context, global state, etc. and are accessible by all components in the application that instantiates the state store. _NOTE:_ Fish Tank components should be largely stateless, presentation components, and should not use Vuex, Redux, etc.

## Fish Tank Component Structure

### Fish Tank Components Are Presenter Style Components.
A Presenter is anything that will render HTML and not contain 
any Component State. All Presenters will be internally stateless and are completely property and event driven. This means 
that their entire purpose should be to take incoming props and render markup.

They should not manage or store anything within the component itself. Any interactivity within Presenters that seems to require state management should rely on emitting events for these changes.
This allows parent components or apps to control state and update the props for the presentation components as needed. 

If you find yourself managing any state in a Presenter, you
likely need to break it down further and double-check that you're emitting events for any important interactions.  Don't be afraid of breaking down a Presenter into smaller
pieces if needed.

### Fish Tank Components Are Designed For Reuse
- Smaller components are more reusable, complex components are less reusable.
- Be forward thinking with the size and scope of components, if there is potential for reuse breakdown into smaller pieces at the outset as these refactors can be difficult later.
- Be thoughtful about component interfaces, if you are unsure get a tech review or second opinion from the Fish Tank team to ensure extensibility and ease of future enhancement

### Fish Tank Components Are Self Documenting using JSDocs notation
- All component props, slots, signals, public methods require documentation comments in [JSDocs notation](http://usejsdoc.org/about-getting-started.html); This documentation is used to populate our instance of [vue-styleguidist](https://vue-styleguidist.github.io/), a component library reference tool.  See their documentation (or examples in this repository) for guidance on how to structure these comments.
- All components require a working example to be populated on styleguidist. Do not feel like you need to be limited here, more examples are better to sandbox component behavior.  Be liberal with working examples, especially if there are edge cases or use situations that future users of your component should be aware of. The more examples the better.
- If you are struggling to create a strong styleguidist example this may be a sign that you should take a look at the scope of your component as even those that rely on server side data should 
be able to be mocked simply.
- Reach out to the Fish Tank team is you need assistance.

## Practical Component Development

This section will go over various aspects of component development and our
recommendations on them.  If you'll be going against any of these
recommendations you should be able to defend those decisions in a code review.

The dos and don'ts described later are smaller tips and tricks that are meant
to be practical guidelines and examples of things you should and shouldn't be doing
while developing components in this repository.

### Props vs Data (Element State)

Put simple, data is passed in the following way:
- Props flow down
- Events flow up
- Event handlers modify Component State

When should I have a use a prop?  Should I store what I need as a data attribute?

For Single File Components (SFCs) in vue data should always be a function that returns an object with all the state values that you need for your SFC.  There is no difference between accessing a value that was set in your Component State and it being a property. So what should I use?

A property should be used when the parent needs to control the state of your component; a component should **never** change a property that was set by a parent.

For example, if you have a checkbox and you want the checkbox to set 
checked to be true when the user clicks it, you would catch the click in your event handler, fire an event and the parent would then set the checkbox checked or un-checked.

The reason this is recommended is because we want to have one-way control.  This will make long-term maintenance a LOT easier.  The parent component should have full authority on state as it is a Manager.

NOTE: this example does not use v-model intentionally to simply show the issues with Presenters changing the Component State, in actuality the Checkbox component should use v-model.

**BAD**
```vue
//MyElement.vue
<MyElement>
  <Checkbox v-bind:checked="checkboxState" v-on:change="checkboxState = !checkboxState"></Checkbox>
</MyElement>


//Checkbox.vue
<Checkbox>
  <input type="checkbox" v-bind:checked="checked" v-on:change="_handleChange" />
<script>
export default {
  methods: {
    _handleChange (e) {
      this.checked = !this.checked
      this.$emit('change', { value: !this.checked, old_value: this.checked, event: e })
    }
  }
}
</script>
</Checkbox>
```

**GOOD (stateless)**
```vue
//MyElement.vue
<MyElement>
  <Checkbox v-bind:checked="checkboxState" v-on:change="checkboxState = !checkboxState"></Checkbox>
</MyElement>
export default {
  data () {
    return {
      checkboxState: false
    }
  }
}

//Checkbox.vue
<template>
  <div>
    <input type="checkbox" :checked="checked" @change="$emit('change')" />
  </div>
</template>
<script>
export default {
  props: {
    checked: Boolean
  }
}
</script>
```

In the above example you can see the problem, the checkbox is controlling the state, but the parent is also setting it, so it will change twice (and never actually change for the user!).  Obviously you would not do this in practice, *but* what if the checkboxState was a computed property based on a value that was controlled by the checkbox checked state.

### Computed Properties

Computed properties are a good thing.  The most important thing to remember about them is that they are cached, so they are not re-evaluated until their dependencies change. You can have computed setters although we discourage having computed setters except in very specific cases.

- Avoid referencing a computed property in a loop for performance reasons, even though the value is cached there is still an expense to each lookup of the computed property that can be saved:

```js
//BAD
for(let i = 0; i < this.myComputedLength; ++i) {
  //...
}

//GOOD
const myLength = this.myComputedLength
for(let i = 0; i < myLength; ++i) {
  //...
}
```

### Events
Try to use standard event names when creating event; such as _click_, _change_, _touchstart_, etc. 

### Code Style
See [the vue styleguide](https://vuejs.org/v2/style-guide/) with the 
following differences:
- Prefix the names of all private methods with an underscore (_).