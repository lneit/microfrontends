import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Define mount function to start up the app
const mount = (el) => {
  ReactDOM.render(
    <App />, el
  );
};

// If we are in dev and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// We should export the mount function to run from the container
export { mount };