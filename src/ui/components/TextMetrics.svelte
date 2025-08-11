<script lang="ts">
	import { conclusions } from '~ui/services/apca/conclusion.ts';
	import { ThemeVariablesKeys } from '~ui/types';
	import { fontLookupAPCA } from 'apca-w3';

	import PictureIcon from './PictureIcon.svelte';
	import StopIcon from './StopIcon.svelte';
	import WarningIcon from './WarningIcon.svelte';

	interface Props {
		apca: number;
	}

	const { apca }: Props = $props();
	const [, , , , regular, , , bold] = fontLookupAPCA(apca);
</script>

{#if Math.abs(apca) < conclusions['Not Readable']}
	<StopIcon />
{:else if Math.abs(apca) < conclusions['Non-Text']}
	<WarningIcon />
{:else if Math.abs(apca) < conclusions['Large Text']}
	<PictureIcon />
{:else}
	<div style:color="var({ThemeVariablesKeys.fg})" class="flex items-center">
		<div class="mr-3 flex items-center">
			<p
				style:border-color="var({ThemeVariablesKeys.fg})"
				class="border-0.5 text-xxxs mr-2 rounded p-1 leading-[8px] font-medium"
			>
				Rg
			</p>
			<p class="text-xxs leading-none">{regular}px</p>
		</div>
		<div class="flex items-center">
			<p
				style:border-color="var({ThemeVariablesKeys.fg})"
				class="border-0.5 text-xxxs mr-2 rounded p-1 leading-[8px] font-medium"
			>
				Bd
			</p>
			<p class="text-xxs leading-none">{bold}px</p>
		</div>
	</div>
{/if}
