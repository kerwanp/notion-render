import express from 'express';
import { Client } from '@notionhq/client';
import { NotionRenderer } from '@notion-render/client';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4200;

const app = express();
const client = new Client({ auth: process.env.NOTION_TOKEN });
const renderer = new NotionRenderer({ client });

app.get('/', async (req, res) => {
  const content = await renderer.renderBlock(
    'e3bb7dd7399d4abf8d04c0d36b232f07'
  );

  res.send(content);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
