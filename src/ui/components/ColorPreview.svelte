<script lang="ts">
  import BasicColorPreviewIcon from '~ui/components/BasicColorPreviewIcon.svelte';
  import LayeredColorPreviewIcon from '~ui/components/LayeredColorPreviewIcon.svelte';

  interface Props {
    indicatorType: 'background' | 'foreground';
    isBlended: boolean;
  }

  const { indicatorType, isBlended }: Props = $props();
</script>

{#if isBlended}
  <div class="flex">
    <LayeredColorPreviewIcon {indicatorType} />
  </div>
{:else}
  <BasicColorPreviewIcon {indicatorType} />
{/if}
