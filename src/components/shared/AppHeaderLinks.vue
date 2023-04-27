<script>
export default {
	props: ['showModal', 'isOpen'],
};
</script>

<template>
	<!-- Header links -->
	<div
		:class="isOpen ? 'block' : 'hidden'"
		class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none text-white"
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
</template>

<style lang="scss" scoped></style>
