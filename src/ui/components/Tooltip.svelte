<script lang="ts">
  import type { Snippet } from 'svelte';
  import { createFloatingActions } from 'svelte-floating-ui';
  import { flip, offset, type Placement, shift } from 'svelte-floating-ui/dom';

  interface Props {
    children: Snippet;
    placement?: Placement;
    trigger: Snippet;
  }

  const { children, placement = 'top', trigger }: Props = $props();
  const [floatingRef, floatingContent] = createFloatingActions({
    autoUpdate: {
      ancestorResize: true,
      elementResize: true,
    },
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: 'start',
        padding: 5,
      }),
      shift({ padding: 5 }),
    ],
    placement,
    strategy: 'absolute',
  });
  let showTooltip = $state(false);
</script>

<button
  onclick={() => (showTooltip = true)}
  onmouseenter={() => (showTooltip = true)}
  onmouseleave={() => (showTooltip = false)}
  use:floatingRef
>
  {@render trigger()}
</button>

{#if showTooltip}
  <div
    class="absolute rounded-full bg-black p-2 px-3 py-1.5 font-martianMono text-xxs font-medium text-white shadow-md dark:bg-white dark:text-black"
    use:floatingContent
  >
    {@render children()}
  </div>
{/if}
