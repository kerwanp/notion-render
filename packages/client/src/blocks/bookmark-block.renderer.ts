import { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<BookmarkBlockObjectResponse>(
  'bookmark',
  async (data) => {
    return `
        <a href="${data.bookmark.url}" target="_blank" class="notion-${data.type}" target="_blank">${data.bookmark.url}</a>
    `;
  }
);
