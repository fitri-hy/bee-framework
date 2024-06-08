import BeeComponent from '../components/BeeComponent';

class NotFound extends BeeComponent {
  render() {
    return `
    <section class="h-screen w-screen flex items-center justify-center">
		<div class="px-4 mx-auto max-w-7xl">
			<div class="mx-auto text-center">
				<h1 class="text-3xl mb-4 font-extrabold leading-none tracking-normal text-gray-200 md:text-6xl md:tracking-tight">
					<span>404</span>
				</h1>
				<img class="h-36 w-auto m-auto" src="/images/logo.png" alt="logo">
				<p class="px-0 mt-6 mb-9 text-lg md:text-xl lg:px-24">
					This is an example of an 404 pages
				</p>
				<div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
					<a href="/" class="inline-flex items-center justify-center hover:bg-amber-600 w-full px-6 py-3 mb-2 text-lg text-white bg-amber-500 rounded-2xl sm:w-auto sm:mb-0">
						Go Back Home
						<svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
				</div>
			</div>
		</div>
    </section>
    `;
  }
}

export default NotFound;
