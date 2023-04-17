<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
			socials: [
				{
					id: 1,
					name: 'figma',
					icon: 'figma',
					url: 'https://www.figma.com/@afnnun',
				}
			],
			typeValue: "",
			typeStatus: false,
			displayTextArray: ["UX/UI Designer", "Graphic Designer"],
			typingSpeed: 100,
			erasingSpeed: 100,
			newTextDelay: 2000,
			displayTextArrayIndex: 0,
			charIndex: 0,
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
		setTimeout(this.typeText, this.newTextDelay + 200);
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {
	typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
	eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
	},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-2/5 text-left">
			<h1
				class="font-general-semibold text-xl md:text-xl xl:text-2xl text-center sm:text-left text-ternary-dark uppercase mb-2"
			>
				Hello, I'm
			</h1>
			<h1
				class="font-general-semibold text-3xl md:text-4xl xl:text-4xl text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-700 uppercase"
			>
				Artidtaya Suwanwarich
			</h1>
			<div class="animation font-general-semibold text-2xl text-gray-500 text-center sm:text-left md:text-left lg:text-left pt-1">
				<span class="typed-text">{{ typeValue }}</span>
				<span class="blinking-cursor">|</span>
				<span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    
			</div>
			<div class="flex justify-center sm:block">
				<a
					download="Artidtaya Suwanwarich(Resume).pdf"
					href="/files/Artidtaya Suwanwarich(Resume).pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-rose-200  py-2.5 sm:py-3 shadow-lg rounded-lg bg-stone-50 focus:ring-1 focus:ring-indigo-900 hover:bg-rose-700 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>View Resume</span
					></a
				>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-3/5 text-right float-right">
			<img
				v-if="theme === 'light'"
				src="@/assets/images/nun.png"
				alt="Developer"
			/>
			<img
				v-else
				src="@/assets/images/nun.png"
				alt="Developer"
			/>
		</div>
	</section>
</template>

<style lang="scss" scoped>

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 2rem;
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
// Cursor blinking CSS Ends...
</style>
