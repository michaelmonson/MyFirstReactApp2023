import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

/* 
 * This ReactDOM.createRoot(...) is where some of the REACT magic occurs!
 * The 'createRoot' function above looks for the DOM element called 'root' which is found in our index.html file
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(  
  //Component Tree : It wraps our 'App.tsx' component.  It is a 'built-in' component of React.  Purpose is to find potential problems.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/**
 * NOTE: With the code above, we're taking this component tree and rendering it (displaying) 
 * inside an element with the ID of 'root' and using the ReactDOM library. 
 * 
 * It is important to understand that we could alternatively render this component Tree in a mobile app 
 * using a different Library called 'ReactNative.'
 * 
 * So REACT itself is not tied to a particular platform like web or mobile... it's platform agnostic
 * and we can use it to build apps for web mobile and desktop devices.
 */
