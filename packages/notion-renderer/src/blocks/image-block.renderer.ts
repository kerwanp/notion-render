import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<ImageBlockObjectResponse>(
    'image',
    (data) => {
        if (data.image.type === 'file') {
            return `<img src="${data.image.file.url}" />`;
        }
        return `<img src="${data.image.external.url}" />`;
    }
);