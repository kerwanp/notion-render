import { NotionRenderer } from './notion-renderer';

export type Type<T> = new () => T;

export type Block<T extends string = string, D = any> = {
  type: T;
} & { [key in T]: D } & Record<string, any>;

export type BlockRendererFunc<T extends Block = Block> = (
  data: T,
  renderer: NotionRenderer
) => Promise<string>;

export type BlockRenderer<T extends Block = any> = BlockRendererFunc<T> & {
  type: string;
} & Record<string, any>;

export type ExtensionFunc = (blocks: Block[]) => Promise<Block[]>;
