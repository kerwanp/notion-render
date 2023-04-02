import { NotionRenderer } from './notion-renderer';

export type Type<T> = new () => T;

export type Block<T extends string = string, D = any> = {
  type: T;
} & { [key in T]: D };

export type BlockRendererFunc<T extends Block = Block> = (
  data: T,
  renderer: NotionRenderer
) => Promise<string>;

export type BlockRenderer<T extends Block = Block> = BlockRendererFunc<T> & {
  type: string;
};

export type ExtensionFunc = (blocks: Block[]) => Promise<Block[]>;
