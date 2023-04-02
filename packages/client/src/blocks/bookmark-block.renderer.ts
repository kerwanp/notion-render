import { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';
import * as urlMetadata from 'url-metadata';

export default createBlockRenderer<BookmarkBlockObjectResponse>(
  'bookmark',
  async (data) => {
    const metadata = (await urlMetadata(
      data.bookmark.url
    )) as urlMetadata.Result & Record<string, any>;

    return `
        <a href="${metadata.url}" target="_blank" class="notion-${data.type}" data-url="${data.bookmark.url}">
            <div class="bookmark-info">
                <div class="bookmark-title">
                    ${metadata.title}
                </div>
                <p class="bookmark-description">
                    ${metadata.description}
                </p>
                <div class="bookmark-url">
                    <div class="bookmark-logo">
                        <img src="https://${metadata.source}${metadata['msapplication-TileImage']}" />
                    </div>
                </div>
            </div>
            <div class="bookmark-thumbnail">
                <img src="${metadata.image}" />
            </div>
        </a>
    `;
  }
);
