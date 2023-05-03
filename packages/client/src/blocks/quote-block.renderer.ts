import { QuoteBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<QuoteBlockObjectResponse>(
  'quote',
  async (data, renderer) => {
    return `
            <blockquote class="notion-${data.type} notion-color-${
      data.quote.color
    }">
                ${await renderer.render(...data.quote.rich_text)}
            </blockquote>
        `;
  }
);
