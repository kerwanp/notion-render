import { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<BulletedListItemBlockObjectResponse>(
  'bulleted_list_item',
  async (data, renderer) => {
    return `
            <li class="notion-${data.type} notion-color-${
      data.bulleted_list_item.color
    }">
                ${await renderer.render(...data.bulleted_list_item.rich_text)}
            </li>
        `;
  }
);
