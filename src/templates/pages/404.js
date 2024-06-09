import BeeComponent from '../components/BeeComponent';

class NotFound extends BeeComponent {
  render() {
    return `
    <div class="mx-auto w-7/8 flex justify-center items-center h-1/5">
		<div class="w-7/8 mx-auto relative h-full z-30 pt-2 inter">
			<div class=" text-center pt-8 md:pt-9 mx-auto">
				<img class="h-[200px] m-auto mb-6 dark:bg-gray-200 rounded-full p-2" src="/images/icon.png">
				<h1 class="text-[#030647]  font-semibold text-5xl md:text-7xl dark:text-gray-200 Inter">
					404
				</h1>
				<p class="text-lg text-[#515568] pt-2 mt-4 text-center mx-auto dark:text-gray-100/70 Inter">
					This is an example of a 404 page - page not found.
				</p>
				<div class="flex flex-row mx-auto gap-4 justify-center pt-6 mt-4">
					<a href="/" target="_blank" class="text-white shadow py-4 px-6 bg-amber-600 rounded-lg hover:bg-amber-500">
						Back Home
					</a>
				</div>
			</div>
		</div>
	</div>
    `;
  }
}

export default NotFound;
