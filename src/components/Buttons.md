# Fish Tank Buttons

  - Primary

    ![alt text](https://github.com/bakpa79/fishtank-vue/raw/docs/buttonsmd/assets/ft-button-primary.png "Button Primary")
  - Secondary

    ![alt text](https://github.com/bakpa79/fishtank-vue/raw/docs/buttonsmd/assets/ft-button-secondary.png "Button Secondary")
  - Destructive

    ![alt text](../../assets/ft-button-destructive.png "Button Destructive")
  - Outline

    ![alt text](../../assets/ft-button-outline.png "Button Outline")
  - Gradient

    ![alt text](../../assets/ft-button-gradient.png "Button Gradient")
  - White

    ![alt text](../../assets/ft-button-white.png "Button White")
  - Button Primary with Block property

    ![alt text](../../assets/ft-button-primary-block.png "Button White")

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

```html
<ButtonPrimary>Button Primary</ButtonPrimary>
```

Adding actions:

```html
<ButtonPrimary 
  @click="handleClick"
  >Button Primary</ButtonPrimary>
```

## Props

_These props apply to all buttons_

```html
<ButtonPrimary
  :disabled="falsyVariable"
  :block="truthyVariable"
  >Button Primary</ButtonPrimary>
```
|Name|Type|Description|Required|Default|
|---|---|---|---|---|
|disabled|Boolean|Specify if button should be disabled|false| false|
|block|Boolean|Changes Button to full width block element|false| false|


_These props apply only to Gradient Button_

```html
<ButtonGradient
  :gradientStart="true"
  :gradientEnd="true"
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
    <td>Start Color of Gradient</td>
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
  <tr>
    <td colspan=5>
    </td>
  </tr>
</table>


_
