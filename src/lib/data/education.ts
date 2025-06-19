import type { IEducation } from '$lib/component/education.svelte';

export const education: IEducation[] = [
	{
		level: '',
		title: 'IBM Full Stack Software Developer Professional Certificate',
		school: 'Coursera',
		startDate: new Date('2025-03-01'),
		endDate: new Date('2025-04-01'),
		description: `Certification professionnelle couvrant le développement web full stack , les outils DevOps ainsi que la méthodologie agile.`,
		skills: [
			{ name: 'reactjs', category: 'frontend' },
			{ name: 'nodejs', category: 'backend' },
			{ name: 'python', category: 'backend' },
			{ name: 'java', category: 'backend' },
			{ name: 'typescript', category: 'backend'},
			{ name: 'sql', category: 'data' },
			{ name: 'mongodb', category: 'data' },
			{ name: 'linux', category: 'devops' },
			{ name: 'docker', category: 'devops' },
			{ name: 'kubernetes', category: 'devops' },
			{ name: 'git', category: 'other' },
			{ name: 'TDD', category: 'other' },
			{ name: 'BDD', category: 'other' },
			{ name: 'agile', category: 'other' },
		]
	},

	{
		level: 'MASTER Informatique',
		title: 'RCNP niveau VII',
		school: 'UPMC - Paris',
		startDate: new Date('2022-09-01'),
		endDate: new Date('2024-09-30'),
		description: `Formation avancée en recherche opérationnelle, intelligence artificielle et la résolution algorithmique de problèmes.`,
		skills: [
			{ name: 'reactjs', category: 'frontend' },
			{ name: 'nodejs', category: 'backend' },
			{ name: 'python', category: 'backend' },
			{ name: 'java', category: 'backend' },
			{ name: 'typescript', category: 'backend'},
			{ name: 'sql', category: 'data' },
			{ name: 'mongodb', category: 'data' },
			{ name: 'linux', category: 'devops' },
			{ name: 'docker', category: 'devops' },
			{ name: 'kubernetes', category: 'devops' },
			{ name: 'git', category: 'other' },
			{ name: 'julia', category: 'other'},
			{ name: 'reinforcement learning', category: 'other' }
		]
	},

	{
		level: 'LICENCE Informatique',
		title: 'RCNP niveau VI',
		school: 'UPMC - Paris',
		startDate: new Date('2020-09-01'),
		endDate: new Date('2022-06-01'),
		description: `Formation générale en informatique.`,
		skills: [
			{ name: 'reactjs', category: 'frontend' },
			{ name: 'nodejs', category: 'backend' },
			{ name: 'python', category: 'backend' },
			{ name: 'java', category: 'backend' },
			{ name: 'sql', category: 'data' },
			{ name: 'mongodb', category: 'data' },
			{ name: 'linux', category: 'devops' },
			{ name: 'git', category: 'other' },
		]
	}
];
