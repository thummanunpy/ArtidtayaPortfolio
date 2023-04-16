// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = {uxui:[
	{
		id: 1,
		title: 'Google Health Platform',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Phoenix Digital Agency',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-1.jpg'),
	}
],
graphic:[
	{
		id: 1,
		title: 'Google Health Platform',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Phoenix Digital Agency',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
	}
]};

export default projects;
