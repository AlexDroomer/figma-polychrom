import type { PolychromNode } from '~types/common.ts';
import type { FigmaColorSpace } from '~types/figma.ts';

import type { ColorSpaceDisplayModes } from '../constants.ts';

export enum MessageTypes {
  ColorSpaceDisplayModeChange = 'Polychrom_ColorSpaceDisplayModeChange',
  SelectionChange = 'Polychrom_SelectionChange',
  UiReady = 'Polychrom_UiReady',
}

export enum SelectionMessageTypes {
  invalidBackground = 'invalidBackground',
  unprocessedBlendModes = 'unprocessedBlendModes',
}

export interface ColorSpaceDisplayModeChangeMessage {
  colorSpaceDisplayMode: ColorSpaceDisplayModes;
}

export interface Message<T> {
  pluginMessage: MessagePayload<T>;
}

export interface MessagePayload<T> {
  payload: T;
  type: MessageTypes;
}

export type SelectionChangeEvent =
  | SelectionChangeMessage
  | SelectionChangePayload;

export interface SelectionChangeMessage {
  colorSpace: FigmaColorSpace;
  text: SelectionMessageTypes;
}

export interface SelectionChangePayload {
  colorSpace: FigmaColorSpace;
  selectedNodePairs: PolychromNode[];
}
