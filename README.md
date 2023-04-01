<div align="center">
<br/>

## Notion Render

### Transform [Notion](https://notion.so) Rich Text into HTML, JSX and more.

<br/>
</div>

<div align="center">

[![PRs Welcome](https://img.shields.io/badge/PRs-Are%20welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-Friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![License](https://img.shields.io/github/license/syneki/notion-cms?label=License&style=flat-square)](LICENCE)

[![@kerwanp/notion-render](https://img.shields.io/npm/v/@kerwanp/notion-render?label=%40kerwanp%2Fnotion-render&style=flat-square)](https://www.npmjs.com/package/@kerwanp/notion-render)

[![Managed with](https://img.shields.io/badge/Managed%20with-NX-blue.svg?style=flat-square&logo=nx)](https://nx.dev/)

[🔨 Install](#🔨-install) •
[🚀 Get started](#🚀-get-started) •
[⚛ Renderers](#⚛-renderers) •
[🎲 Blocks](#🎲-blocks) •
[🔧 Extend](#🔧-extend)

[Contribute](#contributing) •
[License](#license)

</div>

# ⚠ Pre-release

This project is currently in pre-release, you can use it but some features are lacking and core components are still able to change.

Do not hesitate to open an issue to provide your feedback, report bugs and to propose new features.

# 🔨 Install

```shell
$ npm install @notion-render/client
$ yarn add @notion-render/client
```

# 🚀 Get started

```typescript
import { Client } from '@notionhq/notion';
import { NotionRenderer } from '@notion-render/client';

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

const renderer = new NotionRenderer();

const { results } = await client.blocks.children.list({
  block_id: '<page_id>',
});

const html = renderer.render(...results);
```

# ⚛ Renderers

| Renderer | Status         |
| -------- | -------------- |
| HTML     | 🔶 In progress |
| React    | ❌ Planned     |
| VueJS    | ❌ Planned     |
| Angular  | ❌ Planned     |

# 🎲 Blocks

| Block Type         | Supported              | Notion client required | Available in            | Notes                                           |
| ------------------ | ---------------------- | ---------------------- | ----------------------- | ----------------------------------------------- |
| Text               | ✅ Yes                 |                        | `@notion-render/client` | `<span>`                                        |
| Bookmark           | ❌ Missing             |                        |                         |                                                 |
| Breadcrumb         | ❌ Missing             |                        |                         | Embedded preview of external URL                |
| Bulleted List Item | ✅ Yes                 |                        | `@notion-render/client` | `<ul><li>`                                      |
| Callout            | ✅ Yes                 |                        | `@notion-render/client` | `<blockquote>`                                  |
| Child database     | ❌ Missing             |                        |                         |                                                 |
| Child page         | ❌ Missing             |                        |                         |                                                 |
| Code               | ✅ Yes                 |                        | `@notion-render/client` | <pre><code>                                     |
| Column List        | ✅ Yes                 | ⚠ Yes                  | `@notion-render/client` | `<div>`                                         |
| Column             | ✅ Yes                 | ⚠ Yes                  | `@notion-render/client` | `<div>`                                         |
| Divider            | ✅ Yes                 |                        | `@notion-render/client` | `<hr>`                                          |
| Embed              | ❌ Missing             |                        |                         |                                                 |
| Equations          | ❌ Missing             |                        |                         |                                                 |
| Files              | ❌ Missing             |                        |                         |                                                 |
| Heading 1          | ✅ Yes                 |                        | `@notion-render/client` | `<h1>`                                          |
| Heading 2          | ✅ Yes                 |                        | `@notion-render/client` | `<h2>`                                          |
| Heading 3          | ✅ Yes                 |                        | `@notion-render/client` | `<h3>`                                          |
| Toggle Heading 1   | ✅ Yes                 | ⚠ Yes                  | `@notion-render/client` | `<details><summary><h1>` Requires Notion client |
| Toggle Heading 2   | ✅ Yes                 | ⚠ Yes                  | `@notion-render/client` | `<details><summary><h2>` Requires Notion client |
| Toggle Heading 3   | ✅ Yes                 | ⚠ Yes                  | `@notion-render/client` | `<details><summary><h3>` Requires Notion client |
| Image              | ✅ Yes                 |                        | `@notion-render/client` | `<fig><img>`                                    |
| Link preview       | ❌ Missing             |                        |                         |                                                 |
| Mention            | ❌ Missing             |                        |                         |                                                 |
| Numbered List Item | ✅ Yes                 |                        |                         | `<ol><li>`                                      |
| Paragraph          | ✅ Yes                 |                        | `@notion-render/client` | `<p>`                                           |
| PDF                | ❌ Missing             |                        |                         |                                                 |
| Quote              | ✅ Yes                 |                        | `@notion-render/client` | `<blockquote>`                                  |
| Synced block       | ❌ Missing             |                        |                         |                                                 |
| Table              | 🔶 Not fully supported |                        | `@notion-render/client` | `<table>` Header row and column not supported   |
| Table Row          | 🔶 Not fully supported |                        | `@notion-render/client` | `<tr>` Header row and column not supported      |
| Table of contents  | ❌ Missing             |                        |                         |                                                 |
| Template           | ❌ Deprecated          |                        |                         |                                                 |
| To do              | ✅ Yes                 |                        | `@notion-render/client` | `<ul><li>`                                      |
| Toggle             | ✅ Yes                 | ⚠ Yes                  | `@notion-render/client` | `<details>`                                     |
| Video              | ❌ Missing             |                        |                         |                                                 |

# 🔧 Extend

## Custom renderer

You can create custom renderers to handle custom Notion plugins and override existing blocks.

```typescript
import { NotionRenderer, createBlockRenderer } from '@syneki/notion-render';

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
