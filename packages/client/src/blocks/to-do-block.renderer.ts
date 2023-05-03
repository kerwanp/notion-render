import { ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<ToDoBlockObjectResponse>(
  'to_do',
  async (data, renderer) => {
    return `
            <li class="notion-${data.type} notion-color-${
      data.to_do.color
    }" data-checked="${data.to_do.checked}">
                <input type="checkbox" ${
                  data.to_do.checked ? 'checked' : ''
                } aria-disabled="true" />
                ${await renderer.render(...data.to_do.rich_text)}
            </li>
        `;
  }
);
