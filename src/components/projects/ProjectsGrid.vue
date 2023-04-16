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
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
		</div>
			<div class="mt-10 sm:mt-10 ">
			<div
				class="flex justify-center items-center invisible md:visible xl:visible"
			>
				<a
					href="#"
					class="font-general-medium block text-left text-xl font-bold 
					text-primary-dark hover:text-rose-700 mb-2 hover-underline-animation"
					:class="{ 'text-3xl text-rose-700': isCheckUxUi }" 
					@click="toggleUxUi"
					>UX/UI</a
				>
				<h3 class="text-2xl xl:text-4xl font-bold mx-2 xl:mx-4">/</h3>
				<a
					href="#"
					class="font-general-medium block text-left text-xl font-bold
					text-primary-dark hover:text-rose-700 mb-2 hover-underline-animation"
					:class="{'text-3xl text-rose-700': isCheckGraphic }" 
					@click="toggleGraphic"
					>Graphic Design
				</a>
			</div>

		</div>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 lg:gap-1"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
		
	</section>
</template>

<style scoped>
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
