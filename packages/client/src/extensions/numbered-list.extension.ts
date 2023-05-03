import { NumberedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { Block, ExtensionFunc } from '../types';

export type NumberedListblock = Block<
  'numbered_list',
  (NumberedListItemBlockObjectResponse & { processed?: boolean })[]
>;

const numberedListExtension: ExtensionFunc = async (blocks) => {
  let start = false;
  let items: NumberedListblock['numbered_list'] = [];
  const next = [];

  const pushList = () => {
    next.push({
      type: 'numbered_list',
      numbered_list: items,
    });

    start = false;
    items = [];
  };

  for (const block of blocks) {
    if ('processed' in block && block.processed) {
      next.push(block);
      continue;
    }

    if (block.type === 'numbered_list_item') {
      if (!start) start = true;

      items.push({
        ...(block as NumberedListItemBlockObjectResponse),
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

export default numberedListExtension;
