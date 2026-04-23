// components/FetchCategory.jsx
import CategoryCard from "@/components/Categories/CategoryCard";

export default function FetchCategory({
  categories,
}) {
  return (
    <ul className="px-10 flex gap-1 overflow-auto snap-x">
      <li className="flex flex-row gap-10 place-items-center basis-[(300px,80%)] shrink-0 py-10 px-2 self-center snap-start snap-always">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            slug={category.slug}
            title={category.name}
            imgsrc={category.img}
          />
        ))}
      </li>
    </ul>
  );
}
