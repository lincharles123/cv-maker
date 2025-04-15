<script context="module" lang="ts">
	export interface IBadge {
		content: string;
		color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'none';
	}
</script>

<script lang="ts">
	export let content: string;
	export let color: IBadge['color'] = 'none';
	export const selected = false;
</script>

<span
	class="inline-flex items-center rounded-md {color} px-2 py-1 text-xs ring-1 ring-inset hover:skew-y-2 transition"
	>{content.toLocaleUpperCase()}</span
>
