"use client";
import Link from "next/link";

const categories = [
  { slug: "mens-watches", name: "Mens Watches" },
  {
    slug: "womens-watches",
    name: "Womens Watches",
  },
  { slug: "womens-bags", name: "Womens Bags" },
  { slug: "sunglasses", name: "Sunglasses" },
  {
    slug: "womens-dresses",
    name: "Womens Dresses",
  },
  { slug: "mens-shirts", name: "Mens Shirts" },
  { slug: "womens-shoes", name: "Womens Shoes" },
  { slug: "mens-shoes", name: "Mens Shoes" },
];

export default function SideBarNavigation() {
  return (
    <aside className="flex flex-col justify-center sticky h-screen min-w-60 max-w-100 top-0 p-8 bg-grey-bg">
      <h2 className="text-light-font mb-1">
        CATEGORIES
      </h2>
      <Link href="/products">
        <li className="border-l p-2 font-bold text-light-font cursor-pointer hover:bg-blue hover:text-dark-font list-none">
          View all
        </li>
      </Link>
      <ul className="border-l text-light-font">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/products?category=${category.slug}`}
          >
            <li className="p-2 cursor-pointer hover:bg-blue hover:text-dark-font">
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
      <Link href="/products?sale=true">
        <button className="my-6 px-4 py-1 font-bold font-poppins text-[20px] text-pink text-left bg-background w-42">
          SALE
        </button>
      </Link>
    </aside>
  );
}
