import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<ImageBlockObjectResponse>(
  'image',
  async (data, renderer) => {
    const src =
      'file' in data.image ? data.image.file.url : data.image.external.url;

    return `
            <figure class="notion-${data.type}">
                <img src="${src}" />
                ${
                  data.image.caption
                    ? `<legend>${await renderer.render(
                        ...data.image.caption
                      )}</legend>`
                    : ''
                }
            </figure>
        `;
  }
);
