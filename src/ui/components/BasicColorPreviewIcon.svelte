<script lang="ts">
  interface Props {
    indicatorType: 'background' | 'foreground';
  }

  const { indicatorType }: Props = $props();
</script>

<svg fill="none" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path
    class={[
      indicatorType === 'foreground' && 'fill-polychrom-theme-fg',
      indicatorType === 'background' && 'fill-polychrom-theme-bg',
    ]}
    d="M0 4c0-2.20914 1.79086-4 4-4h8c2.2091 0 4 1.79086 4 4v8c0 2.2091-1.7909 4-4 4H4c-2.20914 0-4-1.7909-4-4V4Z"
  />
  <path
    class={[
      indicatorType === 'foreground' && 'fill-polychrom-theme-fg-border',
      indicatorType === 'background' && 'fill-polychrom-theme-bg-border',
    ]}
    clip-rule="evenodd"
    d="M12 .5H4C2.067.5.5 2.067.5 4v8c0 1.933 1.567 3.5 3.5 3.5h8c1.933 0 3.5-1.567 3.5-3.5V4c0-1.933-1.567-3.5-3.5-3.5ZM4 0C1.79086 0 0 1.79086 0 4v8c0 2.2091 1.79086 4 4 4h8c2.2091 0 4-1.7909 4-4V4c0-2.20914-1.7909-4-4-4H4Z"
    fill-rule="evenodd"
  />
</svg>
