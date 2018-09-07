# Fish Tank Cards

  - Plain Card

    <img src="../../assets/ft-card.png" width="50%" alt="Fish Tank Plain Card">
    
    ```xml
    <Card>
      I am a plain card
    </Card>
    ```

## Usage

To import into your component

```js
import { 
  Card 
}  from '@fishtank/fishtank-vue'
```

In your template:

<!-- ```xml
<ButtonPrimary>Button Primary</ButtonPrimary>
``` -->

Adding actions:

<!-- ```xml
<ButtonPrimary 
  @click="handleClick"
  >Button Primary</ButtonPrimary>
``` -->

## Props

<!-- _The following props apply to all buttons_

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
</table> -->