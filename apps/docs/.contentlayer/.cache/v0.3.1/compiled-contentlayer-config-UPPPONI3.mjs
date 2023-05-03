// contentlayer.config.js
import { defineDatabase, makeSource } from "contentlayer-source-notion";
import oSlugify from "slugify";
import hljs from "@notion-render/hljs-plugin";
import { NotionRenderer } from "@notion-render/client";
import { Client } from "@notionhq/client";
console.log(hljs);
var slugify = (value) => oSlugify(value, { remove: /[*+~.()'#?/"!:@]/g, lower: true });
var client = new Client({ auth: process.env.NOTION_TOKEN });
var renderer = new NotionRenderer({ client });
renderer.use(hljs());
var Guide = defineDatabase(() => ({
  name: "Guide",
  databaseId: "846e5e1e0c2a428285998ff9485ab822",
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
var Plugin = defineDatabase(() => ({
  name: "Plugin",
  databaseId: "f9d9f194bb4e4d068c8a5ede8965540d",
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
  client,
  renderer,
  databaseTypes: [Block, Guide, Plugin]
});
export {
  Block,
  Guide,
  Plugin,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-UPPPONI3.mjs.map
