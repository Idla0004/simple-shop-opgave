"use client";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";

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

const ProductList = () => {
  const searchParams = useSearchParams();
  const selectedCategory =
    searchParams.get("category");

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        {selectedCategory
          ? categories.find(
              (cat) =>
                cat.slug === selectedCategory,
            )?.name
          : "Alle Produkter"}
      </h1>
      <FetchProducts
        category={selectedCategory}
      />
    </>
  );
};

const FetchProducts = async ({ category }) => {
  try {
    let products = [];

    if (category) {
      // Hent kun produkter fra den valgte kategori
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`,
      );
      const data = await response.json();
      products = data.products;
    } else {
      // Hent produkter fra alle de udvalgte kategorier
      const responses = await Promise.all(
        categories.map((cat) =>
          fetch(
            `https://dummyjson.com/products/category/${cat.slug}`,
          ),
        ),
      );

      const data = await Promise.all(
        responses.map((res) => res.json()),
      );
      products = data.flatMap(
        (categoryData) => categoryData.products,
      );
    }

    return (
      <section className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 gap-y-10 py-14 place-items-center justify-between relative top-40">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              imgsrc={product.thumbnail}
              discount={
                product.discountPercentage
              }
              inStock={product.stock}
            />
          </div>
        ))}
      </section>
    );
  } catch (error) {
    return (
      <p className="flex justify-center">
        Oooops... Der skete en fejl under
        indlæsningen!
      </p>
    );
  }
};

export default ProductList;
