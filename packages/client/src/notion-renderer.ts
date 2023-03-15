import { BLOCK_RENDERERS } from './globals';
import { Block, BlockRenderer, BlockRendererFunc } from './types';
import { Client } from '@notionhq/client';

export type NotionRendererArgs = {
  /**
   * List of custom renderers.
   */
  renderers?: [BlockRenderer<any>];

  /**
   * NotionClient used to query block children.
   * If not defined, blocks with children will not be fully supported.
   */
  client?: Client;
};

export class NotionRenderer {
  private renderers: Record<string, BlockRendererFunc<any>> = {};
  public readonly client?: Client;

  constructor(args: NotionRendererArgs = {}) {
    [...BLOCK_RENDERERS, ...(args.renderers ?? [])].map((Block) =>
      this.addBlockRenderer(Block)
    );

    this.client = args.client;
  }

  public addBlockRenderer<T extends Block>(renderer: BlockRenderer<T>): void {
    this.renderers[renderer.type] = renderer;
  }

  public async render(...blocks: Block[]): Promise<string> {
    const promises = blocks
      .map((block) => {
        const renderer = this.renderers[block.type];
        if (!renderer)
          console.warn(`There is no renderer for block ${block.type}`);
        return { block, renderer };
      })
      .filter(({ renderer }) => !!renderer)
      .map(({ block, renderer }) => renderer(block, this));

    return Promise.all(promises).then((result) => result.join(''));
  }

  public async renderBlock(blockId: string): Promise<string> {
    if (!this.client)
      throw new Error(
        'You must define a Notion Client if you want to use this feature.'
      );

    const { results } = await this.client.blocks.children.list({
      block_id: blockId,
    });
    return this.render(...(results as Block[]));
  }
}
