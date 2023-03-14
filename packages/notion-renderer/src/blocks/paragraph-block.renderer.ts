import { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<ParagraphBlockObjectResponse>(
    'paragraph',
    (data, renderer) => {
        return `<p>${renderer.render(...data.paragraph.rich_text)}</p>`;
    }
);