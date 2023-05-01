<script>
export default {
	props: ['project'],
};
</script>

<template>
	<div
		class="rounded-xl shadow-lg mb-10 sm:mb-0 bg-secondary-light"
	>
		<img
			:src="project.img"
			:alt="project.title"
			class="rounded-t-xl border-none"
		/>
		<div class="banner-content">
			Description
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card{
  position:relative;
}
.card:hover {
  opacity: 1;
}
.banner-content{
  position:absolute;
  top:0;
  left:0;
  display:none;
}
.card:hover + .banner-content{display:block;}

</style>
