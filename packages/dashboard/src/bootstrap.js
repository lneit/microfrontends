import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Define mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// If we are in dev and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// We should export the mount function to run from the container
export { mount };