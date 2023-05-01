<script>
import feather from 'feather-icons';
import 'flowbite';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
			showHeaderSkillAndExperience:false,
			showSecond:false,
			headerSkill:'Advance',
			more:"More",
			iconDown:"chevrons-down",
			less:"Less",
			iconUp:"chevrons-up",
			skills: [
				{
					id: 1,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968472.png",
					status:'Advanced'
				},
				{
					id: 2,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
					status: 'Intermediate',
				},
				{
					id: 3,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
					status: 'Intermediate',
				},
				{
					id: 4,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968559.png",
					status: 'Beginner',
				},
				{
					id: 5,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968525.png",
					status: 'Beginner',
				},
				{
					id: 6,
					icon: "https://cdn-icons-png.flaticon.com/512/5968/5968428.png",
					status: 'Beginner',
				},
			],
		};
	},
	created() {
	},
	mounted() {
	feather.replace();
	const skillExperience = document.getElementById("skill-experience");
	const softwareSkill = document.getElementById("software-skill");
	const experience = document.getElementById("experience");
	const certificates = document.getElementById("certificates");
	this.createObserver(skillExperience, this.callbackSkillAndExperience);
	this.createObserver(softwareSkill, this.callbackSoftwareSkill);
	this.createObserver(experience, this.callbackExperience);
	this.createObserver(certificates, this.callbackCertificates);
	},
	updated() {
		feather.replace();
	},
	methods: {
	callbackExperience(entries) {
		const target = document.getElementById("experience");
		entries.forEach((entry) => {
		if(entry.isIntersecting) {
			target.classList.add('to-fade-in')
			target.classList.remove('invisible')
		} else {
			target.classList.remove('to-fade-in')
			target.classList.add('invisible')
		}
		});
	},
	callbackCertificates(entries) {
		const target = document.getElementById("certificates");
		entries.forEach((entry) => {
		if(entry.isIntersecting) {
			target.classList.add('to-fade-in')
			target.classList.remove('invisible')
		} else {
			target.classList.remove('to-fade-in')
			target.classList.add('invisible')
		}
		});
	},
	callbackSkillAndExperience(entries) {
		const target = document.getElementById("skill-experience");
		entries.forEach((entry) => {
		if(entry.isIntersecting) {
			target.classList.add('to-fade-in')
			target.classList.remove('invisible')
		} else {
			target.classList.remove('to-fade-in')
			target.classList.add('invisible')
		}
		});
	},
	callbackSoftwareSkill(entries) {
		const target = document.getElementById("software-skill");
		entries.forEach((entry) => {
		if(entry.isIntersecting) {
			target.classList.add('to-fade-in')
			target.classList.remove('invisible')
		} else {
			target.classList.remove('to-fade-in')
			target.classList.add('invisible')
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
	checkHeaderSkills(status){
		this.headerSkill = status
	}
	},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between md:flex-row pt-24 px-6 md:pl-16 xl:px-32"
	>
		<div class="w-full md:mt-1 md:w-2/5">
			<h1
				id="skill-experience"
				class="font-general-semibold text-5xl md:text-5xl xl:text-6xl md:text-left invisible"
			>
				Skills & Experience
			</h1>
			<div id="software-skill">
				<p
					class="font-general-semibold mt-2 text-xl sm:text-2xl xl:text-2xl text-center md:text-left leading-none mb-5 mt-8 md:mt-16"
				>
					Software Skills
				</p>
				<div id="skills-2" 
					class="grid grid-cols-3 gap-4 mx-10 md:grid-cols-3 md:gap-4 sm:px-20 md:px-2 md:mx-1" >		
					<div v-for="skill in skills" :key="skill.id">
						<div class="flex flex-col items-center justify-center relative mb-3">
							<img class= "w-2/3 md:w-2/3 xl:w-2/3 2xl:w-1/3 mt-5" 
								:src= "skill.icon"
							/>
							<h3 class="sm:font-general-semibold md:font-general-medium inline-block rounded-full bg-rose-600 px-3 py-1 mt-5 bg-rose-80 text-center text-white">
								{{skill.status}}
							</h3>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="w-full md:w-3/5 text-right float-right">
			<div 
				class="sm:mx-10 md:ml-28"
			>
				<div id="experience">
					<p
						class="font-general-semibold mt-2 text-xl sm:text-2xl xl:text-2xl text-center md:text-left leading-none mb-5 mt-10 xl:mt-1 sm:px-20 md:px-2"
					>
						Experience
					</p>
					<div class="mt-12 ml-6">
						<ol class="relative border-l border-black">                  
							<li class="mb-10 ml-6 text-left">            
								<span class="absolute flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full -left-3 ring-8 ring-white">
									<svg aria-hidden="true" class="w-3 h-3 text-rose-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
								</span>
								<h3 class="flex items-center md: mb-1 text-lg font-semibold text-gray-900">
									Graphic designer at Menxon Enterprises (Thailand) Co.,Ltd.
									<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
										Latest
									</span>
								</h3>
								<time class="block mb-2 text-sm font-normal leading-none text-gray-400">2019 - Current</time>
							</li>
							<li class="mb-10 ml-6 text-left">
								<span class="absolute flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full -left-3 ring-8 ring-white">
									<svg aria-hidden="true" class="w-3 h-3 text-rose-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
								</span>
								<h3 class="text-left mb-1 text-lg font-semibold text-gray-900">
									Graphic designer at Joy sport Co., LTD.
								</h3>
								<time class="text-left block mb-2 text-sm font-normal leading-none text-gray-400 ">
									2017 - 2019
								</time>
							</li>
						</ol>	
					</div>
				</div>
				<div
					id="certificates" 
				>
					<p
						class="font-general-semibold mt-2 text-xl sm:text-2xl xl:text-2xl text-center md:text-left leading-none mt-10 xl:mt-1 sm:px-20 md:px-2"
					>
						Certificates
					</p>
					<div class="mt-12 ml-6">
						<ol class="relative border-l border-black">                  
							<li class="mb-10 ml-6 text-left ">  
								<span class="absolute flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full -left-3 ring-8 ring-white">
									<svg aria-hidden="true" class="w-3 h-3 text-rose-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
								</span>      
								<h1 class="flex items-center ml-2 md:mb-1 text-lg font-semibold text-gray-900">
										FutureSkill
								</h1>    
								<a class="" target="_blank" href="https://robolly.com/backend/rendered/644f8022bfeacd35c760aacb">
									<div class="absolute flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full -left-3 ring-8 mt-5 2xl:mt-2">
										<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128" id="certificate"><circle cx="64" cy="64" r="63.5" fill="#FF7058"></circle><rect width="75.5" height="52.7" x="25.3" y="34.4" fill="#4CDBC4"></rect><rect width="67.5" height="44.8" x="29.2" y="38.4" fill="#FFF"></rect><rect width="35.8" height="4.2" x="45.1" y="45.1" fill="#324A5E"></rect><rect width="17.5" height="4.2" x="45.1" y="54.4" fill="#324A5E"></rect><polygon fill="#324A5E" points="74 93.6 72.2 90.1 68.5 91.3 74.7 76.4 80.3 78.7"></polygon><polygon fill="#324A5E" points="85.7 93.6 87.5 90.1 91.2 91.3 85 76.4 79.5 78.7"></polygon><path fill="#FFD05B" d="M89.7,74c0.3-0.3,0.3-0.9,0-1.3L89,72c-0.3-0.3-0.3-0.6-0.2-1l0.4-0.9c0.2-0.5,0-1-0.5-1.2l-1-0.4    c-0.3-0.1-0.5-0.5-0.5-0.8v-1.1c0-0.5-0.4-0.9-0.9-0.9h-1c-0.4,0-0.7-0.2-0.8-0.6l-0.4-0.9c-0.2-0.5-0.7-0.7-1.2-0.5l-1,0.4    c-0.3,0.1-0.7,0.1-1-0.2l-0.8-0.8c-0.3-0.3-0.9-0.3-1.3,0L78.3,64c-0.3,0.3-0.6,0.3-1,0.2l-0.9-0.4c-0.5-0.2-1,0-1.2,0.5l-0.4,1    c-0.1,0.3-0.5,0.5-0.8,0.5H73c-0.5,0-0.9,0.4-0.9,0.9v1c0,0.4-0.2,0.7-0.6,0.8l-0.9,0.4c-0.5,0.2-0.7,0.7-0.5,1.2l0.4,1    c0.1,0.3,0.1,0.7-0.2,1l-0.8,0.8c-0.3,0.3-0.3,0.9,0,1.3l0.7,0.7c0.3,0.3,0.3,0.6,0.2,1l-0.4,0.9c-0.2,0.5,0,1,0.5,1.2l1,0.4    c0.3,0.1,0.5,0.5,0.5,0.8V80c0,0.5,0.4,0.9,0.9,0.9h1c0.4,0,0.7,0.2,0.8,0.6l0.4,0.9c0.2,0.5,0.7,0.7,1.2,0.5l1-0.4    c0.3-0.1,0.7-0.1,1,0.2l0.8,0.8c0.3,0.3,0.9,0.3,1.3,0l0.7-0.7c0.3-0.3,0.6-0.3,1-0.2l0.9,0.4c0.5,0.2,1,0,1.2-0.5l0.4-1    c0.1-0.3,0.5-0.5,0.8-0.5h1.1c0.5,0,0.9-0.4,0.9-0.9v-1c0-0.4,0.2-0.7,0.6-0.8l0.9-0.4c0.5-0.2,0.7-0.7,0.5-1.2l-0.4-1    c-0.1-0.3-0.1-0.7,0.2-1L89.7,74z"></path><circle cx="79.6" cy="73.3" r="5.8" fill="#FF7058"></circle><polygon fill="#FFF" points="79.6 70 80.7 72.1 83 72.5 81.3 74.1 81.7 76.4 79.6 75.3 77.6 76.4 78 74.1 76.3 72.5 78.6 72.1"></polygon></svg>
									</div>
								</a>
								<div class="">
									<h3 class="flex items-center ml-2 md:mb-1 text-lg font-semibold text-gray-900">
										ออกแบบ User Experience Design ให้ตอบโจทย์ผู้ใช้งานสร้างฐานลูกค้า และประสบการณ์ที่ดี
									</h3>
									<time class="block ml-2 mb-2 text-sm font-normal leading-none text-gray-400">2023</time>
								</div>

							</li>
							<li class="mb-10 ml-6 text-left">
								<span class="absolute flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full -left-3 ring-8 ring-white">
									<svg aria-hidden="true" class="w-3 h-3 text-rose-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
								</span>
								<h1 class="flex items-center ml-2 md:mb-1 text-lg font-semibold text-gray-900">
									Udemy
								</h1>    
								<a target="_blank" href="https://www.udemy.com/certificate/UC-4e9ddaae-49e2-4020-8daa-033740a96230/"
								><div class="absolute flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full -left-3 ring-8 mt-5 2xl:mt-2">
										<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128" id="certificate"><circle cx="64" cy="64" r="63.5" fill="#FF7058"></circle><rect width="75.5" height="52.7" x="25.3" y="34.4" fill="#4CDBC4"></rect><rect width="67.5" height="44.8" x="29.2" y="38.4" fill="#FFF"></rect><rect width="35.8" height="4.2" x="45.1" y="45.1" fill="#324A5E"></rect><rect width="17.5" height="4.2" x="45.1" y="54.4" fill="#324A5E"></rect><polygon fill="#324A5E" points="74 93.6 72.2 90.1 68.5 91.3 74.7 76.4 80.3 78.7"></polygon><polygon fill="#324A5E" points="85.7 93.6 87.5 90.1 91.2 91.3 85 76.4 79.5 78.7"></polygon><path fill="#FFD05B" d="M89.7,74c0.3-0.3,0.3-0.9,0-1.3L89,72c-0.3-0.3-0.3-0.6-0.2-1l0.4-0.9c0.2-0.5,0-1-0.5-1.2l-1-0.4    c-0.3-0.1-0.5-0.5-0.5-0.8v-1.1c0-0.5-0.4-0.9-0.9-0.9h-1c-0.4,0-0.7-0.2-0.8-0.6l-0.4-0.9c-0.2-0.5-0.7-0.7-1.2-0.5l-1,0.4    c-0.3,0.1-0.7,0.1-1-0.2l-0.8-0.8c-0.3-0.3-0.9-0.3-1.3,0L78.3,64c-0.3,0.3-0.6,0.3-1,0.2l-0.9-0.4c-0.5-0.2-1,0-1.2,0.5l-0.4,1    c-0.1,0.3-0.5,0.5-0.8,0.5H73c-0.5,0-0.9,0.4-0.9,0.9v1c0,0.4-0.2,0.7-0.6,0.8l-0.9,0.4c-0.5,0.2-0.7,0.7-0.5,1.2l0.4,1    c0.1,0.3,0.1,0.7-0.2,1l-0.8,0.8c-0.3,0.3-0.3,0.9,0,1.3l0.7,0.7c0.3,0.3,0.3,0.6,0.2,1l-0.4,0.9c-0.2,0.5,0,1,0.5,1.2l1,0.4    c0.3,0.1,0.5,0.5,0.5,0.8V80c0,0.5,0.4,0.9,0.9,0.9h1c0.4,0,0.7,0.2,0.8,0.6l0.4,0.9c0.2,0.5,0.7,0.7,1.2,0.5l1-0.4    c0.3-0.1,0.7-0.1,1,0.2l0.8,0.8c0.3,0.3,0.9,0.3,1.3,0l0.7-0.7c0.3-0.3,0.6-0.3,1-0.2l0.9,0.4c0.5,0.2,1,0,1.2-0.5l0.4-1    c0.1-0.3,0.5-0.5,0.8-0.5h1.1c0.5,0,0.9-0.4,0.9-0.9v-1c0-0.4,0.2-0.7,0.6-0.8l0.9-0.4c0.5-0.2,0.7-0.7,0.5-1.2l-0.4-1    c-0.1-0.3-0.1-0.7,0.2-1L89.7,74z"></path><circle cx="79.6" cy="73.3" r="5.8" fill="#FF7058"></circle><polygon fill="#FFF" points="79.6 70 80.7 72.1 83 72.5 81.3 74.1 81.7 76.4 79.6 75.3 77.6 76.4 78 74.1 76.3 72.5 78.6 72.1"></polygon></svg>
									</div>
								</a>
									<div class="">
									<h3 class="flex items-center ml-2 md:mb-1 text-lg font-semibold text-gray-900">
										Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more
									</h3>
									<time class="block ml-2 mb-2 text-sm font-normal leading-none text-gray-400">2023</time>

									</div>
								<a target="_blank" href="https://www.udemy.com/certificate/UC-468fcf59-87a9-43a7-9b97-688c87fb306a/"
								><div class="absolute flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full -left-3 ring-8 mt-5 2xl:mt-2">
										<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128" id="certificate"><circle cx="64" cy="64" r="63.5" fill="#FF7058"></circle><rect width="75.5" height="52.7" x="25.3" y="34.4" fill="#4CDBC4"></rect><rect width="67.5" height="44.8" x="29.2" y="38.4" fill="#FFF"></rect><rect width="35.8" height="4.2" x="45.1" y="45.1" fill="#324A5E"></rect><rect width="17.5" height="4.2" x="45.1" y="54.4" fill="#324A5E"></rect><polygon fill="#324A5E" points="74 93.6 72.2 90.1 68.5 91.3 74.7 76.4 80.3 78.7"></polygon><polygon fill="#324A5E" points="85.7 93.6 87.5 90.1 91.2 91.3 85 76.4 79.5 78.7"></polygon><path fill="#FFD05B" d="M89.7,74c0.3-0.3,0.3-0.9,0-1.3L89,72c-0.3-0.3-0.3-0.6-0.2-1l0.4-0.9c0.2-0.5,0-1-0.5-1.2l-1-0.4    c-0.3-0.1-0.5-0.5-0.5-0.8v-1.1c0-0.5-0.4-0.9-0.9-0.9h-1c-0.4,0-0.7-0.2-0.8-0.6l-0.4-0.9c-0.2-0.5-0.7-0.7-1.2-0.5l-1,0.4    c-0.3,0.1-0.7,0.1-1-0.2l-0.8-0.8c-0.3-0.3-0.9-0.3-1.3,0L78.3,64c-0.3,0.3-0.6,0.3-1,0.2l-0.9-0.4c-0.5-0.2-1,0-1.2,0.5l-0.4,1    c-0.1,0.3-0.5,0.5-0.8,0.5H73c-0.5,0-0.9,0.4-0.9,0.9v1c0,0.4-0.2,0.7-0.6,0.8l-0.9,0.4c-0.5,0.2-0.7,0.7-0.5,1.2l0.4,1    c0.1,0.3,0.1,0.7-0.2,1l-0.8,0.8c-0.3,0.3-0.3,0.9,0,1.3l0.7,0.7c0.3,0.3,0.3,0.6,0.2,1l-0.4,0.9c-0.2,0.5,0,1,0.5,1.2l1,0.4    c0.3,0.1,0.5,0.5,0.5,0.8V80c0,0.5,0.4,0.9,0.9,0.9h1c0.4,0,0.7,0.2,0.8,0.6l0.4,0.9c0.2,0.5,0.7,0.7,1.2,0.5l1-0.4    c0.3-0.1,0.7-0.1,1,0.2l0.8,0.8c0.3,0.3,0.9,0.3,1.3,0l0.7-0.7c0.3-0.3,0.6-0.3,1-0.2l0.9,0.4c0.5,0.2,1,0,1.2-0.5l0.4-1    c0.1-0.3,0.5-0.5,0.8-0.5h1.1c0.5,0,0.9-0.4,0.9-0.9v-1c0-0.4,0.2-0.7,0.6-0.8l0.9-0.4c0.5-0.2,0.7-0.7,0.5-1.2l-0.4-1    c-0.1-0.3-0.1-0.7,0.2-1L89.7,74z"></path><circle cx="79.6" cy="73.3" r="5.8" fill="#FF7058"></circle><polygon fill="#FFF" points="79.6 70 80.7 72.1 83 72.5 81.3 74.1 81.7 76.4 79.6 75.3 77.6 76.4 78 74.1 76.3 72.5 78.6 72.1"></polygon></svg>
									</div>
								</a>
									<div class="">
									<h3 class="flex items-center ml-2 md:mb-1 text-lg font-semibold text-gray-900">
										UI/UX Design With Figma : 5+ Real World Projects(2023)
									</h3>
									<time class="block ml-2 mb-2 text-sm font-normal leading-none text-gray-400">2023</time>

									</div>
							</li>
						</ol>	
					</div>
				</div>
			</div>
		</div>
	</section>
<section>
	
</section>
</template>

<style scoped>
.to-fade-in {
	opacity: 0;
	transform: translateY(-10px);
	animation: fade-in 2s forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.slide-fade-enter-active {
  transition: all 0.1s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
.fade-enter-active {
	animation: coming 0.4s;
	animation-delay: 0.2s;
	opacity: 0;
}

.fade-leave-active {
	animation: going 0.4s;
}

@keyframes going {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-10px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-10px);
		opacity: 0;
	}

	to {
		transform: translateX(0px);
		opacity: 1;
	}
}
</style>
