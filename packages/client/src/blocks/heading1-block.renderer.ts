import { Heading1BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<Heading1BlockObjectResponse>(
  'heading_1',
  async (data, renderer) => {
    let result = `
            <h1 class="notion-${data.type} notion-color-${
      data.heading_1.color
    }">
                ${await renderer.render(...data.heading_1.rich_text)}
            </h1>
        `;

    if (
      renderer.client &&
      'is_toggleable' in data.heading_1 &&
      data.has_children &&
      data.heading_1.is_toggleable
    ) {
      result = `
                <details class="notion-toggle-${data.type} notion-color-${
        data.heading_1.color
      }">
                    <summary>${result}</summary>
                    ${await renderer.renderBlock(data.id)}
                </details>
            `;
    }

    return result;
  }
);
