<script context="module" lang="ts">
	import type { ISkill } from './skill.svelte';

	export interface IEducation {
		level: string;
		title: string;
		school: string;
		startDate: Date;
		endDate: Date;
		description?: string;
		skills?: ISkill[];
	}
</script>

<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { snapshotMode } from '../../store';
	import Badge from './ui/badge.svelte';

	export let education: IEducation[] = [
		{
			level: 'Master',
			title: 'Master Informatique',
			school: 'UPMC',
			startDate: new Date('2022-09-01'),
			endDate: new Date('2024-09-30'),
			description: `Formation avancée en recherche opérationnelle, intelligence artificielle et la résolution algorithmique de problèmes.`
		}
	];
</script>

<ol class="relative border-l border-blue-100 dark:border-blue-700">
	{#each education.sort((a, b) => b.startDate.getTime() - a.startDate.getTime()) as item}
		<!-- content here -->
		<li class="mb-5 ml-4">
			<div
				class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
			></div>
			<time class="mb-1 text-sm font-normal leading-none text-accent">
				{formatDate(item.startDate)} - {formatDate(item.endDate)}
			</time>
			<div class="card bg-stone-200 dark:bg-stone-600 {$snapshotMode ? '': 'shadow-xl'} rounded-sm">
				<div class="card-body p-2">
					<div class="collapse {$snapshotMode ? 'collapse-open' : 'collapse-arrow'}">
						<input aria-label="collapse education details" type="checkbox" />
						<div class="collapse-title items-center flex justify-between">
							<h3 class="font-semibold card-title text-sm text-left">
								{item.school}
							</h3>
							<div class="text-sm">
								{#if item.level}
									{item.level + ' '}
								{/if}
								{item.title}
							</div>
						</div>
						<div class="collapse-content">
							<p class="mb-4 text-sm font-normal">
								{item.description}
							</p>
							<div>
								{#each item.skills || [] as badge}
									<Badge content={badge.name} />
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ol>
