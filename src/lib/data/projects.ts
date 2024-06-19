import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
	  slug: 'demo-project',
	  color: '#00bfff',
	  description: 'A demo project for showcasing purposes.',
	  shortDescription: "When you order a website, it'll be listed here!",
	  links: [{ to: 'https://github.com/webforgerstudio/', label: 'GitHub' }],
	  logo: Assets.JavaScript,
	  name: 'Your Project Here!',
	  period: {
		from: new Date()
	  },
	  skills: getSkills('js', 'html', 'css'),
	  type: 'Website Template',
	  screenshots: [
		{
		  label: 'Home Page',
		  src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
		},
		{
		  label: 'About Page',
		  src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
		},
		{
		  label: 'Contact Page',
		  src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		}
	  ]
	}
];

export const title = 'Projects';
