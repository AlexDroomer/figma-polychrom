<script lang="ts">
  import { getConclusionByScore } from '~ui/services/apca/conclusion.ts';
  import type {  ContrastConclusion } from '~ui/types/index.ts';

  import ColorIndicator from './ColorIndicator.svelte';
  import ContrastSample from './ContrastSample.svelte';
  import ProgressBar from './ProgressBar.svelte';
  import TextMetrics from './TextMetrics.svelte';

  interface Props extends ContrastConclusion {
    isLast?: boolean;
    onApcaDoubleClick: () => void;
    size: 'large' | 'small';
  }

  const { apca, bg, fg, id, isLast, onApcaDoubleClick, size }: Props = $props();

</script>

<div class="relative grid size-full">
  <div
    class={[
      size === 'small' ? 'mb-1' : 'mb-5',
      'flex items-center justify-between',
    ]}
  >
    <p class="text-xxs text-polychrom-theme-fg">
      {getConclusionByScore(Math.abs(apca))}
    </p>

    <div class="flex h-[18px] items-center">
      <TextMetrics {apca} />
    </div>
  </div>

  <div
    class={[
      size === 'large' && 'mb-1',
      'flex w-full items-center justify-between',
    ]}
  >
    <div class="shrink-0 grow">
      <ContrastSample {size} />
    </div>

    <div
      class={[
        size === 'small' ? 'mr-9 text-5xl' : 'mr-13 text-7xl',
        `segmented-${id} w-full text-center leading-none text-shadow`,
      ]}
    >
      <h1 class="inline text-shadow" ondblclick={onApcaDoubleClick}>
        {Math.abs(apca)}
      </h1>
    </div>
  </div>

  {#if isLast === true || size === 'large'}
    <div class={isLast === true && size === 'small' ? 'mb-0 mt-1' : 'mb-5'}>
      <ProgressBar {apca} height={size === 'small' ? 6 : 8}  />
    </div>
  {/if}

  {#if size === 'large'}
    <div class="flex items-center justify-between text-xxs">
      <ColorIndicator
        fill={fg}
        indicatorType="foreground"
        isBlended={fg.isBlended}
      />

      <ColorIndicator
        fill={bg}
        indicatorType="background"
        isBlended={bg.isBlended}
      />
    </div>
  {/if}
</div>
