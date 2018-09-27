# Fish Tank Buttons

### Table Of Contents
- [Usage](#usage)
- [Components](#components)
  * [Primary](#primary button)
  * [Secondary](#secondary button)
  * [Destructive](#destructive button)
  * [Outline](#outline button)
  * [Outline Small](#outline small button)
  * [Outline Dark](#outline dark button)
  * [Outline Dark Small](#outline dark small button)
  * [White](#white button)
  * [Button Primary with _block_ property](#button primary with _block_ property)
  * [Gradient](#gradient button)

- [Props](#props)

# Usage

**To import button components**

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
  ButtonOutlineDarkSmall, }  from '@fishtank/fishtank-vue'
```

**To import icons for your components**

*Desired icons must be individually imported from '@fishtank/icons-vue' **and** listed among exported components or they will not render.* Icons must be referenced using **camel case** not kebab. *e.g. MobileInactive24*  

```js
  import { Alert24 } from "@fishtank/icons-vue"
```


**To export your custom Vue components**

  1. Under components, list each type of button and icon that will be used.
  2. Under data, you will return your prop values to the button components
    1. e.g. color, color direction, links, and text.

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

# Components

In your template:

  ## Primary Button

    <img src="../../assets/ft-button-primary.png" width="20%" alt="Fish Tank Primary Button">

    ```xml
      <ButtonPrimary>Button Primary</ButtonPrimary>
    ```

  ## Secondary Button

    <img src="../../assets/ft-button-secondary.png" width="20%" alt="Fish Tank Secondary Button">

    ```xml
      <ButtonSecondary>Button Primary</ButtonSecondary>
    ```

  ## Destructive Button

    <img src="../../assets/ft-button-destructive.png" width="20%" alt="Fish Tank Destructive Button">

    ```xml
      <ButtonDestructive>Button Primary</ButtonDestructive>
    ```
 
  ## Outline Button

    <img src="../../assets/ft-button-outline.png" width="20%" alt="Fish Tank Outline Button">

    ```xml
      <ButtonOutline>Button Primary</ButtonOutline>
    ```

  ## Outline Small Button

    <img src="../../assets/ft-button-outline-small.png" width="20%" alt="Fish Tank Outline Small Button">

    ```xml
      <ButtonOutlineSmall>Button Outline Small</ButtonOutlineSmall>
    ```

  ## Outline Dark Button

    ( For use on Dark Backgrounds )

    <img src="../../assets/ft-button-outline-dark.png" width="20%" alt="Fish Tank Outline Dark Button">

    ```xml
      <ButtonOutlineDark>Button Outline Dark</ButtonOutlineDark>
    ```

  ## Outline Dark Small Button

    ( For use on Dark Backgrounds )

    <img src="../../assets/ft-button-outline-dark-small.png" width="20%" alt="Fish Tank Outline Dark Small Button">

    ```xml
      <ButtonOutlineDarkSmall>Button Outline Dark</ButtonOutlineDarkSmall>
    ```

  ## White Button

    <img src="../../assets/ft-button-white.png" width="20%" alt="Fish Tank White Button">

    ```xml
      <ButtonWhite>Button Primary</ButtonWhite>
    ```

  ## Button Primary with _block_ property 

    <img src="../../assets/ft-button-primary-block.png" width="50%" alt="Block Style Fish Tank Primary Button">

    ```xml
    <ButtonPrimary 
      :block="true">Button Primary</ButtonPrimary>
    ```


  ## Gradient Button

    <img src="../../assets/ft-button-gradient.png" width="20%" alt="Fish Tank Gradient Button">

    ```xml
    <ButtonGradient
      :gradientStart="startingHexColorVariable"
      :gradientEnd="endingHexColorVariable"
      :colorDirection="to-right"
      >Button Primary</ButtonGradient>
    ```

Adding actions:

```xml
<ButtonPrimary 
  @click="handleClick"
  >Button Primary</ButtonPrimary>
```

## Props

_The following props apply to all buttons_

```xml
<ButtonPrimary
  :disabled="falsyVariable"
  :block="truthyVariable"
  >Button Primary</ButtonPrimary>
```
|Name|Type|Description|Required|Default|
|---|---|---|---|---|
|disabled|Boolean|Specify if button should be disabled|false| false|
|block|Boolean|Changes Button to full width block element|false| false|


_The following props apply only to Gradient Button_

```xml
    <ButtonGradient
      :gradientStart="startingHexColorVariable"
      :gradientEnd="endingHexColorVariable"
      :colorDirection="to-right"
      >Button Primary</ButtonGradient>
```


<table>
  <thead>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Required</th>
    <th>Default</th>
  </thead>
  <tr>
    <td>gradientStart</td>
    <td>String (Hex color, or valid CSS color)</td>
    <td>Start Color of Gradient</td>
    <td>true</td>
    <td>undefined</td>
  </tr>
  <tr>
    <td>gradientEnd</td>
    <td>String (Hex color, or valid CSS color)</td>
    <td>End Color of Gradient</td>
    <td>true</td>
    <td>undefined</td>
  </tr>
  <tr>
    <td>colorDirection</td>
    <td>String ("to-right" or "to-left")</td>
    <td>Horizontal direction of gradient</td>
    <td>false</td>
    <td> "to-right"</td>
  </tr>
</table>