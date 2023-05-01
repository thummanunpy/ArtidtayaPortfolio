<script>
import '@lottiefiles/lottie-player';
import feather from 'feather-icons';

import AppSkill from '@/components/shared/AppSkill.vue';
import ProjectsGrid from '@/components/projects/ProjectsGrid.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	name: 'Home',
	components:{
		AppSkill,
    ProjectsGrid,
    ContactDetails,
	},
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
      lastScrollTop:0,
      showScreen1:false,
      showRocket:false,
      showSun:false,
			typeStatus: false,
      countSun:600,
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
		let text = document.getElementById('text-screen-1');
    // let rocket = document.getElementById('rocket');
		let moon = document.getElementById('moon');
    let sun = document.getElementById('sun-sc4');
		let cloud2Left = document.getElementById('cloud-2-left');
		let cloud2Right = document.getElementById('cloud-2-right');
    let frontScreen4_1 = document.getElementById('front-sc4-1');
    const target = document.getElementById("screen-1");
    const contact = document.getElementById("sun-sc4");
    const rocket = document.getElementById("rocket");
    this.createObserver(target, this.callback);
    this.createObserver(contact, this.callbackSun);
    this.createObserver(rocket, this.callbackRocket);
		window.addEventListener('scroll',() =>{
			let valueY = window.scrollY;
      if(this.showRocket){
        rocket.style.marginBottom = valueY * 0.5 + 'px';
        rocket.style.left = valueY * 1.0 + 'px';
      }
      if(this.showScreen1){
        text.style.marginTop = valueY * 2.5 + 'px';
      }
      if(this.showSun){
        
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > this.lastScrollTop && this.countSun > 0) {
            // downscroll code
            this.countSun -= (valueY/500);
            frontScreen4_1.style.left = this.countSun + 'px';
            sun.style.marginBottom =  this.countSun + 'px';
        } else if (st < this.lastScrollTop && this.countSun < 600) {
            this.countSun += (valueY/500);
            // frontScreen4_2.style.left = this.countSun + 'px';
            frontScreen4_1.style.left = this.countSun + 'px';
            sun.style.marginBottom =  this.countSun + 'px';
              // upscroll code
        } 
        this.lastScrollTop = st <= 0 ? 0 : st;
      }
			cloud2Left.style.left = valueY * -0.5 + 'px';
			cloud2Right.style.left = valueY * 0.5 + 'px';
			moon.style.top = valueY * -1.5 + 'px';
		})


	},
	updated() {
		feather.replace();
	},
	methods: {
    callback(entries) {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          this.showScreen1 = true;
          console.log("visible screen1"); 
        } else {
          this.showScreen1 = false;
          console.log("not visible screen1");
        }
      });
    },
    callbackRocket(entries) {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          this.showRocket = true;
        } else {
          this.showRocket = false;
        }
      });
    },
    callbackSun(entries) {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          this.showSun = true;
          console.log("visible sun"); 
        } else {
          this.showSun = false;
          console.log("not visible sun");
        }
      });
    },
    createObserver(target, callback) {
      const options = {
        root: null,
        threshold: 0
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(target);
    },
    isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)

      );
  },
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
	<div id="screen-1" class="parallax">
		<img class="para" src="@/assets/images/screen1/bg-sky.png" id="bg-sky">
		<img class="para fade-in-fade-out" src="@/assets/images/screen1/sm-stars.png" id="sm-star">
		<img class="para fade-in-fade-out-md-star" src="@/assets/images/screen1/md-stars.png" id="md-star">
		<img class="para" src="@/assets/images/screen1/lg-stars.png" id="lg-star">
		<img class="para" src="@/assets/images/screen1/moon.png" id="moon">
		<img class="para" src="@/assets/images/screen1/cloud-1.png" id="cloud-1">
		<div id="text-screen-1" class="banner flex flex-col lg:flex-row text-[#003049] w-3/5 text-right">
			<div class="w-full lg:w-3/6 md:mt-48 lg:mt-20 xl:mt-28 2xl:mt-36">
				<h1
					class="font-general-semibold text-xl text-white md:text-xl xl:text-2xl 2xl:text-3xl text-center lg:text-left uppercase mb-2"
				>
				Hello, I'm
				</h1>
				<h1
					class="font-general-semibold text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-700 uppercase"
				>
					Artidtaya Suwanwarich
				</h1>
				<div class="animation font-general-semibold text-2xl text-white text-center lg:text-left pt-1">
					<span class="typed-text">{{ typeValue }}</span>
					<span class="blinking-cursor">|</span>
					<span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
		
				</div>
				<div class="flex flex-row lg:flex-col justify-center lg:block">
					<a
						download="Artidtaya Suwanwarich(Resume).pdf"
						href="/files/Resume-(Artidtaya_Suwanwarich).pdf"
						class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-[#EFEAD7] py-2.5 sm:py-3 shadow-lg rounded-lg bg-[#FCBF49] focus:ring-1 focus:ring-indigo-900 hover:bg-[#FA9F25] hover:-translate-y-2 text-[#003049] hover:text-white duration-500"
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
			<div class="w-full lg:w-3/6 text-right float-right ">
				<img
					src="@/assets/images/nun.png"
					alt="Developer"
				/>
			</div>
		</div>
		<img class="para" src="@/assets/images/screen1/cloud-2-right.png" id="cloud-2-right">
		<img class="para" src="@/assets/images/screen1/cloud-2-left.png" id="cloud-2-left">
		<img class="para" src="@/assets/images/screen1/cloud-3.png" id="cloud-3">
		
	</div>
<div class="content" style="background: rgb(251,193,113);
background: linear-gradient(0deg, rgba(251,193,113,1) 0%, rgba(242,205,155,1) 16%, rgba(225,228,239,1) 100%);">
  <div class="content">
		<div id="skills" class="parallax-skill ">
      <div id="rocket" class="para">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/f465c104-79d5-4811-8d66-c53cb3ad1c7b/9BjG7oNzWL.json"
            class="w-60"
          ></lottie-player>
        </div>
        <div>
          <AppSkill></AppSkill>
        </div>
     </div> 
</div>
<div class="parallax-blank2 ">
</div>
<div class="content ">
		<div id="skills">
      <ProjectsGrid></ProjectsGrid>
    </div> 
</div>
<div class="parallax-blank ">
</div>
  <div id="screen-3"  class="parallax ">
		<img class="para2" src="@/assets/images/screen4/sun-sc4.png" id="sun-sc4">
		<img class="para" src="@/assets/images/screen4/cloud-sc4.png" id="cloud-sc4">
		<img class="para" src="@/assets/images/screen4/middle-sc4.png" id="middle-sc4">
		<img class="para" src="@/assets/images/screen4/front-sc4-1.png" id="front-sc4-1">
		<img class="para" src="@/assets/images/screen4/front-sc4-2.png" id="front-sc4-2">
		<div id="contact" class="banner2">
        <ContactDetails></ContactDetails>
    </div>
	</div>
</div>
  
</template>

<style lang="scss" scoped>
#front-sc4-1{
  left: 400px;
}
#sun-sc4{
  width: 80%;
  margin-bottom: 50%;
}
.parallax-blank {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
  height: 50vh;
  margin-top: -2px;
}
.parallax-blank2 {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
  height: 20vh;
  margin-top: -2px;
}
.content-blank{
  position: relative;
  margin-top: -2px;
  height: 50vh;
}
.content-blank2{
  position: relative;
  height: 20vh;
}
.content{
  position: relative;
  margin-top: -2px;
}

.cloud2-left-reduce{
  margin-bottom: -15px;
}

.content-blank{
  position: relative;
  background: #E1E4EF;
  padding: 100px;
  height: 10vh;
}
#footer{
  height: 10vh;
}
#second-screen{
	position: relative;
}
.parallax {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
  margin-top: -2px;
}
.parallax-skill {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}
.parallax-skill .para {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 20%;
	pointer-events: none;
}
.parallax .para {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	pointer-events: none;
}
.parallax .para2 {
	position: absolute;
	bottom: 0;
	left: 100px;
	width: 50%;
	pointer-events: none;
}
.banner{
	position: absolute;
}
.banner2{
	position: absolute;
  margin-top: -500px;
}
.screen2{
	position: relative;
  height: 100vh;
}

.screen3{
	position: relative;
  height: 100vh;
}
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

.up-down{
  animation: up-down linear 6s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  -webkit-animation: up-down linear 6s;
  -webkit-animation-iteration-count: infinite;
  -webkit-transform-origin: 50% 50%;
  -moz-animation: up-down linear 6s;
  -moz-animation-iteration-count: infinite;
  -moz-transform-origin: 50% 50%;
  -o-animation: up-down linear 6s;
  -o-animation-iteration-count: infinite;
  -o-transform-origin: 50% 50%;
  -ms-animation: up-down linear 6s;
  -ms-animation-iteration-count: infinite;
  -ms-transform-origin: 50% 50%;
}

@keyframes up-down{
  0% {
    transform:  translate(1px,20px)  ;
  }
  24% {
    transform:  translate(1px,30px)  ;
  }
  50% {
    transform:  translate(1px,12px)  ;
  }
  74% {
    transform:  translate(1px,22px)  ;
  }
  100% {
    transform:  translate(1px,22px)  ;
  }
}

@-moz-keyframes up-down{
  0% {
    -moz-transform:  translate(1px,20px)  ;
  }
  24% {
    -moz-transform:  translate(1px,30px)  ;
  }
  50% {
    -moz-transform:  translate(1px,12px)  ;
  }
  74% {
    -moz-transform:  translate(1px,22px)  ;
  }
  100% {
    -moz-transform:  translate(1px,22px)  ;
  }
}

@-webkit-keyframes up-down {
  0% {
    -webkit-transform:  translate(1px,20px)  ;
  }
  24% {
    -webkit-transform:  translate(1px,30px)  ;
  }
  50% {
    -webkit-transform:  translate(1px,12px)  ;
  }
  74% {
    -webkit-transform:  translate(1px,22px)  ;
  }
  100% {
    -webkit-transform:  translate(1px,22px)  ;
  }
}

@-o-keyframes up-down {
  0% {
    -o-transform:  translate(1px,20px)  ;
  }
  24% {
    -o-transform:  translate(1px,30px)  ;
  }
  50% {
    -o-transform:  translate(1px,12px)  ;
  }
  74% {
    -o-transform:  translate(1px,22px)  ;
  }
  100% {
    -o-transform:  translate(1px,22px)  ;
  }
}

@-ms-keyframes up-down {
  0% {
    -ms-transform:  translate(1px,20px)  ;
  }
  24% {
    -ms-transform:  translate(1px,30px)  ;
  }
  50% {
    -ms-transform:  translate(1px,12px)  ;
  }
  74% {
    -ms-transform:  translate(1px,22px)  ;
  }
  100% {
    -ms-transform:  translate(1px,22px)  ;
  }
}

@keyframes fade-inout {
  0%{ opacity: 1;}
  100%{ opacity: 0.2;}
}
/* support for opera */
@-o-keyframes fade-inout{
  0%{ opacity: 1;}
  100%{ opacity: 0.2;}
}
/* support for mozila */
@-moz-keyframes fade-inout{
  0%{ opacity: 1;}
  100%{ opacity: 0.2;}
}
/* support for safari and chrome */
@-webkit-keyframes fade-inout{
  0%{ opacity: 1;}
  100%{ opacity: 0.2;}
}
.fade-in-fade-out {
   -webkit-animation: fade-inout 5s infinite alternate;
   -moz-animation: fade-inout 5s infinite alternate;
   -o-animation: fade-inout 5s infinite alternate;
    animation: fade-inout 5s infinite alternate;
}

.fade-in-fade-out-md-star {
   -webkit-animation: fade-inout 3s infinite alternate;
   -moz-animation: fade-inout 3s infinite alternate;
   -o-animation: fade-inout 3s infinite alternate;
    animation: fade-inout 3s infinite alternate;
}
// Cursor blinking CSS Ends...
</style>
