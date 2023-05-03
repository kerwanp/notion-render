import { createBlockRenderer, Plugin } from '@notion-render/client';
import { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { load } from 'cheerio';

const bookmarkBlockRenderer = createBlockRenderer<BookmarkBlockObjectResponse>(
  'bookmark',
  async (data) => {
    const html = await fetch(data.bookmark.url).then((result) => result.text());
    const $ = load(html);

    const title =
      $('meta[property="og:title"]').attr('content') ??
      $('meta[name="title"]').attr('content') ??
      $('title').text();
    const description =
      $('meta[property="og:description"]').attr('content') ??
      $('meta[name="description"]').attr('content');
    const icon =
      $('link[rel="icon"]').attr('href') ??
      $('link[rel="shortcut icon"]').attr('href');
    const image =
      $('meta[property="og:image"]').attr('content') ??
      $('meta[property="og:image:url"]').attr('content');
    const website = new URL(data.bookmark.url).origin;

    return `
        <a href="${data.bookmark.url}" target="_blank" class="notion-${data.type}" data-url="${data.bookmark.url}">
            <div class="bookmark-info">
                <div class="bookmark-title">
                    ${title}
                </div>
                <p class="bookmark-description">
                    ${description}
                </p>
                <div class="bookmark-footer">
                    <img class="bookmark-logo" src="${website}${icon}" />
                    <div class="bookmark-url">${data.bookmark.url}</div>
                </div>
            </div>
            <div class="bookmark-thumbnail">
                <img src="${image}" />
            </div>
        </a>
    `;
  }
);

const bookmarkPlugin: Plugin<undefined> = () => {
  return {
    renderers: [bookmarkBlockRenderer],
    extensions: [],
  };
};

export default bookmarkPlugin;
