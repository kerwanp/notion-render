import { TextRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import sanitizeHtml from 'sanitize-html';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<TextRichTextItemResponse>(
  'text',
  async (data) => {
    let result = sanitizeHtml(data.plain_text);

    if (data.href) {
      result = `<a href="${data.href}" class="notion-text-href">${result}</a>`;
    }

    if (data.annotations.color !== 'default') {
      result = `<span class="notion-color-${data.annotations.color}">${result}</span>`;
    }

    if (data.annotations.bold) {
      result = `<b class="notion-text-bold">${result}</b>`;
    }

    if (data.annotations.italic) {
      result = `<i class="notion-text-italic">${result}</i>`;
    }

    if (data.annotations.strikethrough) {
      result = `<s class="notion-text-strikethrough">${result}</s>`;
    }

    if (data.annotations.underline) {
      result = `<u class="notion-text-underline">${result}</u>`;
    }

    if (data.annotations.code) {
      result = `<code class="notion-text-code">${result}</code>`;
    }

    return result;
  }
);
