import ProductCard from "./ProductCard";

const categories = [
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "sunglasses",
  "womens-dresses",
  "mens-shirts",
  "womens-shoes",
  "mens-shoes",
];

const ProductList = () => {
  return <FetchProducts />;
};

const FetchProducts = async () => {
  "use server";
  try {
    const ProductCategories = await Promise.all(
      categories.map(async (category) => {
        const response = await fetch(
          `https://dummyjson.com/products/category/${category}`,
        );
        const data = await response.json();
        return {
          category,
          products: data.products,
        };
      }),
    );

    const allProducts = ProductCategories.flatMap(
      (category) => category.products,
    );
    return allProducts.map((product) => (
      <div key={product.id}>
        <ProductCard
          id={product.id}
          title={product.title}
          price={product.price}
          imgsrc={product.thumbnail}
          discount={product.discountPercentage}
          inStock={product.stock}
        />
      </div>
    ));
  } catch (error) {
    return (
      <p className="flex justify-center">
        Oooops... Der skete en fejl under
        indlæsningen!
      </p>
    );
  }
};

/*     <section className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 gap-y-10 py-14 place-items-center justify-between">
      <ProductCard></ProductCard>
    </section> */

export default ProductList;
