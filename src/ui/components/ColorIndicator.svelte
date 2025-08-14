<script lang="ts">
  import { copy } from '@svelte-put/copy';
  import ColorPreview from '~ui/components/ColorPreview.svelte';
  import Tooltip from '~ui/components/Tooltip.svelte';
  import {
    getFormatterForCSS,
    getFormatterForDisplaying,
  } from '~utils/colors/formatters.ts';
  import type { Oklch } from 'culori/fn';

  import { colorSpaceDisplayMode } from '../stores/color-space-display-mode.ts';

  interface ColorIndicatorProps {
    fill: { oklch: Oklch };
    indicatorType: 'background' | 'foreground';
    isBlended: boolean;
  }
  const { fill, indicatorType, isBlended }: ColorIndicatorProps = $props();
  const formatColorForDisplay = $derived(
    getFormatterForDisplaying($colorSpaceDisplayMode)
  );
  const displayValue = $derived(formatColorForDisplay(fill.oklch));

  const formatColorForCSS = getFormatterForCSS($colorSpaceDisplayMode);
  const cssValue = formatColorForCSS(fill.oklch);

  let copied = $state('');
  const handleCopied = (): void => {
    copied = cssValue;
    setTimeout(() => {
      copied = '';
    }, 2000);
  };
</script>

<Tooltip>
  {#snippet trigger()}
    <button
      class={[
        'interactive',
        indicatorType === 'foreground' && 'text-polychrom-theme-fg',
        indicatorType === 'background' && 'text-polychrom-theme-secondary',
      ]}
      oncopied={handleCopied}
      type="button"
      use:copy
    >
      <div
        class="flex items-center rounded-[7px] p-1 hover:bg-indicatorsHover active:bg-indicatorsActive"
      >
        <div class="mr-2">
          <ColorPreview {indicatorType} {isBlended} />
        </div>
        <span
          class={[
            indicatorType === 'foreground' && 'text-polychrom-theme-fg',
            indicatorType === 'background' && 'text-polychrom-theme-secondary',
          ]}
        >
          {displayValue}
        </span>
      </div>
    </button>
  {/snippet}
  {#if copied}
    <span>Copied!</span>
  {:else}
    <span class="whitespace-nowrap">Copy as CSS</span>
  {/if}
</Tooltip>
