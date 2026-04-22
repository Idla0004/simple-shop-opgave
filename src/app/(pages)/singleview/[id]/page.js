import Reviews from "@/components/Reviews";
import Image from "next/image";
import "@/app/local.css";
import { Suspense } from "react";
import Images from "@/components/Images";

const Single = ({ params }) => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Details params={params}></Details>
      </Suspense>
    </main>
  );
};

const Details = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
  );

  const product = await response.json();

  const discountedPrice =
    product.discountPercentage > 0
      ? product.price -
        (product.price *
          product.discountPercentage) /
          100
      : null;

  return (
    <main className="w-screen flex-1 py-10 px-16 bg-background">
      <section className="grid pt-8 grid-cols-2 relative top-30 pb-25">
        <Images
          imagesource0={product.images[0]}
          imagesource1={product.images[1]}
          imagesource2={product.images[2]}
        ></Images>
        <div>
          <h2 className="text-[40px] uppercase font-semibold">
            {product.title}
          </h2>
          {product.inStock < 2 && (
            <div className="out-of-stock flex justify-center p-2 my-4 bg-dark-grey text-light-font w-50">
              <p>OUT OF STOCK</p>
            </div>
          )}
          <div className="text-[32px] font-bold font-poppins flex gap-8">
            <div className="flex items-center">
              <p
                className={`${
                  product.discountPercentage > 0
                    ? "line-through text-gray-600 text-[28px]"
                    : ""
                }`}
              >
                {product.price}$
              </p>
            </div>
            {product.discountPercentage > 0 && (
              <div className="on-sale-price flex gap-4 text-pink">
                <p>NOW</p>
                <div className="flex">
                  <p>
                    {discountedPrice.toFixed(2)}
                  </p>
                  <p>$</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col">
              <label className="text-dark-grey">
                QUANTITY
              </label>
              <input
                placeholder="add amount"
                className="bg-blue rounded-lg placeholder:text-pink h-12 cursor-pointer font-poppins font-bold max-w-60 text-pink text-center"
                type="number"
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="text-dark-grey">
                SIZE
              </label>
              <select className="placeholder:text-slate-400 rounded-lg transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow cursor-pointer appearance-none bg-blue h-12 font-poppins font-bold w-60 text-pink text-center">
                <option value="s">s</option>
                <option value="m">m</option>
                <option value="l">l</option>
                <option value="xl">xl</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center max-w-130 my-8">
            <button className="cursor-pointer bg-pink text-blue font-bold font-poppins w-60 h-12 rounded-lg">
              add to cart
            </button>
          </div>
          <div className="my-4">
            <div className="my-4">
              <h3 className="mb-2">
                product description
              </h3>
              <p>{product.description}</p>
            </div>
            <div className="my-4">
              <h3 className="mb-2">
                shipping information
              </h3>
              <p>{product.shippingInformation}</p>
            </div>
            <div className="my-4">
              <h3 className="mb-2">
                warranty information
              </h3>
              <p>{product.warrantyInformation}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-8 my-8">
        <h2 className="font-poppins font-semibold text-[32px] my-8">
          reviews
        </h2>
        <div className="flex flex-wrap gap-3 justify-evenly">
          <Reviews
            reviewerName={
              product.reviews[0].reviewerName
            }
            comment={product.reviews[0].comment}
            rating={product.reviews[0].rating}
          ></Reviews>
          <Reviews
            reviewerName={
              product.reviews[1].reviewerName
            }
            comment={product.reviews[1].comment}
            rating={product.reviews[1].rating}
          ></Reviews>
          <Reviews
            reviewerName={
              product.reviews[2].reviewerName
            }
            comment={product.reviews[2].comment}
            rating={product.reviews[2].rating}
          ></Reviews>
        </div>
      </section>
    </main>
  );
};

export default Single;
