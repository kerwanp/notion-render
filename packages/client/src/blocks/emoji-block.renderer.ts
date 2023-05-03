import { createBlockRenderer } from '../utils/create-block-renderer';

interface EmojiBlock {
  type: 'emoji';
  emoji: string;
}

export default createBlockRenderer<EmojiBlock>(
  'emoji',
  async (data) => `<span class="notion-${data.type}">${data.emoji}</span>`
);
