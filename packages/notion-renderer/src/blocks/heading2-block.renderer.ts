import { Heading2BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<Heading2BlockObjectResponse>(
    'heading_2',
    (data, renderer) => {
        return `<h2>${renderer.render(...data.heading_2.rich_text)}</h2>`;
    }
);