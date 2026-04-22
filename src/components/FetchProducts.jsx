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

export default async function FetchProducts({
  category,
}) {
  let products = [];

  try {
    if (category) {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`,
      );
      const data = await response.json();
      products = data.products;
    } else {
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
  } catch (error) {
    console.error(
      "Error fetching products:",
      error,
    );
  }

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 gap-y-10 py-14 place-items-center justify-between">
      {products.length > 0 ? (
        products.map((product) => (
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
        ))
      ) : (
        <p className="flex justify-center">
          Oooops... Something went wrong!
        </p>
      )}
    </section>
  );
}
