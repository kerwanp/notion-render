import { ToggleBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<ToggleBlockObjectResponse>(
  'toggle',
  async (data, renderer) => {
    if (!renderer.client) return '';

    return `
            <details class="notion-${data.type} notion-color-${
      data.toggle.color
    }">
                <summary>${await renderer.render(
                  ...data.toggle.rich_text
                )}</summary>
                ${data.has_children ? await renderer.renderBlock(data.id) : ''}
            </details>
        `;
  }
);
