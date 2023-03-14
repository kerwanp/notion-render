<div align="center">
<br/>

## @kerwan/notion-renderer

### Transform [Notion](https://notion.so) Rich Text into HTML.

<br/>
</div>

<div align="center">

[![PRs Welcome](https://img.shields.io/badge/PRs-Are%20welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-Friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![License](https://img.shields.io/github/license/syneki/notion-cms?label=License&style=flat-square)](LICENCE)

[![@kerwanp/notion-renderer](https://img.shields.io/npm/v/@kerwanp/notion-renderer?label=%40kerwanp%2Fnotion-renderer&style=flat-square)](https://www.npmjs.com/package/@kerwanp/notion-renderer)

[![Managed with](https://img.shields.io/badge/Managed%20with-NX-blue.svg?style=flat-square&logo=nx)](https://nx.dev/)

[🔨 Install](#🔨-install) •
[🚀 Get started](#🚀-get-started) •
[🔧 Extend](#🔧-extend) •
[Contribute](#contributing) •
[License](#license)

</div>

# ⚠ Pre-release

This project is currently in pre-release, you can use it but some features are lacking and core components are still able to change.

Do not hesitate to open an issue to provide your feedback, report bugs and to propose new features.

# 🔨 Install

```shell
$ npm install @kerwanp/notion-renderer
$ yarn add @kerwanp/notion-renderer
```

# 🚀 Get started

```typescript
import { Client } from '@notionhq/notion';
import { NotionRenderer } from '@kerwanp/notion-renderer';

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

const renderer = new NotionRenderer();

const { results } = await client.blocks.children.list({
  block_id: '<page_id>',
});

const html = renderer.render(...results);
```

# 🔧 Extend

## Custom renderer

You can create custom renderers to handle custom Notion plugins and override existing blocks.

```typescript
import { NotionRenderer, createBlockRenderer } from '@syneki/notion-renderer';

const paragraphRenderer = createBlockRenderer<ParagraphBlockObjectResponse>(
  'paragraph',
  (data, renderer) => {
    return `<p>${renderer.render(...data.paragraph.rich_text)}</p>`;
  }
);

const renderer = new NotionRenderer({
  renderers: [paragraphRenderer],
});
```

# Contributing

I'd love for you to contribute to this project. You can request new features by creating an issue, or submit a pull request with your contribution.

# Licence

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

```
http://www.apache.org/licenses/LICENSE-2.0
```

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
