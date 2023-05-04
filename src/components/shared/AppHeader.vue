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
			this.modal = !this.modal
		},
		clickModal() {
			this.modal = !this.modal
		},
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
<nav >
  <div 
	:class="{'bg-black':modal}"
	class="flex flex-row justify-between p-4 px-10">
    <div class="logo pt-1">
		<router-link to="/">
			<img
				src="@/assets/images/Artidtaya-icon.png"
				:class="{'hidden':modal}"
				class="w-28 md:w-36"
				alt="Dark Logo"
			/>
		</router-link>
	</div>
	<div class="hamber-menu">
		<button 
			@click="showModal"
			type="button" 
			class="items-center mt-1 p-2 text-sm text-[#EFEAD7] rounded-lg md:hidden hover:bg-[#EDE9D7] hover:text-[#F5F1DD] focus:outline-none focus:ring-2 focus:ring-gray-200" 
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
		</button>
		<div class="hidden w-full md:block" id="navbar-multi-level">
			<AppHeaderLinks :isOpen="true" />
		</div>
	</div>
  </div>
  <div v-if="modal">
		<div class="w-full" id="navbar-multi-level" @click="clickModal">
			<AppHeaderLinks :showModal="modal"/>
		</div>
	</div>
</nav>
</template>

<style scoped>
nav {
	position: absolute;
	justify-content: flex-start;
	align-items: center;
	z-index: 11;
	width: 100%;
}
</style>
