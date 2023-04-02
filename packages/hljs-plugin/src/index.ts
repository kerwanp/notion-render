import { createBlockRenderer, Plugin } from '@notion-render/client';
import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import hljs from 'highlight.js';

const codeBlockRenderer = createBlockRenderer<CodeBlockObjectResponse>(
  'code',
  async (data, renderer) => {
    const code = await renderer.render(...data.code.rich_text);

    const result = hljs.highlight(code, { language: data.code.language });

    return `
            <div class="notion-${data.type}">
                <pre><code class="language-${data.code.language}">${
      result.value
    }</code></pre>
                ${
                  data.code.caption
                    ? `<legend>${await renderer.render(
                        ...data.code.caption
                      )}</legend>`
                    : ''
                }
            </div>
        `;
  }
);

const hljsPlugin: Plugin<undefined> = () => {
  return {
    renderers: [codeBlockRenderer],
    extensions: [],
  };
};

export default hljsPlugin;
