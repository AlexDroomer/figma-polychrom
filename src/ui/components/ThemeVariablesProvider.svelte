<script lang="ts">
  import { formatColorForTheme } from '~ui/services/theme/format-colors-for-theme.ts';
  import type { Theme } from '~ui/services/theme/generate-ui-colors.ts';
  import { ThemeVariablesKeys } from '~ui/types/index.ts';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    theme: Theme;
  }
  const { children, theme }: Props = $props();

  const cssVars = $derived(() => ({
  		[ThemeVariablesKeys.bg]: formatColorForTheme(theme.bg),
  		[ThemeVariablesKeys.bgBorder]: formatColorForTheme(theme.bgBorder),
  		[ThemeVariablesKeys.borderOriginal]: formatColorForTheme(theme.borderOriginal),
  		[ThemeVariablesKeys.fg]: formatColorForTheme(theme.fg),
  		[ThemeVariablesKeys.fg24]: formatColorForTheme(theme.fg, 0.24),
  		[ThemeVariablesKeys.fg70]: formatColorForTheme(theme.fg, 0.7),
  		[ThemeVariablesKeys.fgBorder]: formatColorForTheme(theme.fgBorder),
  		[ThemeVariablesKeys.secondary]: formatColorForTheme(theme.secondary),
  		[ThemeVariablesKeys.secondary12]: formatColorForTheme(theme.secondary, 0.12),
  		[ThemeVariablesKeys.secondary16]: formatColorForTheme(theme.secondary, 0.16),
  		[ThemeVariablesKeys.secondary24]: formatColorForTheme(theme.secondary, 0.24)
  }))
  $effect(() => {
    const root = document.documentElement;
    for (const [cssVar, value] of Object.entries(cssVars())) {
      root.style.setProperty(cssVar, value)
    }
    // root.style.setProperty(
    //   ThemeVariablesKeys.bg,
    //   formatColorForTheme(theme.bg)
    // );
    // root.style.setProperty(
    //   ThemeVariablesKeys.bgBorder,
    //   formatColorForTheme(theme.bgBorder)
    // );
    // root.style.setProperty(
    //   ThemeVariablesKeys.borderOriginal,
    //   formatColorForTheme(theme.borderOriginal)
    // );
    // root.style.setProperty(
    //   ThemeVariablesKeys.fg,
    //   formatColorForTheme(theme.fg)
    // );
    // root.style.setProperty(
    //   ThemeVariablesKeys.fg24,
    //   formatColorForTheme(theme.fg, 0.24)
    // );
    // root.style.setProperty(
    //   ThemeVariablesKeys.fg70,
    //   formatColorForTheme(theme.fg, 0.7)
    // );
    // root.style.setProperty(
    //   ThemeVariablesKeys.fgBorder,
    //   formatColorForTheme(theme.fgBorder)
    // );
    // root.style.setProperty(
    //   ThemeVariablesKeys.secondary,
    //   formatColorForTheme(theme.secondary)
    // );
    // root.style.setProperty(
    //   ThemeVariablesKeys.secondary12,
    //   formatColorForTheme(theme.secondary, 0.12)
    // );
    // root.style.setProperty(
    //   ThemeVariablesKeys.secondary16,
    //   formatColorForTheme(theme.secondary, 0.16)
    // );
    // root.style.setProperty(
    //   ThemeVariablesKeys.secondary24,
    //   formatColorForTheme(theme.secondary, 0.24)
    // );
  });
  // const styles = `
  // ${ThemeVariablesKeys.bg}: ${formatColorForTheme(theme.bg)};
  // ${ThemeVariablesKeys.bgBorder}: ${formatColorForTheme(theme.bgBorder)};
  // ${ThemeVariablesKeys.fg}: ${formatColorForTheme(theme.fg)};
  // ${ThemeVariablesKeys.fg24}: ${formatColorForTheme(theme.fg, 0.24)};
  // ${ThemeVariablesKeys.fg70}: ${formatColorForTheme(theme.fg, 0.7)};
  // ${ThemeVariablesKeys.fgBorder}: ${formatColorForTheme(theme.fgBorder)};
  // ${ThemeVariablesKeys.secondary}: ${formatColorForTheme(theme.bg)};
  // ${ThemeVariablesKeys.secondary12}: ${formatColorForTheme(theme.secondary, 0.12)};
  // ${ThemeVariablesKeys.secondary16}: ${formatColorForTheme(theme.secondary, 0.16)};
  // ${ThemeVariablesKeys.secondary24}: ${formatColorForTheme(theme.secondary, 0.24)};
  // `

</script>

<div class="w-full" >
  {@render children()}
</div>
