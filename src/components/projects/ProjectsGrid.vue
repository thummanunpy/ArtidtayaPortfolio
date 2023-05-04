<script>
import feather from 'feather-icons';
import ProjectSingle from './ProjectSingle.vue';
import projects from '../../data/projects';

export default {
	components: { 
		ProjectSingle,
	},
	
	data: () => {
		return {
			projects,
			projectsHeading: 'Projects Portfolio',
			selectedCategory: '',
			searchProject: '',
			isCheckUxUi: true,
			isCheckGraphic: false,
			active: 4,
		};
	},
	computed: {
		// Get the filtered projects
		filteredProjects() {
			if (this.selectedCategory) {
				return this.filterProjectsByCategory();
			} else if (this.searchProject) {
				return this.filterProjectsBySearch();
			}
			if(this.isCheckUxUi){
				return this.projects.uxui;
			}else{
				return this.projects.graphic;
			}
		},
	},
	methods: {
		// Filter projects by category
		filterProjectsByCategory() {
			return this.projects.uxui.filter((item) => {
				let category =
					item.category.charAt(0).toUpperCase() +
					item.category.slice(1);
				console.log(category);
				return category.includes(this.selectedCategory);
			});
		},
		toggleUxUi() {
			this.isCheckUxUi = true;
			this.isCheckGraphic = false;
		},
		toggleGraphic() {
			this.isCheckGraphic = true;
			this.isCheckUxUi = false;
		},
		// Filter projects by title search
		filterProjectsBySearch() {
			let project = new RegExp(this.searchProject, 'i');
			return this.projects.filter((el) => el.title.match(project));
		},
	},
	mounted() {
		feather.replace();
	},
};
</script>

<template>
	
	<!-- Projects grid -->
	<section class="p-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="flex flex-col xl:flex-row justify-center xl:justify-between xl:px-32">
			<p
				class="font-general-semibold text-2xl text-5xl font-semibold mb-2 text-ternary-dark xl:w-1/3 xl:text-left"
			>
				{{ projectsHeading }}
			</p>
			<div class="btn-group mt-10  justify-center xl:justify-end xl:w-1/3">
				<button 
					@click="toggleUxUi"
					:class="{ 'btn-active': isCheckUxUi }"
					class="btn px-12 font-general-medium"
				>
					UX/UI
				</button>
				<button 
					@click="toggleGraphic"
					:class="{ 'btn-active': isCheckGraphic }"
					class="btn font-general-medium"
				>
					Graphic Design
				</button>
			</div>
		</div>
		<div
			class="grid grid-cols-[repeat(auto-fit,_50%)] sm:grid-cols-[repeat(auto-fit,_22.5%)] md:grid-cols-[repeat(auto-fit,_19%)] lg:grid-cols-[repeat(auto-fit,_15.3%)] 
			xl:grid-cols-[repeat(auto-fit,_12.3%)] gap-4 m-auto pt-10 justify-center"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
				class="w-full p-2 col-span-2 justify-center justify-self-center mx-auto text-white text-center text-lg"
			/>
		</div>
		<div class="flex flex-row justify-center md:flex-row md:mt-5">
			<div class="w-full md:w-2/5 lg:w-1/5 xl:w-1/5 " >
				<router-link
					to="/projects"
					class="font-general-medium block text-left text-lg font-medium sm:mx-4 mb-2 sm:py-2 pt-3 sm:pt-2"
					aria-label="Projects"
				>
					<button type="submit" id="play" class="btn btn-block btn-primary mt-5" v-on:click="sendEmail" >View more</button>
				</router-link>
			</div>
        </div>
		
	</section>
</template>

<style scoped>
.btn-active{
	background-color: #d1345e;
}
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #d1345e;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.resize
{
    transition: max-height 0.3s ease-in-out;
}
</style>
