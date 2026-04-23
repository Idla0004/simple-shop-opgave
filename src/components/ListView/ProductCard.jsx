"use client";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import "@/app/local.css";
import Link from "next/link";
import ProductCardAddBtn from "@/components/ListView/ProductCartAddBtn";

const ProductCard = ({
  id,
  title,
  price,
  imgsrc,
  images,
  discount,
  inStock,
}) => {
  const discountedPrice =
    discount > 0
      ? price - (price * discount) / 100
      : null;

  const product = {
    id,
    image: imgsrc,
    title,
    price,
  };

  return (
    <section className="max-w-97.5">
      <div className="relative">
        <div className="flex justify-between absolute top-0 right-0 left-0 m-2 items-center">
          <div className="text-(--color-light-font) text-[20px] px-2 py-0.5">
            {inStock < 2 && (
              <p className="out-of-stock bg-(--color-grey-bg)">
                out of stock
              </p>
            )}
          </div>
          <div className="rounded-full bg-(--color-background) p-2">
            <FaRegHeart
              size={30}
              color="#630850"
            ></FaRegHeart>
          </div>
        </div>
        <Image
          className="object-cover aspect-8/9"
          src={imgsrc}
          width={400}
          height={450}
          alt={title}
        />
        <div className="flex justify-between absolute bottom-0 right-0 left-0">
          {discount > 0 && (
            <div className="bg-pink px-5 self-start text-(--color-light-font) text-[24px]">
              <p className="deal">DEAL</p>
            </div>
          )}
          <div>
            {discount > 0 && (
              <p className="on-sale-price text-[20px] px-4 text-end text-pink">
                {discountedPrice.toFixed(2)} DKK
              </p>
            )}
            <p
              className={`text-[20px] px-4 pb-4 text-end ${
                discount > 0
                  ? "line-through text-gray-400"
                  : ""
              }`}
            >
              {price} DKK
            </p>
          </div>
        </div>
      </div>
      <div className="bg-(--color-grey-bg) py-4">
        <h2 className="font-(--font-p-mulish) text-[28px] mx-2 mb-3">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <ProductCardAddBtn product={product} />
          <Link href={`/singleview/${id}`}>
            <button className="bg-(--color-background) py-1 px-2 text-(--color-dark-font) text-[20px]">
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
