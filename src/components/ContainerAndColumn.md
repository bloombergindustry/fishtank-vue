<div>
  <h2>What is it ?<h2>
  <p>Both function as containers of HTML elements, but they have preconfigured settings to enable teams to easily align to the Fish Tank responsive grid.

  <p>The Container component handles responsively resizing the entire block of page content to the correct width size at different breakpoints. Content within will snap between a 1,200px grid, a 960px grid, a 720px grid, and a fluid grid based on the viewport or designated area.</p>

  <p>The Column component handles assigning a section of content to a number of columns out of the 12 column grid. Designers and engineers can simply set the number of columns for an element at each breakpoint, and the element will automatically resize to the correct width.</p>

  <p>When paired together, the Container component adjusts the overall page width, while Column components within the Container resizes and repositions sections of content to best suit that content at the new page width.</p>

  <iframe src="https://codesandbox.io/embed/vue-template-hdt25?fontsize=14" title="@fishtank/container & &fishtank/column" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

  ```jsx
  <div>
    <fish-tank-container as="header">
      <fish-tank-column :xs-column="12" as="nav">
        Navigation 
      </fish-tank-column>
    </fish-tank-container>

    <fish-tank-container>
      <fish-tank-column :xs-column="12" :md-column="3" as="aside">
        Sidebar 
      </fish-tank-column>
      <fish-tank-column :xs-column="12" :md-column="3" as="main">
        Main Content 
      </fish-tank-column>
    </fish-tank-container>
  </div>
  ```
</div>