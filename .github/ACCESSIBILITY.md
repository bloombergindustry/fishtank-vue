_THIS DOCUMENT IS WORK IN PROGRESS AND IS NOT FINAL_
# Accessibility For Vue Components

Although many BNA products are not readily accessible to wider world, and are behind a paywall, we should not mistake our customer base for one that has the same physical or cognitive abilities as each other. Building UI that is accessible is business critical and socially imperative.
 
TL;DR – Jump to [Getting Started with Accessibility](#getting-started)
 
Building a product that provides accessible navigation is more than adding tabindex=”0” attributes to your code. Ideally, it’s assessing what's required to make your site navigable without a mouse, and providing contextual tags for content and UI for screen-readers.
 
There are lots of compelling, and emotional arguments for developing products that are navigable and usable without a mouse or even a screen. Even if you are not differently-able, we all have, at periods in our lives, limited or situational disabilities (physical ailment related to vision or movement, for example). We are then assured that our customers are also facing these same challenges. 
 
The [business](https://www.w3.org/WAI/business-case/) and legal arguments are just as, if not more, compelling: according to https://www.adatitleiii.com, by mid-2018, ADA lawsuits were already on track to exceed 2017 numbers: https://www.adatitleiii.com/2018/07/website-access-and-other-ada-title-iii-lawsuits-hit-record-numbers/ . In 2008, Target was the subject of a [class action lawsuit by the National Federation for the Blind](https://en.wikipedia.org/wiki/National_Federation_of_the_Blind_v._Target_Corp.) that cost the retailer $6 million in damages plus plaintiff legal fees, and more.

In the inverse, companies like Google, [Barclays](https://www.w3.org/community/wai-engage/wiki/Barclays_Bank_Case_Study), and Apple embrace accessibility as a technology and customer experience challenge and [became leaders in their industries](https://www.w3.org/WAI/business-case/), serving their customers. Apple, in particular, always has product features and messaging, that supports and encourages accessibility: https://www.apple.com/accessibility/

We have a legal, if not moral, responsibility to build products in a way that address and succeeds at supporting accessibility, or leverages established native accessibility feature and patterns of HTML and the Web.
 
# Getting started with accessibility
## Consider the user’s flow through the component as you build it
It’s important to understand the UI engineering challenge of building an interface, by starting from a place of empathy with your wide range of users. The first step is to take accessibility into account from the planning stage before you write a single line of code. Choice of UI elements and ARIA planning can save you time refactoring code later.

If you are refactoring existing or work in progress work, try navigating and interacting without the mouse, or with your computer OS Voice Narration feature (Voiceover on Mac, for example). It will help you identify gaps in interactions.
 
## Keyboard focus and navigation
 
*Whenever possible, use Vue’s built in bindings to native html elements over custom elements; You’ll get native browser accessibility and state management features out of the box.*
 
Keyboard navigation means using the tab and arrow keys to move through focusable elements on the page. Users can only, by default, navigate to links, buttons and form controls with the keyboard. As they navigate, they see a visual representation on the current item focused, usable with a browser default outline indication.
 
Typically, in the design phase, for aesthetic reasons, we override or remove this highlight, We also have to code designs that depict custom UI elements and treatments for elements (buttons, radios, etc. that have custom look, feel, and interactions)
 
*Use native element pseudo selectors to render visual state*

Vue offer native binding for state and events to HTML standard form elements. By using the native element, you get a focusable/blurable element that has some built in state management features via pseudo-selectors (:checked, :focus, :focus-within, :focus-visible).
Using the checkbox input as an example, you can style the <label> sibling element to a checkbox to visually represent the unchecked, checked, hover and disabled element. See [ The Accessibility Tree  ](https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree ) 
 
 
*Vue provides inline event handlers and modifiers to support complex keyboard click events.*

Vue form elements also offer event handler for keyboard events. You can write write handlers for specific keyboard event like enter and tab, or for combinations of keyboard events (like the various combinations for cut, copy and paste, etc.). The [inline handlers](https://vuejs.org/v2/guide/events.html#Methods-in-Inline-Handlers ) and [modifiers](https://vuejs.org/v2/guide/events.html#Event-Modifiers ) and very useful in that respect.
 
You can dynamically set focus an on any form element Vue component with .focus() method. Form elements also have the benefit of having

Consider a pattern that leverages refs to collect a group of UI elements together, to [identify a specific item to take the document focus](https://forum.vuejs.org/t/focus-on-the-first-input-element-in-custom-form-component/49596/5). You can also use the [provide/inject model to "register" form elements](https://gist.github.com/bakpa79/b62b74df99f9ac30e36511795e133722) that can can have their focus() method triggered.

 
## ARIA and tabindex
If it’s necessary to style a non-form element, there are strategies to create elements and interaction patterns that support keyboard navigation and voice narration.

*WAI-ARIA, the Accessible Rich Internet Applications Suite*, defines a way to make Web content and Web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies. See [W3 - WAI-ARIA Overview ]( https://www.w3.org/WAI/standards-guidelines/aria/ )

Using ARIA tags add functional context to dynamic elements on the page (etc: aria-loading) as well as semantic description to non--native html elements (aria-label, role: button, etc.)
Review this [introduction to ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), as well as the av available [ARIA tags and roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques ).
 
### Use tabindex to add a non-form element to the order of focusable elements in a page

The tabindex attribute indicates if its element can be focused, and if/where it participates in sequential keyboard navigation (usually with the “Tab” key, hence the name). 
 
Using 
```
tabindex=”0”
```
can be used to add an element to the ordered flow of focusable elements on the page.

The value denotes the position in the sequence of element. “0” is the default, allow navigation to progression on order in DOM from the top of the page to the bottom. A negative value takes it out of sequence completely. A higher value moves it down in sequence. That means that an element with TabIndex of “1” with be focused after *all* the “0” elements have been tabbed through. Generally, unless there is some particular reason to move an element out of the normal order of elements in the DOM, all elements with have tabindex=”0”.

### Tutorial and patterns for accessible UI

[Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/)
These tutorials provide best-practice guidance on implementing accessibility in different situations. They combine WCAG 2.0 success criteria and techniques from various conformance levels. Each tutorial page lists the specific success criteria and techniques used on that page.

[W3C Design Patterns and Widgets](https://www.w3.org/TR/wai-aria-practices/#aria_ex)
This page demonstrates how to make common rich internet application patterns and widgets accessible by applying WAI-ARIA roles, states, and properties and implementing keyboard support.

## Tools
https://github.com/pa11y/pa11y

## References 
[Getting Started with Web Accessibility in - Part 1 Vue](https://medium.com/@emilymears/getting-started-with-web-accessibility-in-vue-17e2c4ea0842)
[Getting Started with Web Accessibility in Vue - Part 2 ](https://medium.com/@emilymears/getting-started-with-web-accessibility-in-vue-17e2c4ea0842 )
[US Web Design System - UI Components](https://designsystem.digital.gov/components/ )
[W3 - Web Accessibility Tutorials ](https://www.w3.org/WAI/tutorials/ )
[W3 - WAI-ARIA Authoring Practices ](https://www.w3.org/TR/wai-aria-practices/ )
[W3 - Pseudo Selectors ](https://www.w3.org/TR/selectors/#dynamic-pseudos )

 

