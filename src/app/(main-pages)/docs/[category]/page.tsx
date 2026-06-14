// app/(main-pages)/blocks/[category]/page.tsx

import { notFound } from "next/navigation";
import { categories } from "@/data/category";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const selectedCategory = categories[category as keyof typeof categories];

  if (!selectedCategory) {
    notFound();
  }

  const DynamicComponent = selectedCategory.component;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">{selectedCategory.title}</h1>

      <DynamicComponent />
    </div>
  );
}
