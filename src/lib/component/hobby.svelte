<script context="module" lang="ts">
	export interface IHobby {
		name: string;
		comment?: string;
		svg?: string;
	}
</script>

<script lang="ts">
	import { snapshotMode } from '../../store';

	export let hobbies: IHobby[] = [
		{
			name: 'Boxe',
			comment: 'anglaise & thaïlandaise'
		}
	];
</script>

<div class="stats {$snapshotMode ? '' : 'shadow'} stats-vertical w-full">
	{#each hobbies as hobby}
		<div class="stat overflow-x-clip break-words">
			<div class="stat-value text-lg capitalize">
				<div class="flex align-center gap-1">
					{#if hobby.svg}
						<div class="avatar">
							<div class="w-8">
								<img src={hobby.svg} alt={hobby.name} />
							</div>
						</div>
					{/if}
					{hobby.name}
				</div>
			</div>
			<div class="stat-desc">
				{hobby.comment}
			</div>
		</div>
	{/each}
</div>
