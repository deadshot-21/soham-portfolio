import profile from "./profile.png";
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const navigation = {
	name: "Soham Faldu",
	links: [],
};
export const intro = {
	title: "Hey there! I'm Soham Faldu",
	description:
		"Full Stack Developer, Flutter Developer & Quantum Computing Enthusiast.",
	image: "https://media.licdn.com/dms/image/C4D03AQFtYqLQrHj3Ww/profile-displayphoto-shrink_800_800/0/1660965921653?e=1678320000&v=beta&t=4KQMZEZkqVoS4VNNJuPOWStXKHKQRMiXGmO4Bolja1g",
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1LYHAXPqBiyuCj8xIkvAkreMW9I9dWWOt/view?usp=share_link",
			isPrimary: false,
		},
	],
};

export const about = {
	title: "Who I am?",
	description: [
		"Software Developer with expertise in Flutter app development. Well-versed in many programming languages with the added knowledge of Machine Learning. A beginner in Crypto technologies and a quantum computing enthusiast.",
		"I am really active and always open for new projects!"
	],
};

export const work = {
	title: "What I do?",
	isIconify: true,
	cards: [
		{
			title: "Full Stack Development",
			description:
				"Building responsive website front end with Vanilla JavaScript, creating mobile applications with Flutter and Dart, and developing application backend with Node and Express.",
			icons: [
				// "logos:python",
				// "vscode-icons:file-type-django",
				"logos:javascript",
				"vscode-icons:file-type-html",
				"vscode-icons:file-type-css",
				"vscode-icons:file-type-node",
				"logos:npm-icon",
				"logos:dart",
				"vscode-icons:file-type-flutter",
			],
		},
		{
			title: "Cloud Infra-Architecture",
			description:
				"Hosting and maintaining websites on virtual machines, integrating databases, deploying deep learning models on the cloud, and setting up data streaming jobs on AWS.",
			icons: [
				"logos:aws",
				"logos:github-icon",
				"logos:docker-icon",
				"logos:heroku-icon",
				"logos:firebase",
				"logos:mongodb",
			],
		},
		{
			title: "Data Science & AI",
			description:
				"Creating production-ready deep learning models for various applications, including image processing, NLP, and remote sensing data prediction. Strong knowledge of scalable model development and deep learning techniques.",
			icons: [
				"logos:tensorflow",
				"logos:pytorch",
				"logos:qiskit",
				"logos:python",
			],
		},
	],
};

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Developer Portfolio",
			description:
				"Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/1hanzla100/developer-portfolio",
				},
			],
		},
		{
			title: "NFT Minter",
			description:
				"NFT Minter based on Avalanche Blockchain built with React.js, TypeScript & Pinata.",
			icons: [
				{
					icon: faGlobe,
					link: "https://ipfs.fleek.co/ipfs/QmRtDqNNjFoixAoEs8qXgzk6TTQJY3WxYRkB1Jtcpfi4yB/",
				},
			],
		},
		{
			title: "Technota",
			description:
				"Technota is a Forum built for developers to ask questions and community can answer their questions.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/1hanzla100/django-react-forum",
				},
			],
		},
		{
			title: "Shopaza",
			description:
				"Shopaza is Ecommerce website built with django. Now your reach to all your favorite items is just one touch apart.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/1hanzla100/django-react-forum",
				},
			],
		},
		{
			title: "Atlas Mart",
			description:
				"Atlas Mart is a OLX like Marketplace built with Python, Django, React.js & Integrated Mapbox.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/1hanzla100/django-react-forum",
				},
			],
		},
	],
};

export const contact = {
	title: "Reach Out to me!",
	description:
		"Do you want to discuss a project or just say hi? My inbox is open for all inquiries.",
	icons: [
		{
			icon: faLinkedin,
			link: "https://www.linkedin.com/in/soham-faldu-80408123a/",
		},
		{
			icon: faGithub,
			link: "https://github.com/deadshot-21",
		},
		{
			icon: faEnvelope,
			link: "mailto:faldusoham21@gmail.com",
		},
	],
};
// SEARCH ENGINE
export const SEO = {
	title: "Soham Faldu",
	description:
		"Full Stack Developer, Flutter Developer & Quantum Computing Enthusiast.",
	author: "Soham Faldu",
	image: profile.src,
	url: "https://1hanzla100.github.io",
	keywords: [
		"Soham",
		"Soham Faldu",
		"@deadshot-21",
		"deadshot-21",
		"Portfolio",
		"Soham Portfolio ",
		"Soham Faldu Portfolio",
	],
};
