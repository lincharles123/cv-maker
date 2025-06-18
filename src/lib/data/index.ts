import type { IContactInfo } from '$lib/component/contact.svelte';
import type { ISkill } from '$lib/component/skill.svelte';
import type { ITitle } from '$lib/component/title.svelte';
import { education } from './education';
import { experience } from './experiences';
import { hobbies, langs } from './langHobbies';

export { experience, education, langs, hobbies };

export const title: ITitle = {
	jobDesc: 'Développeur Full Stack',
};

export const contactInfo: IContactInfo = {
	name: 'Charles LIN',
	nationality: 'Nationalité Française',
	phone: '+33 6 95 79 17 78',
	email: 'charles1.lin@outlook.com',
	links: [
		{
			name: 'Github',
			url: 'https://github.com/lincharles123',
			type: 'github'
		},
		{
			name: 'LinkedIn',
			url: 'www.linkedin.com/in/charles-lin-3ab364323',
			type: 'linkedin'
		}
	]
};

export const skills: ISkill[] = [
	{
		name: 'django',
		category: 'backend'
	},
	{
		name: 'nodejs',
		category: 'backend'
	},
	{
		name: 'reactjs',
		category: 'frontend'
	},
	{
		name: 'nextjs',
		category: 'frontend'
	},
	{
		name: 'sql',
		category: 'data'
	},
	{
		name: 'mongodb',
		category: 'data'
	},
	{
		name: 'kubernetes',
		category: 'devops'
	},
	{
		name: 'docker',
		category: 'devops'
	},
	{
		name: 'linux',
		category: 'system'
	}
];
