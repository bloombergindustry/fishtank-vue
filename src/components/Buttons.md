# Fish Tank Buttons

## Usage

To import into your component

```js
import { 
  ButtonPrimary,
  ButtonSecondary,
  ButtonDestructive, 
  ButtonOutline, 
  ButtonGradient , 
  ButtonWhite }  from '@fishtank/fishtank-vue'
```

In your template:

  - Primary

    <img src="../../assets/ft-button-primary.png" width="20%" alt="Fish Tank Primary Button">

    ```xml
      <ButtonPrimary>Button Primary</ButtonPrimary>
    ```

  - Secondary

    <img src="../../assets/ft-button-secondary.png" width="20%" alt="Fish Tank Secondary Button">

    ```xml
      <ButtonSecondary>Button Primary</ButtonSecondary>
    ```

  - Destructive

    <img src="../../assets/ft-button-destructive.png" width="20%" alt="Fish Tank Destructive Button">

    ```xml
      <ButtonDestructive>Button Primary</ButtonDestructive>
    ```

  - Outline

    <img src="../../assets/ft-button-outline.png" width="20%" alt="Fish Tank Outline Button">

    ```xml
      <ButtonOutline>Button Primary</ButtonOutline>
    ```

  - White

    <img src="../../assets/ft-button-white.png" width="20%" alt="Fish Tank White Button">

    ```xml
      <ButtonWhite>Button Primary</ButtonWhite>
    ```

  - Button Primary with _block_ property

    <img src="../../assets/ft-button-primary-block.png" width="50%" alt="Block Style Fish Tank Primary Button">

    ```xml
    <ButtonPrimary 
      :block="true">Button Primary</ButtonPrimary>
    ```


  - Gradient

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