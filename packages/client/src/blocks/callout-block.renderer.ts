import { CalloutBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<CalloutBlockObjectResponse>(
  'callout',
  async (data, renderer) => {
    return `
            <blockquote class="notion-${data.type} notion-color-${
      data.callout.color
    }">
                ${
                  data.callout.icon &&
                  (await renderer.render(data.callout.icon))
                } 
                ${await renderer.render(...data.callout.rich_text)}
            </blockquote>
        `;
  }
);
