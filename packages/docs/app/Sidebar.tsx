'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';

type Item = {
  name: string;
  slug: string;
  items?: Item[];
};

export type NavbarArgs = {
  items: Item[];
};

const NavbarItem = ({ name, slug, items }: Item) => {
  const pathname = usePathname();
  const active = useMemo(
    () => (items ? pathname.includes(slug) : pathname === slug),
    [pathname, slug, items]
  );

  const [expanded, setExpanded] = useState<boolean>(active);

  if (items) {
    return (
      <details className="group" open={expanded}>
        <summary
          aria-selected={active}
          className="py-1 cursor-pointer text-lg font-semibold px-4 rounded-md hover:bg-violet-500 hover:text-white aria-selected:bg-violet-800 aria-selected:text-white transition-colors"
          onClick={() => setExpanded(!expanded)}
        >
          {name}
        </summary>
        <div className="flex flex-col pl-4 pt-2">
          {items.map((item) => (
            <NavbarItem key={item.slug} {...item} />
          ))}
        </div>
      </details>
    );
  }

  return (
    <Link
      href={slug}
      className="py-1 text-lg font-semibold px-4 rounded-md hover:bg-violet-500 hover:text-white aria-selected:bg-violet-800 aria-selected:text-white transition-colors"
      aria-selected={active}
    >
      {name}
    </Link>
  );
};

export default function Navbar({ items }: NavbarArgs) {
  return (
    <div className="flex flex-col gap-1 min-w-[200px]">
      {items.map((item) => (
        <NavbarItem key={item.slug} {...item} />
      ))}
    </div>
  );
}
