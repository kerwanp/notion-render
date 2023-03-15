import { Block, BlockRenderer, BlockRendererFunc } from '../types';

export function createBlockRenderer<T extends Block>(
  type: T['type'],
  func: BlockRendererFunc<T>
): BlockRenderer<T> {
  return Object.assign(func, { type });
}
