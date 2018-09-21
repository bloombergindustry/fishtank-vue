# Fish Tank Tags

  - Selected Tag

    <img src="../../assets/ft-tag-selected.png" width="10%" alt="Fish Tank Tag">
    
    ```xml
    <FishTankTag 
      v-model="truthyVariable"
      label="Label"/>
    ```
  
  - Unselected Tag

    <img src="../../assets/ft-tag-unselected.png" width="10%" alt="Fish Tank Tag">
    
    ```xml
    <FishTankTag 
      v-model="falsyVariable"
      label="Label"/>
    ```

  - Disabled Tag

    <img src="../../assets/ft-tag-disabled.png" width="10%" alt="Fish Tank Tag">
    
    ```xml
    <FishTankTag 
      v-model="falsyVariable"
      label="Label"
      disabled/>
    ```
  
  <!-- - Removable Tag

    <img src="../../assets/ft-tag-removable.png" width="10%" alt="Fish Tank Tag">
    
    ```xml
    <InputTagRemove 
        v-model="tags"/>
    ``` -->
  
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
    <td>label</td>
    <td>String</td>
    <td>Tag label</td>
    <td>true</td>
    <td>undefined</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>String (Hex color, or valid CSS color)</td>
    <td>End Color of Gradient</td>
    <td>true</td>
    <td>undefined</td>
  </tr>
</table>
