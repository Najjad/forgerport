import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'WebForger';

export const lastName = 'Studios';

export const description =
	'Web Forger Studio is a dynamic group of passionate developers dedicated to bringing your digital visions to life. Specializing in creating bespoke websites for clients, we combine creativity and technical expertise to deliver high-quality, tailored solutions. Our slogan, "Your Vision, Our Code," reflects our commitment to turning your ideas into reality with precision and innovation.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/webforgerstudio' },
	{
		platform: Platform.Email,
		link: 'webforgerstudio@gmail.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'svelte', 'ts');
