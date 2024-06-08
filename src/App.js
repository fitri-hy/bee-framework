import { routes, handleRouteChange } from './routes/Route';
import Layout from './templates/Layout';
import './assets/css/global.css';

class App {
  constructor() {
    this.layout = new Layout();
  }

  renderComponent(component) {
    const content = component.render();
    return this.layout.render(content);
  }

  start() {
    const path = window.location.pathname;
    const route = routes.find(route => route.path === path);
    if (route) {
      const component = new route.component();
      const rendered = this.renderComponent(component);
      document.getElementById('app').innerHTML = rendered;
      handleRouteChange(route);
    } else {
      const notFoundRoute = routes.find(route => route.path === '*');
      const notFoundComponent = new notFoundRoute.component();
      const notFoundRendered = this.renderComponent(notFoundComponent);
      document.getElementById('app').innerHTML = notFoundRendered;
      handleRouteChange(notFoundRoute);
    }
  }
}

const app = new App();
app.start();
