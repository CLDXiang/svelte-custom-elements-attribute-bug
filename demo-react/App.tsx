import * as React from 'react'
import { useState } from 'react'
import './App.css'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "my-component": MyComponentAttributes;
      "unknown-component": any;
    }

    interface MyComponentAttributes {
      'a-boolean'?: boolean;
    }
  }
}

function App() {
  const [x, setX] = useState(false);

  function toggle() {
    setX(!x);
  }

  return (
    <div onClick={toggle}>
      <my-component a-boolean={x} />
      <my-component a-boolean="true" />
      <my-component a-boolean="false" />
      <my-component a-boolean />
      <my-component />
      <my-component a-boolean={true} />
      <my-component a-boolean={false} />
      <unknown-component a-boolean={x} />
      <unknown-component a-boolean="true" />
      <unknown-component a-boolean="false" />
      <unknown-component a-boolean />
      <unknown-component />
      <unknown-component a-boolean={true} />
      <unknown-component a-boolean={false} />
    </div>
  )
}

export default App
