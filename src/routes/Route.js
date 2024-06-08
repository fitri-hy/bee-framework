import Home from '../templates/pages/Home';
import About from '../templates/pages/About';
import NotFound from '../templates/pages/404';
import DomUtils from '../utils/DomUtils';

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Welcome to Bee Framework | More Agile and Efficient User Interface',
      description: 'Bee Framework is a pure JavaScript framework designed to build lightweight and efficient user interfaces (UI), ensuring optimal performance and easy development.',
      keywords: 'Bee Framework, JavaScript, user interface, UI, web application, efficient, light, optimal performance'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About | Bee Framework',
      description: 'Learn more about Bee Framework, a pure JavaScript framework that helps you build efficient and responsive user interfaces (UI) for modern web applications.',
      keywords: 'about Bee Framework, information, JavaScript, UI, user interface, efficiency, responsiveness, web applications'
    }
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: '404 | Bee Framework',
      description: 'The page you are looking for was not found. Return to the homepage to explore more about Bee Framework.',
      keywords: '404, page not found, Bee Framework, back to homepage'
    }
  }
];

function handleRouteChange(route) {
  if (route.meta) {
    const { title, description, keywords } = route.meta;
    DomUtils.addMetaTags(title, description, keywords);
  }
}

export { routes, handleRouteChange };
