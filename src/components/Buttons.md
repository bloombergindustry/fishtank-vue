# Fish Tank Buttons

## Available Buttons
  - Primary
  - Secondary
  - Destructive
  - Outline
  - Gradient
  - White

## Usage

To import into your component

```js
import { ButtonPrimary,ButtonSecondary,ButtonDestructive, ButtonOutline, ButtonGradient , ButtonWhite }  from '@fishtank/fishtank-vue'
```

In your template:

```js
<ButtonPrimary>Button Primary</ButtonPrimary>
```

Adding actions:

```js
<ButtonPrimary @click="handleClick">Button Primary</ButtonPrimary>
```

## Props
|Name|Type|Description|Required|
|---|---|---|---|
|disabled|Boolean|Specify if button should be disabled|false|
|block|Boolean|Changes Button to full width block element|false|

_Gradient Button Props_

|Name|Type|Description|Required|
|---|---|---|---|
|gradientStart|String|Start Color of Gradient|true|
|gradientEnd|String|End Color of Gradient|true|
|colorDirection|String|Horizontal direction of gradient|false|


_
