import type { Oklch } from 'culori/fn';

export interface ContrastConclusion {
  apca: number;
  bg: { hex: string; isBlended: boolean; oklch: Oklch };
  fg: { hex: string; isBlended: boolean; oklch: Oklch };
  id: string;
}

export enum ThemeVariablesKeys {
  bg = `--polychrom-theme-bg`,
  bgBorder = `--polychrom-theme-bg-border`,
  borderOriginal = `--polychrom-theme-border-original`,
  fg = `--polychrom-theme-fg`,
  fg24 = `--polychrom-theme-fg-24`,
  fg70 = `--polychrom-theme-fg-70`,
  fgBorder = `--polychrom-theme-fg-border`,
  secondary = `--polychrom-theme-secondary`,
  secondary12 = `--polychrom-theme-secondary-12`,
  secondary16 = `--polychrom-theme-secondary-16`,
  secondary24 = `--polychrom-theme-secondary-24`,
}
