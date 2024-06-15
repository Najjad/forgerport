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
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2024, 2, 1), to: new Date() },
		skills: getSkills('ts', 'js', 'svelte', 'html', 'css', 'wordpress'),
		name: 'Bogdan',
		color: 'blue',
		links: [{ to: 'https://github.com/BogdanDelcea1', label: 'Github' }],
		logo: Assets.Unknown,
		shortDescription: 'Dedicated developer'
	},
	{
		slug: 'software-freelance-junior',
		company: 'WebForger Studio',
		description: 'Creating awesome applications for customers.',
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
		description: 'Oversees financial operations and business strategies.',
		contract: ContractType.FullTime,
		type: 'Finance and Business',
		location: 'Home',
		period: { from: new Date(2024, 2, 1), to: new Date() },
		skills: getSkills('finance', 'management', 'strategy'),
		name: 'Hussein',
		color: 'yellow',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Manages finance and business operations for the company.'
	}
];

export const title = 'Experience';
