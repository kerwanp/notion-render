import { BulletedListBlock } from '../extensions/bulleted-list.extension';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<BulletedListBlock>(
  'bulleted_list',
  async (data, renderer) => {
    return `<ul class="notion-${data.type}">${await renderer.render(
      ...data.bulleted_list
    )}</ul>`;
  }
);
