import { Client } from '@notionhq/client';

import { BLOCK_RENDERERS, EXTENSIONS } from './globals';
import { Plugin } from './plugin';
import {
  Block,
  BlockRenderer,
  BlockRendererFunc,
  ExtensionFunc,
} from './types';

export interface NotionRendererArgs {
  /**
   * List of custom renderers.
   */
  renderers?: BlockRenderer[];

  /**
   * List of extensions to improve existing blocks.
   */
  extensions?: ExtensionFunc[];

  /**
   * NotionClient used to query block children.
   * If not defined, blocks with children will not be fully supported.
   */
  client?: Client;
}

export class NotionRenderer {
  private renderers: Record<string, BlockRendererFunc<any>> = {};
  private readonly extensions: ExtensionFunc[] = [];
  public readonly client?: Client;

  constructor(args: NotionRendererArgs = {}) {
    [...BLOCK_RENDERERS, ...(args.renderers ?? [])].forEach((Block) =>
      this.addBlockRenderer(Block)
    );

    [...EXTENSIONS, ...(args.extensions ?? [])].forEach((extension) =>
      this.addExtension(extension)
    );

    this.client = args.client;
  }

  public addBlockRenderer<T extends Block>(renderer: BlockRenderer<T>): void {
    this.renderers[renderer.type] = renderer;
  }

  public addExtension(extension: ExtensionFunc): void {
    this.extensions.push(extension);
  }

  public async render(...blocks: Block[]): Promise<string> {
    for (const extension of this.extensions) {
      blocks = await extension(blocks);
    }

    const promises = blocks
      .map((block) => {
        const renderer = this.renderers[block.type];
        if (!renderer)
          console.warn(`There is no renderer for block ${block.type}`);
        return { block, renderer };
      })
      .filter(({ renderer }) => Boolean(renderer))
      .map(({ block, renderer }) => renderer!(block, this));

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

  public async use(...plugins: ReturnType<Plugin>[]) {
    plugins.forEach((plugin) => {
      plugin.renderers.forEach((renderer) => this.addBlockRenderer(renderer));
      plugin.extensions.forEach((extension) => this.addExtension(extension));
    });
  }
}
