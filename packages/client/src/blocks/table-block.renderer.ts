import { TableBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { createBlockRenderer } from '../utils/create-block-renderer';

export default createBlockRenderer<TableBlockObjectResponse>(
  'table',
  async (data, renderer) => {
    return `
            <table>
                ${await renderer.renderBlock(data.id)}
            </table>
        `;
  }
);
