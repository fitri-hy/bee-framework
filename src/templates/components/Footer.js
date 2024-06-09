import BeeComponent from './BeeComponent';

class Footer extends BeeComponent {
  render() {
    return `
	<footer class="fixed z-50 flex justify-center bottom-0 w-full w-full mx-auto px-8 py-4">
		<span class="text-gray-600 dark:text-gray-300">©2024 Bee Framework. All Right Reserved.</span>
    </footer>
    `;
  }
}

export default Footer;
