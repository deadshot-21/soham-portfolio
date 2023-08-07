import profile from "./profile.png";
import {
	faGithub,
	faGooglePlay,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const navigation = {
	name: "Soham Faldu",
	links: [],
};
export const intro = {
	title: "Hey there! I'm Soham Faldu",
	description:"",
		// "Full Stack Developer, Flutter Developer & Quantum Computing Enthusiast.",
	image: "https://drive.google.com/file/d/1nzSfmIHyqPlF9rHrPtEOgUKiTr5xEMy6/view?usp=sharing",
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
				"vscode-icons:file-type-mongo",
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
			title: "Mobile Application for Chotadhobi Laundry Solutions",
			description:
				"The program will automate the laundry process for VIT Vellore students. It will be used by around 20,000 students on campus.",
			icons: [
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.chotadhobi.chhotadhobi_app",
				},
			],
		},
		{
			title: "IRIS - Windows Voice Assistant",
			description:
				"IRIS is a virtual assistant for Windows that uses AI and speech recognition to assist with basic tasks, online browsing, and text-to-speech. It can also be used for voice typing and is helpful for both non-technical and tech-savvy users.",
			icons: [
				{
					// icon: faGlobe,
					link: "",
				},
			],
		},
		{
			title: "Tassie - Social Media App",
			description:
				"Development of a social media platform using Flutter and Node.js API which connected the app to the database. For the database and images, MongoDB, and AWS were used respectively.",
			icons: [
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.designike.tassie",
				},
			],
		},
		{
			title: "Chakravyuh - IDAM",
			description:
				"Chakravyuh is an organizational role-based access control system that allows admins to distribute credentials efficiently and maintain access logs. It also includes data protection, access control policies, teamwork and communication, and cryptography.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Shastram/chakravyuh-app",
				},
			],
		},
		{
			title: "Labory - Clinical Laboratory Assistant",
			description:
				"It is a user-friendly software for managing clinical laboratory tasks using NODEJS and ELECTRONJS. It stores data in a NoSQL database and allows users to auto-generate and print PDF reports.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/parthnamdev/laboratory-management-system/tree/master/labory",
				},
			],
		},
		{
			title: "Ecolyf (Cycle renting ecosystem) - Flutter app, website, APIt",
			description:
				"Automatic QR-based cycle renting system. NodeJS was used for API which was integrated with the express web app and Flutter app.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/parthnamdev/ecolyf-api",
				},
			],
		},
		{
			title: "Scanese - CT Intensity Segmentation of Lungs",
			description:
				"This web app will take .nii files as input and detect the infected area, generating a report of the percent damage done to the lungs due to COVID-19. It will automate the process with high accuracy using Image Processing.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/deadshot-21/Scanese",
				},
			],
		},
		{
			title: "Unware - Android Malware Detection",
			description:
				"Web app in python using Machine Learning to detect malicious APKs through static analysis and prediction.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/deadshot-21/Unware",
				},
			],
		},
		{
			title: "Cryptocurrency & ICO",
			description:
				"It involved the development of a cryptocurrency using Solidity and an ICO website connected with the Smart contract. Ganache was used for the blockchain.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/deadshot-21/Cryptocurrency-ICO",
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
	url: "https://deadshot-21.github.io/soham-portfolio/",
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
