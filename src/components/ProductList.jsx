import ProductCard from "./ProductCard";

const ProductList = () => {
  return <FetchProducts />;
};

const FetchProducts = async () => {
  "use server";
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/mens-watches",
    );
    const data = await response.json();

    return data.products.map((product) => {
      return (
        <div key={product.id}>
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            imgsrc={product.thumbnail}
            discount={product.discountPercentage}
            inStock={product.stock}
          ></ProductCard>
        </div>
      );
    });
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
