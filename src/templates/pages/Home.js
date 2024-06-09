import BeeComponent from '../components/BeeComponent';

class Home extends BeeComponent {
  render() {
    return `
    <section class="h-screen w-screen flex items-center justify-center bg-slate-100 dark:bg-neutral-800">
		<div class="px-4 mx-auto max-w-7xl">
			<div class="mx-auto md:w-11/12 xl:w-9/12 text-center">
				<h1 class="mb-9 font-extrabold leading-none tracking-normal text-gray-800 dark:text-gray-200 text-5xl tracking-tight">
					<span>Welcome To</span>
				</h1>
				<img class="h-36 w-auto m-auto bg-neutral-700 p-4 rounded-lg" src="/images/logo.png" alt="logo">
				<p class="px-0 mt-6 mb-9 text-lg md:text-xl lg:px-24">
					Bee Framework is a pure JavaScript framework designed to build lightweight and efficient user interfaces (UI), ensuring optimal performance and easy development.
				</p>
				<div class="flex justify-center">
					<p class="mb-9 px-6 py-2 rounded-full bg-neutral-300 dark:bg-neutral-700">
						Go to <span class="text-amber-500">src/App.js</span> folder to start building
					</p>
				</div>
				<div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
					<a href="https://github.com/fitri-hy/bee-framework" class="inline-flex items-center justify-center hover:bg-amber-600 w-full px-6 py-3 mb-2 text-lg text-white bg-amber-500 rounded-2xl sm:w-auto sm:mb-0">
						Download
						<svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
					<a href="https://github.com/fitri-hy/bee-framework/blob/main/README.md" class="inline-flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-950 w-full px-6 py-3 mb-2 text-lg bg-neutral-300 dark:bg-neutral-900 rounded-2xl sm:w-auto sm:mb-0">
						Get Started
						<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
					</a>
				</div>
			</div>
		</div>
    </section>
    `;
  }
}

export default Home;
