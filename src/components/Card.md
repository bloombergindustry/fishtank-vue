# Fish Tank Cards

  - Plain Card

    <img src="../../assets/ft-card.png" width="50%" alt="Fish Tank Plain Card">
    
    ```xml
    <Card>
      I am a plain card
    </Card>
    ```
  - Card with heading

    <img src="../../assets/ft-card-heading.png" width="50%" alt="Fish Tank Plain Card">
    
    ```xml
    <Card heading="I am a card heading">
      I am card content
    </Card>
    ```

  - Card with heading and custom background

    <img src="../../assets/ft-card-custom-background.png" width="50%" alt="Fish Tank Plain Card">
    
    ```xml
    <Card>
      <div
        slot="heading"
        slot-scope="{ headerClass }"
        :class="headerClass"
        class="custom-heading"
      >
        Heading with custom background
      </div>
      I am card content
    </Card>
    ```
  
  - Branded Card

    <img src="../../assets/ft-card-branded.png" width="50%" alt="Fish Tank Plain Card">
    
    ```xml
    <Card branded="card-sample-brand-class">
      I am a branded card
    </Card>
    ```
## Usage

To import into your component

```js
import { 
  Card 
}  from '@fishtank/fishtank-vue'
```

## Props

<table>
  <thead>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    <th>Required</th>
    <th>Default</th>
  </thead>
  <tr>
    <td>heading</td>
    <td>String (Hex color, or valid CSS color)</td>
    <td>Start Color of Gradient</td>
    <td>true</td>
    <td>undefined</td>
  </tr>
  <tr>
    <td>branded</td>
    <td>String (Hex color, or valid CSS color)</td>
    <td>End Color of Gradient</td>
    <td>true</td>
    <td>undefined</td>
  </tr>
</table>
