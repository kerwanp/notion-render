import { Heading1BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<Heading1BlockObjectResponse>(
    'heading_1',
    (data, renderer) => {
        return `<h1>${renderer.render(...data.heading_1.rich_text)}</h1>`;
    }
);