import { CalloutBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<CalloutBlockObjectResponse>(
    'callout',
    (data, renderer) => {
        return `<blockquote>${data.callout.icon && renderer.render(data.callout.icon)
            } ${renderer.render(...data.callout.rich_text)}</blockquote>`;
    }
);