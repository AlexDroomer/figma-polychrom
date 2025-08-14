<script lang="ts">
  import { conclusions } from '~ui/services/apca/conclusion.ts';
  import { fontLookupAPCA } from 'apca-w3';

  import PictureIcon from './PictureIcon.svelte';
  import StopIcon from './StopIcon.svelte';
  import WarningIcon from './WarningIcon.svelte';

  interface Props {
    apca: number;
  }

  const { apca }: Props = $props();
  const [, , , , regular, , , bold] = $derived(fontLookupAPCA(apca));
</script>

{#if Math.abs(apca) < conclusions['Not Readable']}
  <StopIcon />
{:else if Math.abs(apca) < conclusions['Non-Text']}
  <WarningIcon />
{:else if Math.abs(apca) < conclusions['Large Text']}
  <PictureIcon />
{:else}
  <div class="flex items-center text-polychrom-theme-fg">
    <div class="mr-3 flex items-center">
      <p
        class="mr-2 rounded border-0.5 border-polychrom-theme-fg p-1 text-xxxs font-medium leading-[8px]"
      >
        Rg
      </p>
      <p class="text-xxs leading-none">{regular}px</p>
    </div>
    <div class="flex items-center">
      <p
        class="mr-2 rounded border-0.5 border-polychrom-theme-fg p-1 text-xxxs font-medium leading-[8px]"
      >
        Bd
      </p>
      <p class="text-xxs leading-none">{bold}px</p>
    </div>
  </div>
{/if}
