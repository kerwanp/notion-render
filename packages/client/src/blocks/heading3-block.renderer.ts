import { Heading3BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<Heading3BlockObjectResponse>(
  'heading_3',
  async (data, renderer) => {
    let result = `
            <h3 class="notion-${data.type} notion-color-${
      data.heading_3.color
    }">
                ${await renderer.render(...data.heading_3.rich_text)}
            </h3>
        `;

    if (
      renderer.client &&
      'is_toggleable' in data.heading_3 &&
      data.has_children &&
      data.heading_3.is_toggleable
    ) {
      result = `
                <details class="notion-toggle-${data.type} notion-color-${
        data.heading_3.color
      }">
                    <summary>${result}</summary>
                    ${await renderer.renderBlock(data.id)}
                </details>
            `;
    }

    return result;
  }
);
