import { allBlocks } from '@contentlayer/generated';

export default function Page({ params }) {
  const block = allBlocks.find((block) => block.slug === params.slug);
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{block.name}</h1>
      <div className="border-violet-800 border-2 rounded-md p-6 mb-4">
        {block.description && <p className="mb-4">{block.description}</p>}
        <div>
          <b>Block Type:</b> &quot;{block.blockType}&quot;
        </div>
        <div>
          <b>Require Client:</b> {block.requireClient ? 'Yes' : 'No'}
        </div>
        <div>
          <b>Parameters:</b>
          <ul>
            {block.parameters.map((param) => (
              <li key={param}>{param}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <a href={block.notionReference} target="_blank" rel="noreferrer">
            More information
          </a>
        </div>
      </div>
      <div
        className="notion-render"
        dangerouslySetInnerHTML={{ __html: block.body.html }}
      ></div>
    </div>
  );
}
