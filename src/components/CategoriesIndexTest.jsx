// components/CategoriesIndexTest.jsx
import FetchCategory from "./FetchCategory";

const categories = [
  {
    slug: "mens-watches",
    name: "Mens Watches",
    img: "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp",
  },
  {
    slug: "womens-watches",
    name: "Womens Watches",
    img: "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/1.webp",
  },
  {
    slug: "womens-bags",
    name: "Womens Bags",
    img: "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/1.webp",
  },
  {
    slug: "sunglasses",
    name: "Sunglasses",
    img: "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/1.webp",
  },
  {
    slug: "womens-dresses",
    name: "Womens Dresses",
    img: "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/1.webp",
  },
  {
    slug: "mens-shirts",
    name: "Mens Shirts",
    img: "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
  },
  {
    slug: "womens-shoes",
    name: "Womens Shoes",
    img: "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/1.webp",
  },
  {
    slug: "mens-shoes",
    name: "Mens Shoes",
    img: "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
  },
];

export default function CategoriesIndexTest() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="uppercase text-2xl text-dark-font font-semibold">
        Shop by categories
      </h2>
      <FetchCategory categories={categories} />
    </section>
  );
}
