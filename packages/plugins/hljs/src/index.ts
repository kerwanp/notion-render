import { createBlockRenderer, Plugin } from '@notion-render/client';
import type { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import hljs, { HighlightOptions } from 'highlight.js';

type Config = Partial<HighlightOptions>;

const codeBlockRenderer = (options: Config) =>
  createBlockRenderer<CodeBlockObjectResponse>(
    'code',
    async (data, renderer) => {
      const code = await renderer.render(...data.code.rich_text);

      const result = hljs.highlight(code, {
        language: data.code.language,
        ...options,
      });

      return `
            <div class="notion-${data.type}">
                <pre><code class="language-${data.code.language}">${
        result.value
      }</code></pre>
                ${
                  data.code.caption.length > 1
                    ? `<legend>${await renderer.render(
                        ...data.code.caption
                      )}</legend>`
                    : ''
                }
            </div>
        `;
    }
  );

const hljsPlugin: Plugin<Config> = (options) => ({
  renderers: [codeBlockRenderer(options)],
  extensions: [],
});

export default hljsPlugin;
