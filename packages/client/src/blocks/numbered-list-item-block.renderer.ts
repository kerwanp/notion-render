import { NumberedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<NumberedListItemBlockObjectResponse>(
  'numbered_list_item',
  async (data, renderer) => {
    return `
            <li class="notion-${data.type} notion-color-${
      data.numbered_list_item.color
    }">
                ${await renderer.render(...data.numbered_list_item.rich_text)}
            </li>
        `;
  }
);
