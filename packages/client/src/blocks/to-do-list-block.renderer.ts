import { ToDoListBlock } from '../extensions/to-do-list.extension';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<ToDoListBlock>(
  'to_do_list',
  async (data, renderer) => {
    return `<ul class="notion-${data.type}">${await renderer.render(
      ...data.to_do_list
    )}</ul>`;
  }
);
