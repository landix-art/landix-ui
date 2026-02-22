import { notFound } from "next/navigation";
import { source } from "@/lib/source";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const page = source.getPage(slug ?? []);

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <div className="prose mx-auto">
      <MDX />
    </div>
  );
}