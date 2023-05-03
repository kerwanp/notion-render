import { ColumnBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<ColumnBlockObjectResponse>(
  'column',
  async (data, renderer) => {
    return `
            <div class="notion-${data.type}">
                ${await renderer.renderBlock(data.id)}
            </div>
        `;
  }
);
