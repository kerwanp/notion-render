import bookmarkBlockRenderer from './blocks/bookmark-block.renderer';
import bulletedListBlockRenderer from './blocks/bulleted-list-block.renderer';
import bulletedListItemBlockRenderer from './blocks/bulleted-list-item-block.renderer';
import calloutBlockRenderer from './blocks/callout-block.renderer';
import codeBlockRenderer from './blocks/code-block.renderer';
import columnBlockRenderer from './blocks/column-block.renderer';
import columnListBlockRenderer from './blocks/column-list-block.renderer';
import dividerBlockRenderer from './blocks/divider-block.renderer';
import emojiBlockRenderer from './blocks/emoji-block.renderer';
import heading1BlockRenderer from './blocks/heading1-block.renderer';
import heading2BlockRenderer from './blocks/heading2-block.renderer';
import heading3BlockRenderer from './blocks/heading3-block.renderer';
import imageBlockRenderer from './blocks/image-block.renderer';
import mentionBlockRenderer from './blocks/mention-block.renderer';
import numberedListBlockRenderer from './blocks/numbered-list-block.renderer';
import numberedListItemBlockRenderer from './blocks/numbered-list-item-block.renderer';
import paragraphBlockRenderer from './blocks/paragraph-block.renderer';
import quoteBlockRenderer from './blocks/quote-block.renderer';
import tableBlockRenderer from './blocks/table-block.renderer';
import tableRowRenderer from './blocks/table-row.renderer.ts';
import textBlockRenderer from './blocks/text-block.renderer';
import toDoBlockRenderer from './blocks/to-do-block.renderer';
import toDoListBlockRenderer from './blocks/to-do-list-block.renderer';
import toggleBlockRenderer from './blocks/toggle-block.renderer';
import bulletedListExtension from './extensions/bulleted-list.extension';
import numberedListExtension from './extensions/numbered-list.extension';
import toDoListExtension from './extensions/to-do-list.extension';
import { BlockRenderer, ExtensionFunc } from './types';

export const BLOCK_RENDERERS: BlockRenderer[] = [
  bookmarkBlockRenderer,
  mentionBlockRenderer,
  textBlockRenderer,
  paragraphBlockRenderer,
  imageBlockRenderer,
  heading1BlockRenderer,
  heading2BlockRenderer,
  heading3BlockRenderer,
  emojiBlockRenderer,
  codeBlockRenderer,
  calloutBlockRenderer,
  bulletedListBlockRenderer,
  bulletedListItemBlockRenderer,
  numberedListBlockRenderer,
  numberedListItemBlockRenderer,
  quoteBlockRenderer,
  dividerBlockRenderer,
  columnListBlockRenderer,
  columnBlockRenderer,
  toggleBlockRenderer,
  toDoListBlockRenderer,
  toDoBlockRenderer,
  tableBlockRenderer,
  tableRowRenderer,
];

export const EXTENSIONS: ExtensionFunc[] = [
  numberedListExtension,
  bulletedListExtension,
  toDoListExtension,
];
