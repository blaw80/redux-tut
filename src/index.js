import React from 'react'

// store creation specific code is located in ./create-store.js
import createStore from './create-store'

// Application is the root component of our application and the one that holds Redux's Provider...
import Application from './application'

// Just as we did so many times in previous examples, we need to create our redux instance. This time
// all code for that task was moved to a specific module that returns a single function to trigger the
// instantiation.
const store = createStore()

// Now, time to render our application to the DOM...
React.render(
  // ... and to provide our Redux store to our Root component as a prop so that Redux
  // Provider can do its job.
  <Application store={store} />,
  document.getElementById('root')
)



// import React from 'react';
// import { App } from './App';
//
// React.render(<App />, document.getElementById('root'));
