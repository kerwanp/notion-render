import { allBlocks, allGuides } from '@contentlayer/generated';
import Navbar from './Navbar';
import { HljsProvider } from './providers/hljs.provider';
import Sidebar, { NavbarArgs } from './Sidebar';

import './styles.scss';
import '@notion-render/client/sass/theme.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blocks = allBlocks.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  const guides = allGuides.sort((a, b) => (a.order > b.order ? 1 : -1));

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
  ];

  return (
    <html>
      <head />
      <body className="">
        <HljsProvider>
          <Navbar />
          <div className="container mx-auto flex justify-center gap-6">
            <Sidebar items={items} />
            <div className="flex-1 max-w-[700px]">{children}</div>
          </div>
        </HljsProvider>
      </body>
    </html>
  );
}
