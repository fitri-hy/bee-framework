import BeeComponent from './BeeComponent';

class Footer extends BeeComponent {
  render() {
    return `
	<footer class="w-full mt-12">
		<div class="flex mx-auto container justify-center py-4 text-center text-gray-600 dark:text-gray-300">
			<span class="font-normal Inter">©2024 Bee Framework. All rights reserved.</span>
		</div>
	</footer>
    `;
  }
}

export default Footer;
