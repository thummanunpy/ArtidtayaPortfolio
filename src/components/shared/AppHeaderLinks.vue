<script>
export default {
	props: ['showModal', 'isOpen'],
	data() {
		return {
			theme: '',
			modal: false,
		};
	},
	methods: {
	},
};
</script>

<template>
	<!-- Header links -->
	<div v-if="isOpen">
		<div
		class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 items-center shadow-lg sm:shadow-none text-white"
	>
		<router-link
			to="/skill"
			class="font-general-medium block text-left text-lg font-medium hover:text-rose-700 hover:rounded-xl hover:bg-[#D62828] hover:text-[#F5F1DD] hover:px-3 sm:mx-4 mb-2 sm:py-2 "
			aria-label="Skill"
			>Skills & Experience</router-link
		>
		<router-link
			to="/projects"
			class="font-general-medium block text-left text-lg font-medium hover:text-rose-700 hover:rounded-xl hover:bg-[#D62828] hover:text-[#F5F1DD] hover:px-3 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
			aria-label="Projects"
			>Projects</router-link
		>
		<router-link
			to="/about"
			class="font-general-medium block text-left text-lg font-medium hover:text-rose-700 hover:rounded-xl hover:bg-[#D62828] hover:text-[#F5F1DD] hover:px-3 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
			aria-label="About Me"
			>About Me</router-link
		>
		<router-link
			to="/contact"
			class="font-general-medium block text-left text-lg font-medium hover:text-rose-700 hover:rounded-xl hover:bg-[#D62828] hover:text-[#F5F1DD] hover:px-3 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
			aria-label="Contact"
			>Contact</router-link
		>
	</div>
	</div>
	<div v-if="showModal">
		<div
			class="flex flex-col sm:p-0 items-center shadow-lg sm:shadow-none text-white bg-black"
		>
		<router-link
			to="/skill"
			class="w-full font-general-medium text-left text-lg font-medium hover:border-solid hover:border-2 hover:border-[#EDE9D7]"
			aria-label="Skill"
			>
			<div class="text-center my-3">
				Skills & Experience
			</div>
		</router-link>
		<router-link
			to="/projects"
			class="w-full font-general-medium text-left text-lg font-medium hover:border-solid hover:border-2 hover:border-[#EDE9D7]"
			aria-label="Projects"
			>
			<div class="text-center my-3">
				Projects
			</div>
		</router-link>
		<router-link
			to="/about"
			class="w-full font-general-medium text-left text-lg font-medium hover:border-solid hover:border-2 hover:border-[#EDE9D7]"
			aria-label="About Me"
			>
			<div class="text-center my-3">
				About Me
			</div>
		</router-link>
		<router-link
			to="/contact"
			class="w-full font-general-medium text-left text-lg font-medium rounded rounded-b-lg hover:border-solid hover:border-2 hover:border-[#EDE9D7]"
			aria-label="Contact"
			>
			<div class="text-center my-3">
				Contact
			</div>
		</router-link>
	</div>
	</div>
</template>

<style lang="scss" scoped></style>
