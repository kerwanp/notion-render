import { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<ParagraphBlockObjectResponse>(
  'paragraph',
  async (data, renderer) => {
    return `
            <p>
                ${await renderer.render(...data.paragraph.rich_text)}
            </p>
        `;
  }
);
