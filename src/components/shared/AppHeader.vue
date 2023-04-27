<script>
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks.vue';

export default {
	components: {
		AppHeaderLinks,
	},
	data() {
		return {
			isOpen: false,
			theme: '',
			modal: false,
			categories: [
				{
					id: 1,
					value: 'web',
					name: 'Web Application',
				},
				{
					id: 2,
					value: 'mobile',
					name: 'Mobile Application',
				},
				{
					id: 3,
					value: 'ui-ux',
					name: 'UI/UX Design',
				},
				{
					id: 4,
					value: 'branding',
					name: 'Branding & Anim',
				},
			],
		};
	},

	created() {
	},
	mounted() {
		feather.replace();
	},
	methods: {
		updateTheme(theme) {
			this.theme = theme;
		},
		showModal() {
			if (this.modal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.modal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.modal = true;
			}
		},
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
<nav >
  <div class="flex justify-between items-center mx-auto p-4">
    <div class="logo flex items-center">
		<router-link to="/">
			<img
				src="@/assets/images/Artidtaya3-removebg-preview.png"
				class="w-40"
				alt="Dark Logo"
			/>
		</router-link>
	</div>
	<div class="hamber-menu flex items-center">
		<button data-collapse-toggle="navbar-multi-level" type="button" class="items-center p-2 ml-3 text-sm text-[#EFEAD7] rounded-lg md:hidden hover:bg-[#D62828] hover:text-[#F5F1DD] focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-multi-level" aria-expanded="false">
			<span class="sr-only">Open main menu</span>
			<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
		</button>
		<div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
			<AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />
		</div>
	</div>
  </div>
</nav>
</template>

<style scoped>
.logo {
  margin-left: auto;
}
.hamber-menu{
	margin-right: auto;
}
nav {
	position: absolute;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	z-index: 100;
}
</style>
