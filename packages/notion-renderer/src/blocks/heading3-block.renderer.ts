import { Heading3BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<Heading3BlockObjectResponse>(
    'heading_3',
    (data, renderer) => {
        return `<h3>${renderer.render(...data.heading_3.rich_text)}</h3>`;
    }
);