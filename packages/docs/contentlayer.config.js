import { defineDatabase, makeSource } from 'contentlayer-source-notion';
import oSlugify from 'slugify';

const slugify = (value) =>
  oSlugify(value, { remove: /[*+~.()'#?/"!:@]/g, lower: true });

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
  client: {
    auth: process.env.NOTION_TOKEN,
  },
  databaseTypes: [Block, Guide],
});
