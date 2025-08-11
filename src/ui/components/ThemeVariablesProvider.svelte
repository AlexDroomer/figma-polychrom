<script lang="ts">
	import type { Theme } from '~ui/services/theme/generate-ui-colors.ts';
	import type { Snippet } from 'svelte';

	import { formatColorForTheme } from '~ui/services/format/format-color-for-theme';
  import { ThemeVariablesKeys } from '~ui/types';

	interface Props {
		children: Snippet;
		theme: Theme;
	}
	const { children, theme }: Props = $props();

	const styles = $derived(() =>
		Object.entries({
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
		})
			.map(([key, value]) => `${key}: ${value}`)
			.join('; ')
	);
</script>

<div class="w-full" style={styles()}>
	{@render children()}
</div>
