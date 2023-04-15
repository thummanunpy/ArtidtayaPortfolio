<script>
export default {
	props: ['contacts'],
};
</script>

<template>
	<div class="">
		<div class="text-center max-w-xl px-6 py-12">
			<h1
				class="font-general-medium text-4xl text-primary-dark dark:text-primary-light mt-12 mb-12"
			>
				Ways To Contact Me
			</h1>
			<ul class="font-general-regular">
				<li class="flex" v-for="contact in contacts" :key="contact.id">
					<i
						:data-feather="contact.icon"
						class="w-5 text-gray-500 dark:text-gray-400 mr-4"
					></i>
					<a
						href="#"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
						:class="
							contact.icon === 'mail' || contact.icon === 'phone'
								? 'hover:underline cursor-pointer'
								: ''
						"
						aria-label="Website and Phone"
					>
						{{ contact.name }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
