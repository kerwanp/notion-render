import { BLOCK_RENDERERS } from "./globals";
import { Block, BlockRenderer, BlockRendererFunc } from "./types";

export type NotionRendererArgs = {
    renderers?: [BlockRenderer<any>]
}

export class NotionRenderer {

    renderers: Record<string, BlockRendererFunc<any>> = {};

    constructor(args: NotionRendererArgs = {}) {
        [...BLOCK_RENDERERS, ...args.renderers ?? []].map((Block) =>
            this.addBlockRenderer(Block)
        );
    }

    addBlockRenderer<T extends Block>(renderer: BlockRenderer<T>) {
        this.renderers[renderer.type] = renderer;
    }

    render(...blocks: Block[]): string {
        return blocks
            .map((block) => {
                const renderer = this.renderers[block.type];
                if (!renderer) console.warn(`There is no renderer for block ${block.type}`);
                return { block, renderer };
            })
            .filter(({ renderer }) => !!renderer)
            .map(({ block, renderer }) => renderer(block, this))
            .join('');
    }
}