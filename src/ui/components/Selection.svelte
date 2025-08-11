<script lang="ts">
	import ThemeVariablesProvider from '~ui/components/ThemeVariablesProvider.svelte';
	import { type ContrastConclusion, ThemeVariablesKeys } from '~ui/types';
	import { isEmpty } from '~utils/not-empty.ts';

	import { generateUIColors } from '../services/theme/generate-ui-colors.ts';
	import SegmentedFontStyleDefinition from './SegmentedFontStyleDefinition.svelte';
	import SelectionContent from './SelectionContent.svelte';

	interface Props {
		id: string;
		isLast?: boolean;
		size: 'large' | 'small';
		userSelection: ContrastConclusion;
	}
	const SEGMENTED_FONT_STYLES = {
		INITIAL: 1,
		MAX: 2
	};

	const { id, isLast, size, userSelection }: Props = $props();
	const { apca, bg, fg } = $derived(userSelection);

	let currentStyleNumber = $state(SEGMENTED_FONT_STYLES.INITIAL);

 const handleCurrentStyleNumberChange = (): void => {
    const newStyleNumber = currentStyleNumber + 1;
    if (newStyleNumber > SEGMENTED_FONT_STYLES.MAX) {
      currentStyleNumber = SEGMENTED_FONT_STYLES.INITIAL;
    } else {
      currentStyleNumber = newStyleNumber;
    }
  };

	const uiColors = $derived(
		generateUIColors({ hex: fg.hex, oklch: fg.oklch }, { hex: bg.hex, oklch: bg.oklch })
	);
</script>

{#if isEmpty(apca) || isEmpty(uiColors)}
	<p
		class="font-martianMono text-xxs text-secondary-75 mx-auto mb-4 flex items-end justify-center py-4 text-center select-none"
	>
		Can't calc
	</p>
{:else}
	<ThemeVariablesProvider theme={uiColors.theme}>
		<div
			class={`rounded-2.5xl w-full ${
				size === 'small' ? (isLast ? 'px-5 py-3' : 'px-5 pt-2 pb-8') : 'p-5'
			}`}
			style:background-color="var(${ThemeVariablesKeys.bg})"
		>
			<SegmentedFontStyleDefinition
				{id}
				{currentStyleNumber}
				primaryColor={uiColors.theme.fg}
				secondaryColor={uiColors.theme.secondary}
			/>

			<SelectionContent
				{apca}
				{bg}
				{fg}
				{id}
				{isLast}
				{size}
				onApcaDoubleClick={handleCurrentStyleNumberChange}
        --text-shadow-color="var(${ThemeVariablesKeys.fg24})"
			/>
		</div>
	</ThemeVariablesProvider>
{/if}
