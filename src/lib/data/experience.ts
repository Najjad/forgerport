import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'WebForger Studio',
		description: 'dedicated awesomesauce',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2024, 2, 1), to: new Date() },
		skills: getSkills('ts', 'js'),
		name: 'Najjad',
		color: 'red',
		links: [],
		logo: Assets.Najjad,
		shortDescription: 'Leads the team with innovative ideas.'
	},
	{
		slug: 'software-freelance',
		company: 'WebForger Studio',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Bogdan',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Focuses on front-end development.'
	},
	{
		slug: 'software-freelance-junior',
		company: 'WebForger Studio',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Jacobo',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Assists in developing and maintaining websites.'
	},
	{
		slug: 'finance-business',
		company: 'WebForger Studio',
		description: 'Oversees financial operations and business strategies.',
		contract: ContractType.FullTime,
		type: 'Finance and Business',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('finance', 'management', 'strategy'),
		name: 'Hussein',
		color: 'yellow',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Manages finance and business operations for the company.'
	}
];

export const title = 'Experience';
