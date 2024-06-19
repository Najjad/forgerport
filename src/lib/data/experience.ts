import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'WebForger Studio',
		description: 'I have been a developer for 4 years, and I am passionate about helping clients achieve their goals. My skills span across multiple programming languages, including Python, Java, JavaScript, and SQL. Leading the development team at WebForger Studio, I strive to bring innovative ideas to life and ensure the highest quality in our projects.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2024, 2, 1), to: new Date() },
		skills: getSkills('ts', 'js', 'svelte', 'html', 'css', 'wordpress'),
		name: 'Najjad',
		color: 'red',
		links: [{ to: 'https://najjadzeenni.com', label: 'Personal Website' }],
		logo: Assets.Najjad,
		shortDescription: 'Leads the team with innovative ideas.'
	},
	{
		slug: 'software-freelance',
		company: 'WebForger Studio',
		description: 'As a developer, I contribute to the creation and maintenance of our websites. My expertise lies in various programming languages, and I take pride in delivering high-quality applications for our clients. At WebForger Studio, I am committed to ensuring that every project meets our clients expectations and showcases our technical proficiency.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2024, 2, 1), to: new Date() },
		skills: getSkills('ts', 'js', 'svelte', 'html', 'css', 'wordpress'),
		name: 'Bogdan',
		color: 'blue',
		links: [{ to: 'https://github.com/BogdanDelcea1', label: 'Github' }],
		logo: Assets.Bogdan,
		shortDescription: 'Dedicated developer of client projects'
	},
	{
		slug: 'software-freelance-junior',
		company: 'WebForger Studio',
		description: 'I am a developer who plays a key role in developing and maintaining websites at WebForger Studio. My knowledge of various programming languages allows me to support our team in delivering top-notch web solutions. I enjoy working closely with clients to understand their vision and translate it into functional, beautiful websites.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2024, 2, 1), to: new Date() },
		skills: getSkills('ts', 'js', 'svelte', 'html', 'css', 'wordpress'),
		name: 'Jacobo',
		color: 'green',
		links: [{ to: 'https://github.com/jacuun', label: 'Github' }],
		logo: Assets.Jacobo,
		shortDescription: 'Assists in developing and maintaining websites.'
	},
	{
		slug: 'finance-business',
		company: 'WebForger Studio',
		description: 'I am responsible for the business management aspect of WebForger Studio. My role involves overseeing financial operations and business strategies to ensure the company runs smoothly and efficiently. I also communicate with clients to understand their needs and ensure their satisfaction. I am dedicated to making sure our business thrives and that our financial health is robust, allowing us to continue delivering exceptional services to our clients.',
		contract: ContractType.FullTime,
		type: 'Finance and Business',
		location: 'Home',
		period: { from: new Date(2024, 2, 1), to: new Date() },
		skills: getSkills('finance', 'management', 'strategy'),
		name: 'Hussein',
		color: 'yellow',
		links: [],
		logo: Assets.Hussein,
		shortDescription: 'Manages finance and business operations for the company.'
	}
];

export const title = 'Experience';
