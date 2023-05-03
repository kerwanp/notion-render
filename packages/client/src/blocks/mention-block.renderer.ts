import { MentionRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<MentionRichTextItemResponse>(
  'mention',
  async (data) => `<span class="notion-${data.type}">${data.plain_text}</span>`
);
