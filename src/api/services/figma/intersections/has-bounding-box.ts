import { notEmpty } from '~utils/not-empty.ts';

export const hasBoundingBox = (
  node: SceneNode
): node is { absoluteBoundingBox: Rect } & SceneNode =>
  'absoluteBoundingBox' in node && notEmpty(node.absoluteBoundingBox);
