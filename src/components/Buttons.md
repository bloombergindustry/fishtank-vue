# Fish Tank Buttons

&nbsp; 

### Table Of Contents

- [Usage](#usage)
  - [How to Import Button Components](#to-import-button-components)
  - [How to Import Icons for Button Components](#to-import-icons-for-your-components)
  - [How to Export Your Custom Button Components](#to-export-your-custom-vue-components)
- [Button Components](#components)
  - [Primary Button](#primary-button)
  - [Secondary Button](#secondary-button)
  - [Destructive Button](#destructive-button)
  - [Outline Button](#outline-button)
  - [Outline Small Button](#outline-small-button)
  - [Outline Dark Button](#outline-dark-button)
  - [Outline Dark Small Button](#outline-dark-small-button)
  - [White Button](#white-button)
  - [Button Primary with _block_ property](#button-primary-with-block-property)
  - [Gradient Button](#gradient-button)
    - [Gradient Button Props](#gradient-button-props)
  - [Feature Button Icon](#feature-button-icon)
  - [Feature Button Icon with Label](#feature-button-icon-with-label)
  - [FAB Button](#fab-button-beta)
    - [An Explanation of FAB Button Props](#an-explanation-of-the-fab-button-props-and-icons)
    - [FAB Button Props](#fab-button-props)

- [Adding Button Actions](#adding-actions)
- [Universal Button Props](#universal-props)
  - [Examples of Implementation](#examples-of-implementation)
  - [List of Available Props](#list-of-available-props)

# Usage

&nbsp; 

##### To import button components

```js
import { 
  ButtonPrimary,
  ButtonSecondary,
  ButtonDestructive, 
  ButtonOutline,
  ButtonOutlineSmall, 
  ButtonGradient , 
  ButtonWhite,
  ButtonOutlineDark,
  ButtonOutlineDarkSmall,
  ButtonFeatureIcon,
  ButtonFeatureLabel, }  from '@fishtank/fishtank-vue'
```

&nbsp; 

##### To import icons for your components

*Desired icons must be individually imported from '@fishtank/icons-vue' **and** listed among exported components or they will not render.* Icons must be referenced using **camel case** not kebab. *e.g. MobileInactive24*  

&nbsp; 

```js
  import { Alert24 } from "@fishtank/icons-vue"
```

&nbsp; 

##### To export your custom Vue components

In your **export default Vue.extend ( )** class :
  1. Under components, list each type of button and icon that will be used.
  2. Under data, you will return your prop values to the button components
  &nbsp; e.g. color, color direction, links, and text.

&nbsp; 

*e.g.*
```js
  export default Vue.extend({

    components:{
      //imported buttons that will be used
      ButtonFeatureLabel,
      ButtonGradient,
      //imported icons that will be referenced in button components
      Alert24,
    },

    data: function(){
      return{
        //prop values that are sent to components
        colorStart : "#0018AB",
        colorEnd : "9933CC",
        colorDirection : "to right",
      }
    },

  })
```
To import icons for your component

*Desired icons must be individually imported from '@fishtank/icons-vue' **and** listed among exported components or they will not render.* Icons must be referenced using **camel case** not kebab. *e.g. MobileInactive24*  

```js
  import { Alert24 } from "@fishtank/icons-vue"
```

To export your custom Vue components

  1. Under components, list each type of button and icon that will be used.
  2. Under data, you will return your prop values to the button components
    1. e.g. color, color direction, links, and text.

e.g.
```js
  export default Vue.extend({

    components:{
      //imported buttons that will be used
      ButtonFeatureLabel,
      ButtonGradient,
      //imported icons that will be referenced in button components
      Alert24,
    },

    data: function(){
      return{
        //prop values that are sent to components
        colorStart : "#0018AB",
        colorEnd : "9933CC",
        colorDirection : "to right",
      }
    },

  })
```

&nbsp; 

# Components

&nbsp; 

See [Usage](#usage) for steps on how to enable button components for usage in your template. The following sub-sections describe each button component and their props. In Addition to the props unique to each button component there are [universal props](#universal-props) that apply to each button ( *with the exception of the FAB Button that is still in beta* ) . There are also [actions](#adding-actions) that can be added to each button component . 

*See the [Table of Contents](#table-of-contents) to jump directly to the section you need.*

&nbsp; 

  ## Primary Button

  &nbsp; 

  <img src="../../assets/ft-button-primary.png" width="20%" alt="Fish Tank Primary Button">

  &nbsp; 

  ```xml
      <ButtonPrimary>Button Primary</ButtonPrimary>
  ```
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.

  &nbsp; 

  ## Secondary Button

  &nbsp; 

  <img src="../../assets/ft-button-secondary.png" width="20%" alt="Fish Tank Secondary Button">

  &nbsp; 

  ```xml
      <ButtonSecondary>Button Secondary</ButtonSecondary>
  ```
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.

  &nbsp; 

  ## Destructive Button

  &nbsp; 

  <img src="../../assets/ft-button-destructive.png" width="20%" alt="Fish Tank Destructive Button">

  &nbsp; 

  ```xml
      <ButtonDestructive>Button Destructive</ButtonDestructive>
  ```
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.


  &nbsp; 
 
  ## Outline Button

  &nbsp; 

  <img src="../../assets/ft-button-outline.png" width="20%" alt="Fish Tank Outline Button">

  &nbsp; 

  ```xml
      <ButtonOutline>Button Outline</ButtonOutline>
  ```
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.


  &nbsp; 

  ## Outline Small Button

  &nbsp; 

  <img src="../../assets/ft-button-outline-small.png" width="20%" alt="Fish Tank Outline Small Button">

  &nbsp; 

  ```xml
      <ButtonOutlineSmall>Button Outline Small</ButtonOutlineSmall>
  ```
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.


  &nbsp; 

  ## Outline Dark Button

  ( For use on Dark Backgrounds )

  &nbsp; 

  <img src="../../assets/ft-button-outline-dark.png" width="20%" alt="Fish Tank Outline Dark Button">

  &nbsp; 

  ```xml
      <ButtonOutlineDark>Button Outline Dark</ButtonOutlineDark>
  ```
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.


  &nbsp; 

  ## Outline Dark Small Button

  ( For use on Dark Backgrounds )

  &nbsp; 

  <img src="../../assets/ft-button-outline-dark-small.png" width="20%" alt="Fish Tank Outline Dark Small Button">

  &nbsp; 

  ```xml
      <ButtonOutlineDarkSmall>Button Outline Dark Small</ButtonOutlineDarkSmall>
  ```
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.

  &nbsp; 

  ## White Button

  &nbsp; 

  <img src="../../assets/ft-button-white.png" width="20%" alt="Fish Tank White Button">

  &nbsp; 

  ```xml
      <ButtonWhite>Button White</ButtonWhite>
  ```
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.


  &nbsp; 

  ## Button Primary with _block_ property 

  &nbsp; 

  <img src="../../assets/ft-button-primary-block.png" width="50%" alt="Block Style Fish Tank Primary Button">

  &nbsp; 

  ```xml
    <ButtonPrimary 
      :block="true">Button Primary</ButtonPrimary>
  ```
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.

  &nbsp; 
  
  ## Gradient Button

  &nbsp; 

  <img src="../../assets/ft-button-gradient.png" width="20%" alt="Fish Tank Gradient Button">

  &nbsp; 

  This button takes in three *required* props **:gradientStart**, **:gradientEnd**, and **:colorDirection**. Return values into these props using a return function in **:data** within your **export default Vue.extend( )** class. See [How to Export Your Custom Button Components](#to-export-your-custom-vue-components) . 

  &nbsp; 

  ```xml
    <ButtonGradient
      :gradientStart="startingHexColorVariable"
      :gradientEnd="endingHexColorVariable"
      :colorDirection="to-right"
      >Button Gradient</ButtonGradient>
  ```

  &nbsp; 

  #### Gradient Button Props

  |Name|Type|Description|Required|Default|
  |---|---|---|---|---|
  |gradientStart|String(Hex color, or valid CSS color)|Start Color of Gradient|true|undefined|
  |gradientEnd|String(Hex color, or valid CSS color)|End Color of Gradient|true|undefined|
  |colorDirection|String("to-right" or "to-left")|Horizontal Direction of Gradient|false|undefined|
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.


  &nbsp; 

 ## Feature Button Icon

  &nbsp; 

  <img src="../../assets/ft-button-feature-icon.png" width="5%" alt="Fish Tank Feature Button Icon">

  &nbsp; 

  This button type utilizes both icons and slots, it will require 4 things of you:
  1. Import desired icons from **@fishtank/icons-vue**. See [How to Import Icons for Button Components](#to-import-icons-for-your-components)

  2. Declare them under **:components** in your **export default Vue.extend( )** class. See [How to Export Your Custom Button Components](#to-export-your-custom-vue-components) .
  3. Refer to icons in all cases using camel case.
    a. Do it like this. *'AnAwesomeIcon24'* **(Heroes do this)**
    b. Never do it like this, *'an_awesome_icon_24' or 'an-awesome-icon-24'. **(Only Villians do that.)**
  4. Refer to icon with self closing tags within component. *e.g. '< AnAwesomeIcon24 />'*

  &nbsp; 

  This button simply needs you to reference the desired icon using camel case and self closing brackets within the components.

  &nbsp; 

  ```xml
    <ButtonFeatureIcon> <Alert24/> </ButtonFeatureIcon>
  ```
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.


  &nbsp; 

  ## Feature Button Icon With Label

  &nbsp; 

  <img src="../../assets/ft-button-feature-label.png" width="22%" alt="Fish Tank Feature Button with Label">

  &nbsp; 

  This button type utilizes both icons and slots, it will require 4 things of you:
  1. Import desired icons from **@fishtank/icons-vue**. See [How to Import Icons for Button Components](#to-import-icons-for-your-components)

  2. Declare them under **:components** in your **export default Vue.extend( )** class. See [How to Export Your Custom Button Components](#to-export-your-custom-vue-components) .
  3. Refer to icons in all cases using camel case.
    a. Do it like this. *'AnAwesomeIcon24'* **(Heroes do this)**
    b. Never do it like this, *'an_awesome_icon_24' or 'an-awesome-icon-24'. **(Only Villians do that.)**
  4. Refer to icon with self closing tags within component. *e.g. '< AnAwesomeIcon24 />'*

&nbsp; 

  This button takes in two required slots that are referenced using the '< template >' tags. The first is the '< template >' that takes in the attribute slot named 'icon'. Between this template tag is where you will reference your 24x24 icon of choice, after you have imported it from '@fishtank/icons-vue'. Remember to reference your icon using self closing tags. The second '< template >' tag takes in a slot named 'label', where you enter the label text.

  &nbsp; 

  ```xml
    <ButtonFeatureLabel> 
        <template slot="icon"> <Alert24/> </template>
        <template slot="label"> Button Feature Label</template>
    </ButtonFeatureLabel>
  ```
  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.


  &nbsp; 

  ## FAB Button

  

  &nbsp;

  &nbsp; &nbsp; &nbsp;<img src="../../assets/ft-button-fab-default-state.png" width="10%" alt="Fish Tank FAB Button Default State"/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="../../assets/ft-button-fab-hover-state.png" width="11%" alt="Fish Tank FAB Button Hover State"/>
  
  &nbsp; &nbsp; *Default State* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  *Hover State* 
  
  &nbsp;

  ```xml
      <ButtonFAB 
        :fab-color-primary-start="#0018AB"
        :fab-color-primary-end="#9933CC" 
        :fab-color-secondary="#17509F"
        :options-available="true"
        :option-one-link="https://twitter.com/"
        :option-two-link="https://facebook.com/"
      >

        <template slot="mainIcon"> <Add32/>  </template>
        <template slot="option1"> <Twitter24/> </template>
        <template slot="option2"> <Facebook24/> </template>

      </ButtonFAB>
  ```

  &nbsp;


  #### An Explanation Of The FAB Button Props And Icons

  The FAB Button takes in six props, the first three are strings that take in valid css colors and hex values. With ```:fab-color-primary-start``` determining the start gradient color of the main FAB button, ```:fab-color-primary-end``` determining the end gradient color, and ```:fab-color-secondary``` being the solid background color of the two FAB button options. The optional sub-buttons on the FAB are only available if the boolean prop ```:options-available``` is set to true, it's set to false by default. The final two props are strings where you can pass URL's / paths for each of the FAB's optional sub-bottons, which render in ascending order. These props are ```:option-one-link``` and ```:option-two-link```.

  Assigning Icons to each button is as simple as creating ```<template></template>``` tags within the ```<ButtonFAB></ButtonFAB>``` element, and then passing your desired icons through the ```<template></template>``` tags after specifying the appropiate slot it will belong to. For instance, icons passed into any template with slot named 'mainIcon' will appear/belong to the main FAB button.

  eg.
  ```xml
  <template slot="mainIcon"> <Add32/> </template>
  ```
  Icons passed into any template with a slot named 'option1' will appear as the first FAB sub-button's icon. This is the sub-button nearest the main FAB button.

  eg.
  ```xml
  <template slot="option1"> <Twitter24/> <template>
  ```
  Lastly, icons passed into any template with a slot named 'option2' will appear as the second FAB sub-button's icon. This is the sub-button furthest from the main FAB button.

  eg.
  ```xml
  <template slot="option2"> <Facebook24/> </template>
  ```

  &nbsp;

  *For Instruction on how to import Fish Tank Icons for use in this component, see the ' [How to Import Icons for Button Components](#to-import-icons-for-your-components) ' section.*

  &nbsp;

  #### FAB Button Props

  |Name|Type|Description|Required|Default|
  |---|---|---|---|---|
  |fabColorPrimary | String ( Hex color, or valid css color ) | Color of FAB main button| false | #292e31 |
  |fabColorSecondary | String ( Hex color, or valid css color ) | Color of FAB option buttons| false | #777C7F |
  |fabOption | Array ( Takes in three sub-props ) | Array of FAB option buttons| false | Null|
  |fabOption.icon | String ( Character ) or Icon *( **Beta** )* | Takes in either a string character or icon| false| Null |
  |fabOption.text | String ( Descriptive Label ) | Descriptive text label for option button | fasle| Null |
  |fabOption.links | String ( URL Link ) | URL/Link for FAB option button | false | Null |

  &nbsp;


  &nbsp;

  ###### See [Usage](#usage) section for an explanation on how to enable this button component in your template.

  &nbsp;
  
# Adding actions:

Actions applicable to all button components.

```xml
<ButtonPrimary 
  @click="handleClick"
  >Button Primary</ButtonPrimary>
```
  ###### See [Usage](#usage) section for an explanation on how to enable button components in your template.


# Universal Props

*The following props apply to all buttons* .

&nbsp;

##### Examples of Implementation
```xml
<ButtonPrimary
  :disabled="falsyVariable"
  :block="truthyVariable"
  >Button Primary</ButtonPrimary>
```

 &nbsp;

 ##### List of Available Props
|Name|Type|Description|Required|Default|
|---|---|---|---|---|
|disabled|Boolean|Specify if button should be disabled|false| false|
|block|Boolean|Changes Button to full width block element|false| false|

 ###### See [Usage](#usage) section for an explanation on how to enable button components in your template.