import { NumberedListblock } from '../extensions/numbered-list.extension';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<NumberedListblock>(
  'numbered_list',
  async (data, renderer) => {
    return `<ol class="notion-${data.type}">${await renderer.render(
      ...data.numbered_list
    )}</ol>`;
  }
);
