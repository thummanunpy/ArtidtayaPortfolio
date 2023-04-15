<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
			socials: [
				{
					id: 1,
					name: 'figma',
					icon: 'figma',
					url: 'https://www.figma.com/@afnnun',
				}
			]
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-2/5 text-left">
			<h1
				class="font-general-semibold text-xl md:text-xl xl:text-2xl text-center sm:text-left text-ternary-dark uppercase mb-2"
			>
				Hello, I'm
			</h1>
			<h1
				class="font-general-semibold text-3xl md:text-4xl xl:text-4xl text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-700 uppercase"
			>
				Artidtaya Suwanwarich
			</h1>
			<p
				class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-500"
			>
				Graphic Designer
			</p>
			<div class="flex justify-center sm:block">
				<a
					download="Artidtaya Suwanwarich(Resume).pdf"
					href="/files/Artidtaya Suwanwarich(Resume).pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-rose-200  py-2.5 sm:py-3 shadow-lg rounded-lg bg-stone-50 focus:ring-1 focus:ring-indigo-900 hover:bg-rose-700 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>View Resume</span
					></a
				>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-3/5 text-right float-right">
			<img
				v-if="theme === 'light'"
				src="@/assets/images/nun.png"
				alt="Developer"
			/>
			<img
				v-else
				src="@/assets/images/nun.png"
				alt="Developer"
			/>
		</div>
	</section>
</template>

<style scoped></style>
