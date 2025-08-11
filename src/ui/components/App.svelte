<script lang="ts">
	import { MessageTypes } from '~types/messages.ts';
	import AppContent from '~ui/components/AppContent.svelte';
	import HelpLink from '~ui/components/HelpLink.svelte';
	import LurkersLink from '~ui/components/LurkersLink.svelte';
	import SettingsButton from '~ui/components/SettingsButton.svelte';
	import Tooltip from '~ui/components/Tooltip.svelte';
	import { isP3 } from '~ui/stores/selected-nodes';
	import { onMount } from 'svelte';

	onMount(() => {
		parent.postMessage(
			{
				pluginMessage: {
					type: MessageTypes.UiReady
				}
			},
			'*'
		);
	});
</script>

<div
	class="font-martianMono relative flex min-h-full w-full flex-col items-center p-1 pb-0 select-none"
>
	<AppContent />

	<div class="mt-auto mb-2 flex w-full items-end px-1">
		<HelpLink />

		<div class="ml-auto flex items-center">
			{#if $isP3}
				<Tooltip>
					{#snippet trigger()}
						<div style:mix-blend-mode="difference" class="flex items-center">
							<p
								class="border-0.5 border-secondary-75 text-xxxs text-secondary-75 mr-3 rounded p-1 leading-[8px] font-medium"
							>
								P3
							</p>
						</div>
					{/snippet}
					<span>File color profile</span>
				</Tooltip>
			{/if}
			<SettingsButton />
		</div>
	</div>

	<div class="absolute bottom-0 left-1/2 -translate-x-1/2">
		<LurkersLink />
	</div>
</div>
