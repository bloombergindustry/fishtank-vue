# Fish Tank Radios

  - Radio

    <img src="../../assets/ft-radio.png" width="50%" alt="Fish Tank Plain Radio">
    
    ```xml
    <InputRadio 
      v-model="valEqualToAlpha"
      value="alpha" 
      label="alpha"/>
    ```

  - Disabled Selected Radio

    <img src="../../assets/ft-radio-selected-disabled.png" width="50%" alt="Fish Tank Plain Radio">
    
    ```xml
    <InputRadio 
      v-model="valEqualToAlpha"
      disabled
      value="alpha" 
      label="alpha"/>
    ```
 
  - Disabled Radio

    <img src="../../assets/ft-radio-unselected.png" width="50%" alt="Fish Tank Plain Radio">
    
    ```xml
    <InputRadio 
      v-model="valEqualToAlpha"
      value="beta" 
      label="beta"/>
    ```

  - Disabled Unselected Radio

    <img src="../../assets/ft-radio-unselected-disabled.png" width="50%" alt="Fish Tank Plain Radio">
    
    ```xml
    <InputRadio 
      v-model="valEqualToAlpha"
      disabled
      value="beta" 
      label="beta"/>
    ```

## Usage

To import into your component

```js
import { 
  Radio 
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
    <td>Text Label of Radio</td>
    <td>true</td>
    <td>null</td>
  </tr>
  <tr>
    <td>value</td>
    <td>String,Boolean,Object,Number</td>
    <td>Value to select</td>
    <td>true</td>
    <td>null</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>Boolean</td>
    <td>Disable the button</td>
    <td>false</td>
    <td>null</td>
  </tr>
</table>