// contentlayer.config.js
import { defineDatabase, makeSource } from "contentlayer-source-notion";
import oSlugify from "slugify";
var slugify = (value) => oSlugify(value, { remove: /[*+~.()'#?/"!:@]/g, lower: true });
var Block = defineDatabase(() => ({
  name: "Block",
  databaseId: "25bc244c88b3467ba01a35b4b18b4426",
  properties: [
    {
      name: "Name",
      required: true
    }
  ],
  computedFields: {
    slug: {
      type: "string",
      resolve: (d) => slugify(d.name)
    }
  }
}));
var contentlayer_config_default = makeSource({
  client: {
    auth: process.env.NOTION_TOKEN
  },
  databaseTypes: [Block]
});
export {
  Block,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-Q37TEAEF.mjs.map
