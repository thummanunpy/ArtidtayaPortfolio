<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
			showFisrt:false,
			showSecond:false,
			more:"More",
			iconDown:"chevrons-down",
			less:"Less",
			iconUp:"chevrons-up",
			skills: [
				{
					id: 1,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968472.png",
					status:'Advance'
				},
				{
					id: 2,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
					status: 'Advance',
				},
				{
					id: 3,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
					status: 'Meduim',
				},
				{
					id: 4,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968559.png",
					status: 'Beginner',
				},
				{
					id: 5,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968525.png",
					status: 'Beginner',
				},
				{
					id: 6,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968428.png",
					status: 'Beginner',
				},
			],
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
	methods: {
		showMore(){
			this.showFisrt = !this.showFisrt
			if(this.showSecond === true){
				this.showSecond = !this.showSecond
			}
		},
		showMore2(){
			this.showSecond = !this.showSecond
			if(this.showFisrt === true){
				this.showFisrt = !this.showFisrt
			}
		}
	},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between sm:flex-row sm:my-20"
	>
		<!-- Banner left contents -->
		<div class="w-full mt-8 md:mt-1 md:w-2/5">
			<h1
				class="font-general-semibold text-3xl xl:text-6xl md:text-left text-ternary-dark mb-2"
			>
				Skills & Experience
			</h1>
			<p
				class="font-general-semibold mt-2 text-xl sm:text-2xl xl:text-2xl text-center sm:text-left leading-none mb-5 mt-8 md:mt-32"
			>
				Software Skills
			</p>
			<div class="grid grid-cols-3 gap-4 mx-10 md:grid-cols-3 md:gap-4 md:mx-1" >
				<div v-for="skill in skills" :key="skill.id">
					<div class="flex flex-col items-center justify-center relative mb-3">
						<img class= "w-3/5 md:w-2/3 xl:w-1/3 mt-5" 
							:src= "skill.icon"
						/>
						<h3 class="sm:font-general-semibold md:font-general-medium inline-block rounded-full bg-rose-600 px-3 py-1 mt-5 bg-rose-80 text-center text-white">
							{{skill.status}}
						</h3>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Banner right illustration -->
		<div class="w-full md:w-3/5 text-right float-right">
			<div class="sm:ml-28">
				<p
					class="font-general-semibold mt-2 text-xl sm:text-2xl xl:text-2xl text-center sm:text-left leading-none mb-5 mt-10 xl:mt-1"
				>
					Experience
				</p>
				<div class="mt-12 ml-6">
					<ol class="relative border-l border-gray-200">                  
						<li class="mb-10 ml-6 text-left">            
							<span class="absolute flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full -left-3 ring-8 ring-white">
								<svg aria-hidden="true" class="w-3 h-3 text-rose-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
							</span>
							<h3 class="flex items-center md: mb-1 text-lg font-semibold text-gray-900">
								Graphic designer at Menxon Enterprises (Thailand) Co.,Ltd.
								<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
									Latest
								</span>
							</h3>
							<time class="block mb-2 text-sm font-normal leading-none text-gray-400">2019 - Current</time>
							<ul class="w-fit text-gray-500 list-disc list-inside dark:text-gray-400">
								<li>
									Take the needs of customers to design skate shoes, roller blade on the pattern.
								</li>
								<li>
									Technical make 3D layers on skate shoes.
								</li>
								
								<li>
									Make a screen block to make an example.
								</li>
								<transition name="slide-fade">
								<div v-show="showFisrt">
									<li>
										Prepare molds to make samples.
									</li>
									<li>
										Contact and talk to the supplier about the color.
									</li>
									<li>
										Request a quotation from the supplier to negotiate
										the price before send to manager sign approval for
										start first lot product.
									</li>
									<li>
										Follow up on the color and mold from the supplier that it comes in on the day.
									</li>
									<li>
										Do documents detailing the mold, model, price, control the cost from supplies formula.
									</li>
									<li>
										Do document detailing block screen, model, number of blocks, color.
									</li>
									<li>
										Keep an eye on the work at the workshop, screen work and work shots.
									</li>
									<li>
										Make model stickers, size stickers, label, manual.
									</li>
									<li>
										Confirmation documents for other departments (model stickers, size stickers, label, manual). 
									</li>
									<li>
										Digital printing.
									</li>
								</div>
								</transition>
							</ul>
							<div v-if="!showFisrt">
								<a class="inline-flex items-center px-4 py-2 text-sm font-general-semibold text-gray-500 bg-white border border-rose-200 rounded-lg hover:bg-rose-100 hover:text-rose-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-rose-700 mt-5"
								data-te-collapse-init
								data-te-ripple-init
								data-te-ripple-color="light"
								role="button"
								aria-expanded="false"
								aria-controls="collapseExample"
								@Click="showMore"
								>
									<i
										:data-feather="iconDown"
										class="w-5 text-gray-500 dark:text-gray-400 mr-1"
									></i>{{this.more}}
								</a>
							</div>
							<div v-if="showFisrt">
								<a class="inline-flex items-center px-4 py-2 text-sm font-general-semibold text-gray-500 bg-white border border-rose-200 rounded-lg hover:bg-rose-100 hover:text-rose-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-rose-700 mt-5"
								data-te-collapse-init
								data-te-ripple-init
								data-te-ripple-color="light"
								role="button"
								aria-expanded="false"
								aria-controls="collapseExample"
								@Click="showMore"
								>
									<i
										:data-feather="iconUp"
										class="w-5 text-gray-500 dark:text-gray-400 mr-1"
									></i>{{this.less}}
								</a>
							</div>
		
						</li>
						<li class="mb-10 ml-6 text-left">
							<span class="absolute flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full -left-3 ring-8 ring-white">
								<svg aria-hidden="true" class="w-3 h-3 text-rose-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
							</span>
							<h3 class="text-left mb-1 text-lg font-semibold text-gray-900">
								Graphic designer at Joy sport Co., LTD.
							</h3>
							<time class="text-left block mb-2 text-sm font-normal leading-none text-gray-400 ">
								2017 - 2019
							</time>
							<ul class="w-fit text-gray-500 list-disc list-inside dark:text-gray-400">
								<li>
									Take the needs of customers to design skate shoes, roller blade on the pattern.
								</li>
								<li>
									Technical make 3D layers on skate shoes.
								</li>
								<li>
									Make a screen block to make an example.
								</li>
								<transition name="slide-fade">
								<div v-if="showSecond">
									<li>
										Design of printed materials such as brochures, posters, logo, banners, catalog, etc.
									</li>
									<li>
										Product photography by DSLR Cameras.
									</li>
									<li>
										Editor video clip by shotcut.
									</li>
									<li>
										Retouch and die cut.
									</li>
									<li>
										Design of product feature packages.
									</li>
									<li>
										Manual preparation of the products.
									</li>
									<li>
										leader of the 5S group.
									</li>
									<li>
										Document control ISO, KPI.
									</li>
								</div>
								</transition>
							</ul>
							<div v-if="!showSecond">
								<a class="inline-flex items-center px-4 py-2 text-sm font-general-semibold text-gray-500 bg-white border border-rose-200 rounded-lg hover:bg-rose-100 hover:text-rose-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-rose-700 mt-5"
								data-te-collapse-init
								data-te-ripple-init
								data-te-ripple-color="light"
								role="button"
								aria-expanded="false"
								aria-controls="collapseExample"
								@Click="showMore2"
								>
									<i
										:data-feather="iconDown"
										class="w-5 text-gray-500 dark:text-gray-400 mr-1"
									></i>{{this.more}}
								</a>
							</div>
							<div v-if="showSecond">
								<a class="inline-flex items-center px-4 py-2 text-sm font-general-semibold text-gray-500 bg-white border border-rose-200 rounded-lg hover:bg-rose-100 hover:text-rose-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-rose-700 mt-5"
								data-te-collapse-init
								data-te-ripple-init
								data-te-ripple-color="light"
								role="button"
								aria-expanded="false"
								aria-controls="collapseExample"
								@Click="showMore2"
								>
									<i
										:data-feather="iconUp"
										class="w-5 text-gray-500 dark:text-gray-400 mr-1"
									></i>{{this.less}}
								</a>
							</div>
						</li>
					</ol>	
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
</style>
