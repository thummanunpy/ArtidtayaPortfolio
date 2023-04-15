<script>
import feather from 'feather-icons';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'afnnun1070@gmail.com',
					icon: 'mail',
				},
				{
					id: 2,
					name: '098-304-4317',
					icon: 'phone',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="flex justify-center"
	>
		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>
