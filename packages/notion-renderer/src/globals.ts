import bulletedListItemBlockRenderer from './blocks/bulleted-list-item-block.renderer';
import calloutBlockRenderer from './blocks/callout-block.renderer';
import codeBlockRenderer from './blocks/code-block.renderer';
import emojiBlockRenderer from './blocks/emoji-block.renderer';
import heading1BlockRenderer from './blocks/heading1-block.renderer';
import heading2BlockRenderer from './blocks/heading2-block.renderer';
import heading3BlockRenderer from './blocks/heading3-block.renderer';
import imageBlockRenderer from './blocks/image-block.renderer';
import paragraphBlockRenderer from './blocks/paragraph-block.renderer';
import textBlockRenderer from './blocks/text-block.renderer';
import { BlockRenderer } from './types';

export const BLOCK_RENDERERS: BlockRenderer<any>[] = [
    textBlockRenderer,
    paragraphBlockRenderer,
    imageBlockRenderer,
    heading1BlockRenderer,
    heading2BlockRenderer,
    heading3BlockRenderer,
    emojiBlockRenderer,
    codeBlockRenderer,
    calloutBlockRenderer,
    bulletedListItemBlockRenderer,
];
