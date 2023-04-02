import { defineDatabase, makeSource } from 'contentlayer-source-notion';
import { NotionRenderer } from '@notion-render/client';
import { Client } from '@notionhq/client';
import oSlugify from 'slugify';

const slugify = (value) =>
  oSlugify(value, { remove: /[*+~.()'#?/"!:@]/g, lower: true });

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});
const renderer = new NotionRenderer({ client });

export const Guide = defineDatabase(() => ({
  name: 'Guide',
  databaseId: '846e5e1e0c2a428285998ff9485ab822',
  properties: [
    {
      name: 'Name',
      required: true,
    },
  ],
  computedFields: {
    slug: {
      type: 'string',
      resolve: (d) => slugify(d.name),
    },
  },
}));

export const Block = defineDatabase(() => ({
  name: 'Block',
  databaseId: '25bc244c88b3467ba01a35b4b18b4426',
  properties: [
    {
      name: 'Name',
      required: true,
    },
  ],
  computedFields: {
    slug: {
      type: 'string',
      resolve: (d) => slugify(d.name),
    },
  },
}));

export default makeSource({
  client,
  renderer,
  databaseTypes: [Block, Guide],
});
