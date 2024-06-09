import Header from './components/Header';
import Footer from './components/Footer';

class Layout {

  render(content) {
    return `
      <main class="text-gray-700 dark:text-gray-300 min-h-screen">
        ${new Header().render()}
        ${content}
		${new Footer().render()}
      </main>
    `;
  }
}

export default Layout;
