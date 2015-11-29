import Application from './app.js';
import Router from './router.js';

const app = new Application({ container: '#app' });
const router = new Router(app);

window.onload = () => {
  app.start();
  Backbone.history.start({ pushState: false });
  router.navigate('persons/2', { trigger: true });
};

