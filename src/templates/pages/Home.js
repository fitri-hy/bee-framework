import BeeComponent from '../components/BeeComponent';

class Home extends BeeComponent {
  render() {
    return `
    <div class="mx-auto w-7/8 flex justify-center items-center h-1/5">
		<div class="w-7/8 mx-auto relative h-full z-30 pt-2 inter">
			<div class=" text-center pt-8 md:pt-9 mx-auto w-4/5 md:w-3/5">
				<img class="h-[200px] m-auto mb-6 dark:bg-gray-200 rounded-full p-2" src="/images/icon.png">
				<h1 class="text-[#030647]  font-semibold text-5xl md:text-7xl dark:text-gray-200 Inter">
					Bee Framework
				</h1>
				<p class="text-lg text-[#515568] pt-2 mt-4 text-center w-4/5  mx-auto dark:text-gray-100/70 Inter">
					Bee Framework is a pure JavaScript framework designed to build lightweight and efficient user interfaces (UI), ensuring optimal performance and easy development.
				</p>
				<div class="flex flex-row mx-auto gap-4 justify-center pt-6 mt-4">
					<a href="https://github.com/fitri-hy/bee-framework/archive/refs/heads/main.zip" target="_blank" class="text-white shadow py-4 px-6 bg-amber-600 rounded-lg hover:bg-amber-500">
						Download
					</a>
					<a href="https://i-as.dev/framework" target="_blank" class="text-gray-800 shadow dark:text-white py-4 px-6 bg-white hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-900 rounded-lg">
						Get Started
					</a>
				</div>
			</div>
		</div>
	</div>
    `;
  }
}

export default Home;
