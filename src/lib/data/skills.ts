import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Finance', slug: 'finance' }),
	defineSkillCategory({ name: 'Content Management System', slug: 'cms' }),
	defineSkillCategory({ name: 'Management', slug: 'management' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 'At WebForger Studio, we excel in using JavaScript to bring dynamic and interactive features to our websites. JavaScript allows us to create engaging user experiences and ensure that our clients\' websites are both functional and appealing.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: 'We use TypeScript to enhance our JavaScript code with type safety and better tooling. This helps us catch errors early and build more robust and maintainable web applications for our clients.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'Our team is proficient in CSS, which we use to style and layout web pages. With CSS, we ensure that our websites look great on all devices and provide a seamless user experience.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML is the backbone of our web development projects. We use HTML to structure web content, ensuring that it is accessible and well-organized for both users and search engines.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: 'Svelte is one of our favorite frameworks for building fast and efficient web applications. Its simplicity and performance benefits allow us to deliver top-notch user experiences.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'wordpress',
		color: 'pink',
		description: 'We have extensive experience with WordPress, a popular content management system. Whether it\'s creating custom themes or managing plugins, we can handle all aspects of WordPress development to meet our clients\' needs.',
		logo: Assets.Wordpress,
		name: 'Wordpress',
		category: 'cms'
	}),
	defineSkill({
		slug: 'finance',
		color: 'green',
		description: 'In addition to our technical expertise, we also have a strong grasp of finance. This allows us to manage project budgets effectively and ensure that our business operations run smoothly.',
		logo: Assets.Finance,
		name: 'Finance',
		category: 'finance'
	}),
	defineSkill({
		slug: 'management',
		color: 'red',
		description: 'Effective project management is key to our success. We use proven management techniques to keep our projects on track, ensuring timely delivery and client satisfaction.',
		logo: Assets.Management,
		name: 'Management',
		category: 'management'
	})
] as const;


export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
