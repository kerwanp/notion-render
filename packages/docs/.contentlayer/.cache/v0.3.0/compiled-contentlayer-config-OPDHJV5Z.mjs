// contentlayer.config.js
import { defineDatabase, makeSource } from "contentlayer-source-notion";
var Block = defineDatabase(() => ({
  name: "Block",
  databaseId: "25bc244c88b3467ba01a35b4b18b4426"
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
//# sourceMappingURL=compiled-contentlayer-config-OPDHJV5Z.mjs.map
