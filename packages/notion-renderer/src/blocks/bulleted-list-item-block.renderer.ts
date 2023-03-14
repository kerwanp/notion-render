import { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<BulletedListItemBlockObjectResponse>(
    'bulleted_list_item',
    (data, renderer) => {
        return `<li>${renderer.render(...data.bulleted_list_item.rich_text)}</li>`;
    }
);