import { allGuides } from '@contentlayer/generated';

export default function Page({ params }: { params: { slug: string } }) {
  const page = allGuides.find((guide) => guide.slug === params.slug);

  return page ? (
    <div>
      <h1 className="text-4xl font-bold mb-4">{page.name}</h1>
      <div
        className="notion-render"
        dangerouslySetInnerHTML={{ __html: page.body.html }}
      ></div>
    </div>
  ) : (
    <div>Not found</div>
  );
}
