import { Heading2BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<Heading2BlockObjectResponse>(
  'heading_2',
  async (data, renderer) => {
    let result = `
            <h2 class="notion-${data.type} notion-color-${
      data.heading_2.color
    }">
                ${await renderer.render(...data.heading_2.rich_text)}
            </h2>
        `;

    if (
      renderer.client &&
      'is_toggleable' in data.heading_2 &&
      data.has_children &&
      data.heading_2.is_toggleable
    ) {
      result = `
                <details class="notion-toggle-${data.type} notion-color-${
        data.heading_2.color
      }">
                    <summary>${result}</summary>
                    ${await renderer.renderBlock(data.id)}
                </details>
            `;
    }

    return result;
  }
);
