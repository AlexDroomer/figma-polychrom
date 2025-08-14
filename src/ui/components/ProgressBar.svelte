<script lang="ts">
  import RewardingAnimationBodyText from '~ui/components/RewardingAnimationBodyText.svelte';
  import RewardingAnimationContentText from '~ui/components/RewardingAnimationContentText.svelte';
  import RewardingAnimationFluentText from '~ui/components/RewardingAnimationFluentText.svelte';
  import { conclusions } from '~ui/services/apca/conclusion.ts';
  import { rewardAnimationLaunch } from '~ui/stores/selected-nodes.ts';

  interface Props {
    apca: number;
    height: number;
  }
  const { apca, height }: Props = $props();
  const SCALE = 2;
  const APCA_NEGATIVE_MAX_SCALE = 108;
  const APCA_POSITIVE_MAX_SCALE = 106;
  const SERIF_OFFSET = 2;
  const maxScale = apca > 0 ? APCA_POSITIVE_MAX_SCALE : APCA_NEGATIVE_MAX_SCALE;
  const barWidth = maxScale * SCALE;
  const filledSegmentWidth = $derived(Math.abs(apca) * SCALE);
  const [, ...conclusionScores] = Object.values(conclusions).reverse();
   const conclusionArray =
    conclusionScores.map((value) => ({
      isBodyText: value === conclusions['Body Text'],
      isContextText: value === conclusions['Content Text'],
      isFluentText: value === conclusions['Fluent Text'],
      position: value * SCALE - SERIF_OFFSET
    }))


</script>

<div class="flex items-center justify-center">
  <div class="flex items-center">
    <span class="mr-2 text-xxs text-polychrom-theme-secondary"> 0 </span>

    <div
      style="
        height: {height}px;
        width: {barWidth}px;
      "
      class="relative rounded-full bg-polychrom-theme-secondary-12"
    >
      <div
        style:height="{height}px"
        style:width="{filledSegmentWidth}px"

        class="rounded-full bg-gradient-to-r from-polychrom-theme-fg-70 from-70% to-polychrom-theme-fg to-85%"
      >
        {#each conclusionArray as { isBodyText, isContextText, isFluentText, position }, i (i)}
          <div
            style:left="{position}px"
            class="absolute top-1/2 w-px -translate-y-1/2 bg-polychrom-theme-bg {isContextText
              ? 'h-1'
              : 'h-0.5'}"
          >
            {#if isContextText && $rewardAnimationLaunch.contentText}
              <RewardingAnimationContentText />
            {/if}

            {#if isBodyText && $rewardAnimationLaunch.bodyText === true}
              <RewardingAnimationBodyText />
            {/if}

            {#if isFluentText && $rewardAnimationLaunch.fluentText === true}
              <RewardingAnimationFluentText />
            {/if}
          </div>
        {/each}
      </div>
    </div>
    <span class="ml-2 text-xxs text-polychrom-theme-secondary">
      {maxScale}
    </span>
  </div>
</div>
