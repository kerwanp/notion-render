import { allBlocks } from '@contentlayer/generated';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const blocks = allBlocks.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  return (
    <div className="container mx-auto flex justify-center gap-6">
      <Sidebar
        items={blocks.map((block) => ({
          name: block.name,
          slug: `/blocks/${block.slug}`,
        }))}
      />
      <div className="flex-1 max-w-[700px]">{children}</div>
    </div>
  );
}
