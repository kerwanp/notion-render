import { TableRowBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<TableRowBlockObjectResponse>(
  'table_row',
  async (data, renderer) => {
    return `
            <tr class="notion-${data.type}">
                ${(
                  await Promise.all(
                    data.table_row.cells.map(
                      async (cell) =>
                        `<td class="notion-table_cell">${await renderer.render(
                          ...cell
                        )}</td>`
                    )
                  )
                ).join('')}
            </tr>
        `;
  }
);
