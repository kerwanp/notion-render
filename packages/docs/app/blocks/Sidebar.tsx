import Link from 'next/link';

type NavbarArgs = {
  items: {
    name: string;
    slug: string;
  }[];
};

const NavbarItem = ({ name, slug }: NavbarArgs['items'][number]) => {
  return (
    <Link
      href={slug}
      className="py-1 text-lg font-semibold px-4 rounded-md dark:hover:bg-violet-800"
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
