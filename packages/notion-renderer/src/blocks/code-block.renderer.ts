import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<CodeBlockObjectResponse>(
    'code',
    (data, renderer) => {
        return `<pre><code class="language-${data.code.language}">${renderer.render(
            ...data.code.rich_text
        )}</code></pre>`;
    }
);