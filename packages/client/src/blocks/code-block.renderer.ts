import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<CodeBlockObjectResponse>(
  'code',
  async (data, renderer) => {
    const code = (await renderer.render(...data.code.rich_text)).replace(
      /[\u00A0-\u9999<>&]/g,
      function (i: string) {
        return `&#${i.charCodeAt(0)};`;
      }
    );

    return `
            <div class="notion-${data.type}">
                <pre><code class="language-${
                  data.code.language
                }">${code}</code></pre>
                ${
                  data.code.caption.length > 0
                    ? `<legend>${await renderer.render(
                        ...data.code.caption
                      )}</legend>`
                    : ''
                }
            </div>
        `;
  }
);
