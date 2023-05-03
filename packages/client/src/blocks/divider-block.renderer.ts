import { DividerBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<DividerBlockObjectResponse>(
  'divider',
  async (data) => {
    return `
            <hr class="notion-${data.type}" />
        `;
  }
);
