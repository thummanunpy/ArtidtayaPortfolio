<script>
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Hi there, my name is Artidtaya Suwanwarich and I\'m a graphic designer looking to transition into UX/UI design. With 5 years of experience in graphic design, I have developed a keen eye for visual design and a passion for creating engaging and aesthetically pleasing designs. However, I am now looking to expand my skillset and take on new challenges in the field of UX/UI design.',
				},
				{
					id: 4,
					bio:
						'Overall, I am excited about the prospect of transitioning into UX/UI design and using my design expertise to create impactful and user-friendly digital experiences.',
				},
			],
		};
	},
	mounted(){
		let behance = document.getElementById("behance");
		let figma = document.getElementById("figma");
		let dribbble = document.getElementById("dribbble");
		behance.addEventListener("ready", () => {
		create({
			player: "#behance",
			mode:"cursor", 
			actions: [ { type: "hover", forceFlag: false } ]
		});
		});
		figma.addEventListener("ready", () => {
		create({
			player: "#figma",
			mode:"cursor", 
			actions: [ { type: "hover", forceFlag: false } ]
		});
		});
		dribbble.addEventListener("ready", () => {
		create({
			player: "#dribbble",
			mode:"cursor", 
			actions: [ { type: "hover", forceFlag: false } ]
		});
		});
	}
};
</script>

<template>
	<div class="flex flex-col md:flex-row sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full md:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/Artidtaya.jpeg"
				class="rounded-xl"
				alt=""
			/>
			<div class="flex flex-col md:flex-row">
                <button 
					target="_blank"
					type="button"
					id="play" 
					class="btn btn-block btn-primary mt-5" 
					onclick="location.href='https://www.behance.net/afnnun1070bdf4?tracking_source=search_projects%7Cartidtaya'" 
				>
					<lottie-player
						class="text-white"
						id="behance"
						src="https://lottie.host/731a25e2-0b0d-43dc-9c22-1d653cc05e21/5heH1rkRNo.json"
					>
					</lottie-player>
				</button>
            </div>
			<div class="flex flex-col md:flex-row">
                <button 
					target="_blank"
					type="button"
					id="play" 
					class="btn btn-block btn-primary mt-2" 
					onclick="location.href='https://www.figma.com/@afnnun'" 
				>
					<lottie-player
						class="text-white"
						id="figma"
						src="https://lottie.host/92e4c9c4-a69d-45ef-bf02-e94e96d60b69/hVosrrjhk6.json"
					>
						</lottie-player>
				</button>
            </div>
			<div class="flex flex-col md:flex-row">
                <button 
					target="_blank"
					type="button"
					id="play" 
					class="btn btn-block btn-primary mt-2" 
					onclick="location.href='https://dribbble.com/Afnnun'" 
				>
					<lottie-player
						class="text-white w-32"
						id="dribbble"
						src="https://lottie.host/34cfcad8-8451-44f1-9d74-02921c71d27e/4qBoVj5m7R.json"
					>
					</lottie-player>
				</button>
            </div>
		</div>

		<!-- About details -->
		<div class="w-full md:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-white text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
