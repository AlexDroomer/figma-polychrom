<script lang="ts">
  import { getConclusionByScore } from '~ui/services/apca/conclusion.ts';
  import { formatColorForTheme } from '~ui/services/format/format-color-for-theme';
  import { type ContrastConclusion, ThemeVariablesKeys } from '~ui/types';

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

  const bgColor = $derived(formatColorForTheme(bg));
  const fgColor = $derived(formatColorForTheme(fg));
</script>

<div class="relative grid h-full w-full">
  <div
    class={`flex items-center justify-between ${size === 'small' ? 'mb-1' : 'mb-5'}`}
  >
    <p class="text-xxs" style:color="var(${ThemeVariablesKeys.fg})">
      {getConclusionByScore(Math.abs(apca))}
    </p>

    <div class="flex h-[18px] items-center">
      <TextMetrics {apca} />
    </div>
  </div>

  <div
    class={`flex w-full items-center justify-between ${size === 'large' ? 'mb-1' : ''}`}
  >
    <div class="shrink-0 grow">
      <ContrastSample {bgColor} color={fgColor} {size} />
    </div>

    <div
      class={`w-full text-center leading-none text-shadow segmented-${id} ${size === 'small' ? 'mr-9 text-5xl' : 'mr-13 text-7xl'}`}
    >
      <h1 class="inline text-shadow" ondblclick={onApcaDoubleClick}>
        {Math.abs(apca)}
      </h1>
    </div>
  </div>

  {#if isLast === true || size === 'large'}
    <div class={isLast && size === 'small' ? 'mb-0 mt-1' : 'mb-5'}>
      <ProgressBar {apca} height={size === 'small' ? 6 : 8} --color-sparkles="var({ThemeVariablesKeys.fg})" />
    </div>
  {/if}

  {#if size === 'large'}
    <div class="flex items-center justify-between text-xxs">
      <ColorIndicator
        borderColor={ThemeVariablesKeys.fgBorder}
        fill={fg}
        indicatorColor={fgColor}
        isBlended={fg.isBlended}
        textColor={ThemeVariablesKeys.fg}
        --indicators-active={ThemeVariablesKeys.secondary24}
        --indicators-hover={ThemeVariablesKeys.secondary16}
      />

      <ColorIndicator
        borderColor={ThemeVariablesKeys.bgBorder}
        fill={bg}
        indicatorColor={bgColor}
        isBlended={bg.isBlended}
        textColor={ThemeVariablesKeys.secondary}
        --indicators-active={ThemeVariablesKeys.secondary24}
        --indicators-hover={ThemeVariablesKeys.secondary16}
      />
    </div>
  {/if}
</div>
