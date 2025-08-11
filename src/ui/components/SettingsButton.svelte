<script lang="ts">
	import SettingsIcon from '~ui/components/SettingsIcon.svelte';
	import Tooltip from '~ui/components/Tooltip.svelte';
	import {
		changeColorSpaceDisplayMode,
		colorSpaceDisplayMode,
		colorSpaceDisplayModesList
	} from '~ui/stores/color-space-display-mode.ts';
</script>

<Tooltip>
	{#snippet trigger()}
		<button
			class="interactive border-0.5 border-secondary-35 text-secondary-75 hover:bg-elevation-1 active:bg-universal-25 flex h-6 w-6 items-center justify-center rounded-full hover:border-transparent active:border-transparent"
			onclick={changeColorSpaceDisplayMode}
			type="button"
		>
			<SettingsIcon />
		</button>
	{/snippet}

	<p class="flex gap-x-2">
		{#each colorSpaceDisplayModesList as mode (mode)}
			<span class={mode !== $colorSpaceDisplayMode ? 'opacity-70 dark:opacity-50' : 'font-bold'}>
				{mode}
			</span>
		{/each}
	</p>
</Tooltip>
