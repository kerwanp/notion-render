import './styles.scss';

import { allBlocks, allGuides, allPlugins } from '@contentlayer/generated';

import Sidebar, { NavbarArgs } from './Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blocks = allBlocks.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  const guides = allGuides.sort((a, b) => (a.order > b.order ? 1 : -1));

  const plugins = allPlugins.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  const items: NavbarArgs['items'] = [
    {
      name: 'Guides',
      slug: '/guides',
      items: guides.map((guide) => ({
        name: guide.name,
        slug: `/guides/${guide.slug}`,
      })),
    },
    {
      name: 'Blocks',
      slug: '/blocks',
      items: blocks.map((block) => ({
        name: block.name,
        slug: `/blocks/${block.slug}`,
      })),
    },
    {
      name: 'Plugins',
      slug: '/plugins',
      items: plugins.map((plugin) => ({
        name: plugin.name,
        slug: `/plugins/${plugin.slug}`,
      })),
    },
  ];

  return (
    <html>
      <head />
      <body className="">
        <div className="container mx-auto flex justify-center gap-6 py-12">
          <Sidebar items={items} />
          <div className="flex-1 max-w-[700px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
