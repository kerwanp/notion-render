import { NotionRenderer } from './notion-renderer';

export type Type<T> = new () => T;

export type Block = {
    type: string;
};

export type BlockRendererFunc<T extends Block> = (
    data: T,
    renderer: NotionRenderer
) => string;

export type BlockRenderer<T extends Block> = BlockRendererFunc<T> & {
    type: string;
};