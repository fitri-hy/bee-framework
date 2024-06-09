import BeeComponent from './BeeComponent';
import DarkMode from './DarkMode';

class Header extends BeeComponent {

  constructor() {
    super();
	this.darkMode = new DarkMode();
    window.darkMode = this.darkMode;
    window.DarkLight = this;
  }
  
  render() {
    return `
	<header class="sticky z-50 text-gray-600 w-full pt-4">
		<div class="container mx-auto w-5/6 mx-auto bg-white dark:bg-slate-900 backdrop-blur-2xl w-full rounded-full shadow flex flex gap-2 justify-between py-4 px-6">
			<div class="flex gap-4">
				<a class="flex font-medium">
					<img class="flex dark:hidden object-contain object-center rounded-3xl w-auto h-9" alt="logo" src="/images/logo-light.png">
					<img class="hidden dark:flex object-contain object-center rounded-3xl w-auto h-9" alt="logo" src="/images/logo.png">
				</a>
			</div>
			<nav class="flex items-center gap-4 text-base justify-center font-semibold text-sm md:text-lg">
				<a href="/" class="hover:text-gray-900 cursor-pointer text-gray-700 dark:text-gray-200">Home</a>
				<a href="/about" class="hover:text-gray-900 cursor-pointer text-gray-700 dark:text-gray-200">About</a>
				${this.darkMode.render()}
			</nav>
		</div>
	</header>
    `;
  }
}

export default Header;
