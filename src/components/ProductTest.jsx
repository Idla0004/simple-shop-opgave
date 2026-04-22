import FetchProducts from "./FetchProducts";

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

export default async function ProductList({
  searchParams,
}) {
  const params = await searchParams;
  const selectedCategory = params?.category;

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        {selectedCategory
          ? categories.find(
              (cat) =>
                cat.slug === selectedCategory,
            )?.name
          : "Explore products"}
      </h1>
      <FetchProducts
        category={selectedCategory}
      />
    </>
  );
}
