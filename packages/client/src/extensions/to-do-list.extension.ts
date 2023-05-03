import { ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { Block, ExtensionFunc } from '../types';

export type ToDoListBlock = Block<
  'to_do_list',
  (ToDoBlockObjectResponse & { processed?: boolean })[]
>;

const toDoListExtension: ExtensionFunc = async (blocks) => {
  let start = false;
  let items: ToDoListBlock['to_do_list'] = [];
  const next = [];

  const pushList = () => {
    next.push({
      type: 'to_do_list',
      to_do_list: items,
    });

    start = false;
    items = [];
  };

  for (const block of blocks) {
    if ('processed' in block && block.processed) {
      next.push(block);
      continue;
    }

    if (block.type === 'to_do') {
      if (!start) start = true;

      items.push({
        ...(block as ToDoBlockObjectResponse),
        processed: true,
      });
    } else if (start) {
      pushList();
    } else {
      next.push(block);
    }
  }

  if (start) pushList();

  return next;
};

export default toDoListExtension;
