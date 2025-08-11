<script lang="ts">
  import { ThemeVariablesKeys } from '~ui/types';

  interface Props {
    bgColor: string;
    color: string;
    opacity?: number;
    size: 'large' | 'small';
  }
  const exampleText = 'Aa';
  const { bgColor, color, opacity, size }: Props = $props();
</script>

<p
  class={`flex items-center justify-center rounded-lg border-[0.5px] text-base ${
    size === 'small' ? 'h-9 w-9 text-xxs' : 'h-13 w-13 text-base'
  }`}
  style:color
  style:border-color="var(${ThemeVariablesKeys.borderOriginal})"
  style:background-color={bgColor}
>
  <span style:opacity>{exampleText}</span>
</p>
