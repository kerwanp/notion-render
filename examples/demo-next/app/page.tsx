import { Client } from '@notionhq/client';
import { NotionRenderer } from '@notion-render/client';

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

const renderer = new NotionRenderer({ client });

export default async function Page() {
  const content = await renderer.renderBlock(
    'e3bb7dd7399d4abf8d04c0d36b232f07'
  );

  return (
    <main>
      <div className="container">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </main>
  );
}
