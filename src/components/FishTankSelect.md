<div>
  <h2>What is it?</h2>
  <p>A branded alternative to an HTML select, lest users select one item from a array of options.</p>

  <iframe src="https://codesandbox.io/embed/select-i81vi?fontsize=14" title="Select" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


  ```jsx
  <fish-tank-select
    id="options-select"
    label="Fish Tank Select" 
    :items="items" 
    v-model="selected"/>

  // Small Select with a fixed width
  <fish-tank-select
    small
    label="Fish Tank Dropdown" 
    :items="items" 
    :width='300'
    v-model="selected"/>
  ```
</div>