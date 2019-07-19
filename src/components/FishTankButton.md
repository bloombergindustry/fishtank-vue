<div>
  <h2>What is it?</h2>
  <p>Use buttons to perform common actions or to navigate to key pages</p>
  <iframe src="https://codesandbox.io/embed/4nwp34xn9?fontsize=14" title="@fishtank/CTAButtons" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

  ```jsx
  <section>
    <div>
      <fish-tank-button 
        role="primary" 
        >Search</fish-tank-button>

      <fish-tank-button 
        role="secondary" 
        >Search</fish-tank-button>

      <fish-tank-button 
        role="destructive" 
        >Search</fish-tank-button>

      <fish-tank-button 
        role="outline" 
        >Search</fish-tank-button>

      <fish-tank-button 
        role="warning" 
        >Search</fish-tank-button>

      <fish-tank-button 
        role="primary"
        disabled 
        >Search</fish-tank-button>

      <fish-tank-button 
        role="theme" 
        >Search</fish-tank-button>
    </div>
    <div>
      <fish-tank-button 
        role="primary"
        block
        >Add Location</fish-tank-button>
    </div>

    <div>
      <fish-tank-button-gradient 
        :color-direction="colorDirection" 
        :gradient-start="colorStart" 
        :gradient-end="colorEnd"
      >
        Button Gradient
      </fish-tank-button-gradient>
    </div>

    <div>
      <fish-tank-button-feature-label> 
        <template slot="icon">
          <Alert24 />
        </template>
        <template slot="label">
          Button Feature Label
        </template>
      </fish-tank-button-feature-label>
    </div>

    <div>
      <fish-tank-button-feature-icon> 
        <template slot="icon">
          <Alert24 />
        </template>
      </fish-tank-button-feature-icon>
    </div>

  </section>
  ```
</div>