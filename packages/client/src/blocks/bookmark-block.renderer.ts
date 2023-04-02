import { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';
import * as cheerio from 'cheerio';

export default createBlockRenderer<BookmarkBlockObjectResponse>(
  'bookmark',
  async (data) => {
    const html = await fetch(data.bookmark.url).then((result) => result.text());
    const $ = cheerio.load(html);
    const title =
      $('meta[property="og:title"]').attr('content') ||
      $('title').text() ||
      $('meta[name="title"]').attr('content');
    const description =
      $('meta[property="og:description"]').attr('content') ||
      $('meta[name="description"]').attr('content');
    const icon =
      $('link[rel="icon"]').attr('href') ||
      $('link[rel="shortcut icon"]').attr('href');
    const image =
      $('meta[property="og:image"]').attr('content') ||
      $('meta[property="og:image:url"]').attr('content');

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
                    <img class="bookmark-logo" src="${icon}" />
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
