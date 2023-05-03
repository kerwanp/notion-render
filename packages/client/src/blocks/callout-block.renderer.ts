import { CalloutBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<CalloutBlockObjectResponse>(
  'callout',
  async (data, renderer) => {
    return `
            <blockquote class="notion-${data.type} notion-color-${
      data.callout.color
    }">
                <div class="icon">
                ${
                  data.callout.icon &&
                  (await renderer.render(data.callout.icon))
                }
                </div> 
                <div class="content">
                  ${await renderer.render(...data.callout.rich_text)}
                </div>
            </blockquote>
        `;
  }
);
