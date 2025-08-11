<script lang="ts">
  import type { ContrastConclusion } from '~ui/types';

  import Selection from '~ui/components/Selection.svelte';
  
  interface Props {
    contrastConclusion: readonly ContrastConclusion[];
  }
  const { contrastConclusion }: Props = $props();
</script>

<ul class="mb-3 w-full">
  {#each contrastConclusion as pair, index (index)}
    <li
      class={[
        'flex w-full items-center justify-center',
        index !== 0 ? '-mt-6' : '',
      ]}
    >
      <Selection
        id={pair.id}
        isLast={index === contrastConclusion.length - 1}
        size="small"
        userSelection={pair}
      />
    </li>
  {/each}
</ul>
