import Header from './components/Header';
import Footer from './components/Footer';

class Layout {

  render(content) {
    return `
      <main class="bg-slate-100 dark:bg-slate-800 min-h-screen">
        ${new Header().render()}
        ${content}
		${new Footer().render()}
      </main>
    `;
  }
}

export default Layout;
